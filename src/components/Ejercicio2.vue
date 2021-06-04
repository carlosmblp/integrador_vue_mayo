<template>
  <v-container fluid>
    <div>
      Ejercicio 2 - guardar algún dato, que se ingrese en un formulario, en el
      LocalStorage de su cliente
    </div>
    <br>
    <v-text-field
      label="Texto"
      
      hide-details="auto"
      v-model="texto"
    ></v-text-field>
    <br>
    
    <p>El texto es => <b><input v-model="texto" /></b></p>
    <br>
    <v-divider></v-divider>
    <br>
    <h4>El contenido del localStorage es:</h4>
    <br>
    <div v-for="(ls,v) in localStorage" v-bind:key="ls.texto">
        <b>{{v}}</b>: {{ls}}
    </div>
    
    <br>
    <p>Si vamos a la herramienta desarrollador - Application => LocalStorage</p>
    <p>Veremos la variable "texto" con el texto ingresado en el input</p>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    texto: null,
    localStorage: localStorage
  }),
  methods: {},
  mounted() {
    if (localStorage.texto) {
      this.texto = localStorage.texto;
    }
  },
  watch: {
    texto(newName) {
      localStorage.texto = newName;
    },
  },
};
</script>