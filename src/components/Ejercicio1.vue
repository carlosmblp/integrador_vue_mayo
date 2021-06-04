<template>
  <div>
    <div>Ejercicio 1 - llamada a una api</div>
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
      v-if="loading"
    ></v-progress-circular>
    <div v-show="!loading">
      <h5>Montañas Rusas construidas en el 2020</h5>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Modelo</th>
              <th class="text-left">Parque</th>
              <th class="text-left">País</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in coaster" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.model }}</td>
              <td>{{ item.park }}</td>

              <td>{{ item.country }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <h5>JSON que retorna la API</h5>
      <pre>{{ coaster }}</pre>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
//import http from '../api/apiClient';
import coasterService from '../services/coasterService';

export default {
  data: () => ({
    coaster: null,
    loading: false,
    errored: false,
  }),
  mounted() {

    this.loading = true
    coasterService
					.getCoaster()
					.then((response) => {
						this.coaster = response;
					})
					.catch((err) => {
						console.log(err);
            this.errored = true;
					})
          .finally(() => (this.loading = false));

   
  /*axios
      //https://github.com/german-alvarez-dev/api-coasters
      .get("https://coasters-api.herokuapp.com/year/2020")
      .then((response) => {
        this.coaster = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false))*/
  },
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>