<template>
<div style="height:100vh" class="d-flex justify-content-center flex-column">
    <b-container class="mt-2 p-3 bg-light" >
        <div>
            <h4 class="text-center"> Confirmar Reserva </h4>
            <hr>
            <b-row>
                <b-col>
                    <b-list-group>
                        <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="room in getBookRoom" :key="room.id">
                            <div>
                            <h4>
                                {{ room.descripcion }}
                            </h4>
                            <h6>
                            {{ room.tipoHabitacion }}
                            </h6>
                            </div>
                            <span>
                                <i class="fa fa-dollar" ></i>
                                {{ room.precio }}
                            </span>
                        </b-list-group-item>
                    </b-list-group>
                </b-col>
            </b-row>
        </div>
        <hr>
        <b-row style="width:100%" class="d-flex flex-row align-items-end justify-content-end">
                <b-button  variant="outline-danger">
                    Cancelar
                </b-button>
                <div class="pr-2"></div>
                <b-button  @click="saveReserve" variant="success">
                    Aceptar
                </b-button>
            <!-- <b-col cols="2">
            </b-col> -->
        </b-row>
    </b-container>
</div>
</template>
<script>
import { Action as RoomAction } from '@/store/const/room';
import { createNamespacedHelpers } from 'vuex';
import { Action as UserAction } from '@/store/const/user';
import axios from 'axios';
import * as moment from 'moment'

const RoomModule = createNamespacedHelpers('room/');
const userModule = createNamespacedHelpers('user/');

export default {
    name:"ConfirmReservePage",
    computed:{
        ...RoomModule.mapGetters(["getRooms","getBookRoom"]),
        ...userModule.mapGetters(["getToken","getUser"])
    },
    methods:{
    async saveOne(reserve){
        let token = this.getToken;
        let opts = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        };
        try {
          await axios
            .post(
              "http://localhost:8000/api/v1.0/reserves/", reserve, opts).then(response => {
              let { status, data } = response;
              console.log(data);
              switch (status) {
                case 201: 
                  this.getBookRoom.forEach(element => {
                    let room = {
                      reserva: data.id,
                      habitacion: element.id,
                      precioVenta: element.precio,
                    }
                     axios
                        .post(
                          "http://localhost:8000/api/v1.0/reservedrooms/", room,opts).then(response => {
                          let { status, data } = response;
                          switch (status) {
                            case 201:
                                console.log("Todo viendo")
                              break;
                            default:
                              console.log("Ocurrio un error, en la asignacion");
                          }
                        })
                        .catch(console.error);                  
                  });
                    this.$swal('Reserva creada','La reserva ha sido hecha con exito!',"success");
                  break;
                default:
                  console.log("Ocurrio un error, en la creacion de reservas");
              }
            })
            .catch(err => console.error);        
        } catch (error) {
          console.log(error);
        }
    },
    async saveReserve(){
      if( this.getUser && this.getToken){
        let reserve = {
            fechaInicio: this.checkIn || moment(new Date()).format("YYYY-MM-DD"),
            fechaFin: this.checkOut || moment(new Date()).format("YYYY-MM-DD"),
            estado: 1,
            usuario: this.getUser.user_id,
            responsable: this.getUser.user_id,
            habitaciones: []
        }

        this.saveOne(reserve);
        
      }else{
        this.$swal({
                title: "Debes Iniciar Sesión",
                text: "Para poder continuar con la reserva es necesario que este identificado en el sistema",
                icon: "error",
                buttons: ["Cancelar", "Iniciar sesión"]
            }).then(res=>{
                if(res){
                    this.$router.push({
                        path:"/login",
                        query:{
                            backto:"/confirmar-reserva"
                        }
                    })
                }else{
                    // console.log(res)
                }
            });
      }
    },
    }
}
</script>

<style lang="scss">
    
</style>