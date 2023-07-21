<template>
  <div id="app">
    <CountNumber/>
    <PersonAdd/>
  </div>
</template>

<script>
import CountNumber from './components/CountNumber';
import PersonAdd from './components/PersonAdd'


export default {
  name: 'App',
  components: {
    CountNumber,PersonAdd
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
