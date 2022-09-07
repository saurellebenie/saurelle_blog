<template>
    <div class="card">
        <div>
            <div class="profile-pic"><img src="../assets/hero.png" alt="">name of the person</div>
            <h4 class="title"> <a href="">{{post.title}}</a></h4>
            <p>{{post.description}}</p>
            <div class="date">
                <a href="#">
                    <span class="material-symbols-outlined">bookmark_add</span>
                </a>
            </div>

        </div>
        <div>
            <img class="comment_pic"
                src="../assets/kisspng-vue-js-javascript-framework-front-and-back-ends-gi-technical-5ac9109ea75f87.5300044715231264306856.png"
                alt="">
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        return{
            post:{
                title:'',
                description: '',
            }
        }
    },
}
</script>