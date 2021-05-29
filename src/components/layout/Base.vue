<template>
  <v-app>
    <v-navigation-drawer app>
      <Navigation></Navigation>
    </v-navigation-drawer>

    <v-app-bar app>
      <NavBar></NavBar>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- EL vue-router HACE QUE TODAS LAS RUTAS REDIRECCIONES EN EL CONTAINER-->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>
<script>
import NavBar from './NavBar.vue'
import Navigation from './Navigation.vue'

export default {
     components: {
    NavBar,Navigation,
  },
}
</script>
