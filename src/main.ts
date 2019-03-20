import Vue from 'vue';
import 'todomvc-app-css/index.css';
import router from '@/route/router';
import store from '@/store/index';
import App from './App';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
