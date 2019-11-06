import { UIAction, UIMutation } from '../const/ui';

export const ui = {
  namespaced: true,
  state: {
    isLoading: false,
    error_signup: false
  },
  getters: {
    isErrorSignUp: state => state.error_signup,
    getIsLoading: state => state.isLoading
  },
  mutations: {
    [UIMutation.setError](state, payload) {
      state.error_signup = payload;
    },
    [UIMutation.setLoading](state) {
      state.isLoading = !state.isLoading;
    }
  },
  actions: {
    [UIAction.ERROR_SIGNUP]({ commit }, payload) {
      commit(UIMutation.setError, payload);
    },
    [UIAction.IS_LOADING]({ commit }) {
      commit(UIMutation.setLoading);
    }
  }
};
