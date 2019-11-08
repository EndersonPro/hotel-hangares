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

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">{{ $t('nav.profile') }}</b-dropdown-item>
            <b-dropdown-item href="#">{{ $t('nav.exit') }}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { UIAction } from "@/store/const/ui";
import { createNamespacedHelpers } from "vuex";

const UIModule = createNamespacedHelpers("ui/");

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
      languages: ["ES", "US", "RU", "FR"]
      // default_lang: "ES"
    };
  },
  computed: {
    ...UIModule.mapGetters(["getLanguage"])
  },
  methods: {
    handlerLang(lang) {
      this.default_lang = lang;
      this.$i18n.locale = lang.toLowerCase();
      this[UIAction.CHANGE_LANGUAGE](lang.toLowerCase());
    },
    ...UIModule.mapActions([UIAction.CHANGE_LANGUAGE])
  }
};
</script>