<template>
  <div id="container">
    <!-- mobile nav -->

    <!-- sidebar -->
    <aside id="mySidebar" v-bind:class="[isActive ? 'block' : 'none']">
      <div class="sidebar">
        <div class="bar-close flex">
          <!-- LOGO -->
          <router-link to="/">
            <div class="logo">GoBlog+</div>
          </router-link>
          <!-- icone close -->
          <button @click="w3_close()" class="w3-bar-item"><span class="material-symbols-outlined">
              close
            </span>
          </button>
        </div>
        <!-- sidebar -->
        <div class="menu-aside">
          <router-link to="/Dashboard" class="button" @click="w3_close()">
            <span class="material-symbols-outlined"> widgets </span>
            <p>Dashboard</p>
          </router-link>
          <router-link to="/Dashboard/Report" class="button">
            <span class="material-symbols-outlined"> monitoring </span>
            <p> Annual report</p>
          </router-link>
          <router-link to="/Dashboard/Posts" class="button">
            <span class="material-symbols-outlined"> report </span>
            <p>Posts</p>
          </router-link>
          <router-link to="/Dashboard/Comments" class="button">
            <span class="material-symbols-outlined com"> chat </span>
            <p>Comments</p>
          </router-link>
          <!-- <router-link to="/Dashboard/Likes" class="button">
            <span class="material-symbols-outlined fav"> favorite </span>
            <p>Likes</p>
          </router-link> -->

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
            <p>Add Story</p>
          </router-link>
          <router-link to="/Dashboard/Setting" class="button">
            <span class="material-symbols-outlined"> settings </span>
            <p>Settings</p>
          </router-link>

        </div>
      </div>
    </aside>
    <!-- end side bar -->
    <!-- content page -->


    <section>
      <!-- header -->

      <div class="top-header flex">

        <div class="welcon-text flex items-center">
          <span class="material-symbols-outlined" @click="w3_open()">
            menu
          </span>
          <h1>Hi SAURELLE WHAT'S UP</h1>
        </div>
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
      </div>
      <!-- contain -->
      <div class="row flex">
        <div class="col-1">
          <!-- show all the content of dashboard -->
          <div class="all-content">
            <!-- v-for="story of stories" @click=sliderIndicator() :key=story?.id" -->
            <router-view />
          </div>
        </div>
        <div class="col-2">
          <!-- recent comment -->
          <div class="recent-post">
            <h1>Recent Comment</h1>
            <div class="card">
              <div class="post-comment">
                <div class="profile-pic"><img src="../../assets/hero.png" alt="">name of the person</div>
                <p class="title"> <a href="">Thanks for publishing this post</a> </p>
              </div>
            </div>
            <div class="card">
              <div class="post-comment">
                <div class="profile-pic"><img src="../../assets/hero.png" alt="">name of the person</div>
                <p class="title"> <a href="">Thanks for publishingthis post</a> </p>
              </div>
            </div>
            <div class="card">
              <div class="post-comment">
                <div class="profile-pic"><img src="../../assets/hero.png" alt="">name of the person</div>
                <p class="title"> <a href="">Thanks for publishing this post</a> </p>
              </div>
            </div>
          </div>
          <!-- social media -->
          <div class="social-media">
            <h1>Top social Media Shared</h1>
            <div class="face book">
              <div class="icon flex">
                <span><i class="fab fa-facebook-f"></i></span>
                <span>Facebook</span>
              </div>
              <span>90k</span>
            </div>
            <div class="what face">
              <div class="icon flex">
                <span><i class="fa fa-whatsapp"></i></span>
                <span>Google</span>
              </div>
              <span>90k</span>
            </div>
            <div class="Link face">
              <div class="icon flex">
                <span><i class="fab fa-linkedin-in"></i></span>
                <span>linkedin</span>
              </div>
              <span>90k</span>
            </div>
            <div class="twit face">
              <div class="icon flex">
                <span><i class="fa fa-twitter"></i></span>
                <span>twiter</span>
              </div>
              <span>90k</span>
            </div>
            <div class="tele face">
              <div class="icon flex">
                <span><i class="fa fa-telegram"></i></span>
                <span>telegram</span>
              </div>
              <span>90k</span>
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
  /* align-items: center; */
  position: absolute;
  background: #EFEFEF;
}

