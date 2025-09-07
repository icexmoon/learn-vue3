<template>
  <div id="app">
  <person v-if="show"/>
  <button @click="destroyPerson">destroyPerson</button>
  </div>
</template>

<script>
import Person from './components/Person.vue'
export default {
  name: 'App',
  components: {
    Person
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    destroyPerson() {
      this.show = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
