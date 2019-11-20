import { Action, Mutations } from '../const/room';
import axios from 'axios';
import _ from 'lodash';

export const room = {
  namespaced: true,
  state: {
    rooms: [],
    bookRoom: [],
    reserves: [],
  },
  getters: {
    getRooms: state => state.rooms,
    getBookRoom: state => state.bookRoom,
  },
  mutations: {
    [Mutations.SET_ROOMS](state, rooms) {
      state.rooms = rooms;
    },
    [Mutations.SET_RESERVES](state, reserves) {
      state.reserves = reserves;
    },
    [Mutations.SET_BOOKROOM](state, room) {
      state.bookRoom.push(room);
    },
    [Mutations.DELETE_BOOKROOM](state) {
      state.bookRoom = [];
    },
    [Mutations.resetRoomList](state) {
      state.rooms = [];
    },
  },
  actions: {
    async [Action.FILTER_DATE]({ commit }, { reserveParams }) {
      await axios
        .get('http://localhost:8000/api/v1.0/reserves/', {
          params: reserveParams,
        })
        .then(response => {
          let { status, data } = response;
          switch (status) {
            case 200:
              var rooms = [];
              data.forEach(element => {
                rooms.push(...element.habitaciones);
              });
              commit(Mutations.SET_ROOMS, rooms);
              break;
            default:
              console.log('Ocurrio un error al cargar las habitaciones');
          }
        })
        .catch(err => console.error);
    },
    async [Action.FILTER_RESERVED]({ commit }, { roomParams }) {
      let opts = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios
        .get(
          'http://localhost:8000/api/v1.0/rooms/',
          { params: roomParams },
          opts,
        )
        .then(response => {
          let { status, data } = response;
          console.log(data);
          switch (status) {
            case 200:
              commit(Mutations.SET_ROOMS, data);
              break;
            default:
              console.log('Ocurrio un error al cargar las habitaciones');
          }
        })
        .catch(err => console.error(err));
    },
    async [Action.LIST_RESERVES]({ commit }) {
      var reserves = [];
      await axios
        .get('http://localhost:8000/api/v1.0/reserves/')
        .then(response => {
          let { status, data } = response;
          switch (status) {
            case 200:
              data.forEach(element => {
                var roomsReserved = '';
                element.habitaciones.forEach(e => {
                  roomsReserved += e.numero + ', ';
                });
                roomsReserved = roomsReserved.substring(
                  0,
                  roomsReserved.length - 2,
                );
                var status;
                if (element.estado == 1) {
                  status = 'Pendiente';
                } else if (element.estado == 2) {
                  status = 'Pagada';
                } else {
                  status = 'Cancelada';
                }
                reserves.push({
                  asigned:
                    element.responsable.first_name +
                    ' ' +
                    element.responsable.last_name,
                  ccUser: element.usuario.cedula,
                  client:
                    element.usuario.first_name +
                    ' ' +
                    element.usuario.last_name,
                  checkIn: element.fechaInicio,
                  checkOut: element.fechaFin,
                  rooms: roomsReserved,
                  status: status,
                  actions: element.id,
                  roomsObject: element.habitaciones,
                });
              });
              commit(Mutations.SET_RESERVES, reserves);
              break;
            default:
              console.log('Ocurrio un error al cargar las reservas');
          }
        })
        .catch(err => console.error);
    },
    [Action.ADD_BOOKROOM]({ commit, state }, { room }) {
      if (_.find(state.bookRoom, { id: room.id })) {
        throw new Error('Elemento repetido en el libro de habitaciones');
      } else {
        commit(Mutations.SET_BOOKROOM, room);
      }
    },
    [Action.CLEAR_BOOKROOM]({ commit }) {
      commit(Mutations.DELETE_BOOKROOM);
    },
    [Action.RESET_ROOM_LIST]({ commit }) {
      commit(Mutations.resetRoomList);
    },
  },
};
