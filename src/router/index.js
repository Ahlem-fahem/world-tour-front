import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/Pages/Authentication/Login.vue'
import Register from '/src/Pages/Authentication/Register.vue'
import Home from '/src/Pages/Home/HomePage.vue'
import HomeAdministrator from '/src/Pages/Administration/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/home-administrator',
    name:'HomeAdmin',
    component: HomeAdministrator
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
