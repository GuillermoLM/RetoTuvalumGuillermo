import Vue from 'vue'
import App from './App.vue'
import B1 from "./components/bici1.vue";
import C1 from './components/casco1.vue';
import C2 from "./components/casco2.vue";
import C3 from "./components/casco3.vue";
import C4 from "./components/casco4.vue";

Vue.config.productionTip = false;
Vue.component("bici1", B1);
Vue.component('casco1', C1);
Vue.component('casco2', C2);
Vue.component("casco3", C3);
Vue.component("casco4", C4);

new Vue({
  render: h => h(App)
}).$mount('#app')
