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

function getInfo(){
        var reserves=[]
        axios.get('http://localhost:8000/api/v1.0/reserves/').then(response => {
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
            break;
        default:
            console.log('Ocurrio un error al cargar las reservas');
        }
    }).catch(err => console.error);

    return shuffleArray(reserves)
}

export default {
  name: 'Reserves',
  components: {cTable},
  data: () => {
    return {
      items: getInfo(),
      itemsArray: getInfo(),
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
  methods:{
    updateComponent(){
      this.$forceUpdate();
    }
  },
  watch:{

  },
  mounted(){

  }
}
</script>