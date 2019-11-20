<template>
<div>
  <div class="bg_hotel">
    <!-- <b-container>
      <NavBar></NavBar>
    </b-container> -->
    <b-container class="_container">
      <b-row>
        <b-col cols="12">
          <span class="_title">HOTEL</span> 
          <span class="_title">
            <svg
              width="4"
              height="69"
              viewBox="0 0 1 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="2" y1="52.0049" x2="2" y2="0.995079" stroke="#17B6D3" stroke-width="3" />
            </svg>
          </span>
           <span class="_title">LOS HANGARES</span>
        </b-col>
      </b-row>
      <b-row class="_buttons_actions">
        <b-col cols="12" md="3">
          <b-button variant="outline-primary"><router-link to="/reserva">Reservar</router-link> </b-button>
        </b-col>
        <b-col cols="12" md="3">
          <b-button variant="primary"><router-link to="/signup" >Registrarse</router-link></b-button>
        </b-col>
      </b-row>
    </b-container>
	</div>
  <!-- 
    <b-container style="position:relative; top:-2.5em">
      <SearchBar></SearchBar>
    </b-container> -->
  <!-- 

  <SearchBar></SearchBar>
<Services></Services> -->
<!-- <SearchBar></SearchBar> -->
 <!-- <div id="colorlib-rooms" class="colorlib-light-grey">
    <b-container>
  			<b-row>
					<div class="col-md-12 text-center colorlib-heading">
						<span><i class="fa fa-star fa-lg mt-4" v-for="s in Number(5)" :key="s"></i></span>
						<h2>Habitaciones</h2>
						<p>We love to tell our successful far far away, behind the word mountains,<br> far from the countries Vokalia and Consonantia, there live the blind texts.</p> <br>
					</div>
			</b-row>
      <b-row>
        <RoomCard v-for="r in items" :id="r.id" :type="r.tipoHabitacion.nombre" :number="r.numero" :price="Number(r.precio)" :reserved="r.reservada" :key="r.id"></RoomCard>
      </b-row>
    </b-container>
</div> -->
  <!-- <Reserves></Reserves>  -->
  <Services></Services>
  <Testimonials></Testimonials>
  <DiningBar></DiningBar>
  <Footer></Footer>
</div>
</template>

<script>

import NavBar from "@/components/Nav";
import SearchBar from "@/components/SearchBar";
import Services from "@/components/Services";
import RoomCard from "@/components/RoomCard";
import Testimonials from "@/components/Testimonials";
import DiningBar from "@/components/DiningBar";
import Reserves from "@/components/Reserves";
import Footer from "@/components/Footer";

import { Action } from "@/store/const/room";
import { createNamespacedHelpers } from "vuex";
const roomModule = createNamespacedHelpers("room/");

export default {
  name: "Home",
  data(){
    return {
      items:[]
    }
  },
  // beforeRouteEnter(to, from, next){
  //   if (to.query.redirectFrom) {
  //   console.log("Usted no tiene permisos");
  //   }
  // },
  computed:{
    ...roomModule.mapState(["rooms"])
  },
  watch:{
    rooms(newRooms, oldRooms){
      console.log("watched!");
      console.log(newRooms);
      this.items = newRooms;
    }
  },
  components: {
    NavBar,
    Services,
    SearchBar,
    RoomCard,
    Testimonials,
    Reserves,
    DiningBar,
    Footer 
  }
};
</script>

<style lang="scss">

.bg_hotel {
  background: linear-gradient(122.09deg, #3c3a3a 0%, rgba(0, 0, 0, 0.14) 99.2%),
    url("../../assets/images/bg_principal.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
._container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  //   background: red;
  //   position: absolute;
}
._title {
  font-style: normal;
  font-weight: normal;
  font-size: 5em;
  line-height: 2em;
  color: #ffffff;
}
._buttons_actions {
    width: 100%;
  button {
    // margin-right: 0.3em;
    width: 100%;

    // height: 50px;
    font-size: 1.4em;
    text-transform: uppercase;
    color:white;
    a{
        color: white;
        text-decoration: none;
    }
  }
}


.colorlib-light-grey {
  background: #fafafa; }
#colorlib-dining-bar,
#colorlib-services,
#colorlib-reserves,
#colorlib-rooms,
#colorlib-footer  {

  padding: 6em 0;
  clear: both; }
  @media screen and (max-width: 768px) {
    #colorlib-dining-bar,
    #colorlib-about,
    #colorlib-services,
    #colorlib-contact,
    #colorlib-rooms,
    #colorlib-testimony,
    #colorlib-blog,
    #colorlib-amenities,
    #colorlib-subscribe,
    #colorlib-footer {
      padding: 3em 0; } }
#colorlib-services{
	background: #ffffff !important;
}

.colorlib-heading {
  margin-bottom: 5em; }
  .colorlib-heading.colorlib-heading-sm {
    margin-bottom: 2em; }
  .colorlib-heading h2 {
    font-size: 34px;
    margin-bottom: 20px;
    line-height: 1.5;
    color: #000;
    position: relative; }
    .colorlib-heading h2:before, .colorlib-heading h2:after {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      content: '';
      background: #e6e6e6;
      width: 130px;
      height: 1px;
      margin: 0 auto; }
    .colorlib-heading h2:after {
      top: -7px;
      width: 100px; }
  .colorlib-heading span {
    display: block;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px; }
    .colorlib-heading span i {
      color: #F7AF1D; }

</style>