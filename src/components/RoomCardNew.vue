<template>
    <!-- <div cols="4" class="card" :style="{ backgroundImage: 'url('+image+')' }">
        {{ descripcion }}
    </div> -->
    <b-col cols="4">
        <b-card
        :title="price"
        :img-src="image"
        img-alt="Image"
        img-top
        style="width: 12rem;max-width: 12rem;"
    >
    <b-card-text>
    {{ descripcion }}
    </b-card-text>
    <div class="d-flex justify-content-between align-items-center flex-row">
        <b-button variant="outline-danger" id="fav" @click="addRoom" class="btn-book"><i class="fa fa-heart" ></i></b-button>
        <b-tooltip target="fav" title="Añadir a Favoritos"></b-tooltip>    
        <router-link class="btn btn-primary" :to="{
            name:'DetailRoom',
            params:{
                idRoom: id
            }
        }">Ver Detalle</router-link>
    </div>
            <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
        </b-card>
    </b-col>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { Action } from "@/store/const/room";
const roomModule = createNamespacedHelpers("room/");


export default {
    name:"RoomCardNew",
    props: {
        id:{
            type:Number
        },
        image:{
            type: String,
            default: "https://www.the-connaught.co.uk/SysSiteAssets/rooms--suites/superior-queen-single-room/superior-queen-room---teaser.jpg?w=500&h=462&scale=both&mode=crop"
            },
        price: {
            type:String,
            default:'50'
        },
        type:{
            type:String,
            default:"FAMILY ROOM"
        },
        number:{
            type:Number,
            default: 201
        },
        reserved:{
            type: Boolean,
            default: false
        },
        descripcion:{
            type:String,
        }
    },
    methods:{
        ...roomModule.mapActions([Action.ADD_BOOKROOM]),

        addRoom(){
            let room = {
                id: this.id,
                numero: this.number,
                precio: this.price,
                tipoHabitacion: this.type,
                reservada: this.reserved,
                descripcion: this.descripcion
            }
            if (!this.reserved){
                this.ADD_BOOKROOM({room});
            }else{
                this.$swal('Habitacion Reservada','No puede agregar al Book Room esta habitacion',"error");
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