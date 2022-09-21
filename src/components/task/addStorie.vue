<template>
    <!--  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 -->
    <form action="">
        <div class="add-story">
            <label for="">Write a title</label>
            <input type="text" name="" id="" v-model="post.title" placeholder="Title">
            
            <label>Add content (up to 5) so readers know what your story is about</label>
            <input type="text" name="" id="" v-model="post.description" placeholder="description">
            <label>write content here</label>
            <editor api-key="9tfwhrotb6bnkqepmnm8p3knll8vt2d0tychhq7atetnbao2" :init="{
                selector: 'textarea',
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help'
            }" />
        </div>

        <span><input type="file"></span>

        <button class="submit-button" @click="savePost" type="button">Publish</button>
    </form>
    <!-- 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 -->

</template>
<script>
import Editor from '@tinymce/tinymce-vue';
export default {
    setup() {

    },
    data() {
        return {
            post: {
                id: '',
                title: '',
                description: '',
                files: [],
                editor: '',

            },

        }
    },
    components: {
        'editor': Editor
    },
    methods: {


        savePost() {
            console.log(this.post);

            let postId = Math.ceil(Date.now());
            console.log("post id:", postId);
        }
    }
}
</script>
<style scoped>
form {
    margin-bottom: 5rem;
    position: relative;
}

form .add-story {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
}

form .add-story input,
form .add-story span{
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    padding: 10px;
    align-items: center;
}

textarea,input{
    margin-bottom: 2rem;
    outline: none;
}

input[type=text] {
    border: none;
}

::placeholder {
    color: rgb(65, 54, 6);
    font-size: 10px;
}

.submit-button {
    width: 200px;
    padding: 10px;
    font-family: var(--font-rigtheous);
    background-color: teal;
    border: none;
    border-radius: 20px;
    color: #fff;
    margin-top: 1rem;
}

.submit-button:hover {
    background-color: #fff;
    border: 2px solid teal;
    color: var(--heat-color);
    cursor: pointer;
    position: relative;
}
</style>