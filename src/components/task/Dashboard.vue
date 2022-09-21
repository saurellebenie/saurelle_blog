<template>
    <div id="container">
        <!-- mobile nav -->
        <nav class="mobile-nav">
            <router-link to="/">
                <div class="logo"><img src="../../assets/logo.png" alt=""></div>
            </router-link>
            <div class="search"><span class="material-symbols-outlined">search</span><input type="text" name="" id=""
                    placeholder="search"></div>
            <router-link to="/Dashboard/Storie">
                <span class="material-symbols-outlined">
                    notifications
                </span>
            </router-link>
        </nav>
        <!-- end mobile nav -->
        <!-- sidebar -->
        <aside id="mySidebar">
            <div class="sidebar">
                <button @click="w3_close()" class="w3-bar-item w3-large"> &times;</button>
                <!-- LOGO -->
                <router-link to="/">
                    <div class="logo"><img src="../../assets/logo.png" alt=""></div>
                </router-link>
                <!-- sidebar -->
                <div class="menu-aside">
                    <router-link @click=sliderIndicator() :class="active" to="/Dashboard" class="button">
                        <span class="material-symbols-outlined">
                            other_houses
                        </span>
                        <p>Dashboard</p>
                    </router-link>
                    <router-link @click=sliderIndicator() :class="active" to="/Dashboard/Notification" class="button">
                        <span class="material-symbols-outlined">
                            notifications
                        </span>
                        <p> Notification</p>
                    </router-link>
                    <router-link @click=sliderIndicator() :class="active" to="/Dashboard/addStorie" class="button">
                        <span class="material-symbols-outlined">
                            edit_square
                        </span>
                        <p>Whrite</p>
                    </router-link>

                    <router-link @click=sliderIndicator() :class="active" to="/Dashboard/addStorie" class="button">
                        <span class="material-symbols-outlined">
                            article
                        </span>
                        <p>Storie</p>
                    </router-link>

                </div>


                <div class="menu-aside-footer">
                    <router-link @click=sliderIndicator() :class="active" to="/Dashboard/addStorie" class="button">
                        <span class="material-symbols-outlined">
                            logout
                        </span>
                        <p>logout</p>
                    </router-link>
                </div>


            </div>
        </aside>
        <!-- end side bar -->
        <!-- content page -->
        <section>

            <div class="row">
                <div class="col-1">
                    <div class="head">

                        <div class="head-left">
                            <button class="w3-xlarge" @click="w3_open()">&#x39E;</button>
                            <p>Hi {{username}},</p>
                            <h3>Welcom </h3>
                        </div>
                        <div class="head-right">
                            <!-- langage option -->
                            <div class="lang-menu">
                                <div class="selected-lang">
                                    English
                                </div>
                                <ul>

                                    <li>
                                        <a href="" class="en">English</a>
                                    </li>
                                    <li>
                                        <a href="" class="fr">French</a>
                                    </li>

                                </ul>

                            </div>
                            <!-- end -->
                            <div>
                                <router-link to="/Dashboard/Profile">
                                    <div class="profile-pic"><img src="../../assets/hero.png" alt=""></div>
                                </router-link>
                            </div>
                        </div>

                    </div>
                    <!-- show all the content of dashboard -->
                    <div class="all-content">
                        <!-- v-for="story of stories" @click=sliderIndicator() :key=story?.id" -->
                        <router-view />
                    </div>
                </div>
                <div class="col-2">
                    <div class="content">
                        <div class="search"><span class="material-symbols-outlined">search</span><input type="text"
                                name="" id="" placeholder="search">
                        </div>

                        <h4>Recommended topics</h4>
                        <div class="wrapper">

                            <button class="hashtag"> <a href="#">mongodb</a> </button>
                            <button class="hashtag"> <a href="#">nodejs</a></button>
                            <button class="hashtag"> <a href="#">vuejs</a></button>
                            <button class="hashtag"> <a href="#">mobility</a></button>
                            <button class="hashtag"> <a href="#">javascript</a></button>
                            <button class="hashtag"> <a href="#">mysql</a></button>
                            <button class="hashtag"> <a href="#">htlm</a></button>
                            <button class="hashtag"> <a href="#">css</a></button>

                        </div>
                        <h4>Who to follow</h4>
                        <div class="follow">
                            <div class="detail">
                                <div>
                                    <img src="../../assets/hero.png" alt="">
                                    <p>name <br>A senior webdevelopper </p>
                                </div>
                                <button class="hashtag"> <a href="#">follow</a> </button>
                            </div>
                            <div class="detail">
                                <div>
                                    <img src="../../assets/hero.png" alt="">
                                    <p>name <br>A senior webdevelopper </p>
                                </div>
                                <button class="hashtag"> <a href="#">follow</a> </button>
                            </div>
                            <div class="detail">
                                <div>
                                    <img src="../../assets/hero.png" alt="">
                                    <p>name <br>A senior webdevelopper </p>
                                </div>
                                <button class="hashtag"> <a href="#">follow</a> </button>
                            </div>
                        </div>
                        <!-- footer in right  -->
                        <div class="wrap">
                            <span> <a href="#">Help</a></span>
                            <span> <a href="#">Status</a></span>
                            <span> <a href="#">About</a></span>
                            <span> <a href="#">Blog</a></span>
                            <span> <a href="#">Carreers</a></span>
                            <span> <a href="#">Privacy</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
