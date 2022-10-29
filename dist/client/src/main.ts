import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router';
import vuetify from './plugins/vuetify';
import "@/styles/styles.scss";
import VueCompositionAPI from "@vue/composition-api";
//@ts-ignore
import VueWaypoint from "vue-waypoint";

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);
Vue.use(VueWaypoint);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
