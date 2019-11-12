import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import { ui } from './modules/ui';
import { user } from './modules/user';
import { room } from './modules/room';
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';

// import VuexPersistence from 'vuex-persist';

// const localVuex = new VuexPersistence({
//   storage: window.localStorage,
//   reducer: state => ({
//     // user: state.user.user !== null ? state.user.user : '',
//     // token: state.user.token !== null ? state.user.token : '',
//     // refresh: state.user.refresh !== null ? state.user.refresh : '',
//     language: state.ui.language
//   })
//   // filter: mutations => true
// });

// const vuexCookie = new VuexPersistence({
//   restoreState: (key, storage) => Cookies.getJSON(key),
//   saveState: (key, state, storage) =>
//     Cookies.set(key, state, {
//       expires: 3
//     }),
//   modules: ['user']
//   // filter: mutation => mutation.type == 'logIn' || mutation.type == 'logOut'
// });

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ui,
    user,
    room
  },
  plugins: [
    createPersistedState({
      paths: ['user','ui','room'],
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
});
