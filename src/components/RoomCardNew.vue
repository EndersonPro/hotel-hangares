<template>
    <b-card
        :title="room.precio"
        :img-src="image"
        img-alt="Image"
        img-top
        style="transition: .5s all ease-in-out;"
        footer-tag="footer"
    >

    <b-card-text>
        {{ room.descripcion }}
    </b-card-text>

    <template v-slot:footer>
        <div class="d-flex flex-row justify-content-between align-items-center">
            <b-button variant="outline-danger" id="fav" @click="addRoom" class="btn-book"><i class="fa fa-heart" ></i></b-button>
            <b-tooltip target="fav" title="Añadir a Favoritos"></b-tooltip>    
            <router-link class="btn btn-primary" :to="'/detalle-habitacion/'+ room.id">Ver Detalle</router-link>
        </div>
    </template>



    </b-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { Action } from "@/store/const/room";
const roomModule = createNamespacedHelpers("room/");


export default {
    name:"RoomCardNew",
    props: {
        image:{
            type: String,
            default: "https://www.the-connaught.co.uk/SysSiteAssets/rooms--suites/superior-queen-single-room/superior-queen-room---teaser.jpg?w=500&h=462&scale=both&mode=crop"
            },
        room: Object
    },
    methods:{
        ...roomModule.mapActions([Action.ADD_BOOKROOM]),

        addRoom(){
            // let room = {
            //     id: this.id,
            //     numero: this.number,
            //     precio: this.price,
            //     tipoHabitacion: this.type,
            //     reservada: this.reserved,
            //     descripcion: this.descripcion
            // }
            let room = {
                id: this.room.id,
                numero: this.room.numero,
                precio: this.room.precio,
                tipoHabitacion: this.room.tipoHabitacion.nombre,
                reservada: this.room.reservada,
                descripcion: this.room.descripcion
            }
            try {
                this.ADD_BOOKROOM({room});
            } catch (error) {
                this.$swal('Habitacion ya se encuentra en el libro de habitaciones',error.message,"error");
            }
        }
    }
}
</script>

<style lang="scss">
    .p-card{
        background-repeat: none;
    }
</style>