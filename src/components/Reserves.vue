<template>
  <div id="colorlib-reserves" class="colorlib-light-grey animated fadeIn">
    <b-container>
    <!-- <b-row>
        <div class="col-md-12 text-center colorlib-heading">
            <span><i class="fa fa-star fa-lg mt-4" v-for="s in Number(5)"></i></span>
            <h2>Reservas</h2>
            <p>We love to tell our successful far far away, behind the word mountains,</br> far from the countries Vokalia and Consonantia, there live the blind texts.</p> </br>
        </div>
    </b-row> -->
    <b-row>
      <b-col lg="12">
        <c-table :table-data="items" :fields="fields" caption="<i class='fa fa-align-justify'></i>"></c-table>
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
import { shuffleArray } from '@/shared/utils'
import cTable from './ReserveTable.vue'
import axios from 'axios'
import { Action } from "@/store/const/room";
import { createNamespacedHelpers } from "vuex";
const roomModule = createNamespacedHelpers("room/");

export default {
  name: 'Reserves',
  components: {cTable},
  data: () => {
    return {
      items: [],
      itemsArray: [],
      fields: [
        {key: 'asigned', label: 'Responsable', sortable: true},
        {key: 'client', label: 'Cliente', sortable: true},
        {key: 'checkIn'},
        {key: 'checkOut'},
        {key: 'rooms', label: 'Habitaciones'},
        {key: 'status',label: 'Estado', sortable: true},
        {key: 'actions',label: 'Acciones'}
      ],
    }
  },
  computed:{
    ...roomModule.mapState(["reserves"])
  },
  methods:{
    ...roomModule.mapActions([Action.LIST_RESERVES])
  },
  watch:{
    reserves(newReserves, oldReserves){
      this.items = shuffleArray(newReserves);
      this.itemsArray = shuffleArray(newReserves);
    }
  },
  mounted(){
    this.LIST_RESERVES();
  }
}
</script>