import { Action, Mutations } from '../const/user';
import { UIAction } from '../const/ui';
import axios from 'axios';
import * as jwtJsDecode from 'jwt-js-decode';

export const user = {
  namespaced: true,
  state: {
    user: {},
    token: null,
    refresh: null,
  },
  getters: {
    getUser: state => state.user,
    getToken: state => state.token,
  },
  mutations: {
    [Mutations.SET_USER](state, payload) {
      state.user = payload;
    },
    [Mutations.SET_TOKEN](state, { access, refresh }) {
      state.token = access;
      state.refresh = refresh;
    },
    [Mutations.DELETE_USER](state) {
      state.token = '';
      state.refresh = '';
      state.user = {};
    },
  },
  actions: {
    [Action.USER_LOGIN]({ commit }, { userinfo, body }) {
      console.log('Entro si o no? en esa monda');
      let opts = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      axios
        .post(
          'http://localhost:8000/api/v1.0/token/',
          { username: body.username, password: body.password },
          opts,
        )
        .then(response => {
          let { status, data } = response;
          // console.log(data);
          const decodedToken = jwtJsDecode.jwtDecode(data.access);
          // console.log(decodedToken);
          switch (status) {
            case 200:
              commit(Mutations.SET_TOKEN, data);
<<<<<<< HEAD
              commit(Mutations.SET_USER, body.username);
=======
              commit(Mutations.SET_USER, decodedToken.payload);
>>>>>>> 89962c0339b755e80778aaa584db750b026fd8b7
              break;
            default:
              console.log('Ocurrio un error, en inicio de sesión');
              this[UIAction.ERROR_SIGNUP](true);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    [Action.USER_LOGOUT]({ commit }) {
      commit(Mutations.DELETE_USER);
    },
    [Action.USER_SIGNUP]({ commit, dispatch }, { data, body }) {
      let userinfo = data;
      dispatch(Action.USER_LOGIN, { userinfo, body });
    },
  },
};
