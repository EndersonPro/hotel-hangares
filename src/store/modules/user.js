import { Action, Mutations } from "../const/user";
import { UIAction } from "../const/ui";
import axios from "axios";

export const user = {
  namespaced: true,
  state: {
    user: {},
    token: null,
    refresh: null
  },
  getters: {
    getUser: state => state.user
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
      state.token = "";
      state.refresh = "";
      state.user = {};
    }
  },
  actions: {
    async [Action.USER_LOGIN]({ commit }, { userinfo, body }) {
      let opts = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      await axios
        .post(
          "http://localhost:8000/api/v1.0/token/",
          { username: body.username, password: body.password },
          opts
        )
        .then(response => {
          let { status, data } = response;
          console.log(data);
          switch (status) {
            case 200:
              commit(Mutations.SET_TOKEN, data);
              commit(Mutations.SET_USER, body.username);
              break;
            default:
              console.log("Ocurrio un error, en inicio de sesión");
              this[UIAction.ERROR_SIGNUP](true);
          }
        })
        .catch(err => console.error);
    },
    [Action.USER_LOGOUT]({ commit }) {
      commit(Mutations.DELETE_USER);
    },
    [Action.USER_SIGNUP]({ commit, dispatch }, { data, body }) {
      let userinfo = data;
      dispatch(Action.USER_LOGIN, { userinfo, body });
    }
  }
};
