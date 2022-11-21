import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/task/home.vue'
import Signup from '../components/auth/Signup.vue'
import Dashboard from '../components/task/Dashboard.vue'
import addStorie from '../components/task/addStorie.vue'
import Storie from '../components/task/Storie.vue'
import ProfileIcon from '../components/task/ProfileIcon.vue'
import Login from '../components/auth/Login.vue'
import Pages from '../components/task/Pages.vue'
import Posts from '../components/task/Posts.vue'
import Report from '../components/task/Report.vue'
import Setting from '../components/task/Setting.vue'
import User from '../components/task/User.vue'
import Lastpost from '../components/task/Lastpost.vue'
import Comments from '../components/task/Comments.vue'
import Profile from '../components/auth/Profile.vue'
import viewPost from '../components/task/viewPost.vue'
import addComment from '../components/task/addComment.vue'
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
      path: '/addComment',
      component: addComment
    },
    {
      path: '/ProfileIcon',
      name: 'ProfileIcon',
      component: ProfileIcon
    },
    {
      path: '/Lastpost',
      name: 'Lastpost',
      component: Lastpost
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    // {
    //   path: '/PostLayout',
    //   name: '',
    //   component: PostLayout
    // },
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
          alias: 'Posts',
          name: 'Posts',
          component: Posts
        },
        {
          path: 'Posts-detail/:id',
          name: 'Posts-details',
          component: () => import("./../components/task/PostLayout.vue")
        },
        {
          path: 'User',
          name: 'User',
          component: User
        },
        {
          path: 'viewPost/:id',
          name: 'viewPost',
          component: viewPost
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
router.beforeEach((to, from, next) => {
  const loggedIn = JSON.parse(window.localStorage.getItem("login")) || false;
  if (to.name === "addStorie" && !loggedIn){
      next({name: "Login"});
  } else if ((to.name === "Login" || to.name === "signup") && loggedIn) {
      next({name: "home"})
  } else {
      next();
  }
});

export default router
