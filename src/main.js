import Vue from 'vue'
import App from './App.vue'
import B1 from "./components/bici1.vue";
import B2 from "./components/bici2.vue";
import B3 from "./components/bici3.vue";
import B4 from "./components/bici4.vue";
import B5 from "./components/bici5.vue";
import C1 from './components/casco1.vue';
import C2 from "./components/casco2.vue";
import C3 from "./components/casco3.vue";
import C4 from "./components/casco4.vue";

Vue.config.productionTip = false;
Vue.component("bici1", B1);
Vue.component("bici2", B2);
Vue.component("bici3", B3);
Vue.component("bici4", B4);
Vue.component("bici5", B5);
Vue.component('casco1', C1);
Vue.component('casco2', C2);
Vue.component("casco3", C3);
Vue.component("casco4", C4);

new Vue({
  render: h => h(App)
}).$mount('#app')
