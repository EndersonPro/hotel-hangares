<template>
<div class="animated fadeIn">
    <b-col colmd="4" class="room-wrap">
        <a href="#" class="room image-popup-link" v-bind:style="{ backgroundImage: 'url('+image+')' }">
            <div class=" state reserved" v-if="reserved"><span>reservada</span></div>
            <div class="state aviable" v-else><span>disponible</span></div>
        </a>
        <div class="desc text-center">
            <h2><a href="#">{{type}} {{number}}</a></h2>
            <span class="rate-star">
                <i class="fa fa-star fa-lg mt-4" @click="getRate" v-for="s in rate"></i>
                <i class="nulled fa fa-star fa-lg mt-4" @click="getRate" v-for="s in 5-Number(rate)"></i>
            </span>
            <p class="price">
                <span class="currency"></span>
                <span class="price-room"><i class="fa fa-dollar" ></i>{{price}}</span>
                <span class="per">/ por noche</span>
            </p>
            <p><b-button variant="outline-primary" @click="addRoom" class="btn-book"><i class="fa fa-plus" ></i> Book Room</b-button></p>
        </div>
    </b-col>
</div>
</template>
<script>

import Vue from 'vue';
import VueStarRating from 'vue-star-rating'
import { createNamespacedHelpers } from "vuex";

import { Action } from "@/store/const/room";
const roomModule = createNamespacedHelpers("room/");

let wrapper = document.createElement('div');

let state = {
	note: 0
};

let RatingComponent = Vue.extend({
    template: `
        <div class="rating" style = "padding: 20px 0 0 0;">
            Califica nuestro servicio de hospedaje en esta habitación
            <div style="padding: 15px 0px 0px 85px;"><star-rating v-model="rating" :show-rating="false"></star-rating></div>
        </div>`,
    components: {
      'star-rating': VueStarRating
    },
	data() {
        return {
            rating: 0
        }
    },
    watch: {
        rating (newVal) { 
            state.note = newVal 
        }
    }
});

let component = new RatingComponent().$mount(wrapper);

export default {    
    name:"RoomCard",
    props: {
            id:{
                type:Number
            },
            image:{
                type: String,
                default: "https://www.the-connaught.co.uk/SysSiteAssets/rooms--suites/superior-queen-single-room/superior-queen-room---teaser.jpg?w=500&h=462&scale=both&mode=crop"
                },
            price: {
                type:Number,
                default:50
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
            }
                        
    },
    data(){
        return {rate:5}
    },
    methods:{
        ...roomModule.mapActions([Action.ADD_BOOKROOM]),
        getRate() {
            this.$swal({
                content: component.$el,
                buttons: {
                    confirm: {
                    value: 0
                }
                }
            }).then(() => {
                this.rate = state.note;
                this.$swal('Respuesta enviada','Gracias por ayudarnos a mejorar',"success");
            })
        },
        addRoom(){

            let room = {
                id: this.id,
                numero: this.number,
                precio: this.price,
                tipoHabitacion: this.type,
                reservada: this.reserved
            }
            if (!this.reserved){
                this.ADD_BOOKROOM({room});
            }else{
                this.$swal('Habitacion Reservada','No puede agregar al Book Room esta habitacion',"error");
            }
        }
    },
    mounted(){
        // this.type = this.$el.getAttribute('data-type');
    }
}
</script>
<style lang="scss" scoped>

h2 a{
    color:#000;
    text-decoration: none !important;
}
.state{
    font-size: 12px;
    margin-top: 250px;
    margin-left: 230px;
    border-radius: 20px;
    width: 100px;
    font-weight: bold;
    padding:5px 12px;
    text-transform: uppercase;
    text-align: center;
}
.reserved{
    background: #fa2626;
    color: #ffffff;
}
.aviable{
    background: #27a027;
    color: #ffffff;
    
}
.room-wrap {
//   margin-bottom: 2em; 
  width: 100%;
  }
    
 .room {
  text-decoration: none !important;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  height: 300px;
  width: 100%;
  display: table;
  overflow: hidden; }
  @media screen and (max-width: 768px) {
     .room {
      height: 400px; } }
  @media screen and (max-width: 480px) {
     .room {
      height: 270px; } }

 .desc {
  -webkit-box-shadow: 0px 15px 18px -17px rgba(0, 0, 0, 0.07);
  -moz-box-shadow: 0px 15px 18px -17px rgba(0, 0, 0, 0.07);
  -ms-box-shadow: 0px 15px 18px -17px rgba(0, 0, 0, 0.07);
  -o-box-shadow: 0px 15px 18px -17px rgba(0, 0, 0, 0.07);
  box-shadow: 10px 15px 18px 10px rgba(0, 0, 0, 0.07);
  background: #fff;
  padding: 20px;
  padding-top: 40px; }
  
   .desc .rate-star {
    margin-bottom: 20px;
    display: block; }
     .desc .rate-star .nulled {
      color: #fce3b1; }
     .desc .rate-star i {
      color: #F7AF1D; }
   .desc h3 {
    font-size: 20px;
    margin-bottom: 0; }
     .desc h3 a {
      color: #000; }
   .desc .price {
    font-family: "Playfair Display", Times, serif; }
     .desc .price span {
      color: #000; }
      .desc .price .price-room i {
      font-size: 30px;
      color: #4586FF; 
      line-height: -30px}
     .desc .price .price-room {
      font-size: 40px;
      font-weight: 400;
      color: #4586FF; }
       .desc .price .price-room.price-menu {
        color: #F96D00;
        font-size: 30px; }
   .desc ul {
    margin: 0 0 40px 0;
    padding: 0; }
     .desc ul li {
      margin-bottom: 10px;
      list-style: none; }
   .desc .btn-book {
    padding: 10px;
 
    color: #4586FF;
    font-size: 1.1em;
    }
    .desc .btn-book:hover{
        color:#ffffff;
    }
    .per{
        font-size: 15px;
    }
    .rating {
        padding: 30px 0 0 0;
    }

    .vue-star-rating {
        margin: 20px auto;
    }

</style>