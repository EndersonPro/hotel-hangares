<template>
	<div id="colorlib-reservation">
		<b-container>
				<b-row> 
					<b-col colmd="12" class="search-wrap">
					  <b-form @submit.prevent="handlerSubmit" class="colorlib-form">
		            <b-row>
                  <b-col colmd="2" class="d-flex justify-content-center">
                      <div>
                          <i class="fa fa-dollar text-primary"></i>
                        </div>
		                  <b-form-group>
		                    <label for="adults">Orden de precio</label>
		                    <div class="form-field">
		                      <i class="icon icon-arrow-down3"></i>
		                      <b-form-select  v-model="order" :options="optionsOrder" class="form-control"></b-form-select>
		                    </div>
		                  </b-form-group>
		                </b-col>
		                <b-col colmd="2" class="d-flex justify-content-center">
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
		                <b-col colmd="3" class="d-flex justify-content-center">
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
		                <b-col colmd="3" class="d-flex justify-content-center">
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
		                <b-col colmd="2" class="d-flex justify-content-center align-items-center">
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
const roomModule = createNamespacedHelpers("room/");

export default {
    name: "SearchBar",
    data(){
        return{
          checkIn:"",
          checkOut:"",
          reserved: 1,
          typeRoom: null,
          order:null,
          optionsOrder:[
            { value: null, text: 'Selecciona una opción' },
            { value: 'mayor', text: 'Mayor' },
            { value: 'menor', text: 'Menor' }
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
            fechaInicio: this.checkIn,
            fechaFin: this.checkOut
          }
          console.log(this.checkIn);

          var reserved = 0;
          try {
            if (this.checkIn!="" && this.checkOut !=""){
              this.FILTER_DATE({reserveParams});
            }else{
              this.FILTER_RESERVED({roomParams});
            }
            
          } catch (error) {
            console.log(error);
          }
        
      }

    },
    mounted(){
        let roomParams = {
            reservada: null,
            tipoHabitacion: null
        }
        try {
          this.FILTER_RESERVED({roomParams});
        } catch (error) {
          console.log(error);
        }
    }
}
</script>
<style lang="scss" scoped>

.fa{
  font: {
    size: 20px
  }
  padding-right: .2em;
}
#colorlib-reservation {
	background: #ffffff;
  border-radius: 5px !important;
  clear: both; }
  #colorlib-reservation .search-wrap {
    width: 100%;
    display: block;
    // margin-top: -6.66em;
    z-index: 9;
    // background: white;
    padding: 1em; 
    color:black;
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
  .colorlib-form .form-control::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: rgba(255, 255, 255, 0.7); }
  .colorlib-form .form-control::-moz-placeholder {
    /* Firefox 19+ */
    color: rgba(255, 255, 255, 0.7); }
  .colorlib-form .form-control:-ms-input-placeholder {
    /* IE 10+ */
    color: rgba(255, 255, 255, 0.7); }
  .colorlib-form .form-control:-moz-placeholder {
    /* Firefox 18- */
    color: rgba(255, 255, 255, 0.7); }

.colorlib-form .form-group {
  margin-bottom: 10px; }
  .colorlib-form .form-group .form-field {
    position: relative;
    padding: 0;
    margin: 0; }
    .colorlib-form .form-group .form-field .icon {
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
      right: 20px;
      color: rgba(255, 255, 255, 0.5); }
    .colorlib-form .form-group .form-field .form-control {
      padding-right: 20px; }

.colorlib-form textarea.form-control {
  height: inherit;
  resize: vertical; }

.colorlib-form .btn-block {
  padding: 12px !important; }
</style>