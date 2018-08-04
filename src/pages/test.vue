<template lang="pug">
  div
    input(type="file" multiple @change="change")
    button(@click="login") login
    button(@click="add") add
</template>
<script>
/*
// @api
axios.defaults.baseURL = '/web/'
// config/index.js
'/web': {
  target: 'http://localhost:8080',
  changeOrigin: true
}
 */
export default {
  name: 'Test',
  methods: {
    login () {
      this.$http.post('sign/v1/appIn', {
        login: 'admin1',
        pwd: 'admin'
      }).then(res => console.log(res))
    },
    add () {
      this.$http.post('app/v1/person', {
        name: '11',
        age: 22
      }).then(res => console.log(res))
    },
    change (e) {
      let files = e.target.files
      let formData = new FormData()
      formData.append('num', 123)
      formData.append('name', 'aa')
      formData.append('file', files[0])
      for (let f of files) {
        formData.append('files', f)
      }
      // 上传data必须转为formData
      this.$http.post('app/v1/upload', formData, {
        // 覆盖默认设置中的transformRequest设置
        transformRequest: [(params, headers) => {
          // 请求头Content-Type 为multipart/form-data
          headers = {
            'Content-Type': 'multipart/form-data'
          }
          // 取消qs参数转换
          return params
        }],
        // 上传进度
        onUploadProgress ({ loaded, total }) {
          let p = (loaded / total * 100).toFixed(0) + '%'
          console.log(p)
        }
      }).then(res => console.log(res))
    }
  }
}
</script>
