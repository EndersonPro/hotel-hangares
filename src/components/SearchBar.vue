<template>
  <div>
    <b-form>
      <b-row class="bg-light">
        <b-col cols="2.5" class="p-3">
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
        <b-col cols="2.5" class="p-3">
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
        <b-col cols="2.5" class="p-3">
          <b-row class="d-flex justify-content-between align-items-center flex-row">
            <b-col cols="2" class="text-primary">
              <i class="fa fa-calendar"></i>
            </b-col>
            <b-col cols="10">
              <b-row>
                <Datepicker :value="checkIn"></Datepicker>
              </b-row>
              <b-row>
                <span>{{  type_room == null  ? 'Sin opción' : type_room }}</span>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="*">
            <span>Item1</span>
        </b-col>
        <b-col cols="*">
            <b-button>Buscar</b-button>
        </b-col>
      </b-row>

    </b-form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  name:"SearchBar",
  components:{
    Datepicker
  },
  data(){
    return {
      selected:null,
      type_room:null,
      checkIn: new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate()),
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