<template>
  <div>
    <v-card height="400" width="256" class="mx-auto">
      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Menú Integrador
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <router-link :to="item.route"
                ><v-list-item-title>{{
                  item.title
                }}</v-list-item-title></router-link
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      items: [
        { title: "Ejericicio 1", icon: "mdi-api", route: "/ejercicio1" },
        { title: "Ejericicio 2", icon: "mdi-book-open", route: "/ejercicio2" },
       
      ],
      right: null,
    };
  },
};
</script>