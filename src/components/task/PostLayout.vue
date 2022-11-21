<template>
    <div>
        <form action="">
            <div class="add-story">
                <label for="">Write a title</label>
                <input type="text" name="" id="" v-model="Post.title" placeholder="Title">

                <label for="">Write Description to your post</label>
                <input type="text" v-model="Post.desc">
                <label>write content here</label>
                <editor api-key="9tfwhrotb6bnkqepmnm8p3knll8vt2d0tychhq7atetnbao2" :init="{
                    selector: 'textarea',
                    // height: 500,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                                                                                                                                                                                                                                                                        alignleft aligncenter alignright alignjustify | \
                                                                                                                                                                                                                                                                        bullist numlist outdent indent | removeformat | help'
                }" v-model="Post.content" />


                <!-- <div class="not"> {{Post.published ? "Publishes":"Pending" }} </div> -->


            </div>




        </form>

        <button class="delete-button" @click="deletePost()" type="button">Delete</button>
        <button class="submit-button" @click="updatePost()" type="button">Update</button>


    </div>
</template>

<script>

import TutorialDataService from '../../Service/helpers.js'

import Editor from '@tinymce/tinymce-vue';
export default {
    data() {
        return {
            Post: []
        }
    },
    components: {
        'editor': Editor
    },

    methods: {
        getPost(id) {
            TutorialDataService.getPostById(id)
                .then(response => {
                    this.Post = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        updatePost() {
            TutorialDataService.updatePost(this.Post.id, this.Post)
                .then(response => {
                    console.log(response.data);
                    this.message = 'Posts upsated'
                    this.$router.push("/Dashboard/Posts")
                })
                .catch(e => console.log(e))
        },

        deletePost() {
            TutorialDataService.deletePost(this.Post.id)
                .then(response => {
                    console.log(response.data);
                    this.$router.push("/Dashboard/Posts")
                })
                .catch(e => { console.log(e); })
        },
        // },
    },
    mounted() {


        this.getPost(this.$route.params.id);

    }

}
</script>
<style scoped>
form {
    margin-bottom: 5rem;
    /* position: relative; */
    background-color: #EFEFEF;
    margin-top: 20px;
    padding: 5px;
    border-radius: 10px;
    width: 100%;
}

form .add-story {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    margin: 1rem auto;
}

form .add-story input,
form .add-story span {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    padding: 10px;
    align-items: center;
    background-color: transparent;
}

/* select {
    width: 30%;
    border: 1px solid rgb(167, 162, 162);
    margin-top: 10px;
    font-size: 12px;
    font-family: inherit;
} */

h1 {
    text-align: center;
    font-weight: bold;
    font-size: 2em;
    width: 100%;
}

.not,
textarea,
input {
    margin-bottom: 2rem;
    outline: none;
}

input[type=text] {
    border: none;
}

select,
::placeholder {
    color: rgb(65, 54, 6);
    font-size: 15px;
}

.delete-button,
.submit-button {
    width: 150px;
    padding: 10px;
    border: 2px;
    border-radius: 20px;
    color: #fff;
    /* margin: 2rem auto; */
    position: relative;
    margin: 0 auto;
}

.submit-button {
    background-color: teal;
}

.delete-button {
    background-color: tomato;
    margin-right: 20px;
}

.img {
    width: 50px;
    height: 50px;
}

/* .img input{
    border: none;
} */
label {
    color: teal;
    font-weight: bold;
    margin-bottom: 10px;
}

.submit-button:hover {
    background-color: #fff;
    /* border: 1px solid tomato; */
    color: var(--heat-color);
    cursor: pointer;
    /* position: relative; */

}

/* select */

/*Layout*/
/*Dropdown*/
.dropdown {
    margin-bottom: 2em;
    width: 14.5em;
    border: 0.1em solid #c0cdd1;
}

.dropdown select {
    display: inline-block;
    /* color: #8c8c8c; */
    /* float:left; */
    /* font-size:15px; */
    padding: 10px;
    z-index: 9999;
    cursor: pointer;
    background: transparent;
    border: none;
    width: 100%;
    max-width: none !important;
    /* -webkit-appearance: none; */
    outline: none;
}

.dropdown select option {
    background-color: #EFEFEF;
    font-weight: 600;
    padding: 10px;
}
</style>