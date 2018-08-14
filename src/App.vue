<template>
  <div id="app">
    <img class="imagen" src="./assets/logo.png">
    <Intro msg="Bienvenido"/>
    <Elegir msg="Elige una de las dos opciones del producto que desea subir a nuestra plataforma"/>
  </div>
</template>

<script>
import Intro from './components/Intro.vue'
import Elegir from "./components/Elegir.vue"

export default {
  name: 'app',
  components: {
    Intro,
    Elegir
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@media (max-width: 800px) {
  .imagen {
    max-width: 250px;
  }
}
</style>
