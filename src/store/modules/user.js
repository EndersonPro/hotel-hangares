import { Action, Mutations } from '../const/user';
import { UIAction } from '../const/ui';
import axios from 'axios';

export const user = {
  namespaced: true,
  state: {
    user: {},
    token: '',
    refresh: ''
  },
  mutations: {
    [Mutations.SET_USER](state, payload) {
      state.user = payload;
    },
    [Mutations.SET_TOKEN](state, { access, refresh }) {
      state.token = access;
      state.refresh = refresh;
    }
  },
  actions: {
    [Action.USER_LOGIN]({ commit }, { userinfo, body }) {
      let opts = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      axios
        .post(
          'http://localhost:8000/api/v1.0/token/',
          { username: body.username, password: body.password },
          opts
        )
        .then(response => {
          let { status, data } = response;
          switch (status) {
            case 200:
              commit(Mutations.SET_TOKEN, data);
              commit(Mutations.SET_USER, userinfo);
              break;
            default:
              console.log('Ocurrio un error, en inicio de sesión');
              this[UIAction.ERROR_SIGNUP](true);
          }
        })
        .catch(err => console.error);
    },
    [Action.USER_SIGNUP]({ commit, dispatch }, { data, body }) {
      let userinfo = data;
      dispatch(Action.USER_LOGIN, { userinfo, body });
    }
  }
};
