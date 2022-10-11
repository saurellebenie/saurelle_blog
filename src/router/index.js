import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/task/home.vue'
import Signup from '../components/auth/Signup.vue'
import Dashboard from '../components/task/Dashboard.vue'
import addStorie from '../components/task/addStorie.vue'
import Storie from '../components/task/Storie.vue'
import Profile from '../components/task/Profile.vue'
import Login from '../components/auth/Login.vue'
import Notification from '../components/task/Notification.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path:'/Signup',
      name:'signup',
      component: Signup
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      // redirect: () => ({ name: 'grandchild' }),
      children:[
          {
            path: 'addStorie',
            name: 'addStorie',
            component: addStorie
          },
          {
            path: '',
            name: 'storie',
            component: Storie,
          },
          {
            path: 'Notification',
            name: 'Notification',
            component: Notification
          },
         
      ]
    }
  ]
  
})

export default router
