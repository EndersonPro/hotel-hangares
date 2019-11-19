<template>
    <b-container class="mt-2 p-3 bg-light" >
        <h4 class="text-center"> Confirmar Reserva </h4>
        <hr>
        <b-row>
                <p>Hola</p>
        </b-row>
    </b-container>
</template>
<script>
import { Action as RoomAction } from '@/store/const/room';
import { createNamespacedHelpers } from 'vuex';

const RoomModule = createNamespacedHelpers('room/');

export default {
    name:"ConfirmReservePage",
    computed:{
        ...RoomModule.mapGetters(["getRooms","getBookRoom"])
    }
}
</script>

<style lang="scss">
    
</style>