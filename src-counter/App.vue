<template>
  <div>
    <p>clicked: {{count}} times, count is {{evenOrOdd2}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if Odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>

  import {mapState, mapGetters, mapActions} from 'vuex'

  /*
  ...运算符
  打包: 把多个数据整合到一个容器中
      function fn(...args) {}
      fn(1, 3, 5)
  解包: 把容器中的多个数据取出来
    const arr1 = [1, 3, 5]
    const arr2 = [8, ...arr1 ,10]


   */
  export default {

    computed: {
      ...mapState(['count']),  // {count() {}}
      ...mapGetters({evenOrOdd2: 'evenOrOdd'})  // {evenOrOdd () {}}
      /*count () {
        return this.$store.state.count
      },
      evenOrOdd () {
        return this.$store.getters.evenOrOdd
      }*/
    },

    methods: {
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
      /*increment () {
        this.$store.dispatch('increment')
      },
      decrement () {
        this.$store.dispatch('decrement')
      },
      incrementIfOdd () {
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync () {
        this.$store.dispatch('incrementAsync')
      },*/
    }
  }
</script>

<style>

</style>