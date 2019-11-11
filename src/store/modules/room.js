import { Action, Mutations } from '../const/room';
import axios from 'axios';

export const room = {
  namespaced: true,
  state: {
    rooms: []
  },
  mutations: {
    [Mutations.SET_ROOMS](state, rooms) {
      state.rooms = rooms;
    //   console.log(state.rooms);
    }
  },
  actions: {
    async [Action.FILTER_DATE]({ commit }, {checkIn, checkOut}) {
      let opts = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      await axios.get(
          'http://localhost:8000/api/v1.0/rooms/',
          { fechaInicio: checkIn, fechaFin: checkOut },
          opts
        )
        .then(response => {
          let { status, data } = response;
          commit(Mutations.SET_ROOMS, data);
        //   switch (status) {
        //     case 200:
        //       commit(Mutations.SET_TOKEN, data);
        //       commit(Mutations.SET_USER, userinfo);
        //       break;
        //     default:
        //       console.log('Ocurrio un error, en inicio de sesión');
        //       this[UIAction.ERROR_SIGNUP](true);
        //   }
        })
        .catch(err => console.error);
    },
    async [Action.FILTER_RESERVED]({ commit }, {reserved}) {
        let opts = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        await axios.get('http://localhost:8000/api/v1.0/rooms/').then(response => {

            let { status, data } = response;
            switch (status) {
              case 200:
                commit(Mutations.SET_ROOMS, data);
                break;
              default:
                console.log('Ocurrio un error al cargar las habitaciones');
            }
          })
          .catch(err => console.error);
      }
  }
};