<template>
<div>
  <h1 class="title">{{title}}</h1>
    <b-container>
      <b-card no-body :no-block="true">
          <div slot="header">
            <strong>Habitaciones</strong>
          </div>
          <b-card-body>
            <b-row> 
              <b-col colmd="12" class="search-wrap">
              <b-form @submit.prevent="showRooms" class="colorlib-form">
                    <b-row>
                        <b-col colmd="3">
                          <b-form-group>
                            <label for="date"><strong>Check-in:</strong></label>
                            <div class="form-field">
                              <b-form-input v-model="checkIn" type="date"></b-form-input>
                            </div>
                          </b-form-group>
                        </b-col>
                        <b-col colmd="3">
                          <div class="form-group">
                            <label for="date"><strong>Check-out:</strong></label>
                            <div class="form-field">
                              <b-form-input v-model="checkOut" type="date"></b-form-input>
                            </div>
                          </div>
                        </b-col>
                        <b-col colmd="2">
                          <b-form-group>
                            <label for="adults"><strong>Reservada</strong></label>
                            <div class="form-field">
                              <i class="icon icon-arrow-down3"></i>
                              <b-form-select id="people" v-model="reserved" :options="optionsReserved" class="form-control"></b-form-select>
                            </div>
                          </b-form-group>
                        </b-col>
                        <b-col colmd="2">
                          <div class="form-group">
                            <label for="children"><strong>Tipo Habitación</strong></label>
                            <div class="form-field">
                              <i class="icon icon-arrow-down3"></i>
                              <b-form-select id="people" v-model="typeRoom" :options="optionsType" class="form-control"></b-form-select>
                            </div>
                          </div>
                        </b-col>
                        <b-col colmd="2">
                          <input type="submit" name="submit" id="submit" value="Buscar" class="btn btn-primary btn-block">
                        </b-col>
                      </b-row>
                    </b-form>
              </b-col>
            </b-row>	<!-- row   -->
            <b-row>
              <b-col colmd="10">
                <multiselect 
                  v-model="roomSelected"
                  placeholder= "Selecciona las habitaciones"
                  :multiple="true"
                  :taggable="true"
                  label="numero"
                  :options="dataRooms"
                  @remove="removeTag">
                </multiselect>
              </b-col>
            </b-row>
            </b-card-body>
        </b-card>
        <b-card no-body :no-block="true">
          <div slot="header">
           <strong>Información del Cliente</strong>
          </div>
          <b-card-body>
            <b-row>
              <b-col colmd="10">
                <b-form-group>
                  <label for="adults"><strong>Cedula</strong></label>
                  <div class="">
                    <i class="icon icon-arrow-down3"></i>
                    <b-form-input id="cedula" v-model="cedulaCliente" placeholder="C.C. del cliente" class="form-control"></b-form-input>
                  </div>
                </b-form-group>
              </b-col>
              <b-col colmd="6">
                <b-button type="submit" class="search-user"  variant="primary" @click="getUser">Buscar <i class="fa fa-search"></i></b-button>
              </b-col>
            </b-row>
            <b-row>
              <b-col colmd="6">
                <b-form-group>
                  <label for="adults"><strong>Nombre</strong></label>
                  <div class="">
                    <i class="icon icon-arrow-down3"></i>
                    <b-form-input disabled id="name" v-model="nombre" placeholder="Nombre del cliente" class="form-control"></b-form-input>
                  </div>
                </b-form-group>
              </b-col>
              <b-col colmd="6">
                <b-form-group>
                  <label for="adults"><strong>Apellido</strong></label>
                  <div class="">
                    <i class="icon icon-arrow-down3"></i>
                    <b-form-input disabled id="last-name" v-model="apellido" placeholder="Apellido del cliente" class="form-control"></b-form-input>
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col colmd="6">
                <b-form-group>
                  <label for="adults"><strong>Telefono</strong></label>
                  <div class="">
                    <i class="icon icon-arrow-down3"></i>
                    <b-form-input disabled id="phone" v-model="phone" placeholder="Telefono del cliente" class="form-control"></b-form-input>
                  </div>
                </b-form-group>
              </b-col>
              <b-col colmd="6">
                <b-form-group>
                  <label for="adults"><strong>Email</strong></label>
                  <div class="">
                    <i class="icon icon-arrow-down3"></i>
                    <b-form-input disabled id="email" v-model="email" placeholder="Correo del cliente" class="form-control"></b-form-input>
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
          </b-card-body>
          <div slot="footer">
            <b-button v-if="edit" type="submit" class="save-btn"  variant="success" @click="editReserve"><i class="fa fa-save"></i> Editar</b-button>
            <b-button v-else type="submit" class="save-btn"  variant="success" @click="saveReserve"><i class="fa fa-save"></i> Guardar</b-button>
            <b-button v-show="!edit" v-b-modal.modal-prevent-closing type="reset" variant="primary"><i class="fa fa-pencil"></i> Registrar Cliente</b-button>
          </div>
        </b-card>

 <b-modal
      size="xl"
      id="modal-prevent-closing"
      ref="modal"
      title="Registrar Usuario"
      hide-footer
    >
    <Register></Register>
    </b-modal>
    </b-container>