// import Storie from './Storie.vue'
export default {
    //   components: { Storie },
    data() {
        return {
            myStyle: {
                backgroundColor: "#fff"
            },
            date: Date.now(),
            username: "",
            active: "",
        }
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
            document.getElementById("mySidebar").style.display = "block";
        },
        w3_close() {
            document.getElementById("mySidebar").style.display = "none";
        }

    },
    mounted() {
        this.username = localStorage.getItem("username");
    },
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

aside .sidebar {
    min-height: 100vh;
    position: fixed;
    width: 15%;
    box-shadow: 0 0px 15px 0px rgb(0 0 0 / 15%);
    z-index: 900;
}

aside .menu-aside.active {
    color: var(--active-color);
    background-color: var(--active-background-color);
}

aside .menu-aside .button span,
aside .menu-aside-footer .button span {
    color: #000;
    margin: 10px;
}

.button {
    background-color: rgb(238, 37, 37);
    width: 100%;
    display: flex;
    align-items: center;
    height: auto;
    color: #000;
    padding: 5px 0;
}

aside .button:hover {
    background-color: hsl(215, 20%, 81%);
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
}

aside .w3-bar-item {
    float: right;
    margin-top: 10px;
    padding: 5px;
    background: none;
    border: none;
    font-size: 3rem;
    display: none;
    cursor: pointer;
}


/* section */
section {
    width: 85%;
}

.search {
    display: flex;
    align-items: center;
    border: 1px solid rgba(230, 230, 230, 1);
    margin: 0 auto;
}

