<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Intro',
    props: {
      msg: String
    }
  }
</script>

<style scoped>
  h2 {
    font-size: 30px;
    margin-bottom: 20px;
  }
</style>