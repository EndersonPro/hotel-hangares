<template>
  <div>
    <b-navbar toggleable="lg" type="dark">
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
          <b-nav-item-dropdown :text="default_lang" right>
            <b-dropdown-item
              v-for="language in languages"
              :key="language"
              href="#"
              @click="handlerLang(language)"
            >{{ language }}</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Perfil</b-dropdown-item>
            <b-dropdown-item href="#">Cerrar Sesión</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      languages: ["ES", "EN", "RU", "FA"],
      default_lang: "ES"
    };
  },
  methods: {
    handlerLang(lang) {
      this.default_lang = lang;
    }
  }
};
</script>