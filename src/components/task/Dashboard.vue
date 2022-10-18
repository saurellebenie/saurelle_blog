<template>
  <div id="container">
    <!-- mobile nav -->
    <nav class="mobile-nav">
      <div class="search">
        <span class="material-symbols-outlined">search</span><input type="text" name="" id="" placeholder="search" />
      </div>
      <router-link to="/Dashboard/Notification">
        <span class="material-symbols-outlined"> notifications </span>
      </router-link>
    </nav>
    <!-- end mobile nav -->
    <!-- sidebar -->
    <aside id="mySidebar" v-bind:class="[isActive ? 'block' : 'none']">
      <div class="sidebar">
        <div class="bar-close">
          <!-- LOGO -->
          <router-link to="/">
            <div class="logo">GoBlog</div>
          </router-link>
          <!-- icone close -->
          <button @click="w3_close()" class="w3-bar-item">&times;</button>
        </div>
        <!-- sidebar -->
        <div class="menu-aside">
          <router-link to="/Dashboard" class="button active-color" @click="w3_close()">
            <span class="material-symbols-outlined"> widgets </span>
            <p>Dashboard</p>
          </router-link>
          <router-link to="/Dashboard/Report" class="button">
            <span class="material-symbols-outlined"> report </span>
            <p>Report annual</p>
          </router-link>
          <router-link to="/Dashboard/Posts" class="button">
            <span class="material-symbols-outlined"> monitoring </span>
            <p>Posts</p>
          </router-link>

          <router-link to="/Dashboard/Pages" class="button">
            <span class="material-symbols-outlined"> article </span>
            <p>Pages</p>
          </router-link>
          <router-link to="/Dashboard/User" class="button">
            <span class="material-symbols-outlined"> account_circle </span>
            <p>Users</p>
          </router-link>
          <router-link to="/Dashboard/addStorie" class="button">
            <span class="material-symbols-outlined"> edit_document </span>
            <p>Add Storie</p>
          </router-link>
          <router-link to="/Dashboard/Setting" class="button">
            <span class="material-symbols-outlined"> settings </span>
            <p>Setting</p>
          </router-link>

        </div>
      </div>
    </aside>
    <!-- end side bar -->
    <!-- content page -->
    <section>
      <div class="row flex">
        <div class="col-1">
          <!-- show all the content of dashboard -->
          <div class="all-content">
            <!-- v-for="story of stories" @click=sliderIndicator() :key=story?.id" -->
            <router-view />
          </div>
        </div>
        <div class="col-2">
          <div class="head">
            <div class="head-left">
              <div class="notif">
                <div class="notification"></div>
              </div>
              <span class="material-symbols-outlined">
                mail
              </span>
            </div>
            <div class="head-right flex">

              <profile />
            </div>
          </div>
          <div class="recent-post">
            <h1>Recent posts</h1>
            <div class="card">
              <div class="post-comment">
                <div class="profile-pic"><img src="../../assets/hero.png" alt="">name of the person</div>
                <p class="title"> <a href="">Client-Side vs. Server-Side Routing</a> </p>
                <div class="date">{{ date }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
// import Storie from './Storie.vue'
import { ref } from "vue";
import Profile from "./Profile.vue";
export default {
  //   components: { Storie },
  setup() {
    const selected = ref(0); // index of the selected el
    const changeSelected = (i) => {
      selected.value = i;
    };
    return {
      selected,
    };
  },
  data() {
    return {
      myStyle: {
        backgroundColor: "#333",
      },
      date: new Date().toLocaleString(),
      username: "",
      isActive: true,
    };
  },
  methods: {
    //     const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
    //     const ToggleMenu = () => {
    //         is_expanded.value = !is_expanded.value
    //         localStorage.setItem("is_expanded", is_expanded.value)
    //     }
    // this.username = localStorage.getItem("username", username);
    sliderIndicator() { },
    w3_open() {
      this.isActive = true;
    },
    w3_close() {
      this.isActive = !this.isActive;
    },
  },
  mounted() {
    this.username = localStorage.getItem("username");
  },
  components: { Profile },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css");

#container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
}

.mobile-nav {
  display: none;
}

aside {
  min-height: 100vh;
  width: 15%;
  display: block;
  position: relative;
}

aside .menu-aside {
  margin-top: 3rem;
  /* align-items: center; */
}

aside .w3-bar-item {
  display: none;
}

aside .sidebar {
  min-height: 100vh;
  position: fixed;
  width: 15%;
  box-shadow: 0 0px 15px 0px rgb(0 0 0 / 15%);
  z-index: 900;
  background: #fff;
}

aside .menu-aside.selected {
  color: #4bcffa;
}

aside .menu-aside .button span,
aside .menu-aside-footer .button span {
  color: #333;
  margin: 10px;
}

.button {
  width: 90%;
  display: flex;
  align-items: center;
  height: auto;
  color: #333;
  padding: 5px 0;
  margin: 0 auto;
  /* background: none; */
  border-radius: 10px;

  font-weight: bold;
}

.active-color {
  background: teal;
}

.exact-active-link {
  color: #42b983;
  font-weight: bold;
}

aside .menu-aside-footer .button {
  bottom: 0px;
  position: absolute;
}

aside .logo {
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  padding-top: 1.5rem;
  color: #333;
}

section {
  width: 85%;
  background-color: rgb(236, 236, 241);
}

/* section */
section .row .col-1 {
  width: 70%;
}

section .row .col-1 .all-content {
  margin-top: 2rem;
  width: 90%;
  margin: 0 auto;
}

section .row {
  display: flex;
  height: 100vh;
  /* padding: 1rem; */
  /* justify-content: space-between; */
}

/* col rigth */
section .row .col-2 {
  width: 30%;
}

.recent-post,
section .row .head {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  padding: 5px;
  background: #fff;
  border-radius: 20px;
}
.recent-post .card{
  width: 100%;
}

section .row .head {
  justify-content: space-between;
  display: flex;
}


section .row .head .head-rigth {
  justify-content: space-between;
  align-items: center;
}

.head-left {
  display: flex;
  align-items: center;
}

.head-left span {
  color: blue;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  margin: 2px;
  border-radius: 20px;
}

/* Notifications */
.notif {
  margin-right: 5px;
}

.notification {
  display: inline-block;
  position: relative;
  padding: 0.2em;
  color: blue;
  border-radius: 0.2em;
  font-size: 1.3em;
}

.notification::before,
.notification::after {
  color: blue;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.notification::before {
  display: block;
  content: "\f0f3";
  font-family: "FontAwesome";
  transform-origin: top center;
}

.notification::after {
  font-family: Arial;
  font-size: 0.7em;
  font-weight: 700;
  position: absolute;
  top: -15px;
  right: -15px;
  padding: 5px 8px;
  line-height: 100%;
  border: 2px #333 solid;
  border-radius: 60px;
  background: blue;
  opacity: 0;
  content: attr(data-count);
  opacity: 0;
  transform: scale(0.5);
  transition: transform, opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}

.notification.notify::before {
  animation: ring 1.5s ease;
}

.notification.show-count::after {
  transform: scale(1);
  opacity: 1;
}

@keyframes ring {
  0% {
    transform: rotate(35deg);
  }

  12.5% {
    transform: rotate(-30deg);
  }

  25% {
    transform: rotate(25deg);
  }

  37.5% {
    transform: rotate(-20deg);
  }

  50% {
    transform: rotate(15deg);
  }

  62.5% {
    transform: rotate(-10deg);
  }

  75% {
    transform: rotate(5deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>