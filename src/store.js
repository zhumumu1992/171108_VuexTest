/*
vuex最核心的管理对象store
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 相当于data对象
const state = {
  count: 1
}

/*
包含多个直接更新state数据的方法的对象
 */
const mutations = {
  INCREMENT (state) {
    state.count++
  },

  DECREMENT (state) {
    state.count--
  }
}

/*
包含多个间接(触发mutation调用)更新state数据的方法的对象
 */
const actions = {
  increment ({commit}) {
    commit('INCREMENT')
  },
  decrement ({commit}) {
    commit('DECREMENT')
  },
  incrementIfOdd ({commit, state}) {
    if(state.count%2===1) {
      commit('INCREMENT')
    }

  },
  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  },

}

/*
基于state数据的计算属性(getter)
 */
const getters = {
  evenOrOdd (state) {
    return state.count%2===0 ? '偶数' : '奇数'
  }
}


// 向外默认暴露store对象
export default new Vuex.Store({ // 配置对象
  state,
  mutations,
  actions,
  getters
})