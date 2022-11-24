import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router';
import vuetify from './plugins/vuetify';
import "@/styles/styles.scss";
import VueCompositionAPI from "@vue/composition-api";
//@ts-ignore
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);
Vue.use(Vuelidate);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
