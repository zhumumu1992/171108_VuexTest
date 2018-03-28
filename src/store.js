import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  firstView: true,
  loading: false,
  errorMsg: null,
  users: []
}

const mutations = {
  RECIEVE_USERS (state, {users}) {
    state.loading = false
    state.users = users
  },
  LOADING (state) {
    state.firstView = false
    state.loading = true
    state.errorMsg = ''
    state.users = []
  },

  REQUEST_ERROR (state) {
    state.loading = false
    state.errorMsg = '请求失败'
  }
}

const actions = {
  getUsers ({commit}, searchName) {
    // 更新请求中的状态
    commit('LOADING')
    const url = `https://api.github.com/search/users?q=${searchName}`
    axios.get(url)
      .then(response => {
        const users = response.data.items.map(item => {
          return {
            url: item.html_url,
            name: item.login,
            avatar_url: item.avatar_url
          }
        })
        // 将状态更新为正在请求成功
        commit('RECIEVE_USERS', {users})
      })
      .catch(error => {
        // 将状态更新为正在请求失败
        commit('REQUEST_ERROR')
      })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})