import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import router from './routes';
import { store } from "./store/Store"

Vue.config.productionTip = false

Vue.use(Vuesax);

import "./assets/styles/index.scss";

import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition);


// axios 
import axios from 'axios';
import VueAxios from 'vue-axios';
const axiosInstance = axios.create({
  baseURL: "https://api.teleport.org/api",
  // headers: {
  //   "Content-Type": "application/json",
  //   "Accept": "application/json",
  //
  // },
  // withCredentials: true,
});
Vue.use(VueAxios, axiosInstance);



// mixins 
import { flipSide } from "./mixins/flipside";
Vue.mixin(flipSide);


// filters
import { formatNumber } from "./filter/formatNumber";
import { formatDate } from "./filter/formatDate";
Vue.filter("formatNumber", formatNumber);
Vue.filter("formatDate", formatDate);

import Layout from "@/components/layout.vue";
Vue.component("Layout", Layout);

import KProgress from 'k-progress';
Vue.component('k-progress', KProgress);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
