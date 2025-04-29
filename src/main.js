import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=Roboto&display=swap';
document.head.appendChild(link);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
