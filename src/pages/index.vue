<template lang="pug">
  .wrap
    template(v-for="(p, pi) in list")
      .column
        template(v-for="(c, ci) in p")
          .item(:style="`height: ${c.height}`")
            .content(:style="`background-color: ${c.color}`" v-text="pi + '-' + ci")
</template>
<script>
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.rearrange()
    this.loadMore()
  },
  methods: {
    loadMore () {
      window.onscroll = () => {
        let a = document.documentElement.scrollTop || document.body.scrollTop // 滚动条y轴上的距离
        let b = document.documentElement.clientHeight || document.body.clientHeight // 可视区域的高度
        let c = document.documentElement.scrollHeight || document.body.scrollHeight // 可视化的高度与溢出的距离（总高度）
        if (a * 1.1 + b >= c) {
          this.rearrange()
        }
      }
    },
    rearrange () {
      let list = this.list
      Array(20).fill('').forEach((v, i) => {
        let pIdx = i % 4
        if (!list[pIdx]) list[pIdx] = []
        list[pIdx].push({
          height: Math.ceil(Math.random() * 300) + 100 + 'px',
          color: '#' + Math.floor(Math.random() * 16777215).toString(16)
        })
      })
      this.list = []
      this.list = list
    }
  }
}
</script>
<style lang="stylus">
.wrap
  padding 5px
.column
  width 25%
  display inline-block
  vertical-align top
.item
  position relative
  overflow hidden
  padding 5px
  box-sizing border-box
.content
  width calc(100% - 10px)
  height calc(100% - 10px)
  position absolute
  top 5px
  left 5px
  animation show .8s
@keyframes show
  from
    opacity 0
    top -90%
    left -100%
    transform rotateZ(90deg)
  to
    opacity 1
    top 5px
    left 5px
    transform rotateZ(0deg)
</style>
