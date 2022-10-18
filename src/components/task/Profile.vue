<template>
    <div class="user-menu-wrap">

        <a class="mini-photo-wrapper" href="#" @click="showProfile()"><img src="../../assets/hero.png" alt="" width="36"
                height="36" /></a>


        <div  v-bind:class="{activeProfile : show}" class="menu-container">
            <ul class="user-menu">
                <div class="profile-highlight">
                    <div class="details">
                        <div id="profile-name">sosso</div>
                        <div id="profile-footer">Admin</div>
                    </div>
                </div>
                <li class="user-menu__item">
                    <a class="user-menu-link" href="#">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1604623/trophy.png" alt="trophy_icon"
                            width=20 height=20>
                        <div>Achievements</div>
                    </a>
                </li>
                <li class="user-menu__item">
                    <a class="user-menu-link" href="#">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1604623/team.png" alt="team_icon"
                            width=20 height=20>
                        <div>Team</div>
                    </a>
                </li>
                <li class="user-menu__item">
                    <a class="user-menu-link" href="#">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1604623/book.png" alt="team_icon"
                            width=20 height=20>
                        <div>Log History</div>
                    </a>
                </li>
                <div class="footer">
                    <li class="user-menu__item"><a class="user-menu-link" href="#" style="color: #F44336;">Logout</a>
                    </li>
                    <li class="user-menu__item"><a class="user-menu-link" href="#">Settings</a></li>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
        }
    },
    methods: {
        showProfile(){
            this.show = !this.show;
        }
    },
}
</script>

<style scoped>
body {
    background-color: #FFFFFF;
    font-family: sans-serif;
}

ul {
    list-style: none;
}

.user-menu-wrap {
    position: relative;
    width: 30px;
    /* margin: 50px auto; */
    margin-right: 10px;
    border-radius: 50px;
}

.menu-container {
    visibility: hidden;
    opacity: 0;
    right: 2rem;
}

.activeProfile {
    visibility: visible;
    opacity: 1;
    transition: all 2s ease-in-out;
}

.user-menu {
    position: absolute;
    right: -22px;
    background-color: #FFFFFF;
    width: 256px;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 10px;
    z-index: 9000;
}

.user-menu .profile-highlight {
    display: flex;
    border-bottom: 1px solid #E0E0E0;
    padding: 12px 16px;
    margin-bottom: 6px;
}

.user-menu .profile-highlight img {
    width: 48px;
    height: 48px;
    border-radius: 25px;
    object-fit: cover;
}

.user-menu .profile-highlight .details {
    display: flex;
    flex-direction: column;
    margin: auto 12px;
}

.user-menu .profile-highlight .details #profile-name {
    font-weight: 600;
    font-size: 16px;
}

.user-menu .profile-highlight .details #profile-footer {
    font-weight: 300;
    font-size: 14px;
    margin-top: 4px;
}

.user-menu .footer {
    border-top: 1px solid #E0E0E0;
    padding-top: 6px;
    margin-top: 6px;
}

.user-menu .footer .user-menu-link {
    font-size: 13px;
}

.user-menu .user-menu-link {
    display: flex;
    text-decoration: none;
    color: #333333;
    font-weight: 400;
    font-size: 14px;
    padding: 12px 16px;
}

.user-menu .user-menu-link div {
    margin: auto 10px;
}

.user-menu .user-menu-link:hover {
    background-color: #F5F5F5;
    color: #333333;
}

.user-menu:before {
    position: absolute;
    top: -16px;
    /* left: 120px; */
    right: 25px;
    display: inline-block;
    content: "";
    border: 8px solid transparent;
    border-bottom-color: #E0E0E0;
}

.user-menu:after {
    position: absolute;
    top: -14px;
    left: 121px;
    display: inline-block;
    content: "";
    border: 7px solid transparent;
    border-bottom-color: #FFFFFF;
}

@media screen and (max-width: 400px) {
.menu-container{
    z-index: 900;
    position: absolute;

}
.activeProfile{
    z-index: 9000;
}
}
</style>