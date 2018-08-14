import Vue from 'vue'
import App from './App.vue'
import C1 from './components/casco1.vue';
Vue.config.productionTip = false
Vue.component('casco1', C1)
new Vue({
  render: h => h(App)
}).$mount('#app')
