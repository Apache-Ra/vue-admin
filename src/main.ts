import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
console.log(process.env.NODE_ENV);

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();

let month_, date_;
if (month < 10) {
  month_ = '0' + month;
}
if (date < 10) {
  date_ = '0' + date;
}

console.log(year + '-' + month_ + '-' + date_);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
