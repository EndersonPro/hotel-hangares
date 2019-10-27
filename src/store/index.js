import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "./mutations";
import ui from "./modules/ui";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  mutations,
  modules: {
    ui
  }
});
