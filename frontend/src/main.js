import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMask from 'v-mask';
import { store } from './Vuex/store';

Vue.config.productionTip = false
Vue.use(VueMask);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
