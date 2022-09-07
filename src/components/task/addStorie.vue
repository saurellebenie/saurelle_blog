<template>
    <!--  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 -->
    <form action="">
        <div class="add-story">
            <label for="">Write a subtitle</label>
            <input type="text" name="" id="" v-model="post.title" placeholder="Title">
            <label>Add content (up to 5) so readers know what your story is about</label>
            <input type="text" name="" id="" v-model="post.description">
            
            <editor :init="{
                plugins: 'lists link image table code help wordcount'
            
            }" />
           
            <span><input type="file"></span>
        </div>
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
                files: [],

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
<style>
    form{
        margin-bottom: 5rem;
        position: relative;
    }
form .add-story {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

form .add-story input,
textarea {
    margin-bottom: 1rem;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    padding: 10px;
    outline: none;
    align-items: center;
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
}

.submit-button:hover {
    background-color: #fff;
    border: 2px solid teal;
    color: var(--heat-color);
    cursor: pointer;
    position: relative;
}
</style>