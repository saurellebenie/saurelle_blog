<template>
    <div id="container">
        <!-- mobile nav -->
        <nav class="mobile-nav">
            <div class="search"><span class="material-symbols-outlined">search</span><input type="text" name="" id=""
                    placeholder="search"></div>
            <router-link to="/Dashboard/Notification">
                <span class="material-symbols-outlined">
                    notifications
                </span>
            </router-link>
        </nav>
        <!-- end mobile nav -->
        <!-- sidebar -->
        <aside id="mySidebar" v-bind:class="[isActive ? 'block' : 'none']">
            <div class="sidebar">
                <div class="bar-close">
                    <!-- LOGO -->
                    <router-link to="/">
                        <div class="logo"> GoBlog</div>
                    </router-link>
                    <!-- icone close -->
                    <button @click="w3_close()" class="w3-bar-item"> &times;</button>
                </div>
                <!-- sidebar -->
                <div class="menu-aside">
                    <router-link to="/Dashboard" class="button" @click="w3_close()">
                        <span class="material-symbols-outlined">
                            other_houses
                        </span>
                        <p>Dashboard</p>
                    </router-link>
                    <router-link to="/Dashboard/Notification" class="button">
                        <span class="material-symbols-outlined">
                            notifications
                        </span>
                        <p> Category</p>
                    </router-link>
                    <router-link to="/Dashboard/addStorie" class="button">
                        <span class="material-symbols-outlined">
                            edit_square
                        </span>
                        <p>Posts</p>
                    </router-link>

                    <router-link to="/Dashboard/addStorie" class="button">
                        <span class="material-symbols-outlined">
                            article
                        </span>
                        <p>Tags</p>
                    </router-link>
                    <router-link to="/Dashboard/addStorie" class="button">
                        <span class="material-symbols-outlined">
                            logout
                        </span>
                        <p>Users</p>
                    </router-link>

                </div>


            </div>
        </aside>
        <!-- end side bar -->
        <!-- content page -->
        <section>
            <div class="row">
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
                            <button class="w3-xlarge" @click="w3_open()"><span class="material-symbols-outlined">
                                    menu
                                </span></button>
                        </div>
                        <div class="head-right flex">
                            <div class="notif">
                                <div class="notification"></div>
                            </div>
                            <profile />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
// import Storie from './Storie.vue'
import { ref } from 'vue';
import Profile from './Profile.vue';
export default {
    //   components: { Storie },
    setup() {
        const selected = ref(0); // index of the selected el
        const changeSelected = (i) => { selected.value = i; };
        return {
            selected,
        };
    },
    data() {
        return {
            myStyle: {
                backgroundColor: "#333"
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
        sliderIndicator() {
        },
        w3_open() {
            this.isActive = true;
        },
        w3_close() {
            this.isActive = !this.isActive;
        }
    },
    mounted() {
        this.username = localStorage.getItem("username");
    },
    components: { Profile }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css');

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
    width: 100%;
    display: flex;
    align-items: center;
    height: auto;
    color: #333;
    padding: 5px 0;
    /* background: none; */
    margin-top: 5px;
    font-weight: bold;
}

aside .button:hover {
    /* background-position: right; */
    background: linear-gradient(to right, pink 0%, blue 47%, rgb(160, 160, 238) 47%, rgb(176, 176, 247) 50%, #333FFF 50%, #FFFFFF 100%);
    background-size: 200%;
    background-position: left;
    transition: 5s ease-out;
    width: 100%;
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

section .row .head {
    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
}

section .row .head .head-rigth {
    justify-content: space-between;
}

.head-left button span {
    color: #b4b2b2;
}

/* Notifications */
.notif {
    margin-right: 20px;
}

.notification {
    display: inline-block;
    position: relative;
    padding: 0.2em;
    /* background: blue; */
    border-radius: 0.2em;
    font-size: 1.3em;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.notification::before,
.notification::after {
    color: #b4b2b2;
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

section .row .col-1 .all-content {
    margin-top: 2rem;
    width: 90%;
    margin: 0 auto;
}

section .row {
    display: flex;
    height: 100vh;
    /* padding: 1rem; */
    justify-content: space-between;
}


/* media queries */
@media screen and (max-width: 800px) {}

@media screen and (max-width: 800px) {
    #container {
        /* display: flex; */
        align-items: center;
    }


    aside .sidebar {
        /* position: relative; */
        width: 100%;
        position: relative;
    }

    /* sidebar toglle class */
    .none {
        display: none;
    }

    .block {
        display: block;
    }

    aside .sidebar .bar-close {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
    }

    aside .sidebar .bar-close .logo {
        padding: 0;
    }

    aside .w3-bar-item {
        display: block;
        padding: 0;
        border: none;
        font-size: 50px;
        cursor: pointer;
        background: none;
        color: #b4b2b2;
    }

    aside .w3-bar-item:hover {
        color: teal;
    }

    aside {
        box-shadow: none;
        min-height: 0;
        background: #333;
        z-index: 999;
        left: 0;
        /* display: none; */
        width: 30%;
        display: none;
        position: absolute;
    }

    /* section */
    section {
        /* position: absolute; */
        width: 100%;
        display: block;
        height: auto;
    }

    section .row .col-1 {
        width: 60%;
        margin: 0;
        height: auto;

    }

    section .row .col-2 {
        width: 40%;
    }

}

@media screen and (max-width: 400px) {
    #container {
        display: block;
        align-items: center;
    }

    .mobile-nav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 80px;
        box-shadow: var(--line-border);
        position: fixed;
        align-items: center;
        background: #333;
        background-attachment: fixed;
        padding: 20px;
        z-index: 999;
        margin-top: 4rem;
    }

    .mobile-nav span {
        color: #000;
    }

    /* aside */
    aside {
        width: 70%;
        height: 100%;
        position: fixed;
    }

    /* section */

    section .row .col-2 {
        display: none;
    }

    section .row .col-1 {
        width: 100%;
    }

    section .row .col-1 .head {
        margin: 0 auto;
        /*  */
        width: 90%;

    }

}
</style>