import { createRouter, createWebHistory } from 'vue-router'
import Login from "../components/LoginForm.vue"
import Register from "../components/RegisterForm.vue"
import Hello from "../components/HelloWorld.vue"

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/register',
    name: 'register',
    component: Register
  },

  {
    path: '/hello',
    name: 'hello',
    component: Hello
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
