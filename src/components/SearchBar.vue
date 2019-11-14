<template>
  <div>
    <b-form style="width: 1000px">
      <b-row class="bg-light">
        <b-col  class="p-3">
          <b-row class="d-flex justify-content-between align-items-center flex-row">
            <b-col cols="2" class="text-primary">
              <i class="fa fa-dollar"></i>
            </b-col>
            <b-col cols="10">
              <b-row>
                <b-form-select v-model="selected" :options="form.options_price"></b-form-select>
              </b-row>
              <b-row>
                <span>{{  selected == null  ? 'Sin orden' : selected }}</span>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col  class="p-3">
          <b-row class="d-flex justify-content-between align-items-center flex-row">
            <b-col cols="2" class="text-primary">
              <i class="fa fa-home"></i>
            </b-col>
            <b-col cols="10">
              <b-row>
                <b-form-select v-model="type_room" :options="form.options_type"></b-form-select>
              </b-row>
              <b-row>
                <span>{{  type_room == null  ? 'Sin opción' : type_room }}</span>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col  class="p-3">
          <b-row class="d-flex justify-content-between align-items-center flex-row">
            <b-col cols="2" class="text-primary">
              <i class="fa fa-calendar"></i>
            </b-col>
            <b-col cols="10">
              <b-row>
                <Datepicker @selected="handlerDateSelectedCheckIn" placeholder="Fecha de entrada"></Datepicker>
              </b-row>
              <b-row>
                <span>{{  checkIn }}</span>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col  class="p-3">
            <b-row class="d-flex justify-content-between align-items-center flex-row">
            <b-col cols="2" class="text-primary">
              <i class="fa fa-calendar"></i>
            </b-col>
            <b-col cols="10">
              <b-row>
                <Datepicker @selected="handlerDateSelectedCheckOut" placeholder="Fecha de salida"></Datepicker>
              </b-row>
              <b-row>
                <span>{{  checkOut }}</span>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="p-3" >
          <b-row  style="background-color:red;" class="p-3 d-flex justify-content-center align-items-center flex-row">
            <b-button>Buscar</b-button>
           </b-row>
        </b-col>
      </b-row>

    </b-form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import * as moment from 'moment';

export default {
  name:"SearchBar",
  components:{
    Datepicker
  },
  data(){
    return {
      selected:null,
      type_room:null,
      checkIn: moment(new Date).format('YYYY/MM/DD'),
      checkOut: moment(new Date).format('YYYY/MM/DD'),
      form:{
        options_price:[
          {
            value: null, text:'Orden de precios'
          },
          {
            value: 'a', text:'aber'
          }
        ],
        options_type:[
          {
            value: null, text:'Tipo de Habitación'
          },
          {
            value: 'a', text:'aber'
          }
        ],
      }
    }
  },
  methods:{
    customFormatter(date) {
        return moment(date).format('YYYY/MM/DD');
    },
    handlerDateSelectedCheckIn(date){
      this.checkIn = moment(date).format('YYYY/MM/DD');
    },
    handlerDateSelectedCheckOut(date){
      this.checkOut = moment(date).format('YYYY/MM/DD');
    }
  }
}
</script>
<style lang="scss" scoped>
.bg-light{
  border: {
    radius: 5px;
  }
}
.fa{
  font: {
    size: 24px
  }
}
  
</style>