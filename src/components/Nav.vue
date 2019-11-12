<template>
  <div>
    <b-navbar toggleable="lg" type="dark" :variant="variant">
      <b-navbar-brand href="#">HH</b-navbar-brand>

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

          <b-nav-item-dropdown>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>
                <i class="fa fa-book"></i>
                <b-badge pill variant="danger">{{roomsAdded}}</b-badge>
              </em>
            </template>
            <b-dropdown-item href="#">Confirmar Reserva</b-dropdown-item>
            <b-dropdown-item href="#">Vaciar Book Room</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right v-if="getUser.user != null">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">{{ $t('nav.profile') }}</b-dropdown-item>
            <b-dropdown-item href="#">{{ $t('nav.exit') }}</b-dropdown-item>
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
</template>

<script>
import { UIAction } from "@/store/const/ui";
import { Action } from "@/store/const/room";
import { createNamespacedHelpers } from "vuex";

const UIModule = createNamespacedHelpers("ui/");
const roomModule = createNamespacedHelpers("room/");
const userModule = createNamespacedHelpers("user/");

export default {
  name: "NavBar",
  props: {
    variant: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      languages: ["ES", "US", "RU", "FR"],
      roomsAdded: this.$store.state.room.bookRoom.length
      // default_lang: "ES"
    };
  },
  computed: {
    ...UIModule.mapGetters(["getLanguage"]),
    ...roomModule.mapState(["bookRoom"]),
    ...userModule.mapGetters(["getUser"]),
    isViewLogin: function() {
      return this.$router.history.current.fullPath == "/login";
    }
  },
  methods: {
    handlerLang(lang) {
      this.default_lang = lang;
      this.$i18n.locale = lang.toLowerCase();
      this[UIAction.CHANGE_LANGUAGE](lang.toLowerCase());
    },
    ...UIModule.mapActions([UIAction.CHANGE_LANGUAGE])
  },
  watch: {
    bookRoom(newBookRoom, oldBookRoom) {
      this.roomsAdded = newBookRoom.length;
    }
  }
};
</script>