<template>
    <div>
        <b-row style="height:80vh">
            <b-col cols="4" md="4">
                <b-carousel
                    id="carousel-fade"
                    style="height:80vh;text-shadow: 0px 0px 2px #000"
                    fade
                    indicators
                    img-width="1000"
                    img-height="1200"
                    >
                    <b-carousel-slide
                    img-src="https://picsum.photos/1000/1200/?image=10"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    img-src="https://picsum.photos/1000/1200/?image=12"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    img-src="https://picsum.photos/1000/1200/?image=22"
                    ></b-carousel-slide>
                </b-carousel>
            </b-col>
            <b-col cols="8" md="8"  class="bg-light content pt-3 pb-3 pl-4 pr-4 d-flex flex-column justify-content-between">
                    <h4 class="text-center"> {{ room.tipoHabitacion.descripcion }} </h4>
                    <p class="des-crip-tion">
                        {{ room.descripcion }}
                    </p>
                <b-list-group>
                    <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Cras justo odio
                        <b-badge variant="primary" pill>14</b-badge>
                    </b-list-group-item>

                    <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Dapibus ac facilisis in
                        <b-badge variant="primary" pill>2</b-badge>
                    </b-list-group-item>

                    <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Morbi leo risus
                        <b-badge variant="primary" pill>1</b-badge>
                    </b-list-group-item>
                </b-list-group>

                <div class="d-flex flex-row justify-content-between">
                    <div>Stars</div>
                    <b-button variant="info" @click="addRoom">Reservar</b-button>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>

import { createNamespacedHelpers } from "vuex";
import { Action } from "@/store/const/room";
const roomModule = createNamespacedHelpers("room/");

export default {
    name:"RoomDetail",
    computed:{
        ...roomModule.mapGetters(["getRooms"]),
        room: function(){
            try {
                // TODO: Estoy filtrando solo el elemento que deseo del store y accedo a el mediante el indice
                // [0]
                let room = this.getRooms.filter(room => room.id == this.$route.params.id)[0];
                // throw new Error("Ocurrio un error");
                return room
            } catch (error) {
                console.log(error);
                this.$router.go(-1);
            }
        }
    },
    created(){
        console.log(this.room)
    },
    methods: {
        ...roomModule.mapActions([Action.ADD_BOOKROOM]),
        addRoom(){
            console.log("Entrando en addRoom")
            let room = {
                id: this.room.id,
                numero: this.room.number,
                precio: this.room.price,
                tipoHabitacion: this.room.type,
                reservada: this.room.reserved,
                descripcion: this.room.descripcion
            }
            if (!this.reserved){
                try {
                    this.ADD_BOOKROOM({room});
                    this.$router.push({path:'/confirmar-reserva'});
                } catch (error) {
                    
                }

            }else{
                this.$swal('Habitacion Reservada','No puede agregar al Book Room esta habitacion',"error");
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.content{

    .des-crip-tion{
        font-size: 16px; 
        text-align: justify
    }
}
</style>