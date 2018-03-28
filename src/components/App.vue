<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todos-header/>
      <List/>
      <todos-footer/>
    </div>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import List from './List.vue'
  import Footer from './Footer.vue'

  import storageUtil from '../util/storageUtil'

  export default {


   /* mounted () {
      // 从local存储中读取保存的todos
      /!*const todosJson = localStorage.getItem('todos_key')
      if(!todoJson) {
        return []
      } else {
        return JSON.parse(todosJson)
      }*!/
      this.todos = storageUtil.readTodos()
    },*/



    /*watch: {
      todos: {
        deep: true, //深度监视
        /!*handler: function (value) { // value是最新的todos
          // 保存todos到local
          storageUtil.saveTodos(value)
        }*!/
        handler: storageUtil.saveTodos
      }
    },*/

    components: {
      'todos-header': Header,
      List,
      'todos-footer': Footer
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>