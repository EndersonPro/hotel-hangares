<template>
  <div>
    <div class="container_nav" v-bind:class="{ navhome: isViewHome }" >
      <b-navbar toggleable="lg" type="dark" :variant="variantForRoute">
        <b-navbar-brand href="#"><router-link to="/">HH</router-link></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">Item 1</b-nav-item>
            <b-nav-item href="#">Item 2</b-nav-item>
            <b-nav-item href="#">Item 3</b-nav-item>
            <b-nav-item href="#">Item 4</b-nav-item>

            <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->

            <b-nav-item-dropdown  v-b-tooltip.hover title="Tienes Habitaciones" v-if="getBookRoom.length > 0">
              <template v-slot:button-content>
                  <i class="fa fa-heart"></i>
                  <b-badge pill variant="primary">{{getBookRoom.length }}</b-badge>
              </template>
              <b-list-group>
                <b-list-group-item class="d-flex justify-content-between align-items-center" 
                v-for="(room, index) in getBookRoom" 
                :key="index">{{ room.tipoHabitacion }} <b-badge variant="primary" pill>{{ room.precio }}</b-badge></b-list-group-item>
              </b-list-group>
              <b-dropdown-item> <router-link to="/confirmar-reserva">Confirmar Reserva</router-link> </b-dropdown-item>
              <b-dropdown-item @click="EmptyListRoom" href="#">Vaciar Book Room</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right v-if="getToken">
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>{{getUser.username}}</em>
              </template>
              <!-- <b-dropdown-item href="#">{{ $t('nav.profile') }}</b-dropdown-item> -->
              <b-dropdown-item @click="logout" href="#">{{ $t('nav.exit') }}</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="#" v-else >
              <i class="fa fa-user-o fa-lg pr-1 text-white " v-if="!isViewLogin"></i>
              <router-link to="/login"  class="text-white" v-if="!isViewLogin">{{ $t('nav.user.login') }}</router-link>
            </b-nav-item>

            <flag :iso="getLanguage" />
            <b-nav-item-dropdown :text="getLanguage.toUpperCase()" right>
              <b-dropdown-item
                v-for="language in languages"
                :key="language"
                href="#"
                @click="handlerLang(language)"
              >
                <flag :iso="language" />
                {{ language }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { UIAction } from "@/store/const/ui";
import { Action } from "@/store/const/room";
import { Action as UserAction } from "@/store/const/user";
import { createNamespacedHelpers } from "vuex";

const UIModule = createNamespacedHelpers("ui/");
const roomModule = createNamespacedHelpers("room/");
const userModule = createNamespacedHelpers("user/");

export default {
  name: "NavBar",
  data() {
    return {
      languages: ["ES", "US", "RU", "FR"],
      roomsAdded: this.$store.state.room.bookRoom.length,
      router: this.$router
    };
  },
  computed: {
    ...UIModule.mapGetters(["getLanguage"]),
    ...roomModule.mapState(["bookRoom"]),
    ...roomModule.mapGetters(['getBookRoom']),
    ...userModule.mapGetters(["getUser","getToken"]),
    isViewLogin: function() {
      return this.$router.history.current.fullPath == "/login";
    },
    isViewHome: function(){
      return this.$router.history.current.fullPath == "/";
    },
    variantForRoute: function(){
      return this.$router.history.current.name == 'Home' ? null : 'info';
    }
  },
  methods: {
    handlerLang(lang) {
      this.default_lang = lang;
      this.$i18n.locale = lang.toLowerCase();
      this[UIAction.CHANGE_LANGUAGE](lang.toLowerCase());
    },
    ...UIModule.mapActions([UIAction.CHANGE_LANGUAGE]),
    ...userModule.mapActions([UserAction.USER_LOGOUT]),
    ...roomModule.mapActions([Action.CLEAR_BOOKROOM]),
    async logout(){
      await this.USER_LOGOUT();
      this.$router.push("/");
    },
    EmptyListRoom(){
        this[Action.CLEAR_BOOKROOM]();
    }
  },
  // watch: {
  //   bookRoom(newBookRoom, oldBookRoom) {
  //     this.roomsAdded = newBookRoom.length;
  //   }
  // },
  // mounted(){
  //   console.log(this.isViewHome);
  // }
};
</script>
<style lang="scss">
  .navhome{
    position: absolute;
    width: 100%;
  }
</style>