import { UIAction, UIMutation } from '../const/ui';

export const ui = {
  namespaced: true,
  state: {
    isLoading: false,
    error_signup: false,
    language: 'es',
  },
  getters: {
    isErrorSignUp: state => state.error_signup,
    getIsLoading: state => state.isLoading,
    getLanguage: state => state.language,
  },
  mutations: {
    [UIMutation.setError](state, payload) {
      state.error_signup = payload;
    },
    [UIMutation.setLoading](state, payload) {
      state.isLoading = payload;
    },
    [UIMutation.setLanguage](state, payload) {
      state.language = payload;
    },
  },
  actions: {
    [UIAction.ERROR_SIGNUP]({ commit }, payload) {
      commit(UIMutation.setError, payload);
    },
    [UIAction.IS_LOADING]({ commit }, payload) {
      commit(UIMutation.setLoading, payload);
    },
    [UIAction.CHANGE_LANGUAGE]({ commit }, payload) {
      commit(UIMutation.setLanguage, payload);
    },
  },
};
