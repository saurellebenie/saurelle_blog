<template>
    <div id="container">
        <nav class="mobile-nav">
            <router-link to="/">
                <div class="logo"><img src="../assets/logo.png" alt=""></div>
            </router-link>
            <div class="search"><span class="material-symbols-outlined">search</span><input type="text" name="" id=""
                    placeholder="search"></div>
            <router-link to="/Dashboard/Storie" class="button">
                <span class="material-symbols-outlined">
                    notifications
                </span>
            </router-link>
        </nav>
        <aside>
            <div class="sidebar">
                <!-- LOGO -->
                <router-link to="/">
                    <div class="logo"><img src="../assets/logo.png" alt=""></div>
                </router-link>
                <!-- sidebar -->
                <div class="menu-aside">
                    <router-link to="/Dashboard/Storie" class="button">
                        <span class="material-symbols-outlined">
                            other_houses
                        </span>
                    </router-link>
                    <router-link to="/Dashboard/Storie" class="button">
                        <span class="material-symbols-outlined">
                            notifications
                        </span>
                    </router-link>
                    <router-link to="/Dashboard/addStorie" class="button">
                        <span class="material-symbols-outlined">
                            edit_square
                        </span>
                    </router-link>

                </div>

                <div class="flex"></div>

                <div class="menu-aside-2">
                    <router-link to="/Dashboard/addStorie" class="button">
                        <span class="material-symbols-outlined">
                            article
                        </span>
                    </router-link>
                </div>

                <div class="menu-aside-footer">
                    <router-link to="/Dashboard/Storie" class="button">
                        <div class="profile-pic"><img src="../assets/hero.png" alt=""></div>
                    </router-link>
                    <p>{{ username }}</p>
                </div>
            </div>
        </aside>
        <section>

            <div class="row">
                <div class="col-1">
                    <div class="head">
                        <router-link to="/Dashboard/addStorie" class="active"><span>New Post</span></router-link>
                    </div>
                    <div>
                        <!-- v-for="story of stories" :key=story?.id" -->
                        <RouterView />
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
        </section>
    </div>
</template>


<script>
export default {
    data() {
        return {
            myStyle: {
                backgroundColor: "#fff"
            },
            date: Date.now(),
            username: "",
        }
    },
    // methods() {
    //     const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

    //     const ToggleMenu = () => {
    //         is_expanded.value = !is_expanded.value
    //         localStorage.setItem("is_expanded", is_expanded.value)
    //     }
    //     this.username = localStorage.getItem("username", username);

    // }
}
</script>

<style scoped>
#container {
    width: 100%;
}
.mobile-nav {
    display: none;
}

aside {
    min-height: 100vh;
    width: 100px;
    box-shadow: 0 0px 2px 0px rgb(0 0 0 / 15%);
    display: block;
    position: fixed;
    position: relative;
}

aside .flex {
    box-shadow: 0 2px 2px -2px rgba(7, 7, 7, 0.15);
    width: 50px;
    content: "";
    padding: 5px;
    margin: 0 auto;
    align-items: center;
}

aside .menu-aside,
aside .menu-aside-2,
aside .menu-aside-footer {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    align-items: center;
}

aside .menu-aside .button,
aside .menu-aside-2 .button,
aside .menu-aside-footer .button {
    padding-top: 20px;
    color: hsl(218, 23%, 23%);
}

aside .button:hover {
    color: hsl(215, 20%, 81%);
}

aside .menu-aside-footer {
    margin-top: 6rem;
}

aside .logo {
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    padding-top: 1.5rem;
}

#container {
    display: flex;
    position: relative;
    width: 100%;
    justify-content: space-between;
}

/* section */
section {
    position: relative;
    width: 100%;
    /* margin-left: 8rem; */
}

section .head {
    height: 60px;
    content: "";
    box-shadow: 0 2px 2px -2px rgba(7, 7, 7, 0.15);
    margin: 0 auto;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
}

section .head span {
    color: hsl(218, 23%, 23%);
}

section .head span:hover {
    color: rgba(102, 101, 101, 0.15);
}

section .head .plus {
    margin-right: 2rem;
}

section .head .active {
    font-weight: bolder;
}

section .head .plus:hover {
    background-color: rgba(221, 217, 217, 0.15);
    border-radius: 50%;
}

section .row .col-1 {
    width: 60%;
    margin-left: 8rem;
}

section .row {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    /* background-color: rgba(177, 172, 172, 0.97); */
}

section .row .col-1 .card {
    /* padding: 2rem; */
    display: flex;
    align-items: center;
    height: 100px;
    justify-content: space-between;
}

@media screen and (max-width: 700px) {
    #container {
        display: block;
        position: relative;
    }

    .mobile-nav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 80px;
        box-shadow: var(--line-border);
        position: sticky;
        top: 2px;
        align-items: center;
        /* background: #000; */
        background-attachment: fixed;
        padding: 20px;
        
    }

    aside {
        width: 100%;
        position: fixed;
        top: 540px;
        box-shadow: none;
        min-height: 0;
        /* background: #000; */
    }

    aside .logo {
        display: none;
    }

    aside .sidebar {
        width: 90%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        
        display: relative;
        background-attachment: fixed;

    }

    aside .menu-aside-2 {
        display: none;
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
    }

    /* section */
    section {
        /* position: absolute; */
        width: 100%;
        display: block;
        height: auto;
    }

 

    section .row .col-1 {
        width: 100%;
        margin: 0;
        
    }


}
</style>