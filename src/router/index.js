import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/task/home.vue'
import Signup from '../components/auth/Signup.vue'
import Dashboard from '../components/task/Dashboard.vue'
import addStorie from '../components/task/addStorie.vue'
import Storie from '../components/task/Storie.vue'
import Profile from '../components/task/Profile.vue'
import Login from '../components/auth/Login.vue'
import Pages from '../components/task/Pages.vue'
import Posts from '../components/task/Posts.vue'
import Report from '../components/task/Report.vue'
import Setting from '../components/task/Setting.vue'
import User from '../components/task/User.vue'
import Lastpost from '../components/task/Lastpost.vue'
import Comments from '../components/task/Comments.vue'
// import BarChart from '../components/Chart/BarChart.js'
import PostLayout from '../components/task/PostLayout.vue'

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
      path: '/Signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Lastpost',
      name: 'Lastpost',
      component: Lastpost
    },
    // {
    //   path: '/BarChart',
    //   name: 'BarChart',
    //   component: BarChart
    // },
    {
      path: '/PostLayout',
      name: '',
      component: PostLayout
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      // redirect: () => ({ name: 'grandchild' }),
      children: [
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
          path: 'Pages',
          name: 'Pages',
          component: Pages
        },
        {
          path: 'Posts',
          name: 'Post',
          component: Posts
        },
        {
          path: 'User',
          name: 'User',
          component: User
        },
        {
          path: 'Report',
          name: 'Report',
          component: Report
        },
        {
          path: 'Setting',
          name: 'Setting',
          component: Setting
        },
        {
          path: 'Comments',
          name: 'Comments',
          component: Comments
        },

      ]
    }
  ],
  linkActiveClass: "active-color",
  linkExactActiveClass: "exact-active",


})

export default router
