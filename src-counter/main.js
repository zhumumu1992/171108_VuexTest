import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  store  // 注册上store==>所有的组件都可以通过$store属性来得到store对象
})