<template>
    <div class="nav">
        <nav class="nav-bar">
            <!-- LOGO -->
            <div class="logo"> Swdb <img src="../assets/logo.png" alt=""></div>
            <!-- NAVIGATION MENU -->
            <ul class="nav_links">
                <!-- NAVIGATION MENUS -->
                <div class="menu_profile">
                    <li><span class="material-symbols-outlined">
                            notifications
                        </span></li>
                    <li>
                        <div class="search"><span class="material-symbols-outlined">search</span><input type="text"
                                name="" id="" placeholder="search"></div>
                    </li>
                    <div class="profile-pic"><img src="../assets/hero.png" alt=""></div>
                </div>
            </ul>
        </nav>
    </div>
    <div class="container_profile">
        <div class="col_left">
            <h2>Sitting</h2>
            <ul>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
        <div class="col_right">
            <div id="about">
                <h2>About you</h2>
                <div class="detail">
                    <div>
                        <h4>Name</h4>
                        <span>{{ username }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {

    },
    data() {
        return {
            username: ''
        }
    },
    methods() {
        this.username = localStorage.getItem("username", username);
    },
}
</script>
<style scoped>
.container_profile,
.nav-bar {
    width: 80%;
    margin: 0 auto;
}
.menu_profile,
.nav-bar,
.container_profile {
    
    display: flex;
    align-items: center;
    justify-content: space-between;
}


.container_profile .col_left {
    width: 20%;
}

.container_profile .col_right {
    width: 70%;
}

@media screen and (max-width: 700px) {
    .container_profile .col_left {
        display: none;
    }

}
</style>