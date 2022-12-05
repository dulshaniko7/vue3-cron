<template>
  <div>
    <cron-light v-model="value" @error="error=$event"></cron-light>
    <div class="text-lightest pt-2">cron expression: {{value}}</div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      value: '* * * * *',
      error: ''
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
