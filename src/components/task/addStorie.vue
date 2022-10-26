<template>
    <!--  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 -->
    <form action="">
        <div class="add-story">
            <label for="">Write a title</label>
            <input type="text" name="" id="" v-model="post.title" placeholder="Title">
            <label></label>
            <!-- <div class="select-btn">
                <select name="" id="">
                    <option value="html">html</option>
                    <option value="css">c</option>
                    <option value="javascript">javascript</option>
                    <option value="Vue">vue js</option>
                    <option value="React"></option>
                </select>
                <div class="hider"></div>
                <span class="fa fa-sort-desc"></span>
            </div> -->
            <label>Topics</label>
            <div class="dropdown">
               
                <select v-model="proxySelected">
                    
                    <option :value="i" v-for="i in list">{{ i }}</option>
                </select>
            </div>
            <label>Add content (up to 5) so readers know what your story is about</label>
            <input type="text" name="" id="" v-model="post.description" placeholder="description">

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
            }"
            v-model="post.content" />
            <div class="not"></div>
             <button class="submit-button" @click="savePost" type="button">Publish</button>
        </div>


       

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
                content: '',
                list: []
            },
            selected: 'Html',
            list: ['Html', 'Css', 'Vue js', 'Javascript', 'Angular', 'React']
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
            this.$router.push('/PostLayout')
        }
    },
    computed: {
    proxySelected: {
      get() {
        return this.list.includes(this.selected) ? this.selected : null;
      },
      set(newValue) {
        if (newValue) {
          this.selected = newValue;
        }
      }
    }
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

.submit-button {
    width: 200px;
    padding: 10px;
    background-color: tomato;
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
	display:inline-block;
	/* color: #8c8c8c; */
	/* float:left; */
	/* font-size:15px; */
	padding: 10px;
	z-index:9999;
	cursor:pointer;
	background: transparent;
	border: none;
	width:100%;
	max-width:none !important;
	/* -webkit-appearance: none; */
    outline: none;
}
.dropdown select option{
    background-color: #EFEFEF;
    font-weight: 600;
    padding: 10px;
}
</style>