</div>
</template>

<script>
import { Action } from "@/store/const/room";
import { createNamespacedHelpers } from "vuex";
import Multiselect from 'vue-multiselect'
import axios from 'axios';
import Register from "@/views/pages/SignUp";

const roomModule = createNamespacedHelpers("room/");

export default {
  name: "NuevaReserva",
  props:{
    title:{
      type: String,
      default: "Nueva Reserva"
    },
    edit:{
      type: Boolean,
      default: false
    },
    reserveObject:{
      type: Object,
      default:()=>{}
    }
  },
  data(){
      return {
        
        idRespUser: this.$store.state.user.user.user_id,
        cedulaCliente:null,
        idCliente: null,
        nombre:"",
        apellido: "",
        email: "",
        phone:"",
        roomSelected: [],
        dataRooms:[],
        checkIn:"",
        checkOut:"",
        reserved: 0,
        typeRoom: null,
        assignedRooms: [],
        optionsReserved:[
          { value: 0, text: 'No' }
        ],
        optionsType:[
          { value: null, text: 'Selecciona una opción' },
          { value: 1, text: 'Suite' },
          { value: 2, text: 'Familiar' },
          { value: 3, text: 'Individual' }
        ]
      }
  },
  components:{
    Multiselect,
    Register
  },
  computed:{
    ...roomModule.mapState(["rooms"])
  },
  watch:{
    rooms(newRooms, oldRooms){
      newRooms.forEach(element => {
        this.dataRooms.push(element)
      });
    }
  },
  methods:{
    ...roomModule.mapActions([Action.FILTER_RESERVED,Action.FILTER_DATE, Action.LIST_RESERVES]),
    showRooms() {
          this.dataRooms=[];
          this.roomSelected = [];
          if(this.reserved == 0 && this.checkIn != "" && this.checkOut != ""){
            let roomParams = {
              reservada: this.reserved,
              tipoHabitacion: this.typeRoom
            }
            let reserveParams ={
              fechaInicio: this.checkIn,
              fechaFin: this.checkOut
            }
            try {
                this.FILTER_RESERVED({roomParams});
            } catch (error) {
              console.log(error);
            }
          }else{
            this.$swal("Busqueda Incompleta", "Asegurate de llenar los 3 primeros campos", "warning");
          }
    },
    async getUser(){
      let token = this.$store.state.user.token;
      var cedula = this.cedulaCliente;
      await axios.get('http://localhost:8000/api/v1.0/users/',{
          headers: {
                  "Authorization": `Bearer ${token}`
          },
          params:{
            cedula:cedula
          }
       },
       ).then(response => {
          let { status, data } = response;
          switch (status) {
            case 200:
              this.nombre = data[0].first_name;
              this.apellido = data[0].last_name;
              this.email = data[0].email;
              this.idCliente = data[0].id;
              this.phone = data[0].phone;
              break;
            default:
              console.log('Ocurrio un error al cargar los usuarios');
          }
        }).catch(err => console.error);
    },
    async getAssignedRooms(id){
      let token = this.$store.state.user.token;
      var cedula = this.cedulaCliente;
      await axios.get('http://localhost:8000/api/v1.0/reservedrooms/',{
          headers: {
            "Authorization": `Bearer ${token}`
          },
          params:{
            reserva:id
          }
       },
       ).then(response => {
          let { status, data } = response;
          switch (status) {
            case 200:
              this.assignedRooms = data;
              console.log(this.assignedRooms)
              break;
            default:
              console.log('Ocurrio un error al cargar los usuarios');
          }
        }).catch(err => console.error);
    },
    removeTag(tag){
      var index = this.roomSelected.indexOf(tag);
      this.roomSelected.splice(index,1);
    },
    async saveReserve(){
      if(this.reserved == 0 && this.checkIn != "" 
      && this.checkOut != "" && this.roomSelected!=[] &&
      this.idCliente !=null){

        let token = this.$store.state.user.token;
        let opts = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        };

        let reserve = {
          fechaInicio: this.checkIn,
          fechaFin: this.checkOut,
          estado: 1,
          usuario: this.idCliente,
          responsable: this.idRespUser,
          habitaciones: []
        }
        console.log(reserve);
        try {
          await axios
            .post(
              "http://localhost:8000/api/v1.0/reserves/", reserve,opts).then(response => {

              let { status, data } = response;
              console.log(data);
              switch (status) {
                case 201: 
                  this.roomSelected.forEach(element => {
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

                              break;
                            default:
                              console.log("Ocurrio un error, en la asignacion");
                          }
                        })
                        .catch(err => console.error);                  
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
      }else{
        this.$swal('Error','La reserva no ha sido creada!',"error");
      }
    },
    async editReserve(){

      var deletedRooms = this.reserveObject.roomsObject.filter(element => this.roomSelected.indexOf(element)==-1);
      var addedRooms = this.roomSelected.filter(element => this.reserveObject.roomsObject.indexOf(element)==-1);

      let token = this.$store.state.user.token;
      let opts = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
      };

      let reserve = {
        fechaInicio: this.checkIn,
        fechaFin: this.checkOut,
        usuario: this.idCliente,
        responsable: this.idRespUser,
        habitaciones: []
      }

      await axios.patch("http://localhost:8000/api/v1.0/reserves/"+this.reserveObject.actions+"/",reserve,opts).then(response => {

        let { status, data } = response;
        switch (status) {
          case 200:
            console.log("edit");
            deletedRooms.forEach(async element => {
                var idAssigned = this.assignedRooms.find(e=>e.reserva==data.id && e.habitacion == element.id).id;
                 await axios
                  .delete("http://localhost:8000/api/v1.0/reservedrooms/"+idAssigned+"/",opts).then(response => {

                      let { status, data } = response;
                      switch (status) {
                        case 204:
                            // this.LIST_RESERVES();
                          break;
                        default:
                          console.log("Ocurrio un error, en la asignacion");
                      }
                    })
                    .catch(err => console.error);                  
              });
              addedRooms.forEach(async element => {
                    let room = {
                      reserva: data.id,
                      habitacion: element.id,
                      precioVenta: element.precio,
                    }
                    await axios
                        .post(
                          "http://localhost:8000/api/v1.0/reservedrooms/", room,opts).then(response => {

                          let { status, data } = response;
                          switch (status) {
                            case 201:
                                // this.LIST_RESERVES();
                              break;
                            default:
                              console.log("Ocurrio un error, en la asignacion");
                          }
                        })
                        .catch(err => console.error);                  
                });
                
              this.$swal({
                title: "Reserva Actualizada",
                text: "La informacion de la reserva fue actualizada con exito",
                icon: "success",
                })
                .then((data) => {
                    this.LIST_RESERVES();
                });	
                
            break;
          default:
            console.log("Ocurrio un error, en la cancelacion");
        }
      })
      .catch(err => console.error);
      
    }
  },
  mounted(){
    if(this.edit){
      this.cedulaCliente = this.reserveObject.ccUser;
      this.getUser();
      this.checkIn = this.reserveObject.checkIn;
      this.checkOut = this.reserveObject.checkOut;
      this.showRooms();
      this.reserveObject.roomsObject.forEach(element => {
        this.roomSelected.push(element);
      });
      this.getAssignedRooms(this.reserveObject.actions);
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang= "scss" scoped>
.title{
  margin-left: 15px;
}
#submit{
  margin-top: 29px;
}
.search-user{
  margin-top: 28px;
}
.login-message{
  visibility: hidden !important;
}
.save-btn{
  margin-right: 10px;
}
</style>
