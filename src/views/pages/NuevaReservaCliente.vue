<template>
<div>
    <div class="bg-reservas">
        <div class="container search-bar" sm="12">
            <SearchBarOld></SearchBarOld>
        </div>
    </div>
        <b-container class="d-flex flex-row align-content-center">
            <b-row class="d-flex flex-row align-content-center">
                <b-card-group columns class="mt-2" v-if="getRooms != []">
                        <RoomCardNew
                            :key="room.id" v-for="room in getRooms" 
                            :id="room.id"
                            :room="room"
                        ></RoomCardNew>
                </b-card-group>
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
.search-bar{
    
}
.bg-reservas{
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: {
        image: url('../../assets/images/bg_reservas.png');
        size: cover;
        repeat: no-repeat;
    }
}
.d-flex{
    // height: 95vh;
}
</style>