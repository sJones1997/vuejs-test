<template>
  <div id="app-wrapper">
    <SignupForm/>
  </div>
</template>

<script>
import SignupForm from './components/SignupForm.vue'
export default {
  name: 'App',
  components: {
    SignupForm
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
    background: #eee;
}

#app-wrapper {
  height: 100vh;
  padding: 30px;
}

* {
  margin: 0;
  padding: 0
}
</style>
