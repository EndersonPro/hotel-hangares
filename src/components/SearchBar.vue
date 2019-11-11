<template>
	<div id="colorlib-reservation">
		<b-container>
				<b-row> 
					<b-col colmd="12" class="search-wrap">
					<b-form @submit.prevent="handlerSubmit" class="colorlib-form">
		            <b-row>
		                <b-col colmd="3">
		                  <b-form-group>
		                    <label for="date">Check-in:</label>
		                    <div class="form-field">
                          <b-form-input v-model="checkIn" type="date"></b-form-input>
		                    </div>
		                  </b-form-group>
		                </b-col>
		                <b-col colmd="3">
		                  <div class="form-group">
		                    <label for="date">Check-out:</label>
		                    <div class="form-field">
                          <b-form-input v-model="checkOut" type="date"></b-form-input>
		                    </div>
		                  </div>
		                </b-col>
		                <b-col colmd="2">
		                  <b-form-group>
		                    <label for="adults">Adultos</label>
		                    <div class="form-field">
		                      <i class="icon icon-arrow-down3"></i>
		                      <b-form-select id="people" v-model="adults" :options="options" class="form-control"></b-form-select>
		                    </div>
		                  </b-form-group>
		                </b-col>
		                <b-col colmd="2">
		                  <div class="form-group">
		                    <label for="children">Niños</label>
		                    <div class="form-field">
		                      <i class="icon icon-arrow-down3"></i>
		                      <b-form-select id="people" v-model="children" :options="options" class="form-control"></b-form-select>
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
          adults: "",
          children: "",
          options:[
          { value: null, text: 'Please select an option' },
          { value: '1', text: '1' },
          { value: '2', text: '2' },
          { value: '3', text: '3' },
          { value: '4', text: '4+'}
          ]
        }
    },
    methods:{
      ...roomModule.mapActions([Action.FILTER_RESERVED]),
      handlerSubmit() {
        
          var reserved = false;
          try {
            this.FILTER_RESERVED({reserved});
          } catch (error) {
            console.log(error);
          }
        
      }

    },
    mounted(){
        var reserved = false;
        try {
          this.FILTER_RESERVED({reserved});
        } catch (error) {
          console.log(error);
        }
    }
}
</script>
<style lang="scss" scoped>
#colorlib-reservation {
	background: #ffffff;
  clear: both; }
  #colorlib-reservation .search-wrap {
    width: 100%;
    display: block;
    margin-top: -6.66em;
    z-index: 9;
    background: #302939;
    padding: 35px; }
.colorlib-form label {
  font-weight: normal;
  color: white; }

.colorlib-form .form-control {
  height: 50px;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7); }
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
  margin-bottom: 15px; }
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
      padding-right: 50px; }

.colorlib-form textarea.form-control {
  height: inherit;
  resize: vertical; }

.colorlib-form .btn-block {
  margin-top: 28px;
  padding: 12px !important; }
</style>