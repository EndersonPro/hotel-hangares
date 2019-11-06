import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import { ui } from './modules/ui';
import { user } from './modules/user';

import VuexPersistence from 'vuex-persist';

const localVuex = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({
    user: state.user.user !== null ? state.user.user : '',
    token: state.user.token !== null ? state.user.token : '',
    refresh: state.user.refresh !== null ? state.user.refresh : ''
  })
  // filter: mutations => true
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ui,
    user
  },
  plugins: [localVuex.plugin]
});
