<template>
    <div class="bg-reservas">
        <b-container>
            <b-row class="d-flex flex-row align-content-center justify-content-center">
                <b-col sm="12">
                    <SearchBarOld></SearchBarOld>
                </b-col>
                <b-row v-if="getRooms != []">
                    <RoomCardNew class="mt-2" v-for="room in getRooms"
                        :id="room.id"
                        :key="room.id"
                        :price="room.price"
                        :type="room.type"
                        :number="room.number"
                        :reserved="room.reserved"
                        :descripcion="room.descripcion"
                        ></RoomCardNew>
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

import { Action as RoomAction } from "@/store/const/room";
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
        ...roomModule.mapGetters(["getRooms"])
    },
    created() {
      console.log(this.getRooms);  
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