<template>
    <div style="height:90vh; top:10vh; position:absolute" class="d-flex flex-column justify-content-center">
        <b-row>
            <div class="bg-light d-flex flex-row">
                <div style="max-width:35%">
                    <b-carousel
                        id="carousel-fade"
                        fade
                        indicators
                        img-width="1000"
                        img-height="1000"
                        :interval="200000"
                        controls
                        >
                        <b-carousel-slide
                            img-src="https://picsum.photos/1000/1000/?image=11"
                        ></b-carousel-slide>
                        <b-carousel-slide
                            img-src="https://picsum.photos/1000/1000/?image=17"
                        ></b-carousel-slide>
                        <b-carousel-slide
                            img-src="https://picsum.photos/1000/1000/?image=20"
                        ></b-carousel-slide>
                    </b-carousel>
                </div>
                <div class="content pt-3 pb-3 pl-4 pr-4 d-flex flex-column justify-content-between">
                    <div>
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
                    </div>

                    <div class="d-flex flex-row justify-content-between">
                        <div>Stars</div>
                        <b-button variant="info" @click="addRoom">Reservar</b-button>
                    </div>
                </div>
            </div>
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
    methods: {
        ...roomModule.mapActions([Action.ADD_BOOKROOM]),
        addRoom(){
            let room = {
                id: this.room.id,
                numero: this.room.numero,
                precio: this.room.precio,
                tipoHabitacion: this.room.tipoHabitacion.nombre,
                reservada: this.room.reservada,
                descripcion: this.room.descripcion
            }
            // console.log(room)
            if (!this.room.reservada){
                try {
                    this.ADD_BOOKROOM({room});
                    this.$router.push({path:'/confirmar-reserva'});
                } catch (error) {
                     this.$swal('Habitacion ya se encuentra en el libro de habitaciones',error.message,"error");
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
    width: 100%;
    .des-crip-tion{
        font-size: 16px; 
        text-align: justify
    }
}
</style>