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

  export default {

    computed: {
      count () {
        return this.$store.state.count
      },
      evenOrOdd () {
        return this.$store.getters.evenOrOdd
      }
    },

    methods: {
      increment () {
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
      },
    }
  }
</script>

<style>

</style>