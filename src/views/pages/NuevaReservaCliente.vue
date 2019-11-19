<template>
    <div class="bg-reservas">
        <b-container>
            <b-row class="d-flex flex-row align-content-center justify-content-center">
                <b-col sm="12">
                    <SearchBarOld></SearchBarOld>
                </b-col>
                <b-row class="mt-2" v-if="getRooms != []">
                    <b-col :key="room.id" v-for="room in getRooms" >
                        <RoomCardNew
                            :id="room.id"
                            :price="room.precio"
                            :type="room.tipoHabitacion.nombre"
                            :number="room.numero"
                            :reserved="room.reservada"
                            :descripcion="room.descripcion"
                        ></RoomCardNew>
                    </b-col>
                </b-row>
            </b-row>
        </b-container>
    </div>
</template>

<script>

import SearchBar from '@/components/SearchBar';
import SearchBarOld from '@/components/SearchBarOld';
import RoomCard from '@/components/RoomCard';
import RoomCardNew from '@/components/RoomCardNew';
import { Action as RoomAction } from '@/store/const/room';
import { createNamespacedHelpers } from "vuex";

const roomModule = createNamespacedHelpers("room/");


export default {
    name:"NewReserveClient",
    components:{
        SearchBar,
        SearchBarOld,
        RoomCard,
        RoomCardNew
    },
    computed:{
        ...roomModule.mapGetters(["getRooms"]),
    },
    methods:{
        ...roomModule.mapActions([RoomAction.RESET_ROOM_LIST])
    },
    mounted() {
        this[RoomAction.RESET_ROOM_LIST]()
    },
}
</script>

<style lang="scss" scoped>

.bg-reservas{
  background: {
    image: url('../../assets/images/bg_reservas.png');
    size: cover;
    repeat: no-repeat;
  }
}
.d-flex{
    height: 95vh;
}
</style>