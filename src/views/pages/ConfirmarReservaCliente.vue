<template>
    <b-container class="mt-2 p-3 bg-light" >
        <div>
            <h4 class="text-center"> Confirmar Reserva </h4>
            <hr>
            <b-row>
                <b-col>
                    <b-list-group>
                        <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="room in getBookRoom" :key="room.id">
                            <div>
                            <h4>
                                {{ room.descripcion }}
                            </h4>
                            <h6>
                            {{ room.tipoHabitacion }}
                            </h6>
                            </div>
                            <span>
                                <i class="fa fa-dollar" ></i>
                                {{ room.precio }}
                            </span>
                        </b-list-group-item>
                    </b-list-group>
                </b-col>
            </b-row>
        </div>
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