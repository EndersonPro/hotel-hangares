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

                    <h4 class="text-center"> Tipo de Habitacion </h4>
                    

                    <p class="des-crip-tion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio magni, corporis eos maiores consectetur dolorum consequatur soluta ad quia culpa veniam dolores, quaerat laudantium? Porro eligendi in facere dolorum 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt officiis distinctio assumenda nisi esse tempore amet harum. Non id autem ipsum esse soluta quae maxime, blanditiis unde dolorum dolore harum?
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
                    <router-link class="btn btn-primary" to="/confirmar-reserva">
                    
                     Reservar 
                    </router-link>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name:"RoomDetail",
    props:{
        rooms: [Object]
    }
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