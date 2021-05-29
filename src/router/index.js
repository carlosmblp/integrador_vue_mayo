import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ejercicio1 from '../components/Ejercicio1.vue'
import Ejercicio2 from '../components/Ejercicio2.vue'
import Ejercicio3 from '../components/Ejercicio3.vue'
import Ejercicio4 from '../components/Ejercicio4.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ejercicio1',
    name: 'Ejercicio1',
    component: Ejercicio1
  },
  {
    path: '/ejercicio2',
    name: 'Ejercicio2',
    component: Ejercicio2
  },
  {
    path: '/ejercicio3',
    name: 'Ejercicio3',
    component: Ejercicio3
  },
  {
    path: '/ejercicio4',
    name: 'Ejercicio4',
    component: Ejercicio4
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
