import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import header from '../components/header.vue'
import Signup from '../components/Signup.vue'
import Dashboard from '../components/Dashboard.vue'
import addStorie from '../components/addStorie.vue'
import Storie from '../components/Storie.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path:'/Signup',
      name:'signup',
      component: Signup
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children:[
          {
            path: 'addStorie',
            name: 'addStorie',
            component: addStorie
          },
          {
            path: 'Storie',
            name: 'storie',
            component: Storie,
          }
      ]
    }
  ]
})

export default router
