<template>
<div>
  <h1>Nueva reserva</h1>
    <b-container>
      <b-card no-body :no-block="true">
          <div slot="header">
            <strong>Habitaciones</strong>
          </div>
          <b-card-body>
            <b-row> 
              <b-col colmd="12" class="search-wrap">
              <b-form @submit.prevent="handlerSubmit" class="colorlib-form">
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
                          <input type="submit" name="submit" id="submit" value="Search" class="btn btn-primary btn-block">
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
           <strong>Información de Reserva</strong>
          </div>
          <b-card-body>
            <b-row>
              <b-col>
                <label for="date"><strong>Responsable:</strong></label>
                <multiselect 
                  v-model="respSelected"
                  placeholder= "Selecciona o busca a un usuario"
                  :taggable="true"
                  label="username"
                  :options="dataUsers"
                  @remove="removeTagUser">
                </multiselect>
              </b-col>
            </b-row></br>
            <b-row>
              <b-col>
                <label for="date"><strong>Cliente:</strong></label>
                <multiselect 
                  v-model="userSelected"
                  placeholder= "Selecciona o busca a un usuario"
                  :taggable="true"
                  label="username"
                  :options="dataUsers"
                  @remove="removeTagUser">
                </multiselect>
              </b-col>
            </b-row>
          </b-card-body>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary" @click="saveReserve"><i class="fa fa-save"></i> Guardar</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-pencil"></i> Registrar Cliente</b-button>
          </div>
        </b-card>

    </b-container>
</div>
</template>

<script>
import { Action } from "@/store/const/room";
import { createNamespacedHelpers } from "vuex";
import Multiselect from 'vue-multiselect'
import axios from 'axios';

const roomModule = createNamespacedHelpers("room/");

export default {
  name: "NuevaReserva",
  data(){
      return {
        roomSelected: [],
        userSelected: [],
        respSelected: [],
        dataRooms:[],
        dataUsers: [],
        checkIn:"",
        checkOut:"",
        reserved: null,
        typeRoom: null,
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
    Multiselect
  },
  computed:{
    ...roomModule.mapState(["rooms"])
  },
  watch:{
    rooms(newRooms, oldRooms){

      if(this.box !=[]){
        this.box = [];
      }
      newRooms.forEach(element => {
        this.dataRooms.push(element)
      });
      this.box.push({tipo: "Multiselect",id:0});
    }
  },
  methods:{
    ...roomModule.mapActions([Action.FILTER_RESERVED,Action.FILTER_DATE]),
    handlerSubmit() {
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
          }
    },
    async getUser(){
      let token = this.$store.state.user.token;
      await axios.get('http://localhost:8000/api/v1.0/users/',
       {
              headers: {
                "Authorization": `Bearer ${token}`
              }
        }
       ).then(response => {
          let { status, data } = response;
          switch (status) {
            case 200:
              this.dataUsers = data;
              var currentUser = this.$store.state.user.user.username
              this.respSelected =  this.dataUsers.filter(function(user) {
                return user.username == currentUser;
              })[0];
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
    removeTagUser(tag){
      console.log(this.userSelected.indexOf(tag))
      var index = this.userSelected.indexOf(tag);
      this.userSelected.splice(index,1);
    },
    async saveReserve(){
      if(this.reserved == 0 && this.checkIn != "" 
      && this.checkOut != "" && this.roomSelected!=[] &&
      this.userSelected != []){

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
          usuario: this.userSelected.id,
          responsable: this.respSelected.id,
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
                          console.log(data);
                          switch (status) {
                            case 201:
                        

                              break;
                            default:
                              console.log("Ocurrio un error, en la asignacion");
                              this[UIAction.ERROR_SIGNUP](true);
                          }
                        })
                        .catch(err => console.error);                  
                  });
                    this.$swal('Reserva creada','La reserva ha sido hecha con exito!',"success");
                  break;
                default:
                  console.log("Ocurrio un error, en la creacion de reservas");
                  this[UIAction.ERROR_SIGNUP](true);
              }
            })
            .catch(err => console.error);        
        } catch (error) {
          console.log(error);
        }
      }else{
        this.$swal('Error','La reserva no ha sido creada!',"error");
      }
    }
  },
  mounted(){
    this.getUser();
    console.log(this.dataUsers)

  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang= "scss" scoped>
#submit{
  margin-top: 29px;
}
</style>
