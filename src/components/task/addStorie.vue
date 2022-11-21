<template>
    <!--  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 -->
    <div>
        <form novalidate @submit.prevent="submit()">
            <div class="add-story">
                <label>Write a title</label>
                <input type="text" name="title" v-model="title" required placeholder="Title">

                <label>Write Description to your post</label>
                <input type="text" v-model="desc" required>
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
                }" v-model="content" required />


                <div class="not"></div>
                <button class="submit-button"  type="submit">Publish</button>
            </div>
        </form>
    </div>
    
    <!-- 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 -->

</template>
<script>
import axios from 'axios'
import Editor from '@tinymce/tinymce-vue';

import TutorialDataService from '../../Service/helpers.js'
export default {
    setup() {

    },
    data() {
        return {
                id: '',
                title: '',
                desc: '',
                content: '',
                author: JSON.parse(window.localStorage.getItem("login")).username
            }
    },
    components: {
        'editor': Editor
    },
    methods: {

        submit(){
            console.log({"title": this.title.replace(/\s+/g, '-').toLowerCase(), "desc": this.desc, "content": this.content});
            this.axios.post("http://localhost:3000/post/add", {"title": this.title.replace(/\s+/g, '-').toLowerCase(), "desc": this.desc, "content": this.content, "author": this.author})
            .then(res => {
                console.log(res);
                if(res.status === 201){
                    this.$router.push(`/user/${this.author}/${this.title.replace(/\s+/g, '-').toLowerCase()}`);
                }

            })
            .catch(err =>{
                console.log(err);
            })
        }
    },

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

.text-gray a {
    color: teal;
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

.submit-button {
    width: 150px;
    padding: 10px;
    background-color: teal;
    border: none;
    border-radius: 20px;
    color: #fff;
    /* margin: 2rem auto; */
    position: relative;
    margin: 0 auto;
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
    border: 2px solid tomato;
    color: var(--heat-color);
    cursor: pointer;
    position: relative;

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