section .head {
    height: 60px;
    box-shadow: 0 2px 2px -2px rgba(7, 7, 7, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    z-index: 900;
    /* top: 0; */
    position: fixed;
    background-color: #fff;
}

section .head .head-left,
section .head .head-right {
    display: flex;
    align-items: center;
}

section .head .head-left button {
    /* margin-top: 10px; */
    /* padding: 5px; */
    background: none;
    border: none;
    font-size: 2rem;
    margin-right: 10px;
    cursor: pointer;
}

/* switch language */
.lang-menu {
    width: 100px;
    text-align: right;
    font-weight: bold;
    margin-top: 25px;
    position: relative;
}

.lang-menu .selected-lang {
    display: flex;
    justify-content: space-between;
    line-height: 2;
    cursor: pointer;
}

.lang-menu .selected-lang:before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 32px;
    background-image: url(https://www.countryflags.io/us/flat/32.png);
    background-size: contain;
    background-repeat: no-repeat;
}

.lang-menu ul {
    margin: 0;
    padding: 0;
    display: none;
    background-color: #fff;
    border: 1px solid #f8f8f8;
    position: absolute;
    top: 45px;
    right: 0px;
    width: 125px;
    border-radius: 5px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
}


.lang-menu ul li {
    list-style: none;
    text-align: left;
    display: flex;
    justify-content: space-between;
}

.lang-menu ul li a {
    text-decoration: none;
    width: 125px;
    padding: 5px 10px;
    display: block;
}

.lang-menu ul li:hover {
    background-color: #f2f2f2;
}

.lang-menu ul li a:before {
    content: '';
    display: inline-block;
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-right: 10px;
    background-size: contain;
    background-repeat: no-repeat;
}

.de:before {
    background-image: url(https://www.countryflags.io/de/flat/32.png);
}

.en:before {
    background-image: url(https://www.countryflags.io/us/flat/32.png);
}

.fr:before {
    background-image: url(https://www.countryflags.io/fr/flat/32.png);
}




.lang-menu:hover ul {
    display: block;
}

section .head p {
    color: tomato;
    font-weight: lighter;
}

section .head span {
    color: hsl(218, 23%, 23%);
}

section .head span:hover {
    color: rgba(102, 101, 101, 0.15);
}


section .row .col-1 {
    width: 70%;

}

section .row .col-1 .all-content {
    margin-top: 4rem;
}

section .row {
    display: flex;
    height: 100vh;
    justify-content: space-between;
    margin: auto;
    padding: 2rem;
}

section .row .col-2 {
    width: 25%;
    height: 100%;
    position: sticky;
    right: 0;
    padding: 2px;
    margin-top: 2rem;
}

section .row .col-2 .content {
    width: 90%;
    margin: 0 auto;
}

section .row .col-2 .wrapper,
section .row .col-2 .wrap {
    display: flex;
    flex-wrap: wrap;
    box-shadow: var(--line-border);
    color: var(--heat-color);
    background-color: #fff;
    border-radius: 10px;
    padding-top: 30px;
    /* align-items: center; */
}

section .row .col-2 .wrap {
    padding: 10px;
    margin: 5px;
    margin-top: 4rem;
}


section .row .col-2 h4 {
    margin-top: 3rem;
}




section .row .col-2 .follow .detail {
    margin-top: 1rem;
}

section .row .col-2 .follow .detail,
section .row .col-2 .follow .detail div {
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding: 2px;
}

section .row .col-2 .follow .detail img {
    width: 50px;
    border-radius: 50%;
}


section .row .col-2 .follow .detail .hashtag {
    background: none;
    border: 1px solid rgb(117, 117, 117);
    width: 70px;
}

section .row .col-2 .follow .detail .hashtag a {
    color: rgb(117, 117, 117);
}

/* media queries */

@media screen and (max-width: 700px) {
    #container {
        /* display: flex; */
        align-items: center;
    }

    
    aside .sidebar {
        /* position: relative; */
        width: 100%;
        position: relative;
    }

    aside .w3-bar-item {
        display: block;

    }

    aside {
        box-shadow: none;
        min-height: 0;
        background: #fff;
        z-index: 999;
        left: 0;
        /* display: none; */
        width: 30%;
        display: none;
        position: absolute;
    }

    /*

    aside .logo {
        display: none;
    }

    aside .sidebar {
        width: 90%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        display: relative;
        background-attachment: fixed;
    }

    aside .menu-aside {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 80%;

    }

    aside .menu-aside .button {
        padding-right: 20px;
    }

    aside .logo,
    aside .menu-aside,
    aside .menu-aside-2,
    aside .menu-aside-footer {
        margin: 0;
        padding: 0;
    }

    aside .flex {
        display: none;
        box-shadow: none;
    } */

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
@media screen and (max-width: 400px){
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
        position: sticky;
        top: 0px;
        align-items: center;
        background: #fff;
        background-attachment: fixed;
        padding: 20px;
        z-index: 999;

    }

    .mobile-nav span {
        color: #000;
    }

    section .row .col-2 {
        display: none;
    }
    section .row .col-1 {
        width: 100%;
    }

}
</style>