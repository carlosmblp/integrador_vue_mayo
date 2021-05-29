<template>
  <div>
    <div>Ejercicio 1 - llamada a una api</div>

    <h5>Montañas Rusas construidas en el 2020</h5>
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
           <th class="text-left">
            Modelo
          </th>
          <th class="text-left">
            Parque
          </th>
          <th class="text-left">
            País
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in coaster"
          :key="item.name"
        >
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
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    coaster: null,
    loading: true,
    errored:false
  }),
  mounted() {
    axios
      //https://github.com/german-alvarez-dev/api-coasters
      .get('https://coasters-api.herokuapp.com/year/2020')
      .then(response => (this.coaster = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
};
</script>