<template>
	<div id="colorlib-reservation" style="transition: .5s all ease-in-out;">
		<b-container class="bg-light custom-border">
				<b-row> 
					<b-col cols="10" md="12" class="p-3 search-wrap">
					  <b-form @submit.prevent="handlerSubmit" class="colorlib-form">
		            <b-row>
                  <b-col  class="d-flex justify-content-center">
                      <div>
                          <i class="fa fa-dollar text-primary"></i>
                        </div>
		                  <b-form-group>
		                    <label for="adults">Orden de precio</label>
		                    <div class="form-field">
		                      <i class="icon icon-arrow-down3"></i>
		                      <b-form-select v-model="order" :options="optionsOrder" class="form-control"></b-form-select>
		                    </div>
		                  </b-form-group>
		              </b-col>
                  <b-col  class="d-flex justify-content-center">
                    <div>
                        <i class="fa fa-home text-primary"></i>
                      </div>
                    <div class="form-group">
                      <label for="children">Tipo Habitación</label>
                      <div class="form-field">
                        <i class="icon icon-arrow-down3"></i>
                        <b-form-select v-model="typeRoom" :options="optionsType" class="form-control"></b-form-select>
                      </div>
                    </div>
                  </b-col>
                  <b-col class="d-flex justify-content-center">
                      <div>
                        <i class="fa fa-calendar text-primary"></i>
                      </div>
                    <b-form-group class="">
                      <div>
                        <label for="date">Fecha de entrada</label>
                        <div class="form-field">
                          <b-form-input v-model="checkIn" type="date"></b-form-input>
                        </div>
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col class="d-flex justify-content-center">
                    <div>
                        <i class="fa fa-calendar text-primary"></i>
                      </div>
                    <div class="form-group">
                      <label for="date">Fecha de salida</label>
                      <div class="form-field">
                        <b-form-input v-model="checkOut" type="date"></b-form-input>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="2" md="2" class="d-flex justify-content-center align-items-center">
                    <input type="submit" name="submit" id="submit" value="Buscar" class="btn btn-primary btn-block">
                  </b-col>
		              </b-row>
		            </b-form>
					</b-col>
        </b-row>	<!-- row   -->
      </b-container>
	  </div>
</template>
<script>
import { Action } from "@/store/const/room";
import { createNamespacedHelpers } from "vuex";
import * as moment from 'moment'

const roomModule = createNamespacedHelpers("room/");

export default {
    name: "SearchBar",
    data(){
        return{
          checkIn:"",
          checkOut:"",
          reserved: 0,
          typeRoom: null,
          order:null,
          optionsOrder:[
            { value: null, text: 'Selecciona una opción' },
            { value: 'asc', text: 'Menor a mayor' },
            { value: 'desc', text: 'Mayor a menor' }
          ],
          optionsType:[
            { value: null, text: 'Selecciona una opción' },
            { value: 1, text: 'Suite' },
            { value: 2, text: 'Familiar' },
            { value: 3, text: 'Individual' }
          ]
        }
    },
    methods:{
      ...roomModule.mapActions([Action.FILTER_RESERVED,Action.FILTER_DATE]),
      handlerSubmit() {

          let roomParams = {
            reservada: this.reserved,
            tipoHabitacion: this.typeRoom
          }
          let reserveParams ={
            fechaInicio: moment(this.checkIn).format("YYYY-MM-DD"),
            fechaFin: moment(this.checkOut).format("YYYY-MM-DD"),
            tipoHabitacion: this.typeRoom
          }
          console.log(reserveParams);

          // var reserved = 0;
          try {
            if (this.checkIn!="" && this.checkOut !=""){
              this.FILTER_DATE({reserveParams});
            }else{
              this.FILTER_RESERVED({ roomParams });
            }
            
          } catch (error) {
            console.log(error);
          }
        
      }
    },
    watch:{
      order: function(newValue, oldValue){
        console.log(oldValue, newValue);
        console.log(this.$store.state.room.orderBy);
        this.$store.state.room.orderBy = newValue
      }
    },
}
</script>
<style lang="scss" scoped>

.fa{
  font: {
    size: 20px
  }
  padding-right: .2em;
}
.custom-border{
  border-radius: 5px !important;
}
#colorlib-reservation {
  border-radius: 5px !important;
	background: #ffffff !important;
  clear: both; }
  #colorlib-reservation .search-wrap {
    // width: 100%;
    // display: block;
    z-index: 9;
    // padding: .2em; 
    // color:black;
  }
.colorlib-form label {
  font-weight: normal;
  color: black; 
  }

.colorlib-form .form-control {
  height: 30px;
  box-shadow: none;
  font-size: 12px;
  appearance: none;
  background: rgba(255, 255, 255, 0.03);
  // border: 1px solid rgba(255, 255, 255, 0.1);
  color:black; }
  .colorlib-form .form-control:active, .colorlib-form .form-control:focus {
    -webkit-box-shadow: none;
    box-shadow: none;
    border-color: #4586FF; }

// .colorlib-form textarea.form-control {
//   height: inherit;
//   resize: vertical; }

.colorlib-form .btn-block {
  padding: 12px !important; }
</style>