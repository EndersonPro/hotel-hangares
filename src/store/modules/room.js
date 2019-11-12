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
    async [Action.FILTER_DATE]({ commit }, {reserveParams}) {
      await axios.get('http://localhost:8000/api/v1.0/reserves/',{params:reserveParams}).then(response => {
          let { status, data } = response;
          switch (status) {
            case 200:
              var rooms=[]
              data.forEach(element => {
                rooms.push(...element.habitaciones);
              });
              commit(Mutations.SET_ROOMS, rooms);
              break;
            default:
              console.log('Ocurrio un error al cargar las habitaciones');
          }
        }).catch(err => console.error);
    },
    async [Action.FILTER_RESERVED]({ commit }, {roomParams}) {
        let opts = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        await axios.get('http://localhost:8000/api/v1.0/rooms/',{params: roomParams}).then(response => {
            let { status, data } = response;
            switch (status) {
              case 200:
                commit(Mutations.SET_ROOMS, data);
                break;
              default:
                console.log('Ocurrio un error al cargar las habitaciones');
            }
          }).catch(err => console.error);
      }
  }
};