/* top headeer */
.top-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 60px;
  background-color: #fff;
  align-items: center;
  padding: 0.6rem 0.7rem;
  top: 0;
  position: fixed;
  margin-bottom: 2rem;
}

.top-header .welcon-text h1 {
  margin-left: 5px;
  font-size: 15px;
  font-weight: bold;
}

.top-header .welcon-text span {
  color: #05ab9f;
  cursor: pointer;
}

.top-header .head {
  display: flex;
  padding: 5px;
  background: #fff;
  border-radius: 10px;
  margin-right: 10px;
  position: fixed;
  right: 0;
}


.top-header .head .head-rigth {
  justify-content: space-between;
  align-items: center;

}

.head-left {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.head-left span {
  color: #333;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  margin: 2px;
  border-radius: 20px;
  cursor: pointer;
}

/* sidebar */
aside {
  top: 0;
  height: 100vh;
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

aside .w3-bar-item span {
  color: #05ab9f;
  margin-top: 20px;

}

aside .sidebar {
  height: 100%;
  position: fixed;
  width: 15%;
  box-shadow: 0 0px 15px 0px rgb(0 0 0 / 15%);
  z-index: 900;
  background: #fff;
  top: 0;
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
  padding: 2px 0;
  margin: 2px auto;
  /* background: none; */
  border-radius: 5px;
  font-weight: bold;

}

.button:hover {
  background-color: teal;
}



.exact-active {
  color: #42b983;
  font-weight: bold;
  background: teal;
}

.exact-active span {
  color: #42b983;
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
}

/* section */
section .row .col-1 {
  width: 70%;
}

section .row .col-1 .all-content {
  /* margin-top: 2rem; */
  width: 100%;
  margin: 0 auto;
  
}

section .row {
  display: flex;
  margin-top: 5rem;
  padding: 20px 20px 0;
}

/* col rigth */
section .row .col-2 {
  width: 30%;
}

/* .recent-post */


.social-media,
.recent-post .card,
.recent-post {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  padding: 5px;
  background: #fff;
  border-radius: 10px;


}

.recent-post .card .post-comment a {
  color: rgb(80, 80, 80);
}

.profile-pic {
  color: orangered;
}

/* social*/
.social-media,
.recent-post {
  box-shadow: 8px 8px 16px #3232321a;
}

/* {
  padding: 15px 25px;
  background: #E7E9FF;
  box-shadow: 8px 8px 16px #3232321a;
  width: 90%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
} */

/* {
  margin-bottom: 3rem;
  margin-top: 1rem;
  font-size: 20px;
  font-weight: 400;
  font-weight: bold;
  text-align: center;
} */

.face,
.icon {
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin: 5px;
  font-weight: lighter;
  padding: 5px;
}

.icon i {
  padding: 10px;
  font-size: 12px;
  color: brown;
  background-color: rgb(233, 225, 225);
  margin-right: 10px;
  border-radius: 10px;
}

.book i {
  color: blue;
  background-color: rgb(167, 149, 248);
}

.what i {
  color: green;
  background-color: rgb(222, 238, 222);
}

.Link i {
  color: blue;
  background-color: rgb(167, 149, 248);
}

.twit i {
  color: aqua;
  background-color: rgb(218, 247, 247);
}

.tele i {
  color: rgb(92, 255, 71);
  background-color: rgb(247, 229, 225);
}

/* table style */
.table-wrapper {
  width: 100%;
}

/* Notifications */
.notif {
  margin-right: 10px;
  cursor: pointer;
}

.notification {
  display: inline-block;
  position: relative;
  padding: 0.2em;
  color: #333;
  border-radius: 0.2em;
  font-size: 1.3em;
}

.notification::before,
.notification::after {
  color: #333;
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
  background: #333;
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


/* media querry */
@media (max-width: 958px) {

  /* aside respon */
  .block {
    display: block;
  }

  .none {
    display: none;
  }

  /* aside */

  aside .bar-close {
    align-items: center;
    width: 90%;
    justify-content: space-between;
    margin: 0 auto;
  }

  aside {
    position: absolute;
  }

  aside .w3-bar-item {
    display: block;
  }

  aside .sidebar {
    width: 200px;
  }

  .col-2 {
    display: none;
  }

  section {
    position: relative;
    width: 100%;
  }

  section .row .col-1 {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 768px) {









  /* section */

  .top-header {
    width: 100%;

  }


}
</style>