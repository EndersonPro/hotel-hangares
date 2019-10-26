<template>
  <div class="bg_hotel">
    <b-container>
      <NavBar></NavBar>
    </b-container>
    <b-container class="_container">
      <b-row>
        <b-col cols="12">
          <span class="_title">HOTEL</span>
          <span class="_title" style="padding:0 .1em;">
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
          <b-button variant="outline-primary">Reservar</b-button>
        </b-col>
        <b-col cols="12" md="3">
          <b-button variant="primary"><router-link to="/signup" >Registrarse</router-link></b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/Nav";
export default {
  name: "Home",
  components: {
    NavBar
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
  height: 95vh;
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
</style>