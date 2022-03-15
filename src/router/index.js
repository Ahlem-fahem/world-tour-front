import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/Pages/Authentication/Login.vue'
import Register from '/src/Pages/Authentication/Register.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
