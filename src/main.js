// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise';
import 'core-js/es6/string';
import 'core-js/es7/array';
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import App from './App';
import router from './router';
import store from './store/index';
import i18n from './i18n';
import FlagIcon from 'vue-flag-icon';
import VueSwal from 'vue-swal'


Vue.use(VueSwal);
Vue.use(FlagIcon);
Vue.use(Vuelidate);
Vue.use(BootstrapVue);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  i18n,
  components: {
    App
  },
  beforeCreate() {
    console.log(this.$store.state.ui.language);
    this.$i18n.locale = this.$store.state.ui.language;
  }
});
