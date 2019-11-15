import { Action, Mutations } from '../const/room';
import axios from 'axios';

export const room = {
  namespaced: true,
  state: {
    rooms: [],
    bookRoom: [],
<<<<<<< HEAD
    reserves:[]
=======
  },
  getters: {
    getRooms: state => state.rooms,
>>>>>>> b55338c1786f0bf2c7b6bc352fb8952b3e5c7ff2
  },
  mutations: {
    [Mutations.SET_ROOMS](state, rooms) {
      state.rooms = rooms;
    },
<<<<<<< HEAD
    [Mutations.SET_RESERVES](state, reserves) {
      state.reserves = reserves;
    },
    [Mutations.SET_BOOKROOM](state, room){
=======
    [Mutations.SET_BOOKROOM](state, room) {
>>>>>>> b55338c1786f0bf2c7b6bc352fb8952b3e5c7ff2
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
<<<<<<< HEAD
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
      },
      [Action.ADD_BOOKROOM]({ commit }, {room}){
        commit(Mutations.SET_BOOKROOM,room);
      },
      [Action.CLEAR_BOOKROOM]({ commit }){
        commit(Mutations.DELETE_BOOKROOM);
      },
      async [Action.LIST_RESERVES]({ commit, dispatch }){
        var reserves=[]
        await axios.get('http://localhost:8000/api/v1.0/reserves/').then(response => {
        let { status, data } = response;
        switch (status) {
        case 200:
            data.forEach(element => {
                var roomsReserved = ""
                element.habitaciones.forEach(e => {
                    roomsReserved+=e.numero+" ";
                });
                var status;
                if (element.activo){
                  status="Activo";
                }else{
                  status="Inactivo";
                }
                reserves.push({
                    asigned: element.responsable.first_name +" "+element.responsable.last_name,
                    ccUser: element.usuario.cedula, 
                    client: element.usuario.first_name +" "+element.usuario.last_name, 
                    checkIn: element.fechaInicio, 
                    checkOut: element.fechaFin, 
                    rooms: roomsReserved, 
                    status: status,
                    actions:element.id,
                    roomsObject: element.habitaciones
                    });
            });
            commit(Mutations.SET_RESERVES, reserves);
            break;
        default:
            console.log('Ocurrio un error al cargar las reservas');
        }
    }).catch(err => console.error);
      }
  }
};
=======
        })
        .catch(err => console.error);
    },
    [Action.ADD_BOOKROOM]({ commit }, { room }) {
      commit(Mutations.SET_BOOKROOM, room);
    },
    [Action.CLEAR_BOOKROOM]({ commit }) {
      commit(Mutations.DELETE_BOOKROOM);
    },
    [Action.RESET_ROOM_LIST]({ commit }) {
      commit(Mutations.resetRoomList);
    },
  },
};
>>>>>>> b55338c1786f0bf2c7b6bc352fb8952b3e5c7ff2
