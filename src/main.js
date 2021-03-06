import Vue from 'vue'
import App from './components/App.vue'
import store from './store'

// 创建vm对象
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  /*render: function (createElement) {
    return createElement(App)   // '<App/>'
  }*/
})