/*
包含多个接收组件通知触发mutation调用间接更新状态的方法的对象
 */
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, CLEAR_ALL_COMPLETED, RECEIVE_TODOS} from './mutation-types'
import storageUtil from '../util/storageUtil'

export default {

  addTodo ({commit}, todo) {
    // 提交对mutation的请求
    commit(ADD_TODO, {todo})
  },

  deleteTodo ({commit}, index) {
    // 提交对mutation的请求
    commit(DELETE_TODO, {index})
  },

  selectAllTodos ({commit}, check) {
    commit(SELECT_ALL_TODOS, {check})
  },

  clearAllCompleted ({commit}) {
    commit(CLEAR_ALL_COMPLETED)
  },

  readTodos ({commit}) {
    // 模拟从后台异步获取数据
    setTimeout(() => {
      const todos = storageUtil.readTodos()
      commit(RECEIVE_TODOS, {todos})
    }, 1000)
  }
}