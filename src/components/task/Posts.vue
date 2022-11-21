<template>
    <!-- <section class="w-full antialiased text-gray-600 h-full mt-5"> -->
    <div class="flex flex-col justify-center h-full mt-3">
        <!-- Table -->
        <div class="w-full  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800 text-3xl	text-center">Recent Posts</h2>
            </header>
            <div class="">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">

                        <thead class="text-xm font-semibold text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-3 whitespace-nowrap" scope="col">
                                    <div class="font-semibold text-left">UserName</div>
                                </th>
                                <th class="p-3 whitespace-nowrap" scope="col">
                                    <div class="font-semibold text-left">Title</div>
                                </th>
                                <th class="p-3 whitespace-nowrap" scope="col">
                                    <div class="font-semibold text-left">Description</div>
                                </th>

                                <!-- <th class="p-3 whitespace-nowrap" scope="col">
                                    <div class="text-left font-bold text-red-500"> #Likes</div>
                                </th>
                                <th class="p-3 whitespace-nowrap" scope="col">
                                    <div class="font-semibold text-left">#Comments</div>
                                </th> -->
                                <th class="p-3 whitespace-nowrap" scope="col">
                                    <div class="font-semibold text-left">Action</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-for="Post of Posts" :key="Post.id">
                                <td class="p-3 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            {{Post.image}}
                                        </div>
                                        <div class="font-medium text-gray-800">{{ Post.user }}</div>
                                    </div>
                                </td>
                                <!-- <td >{{ index}}</td> -->
                                <td class="p-3 whitespace-nowrap" data-label="Title">
                                    <div class="text-left font-medium text-gray-800 cursor-pointer" @click="this.$router.push('/Dashboard/viewPost/' + Post?.id)">{{ Post.title }}</div>
                                </td>
                                <td class="p-3 whitespace-nowrap" data-label="Content">
                                    <div class="text-left text-gray-800">
                                        {{ Post.desc }}
                                        <!-- <router-link :to="'/Posts/' + currentTutorial.id"></router-link></div> -->
                                    </div>
                                </td>
                                <!-- <td class="p-3 whitespace-nowrap" data-label="Likes">
                                    <div class="text-lg text-center font-bold text-red-500">{{ Post.like }}</div>
                                </td>
                                <td class="p-3 whitespace-nowrap" data-label="Comments">
                                    <div class="text-lg text-center font-bold">{{ Post.comment }}</div>
                                </td> -->
                                <!-- <td class="p-3 whitespace-nowrap" data-label="Comments">
                                    <div class="text-lg text-center font-bold">{{ Post.comment }}</div>
                                </td> -->

                                <td>
                                    <div class="tex-lg"><span
                                            class="rounded bg-green-400 font-bold text-white p-2 mx-1 cursor-pointer capitalize hover:bg-blue-600"
                                            @click="this.$router.push('/Dashboard/Posts-detail/' + Post?.id)">view
                                        </span></div>

                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import TutorialDataService from '../../Service/helpers.js'
import addComment from '../../components/task/addComment.vue'
export default {
    setup() {

    },
    data() {
        return {
            Posts: []
        }
    },
    components: {
        addComment,
    },
    methods: {
        showTutorials() {
            TutorialDataService.getAllpost()
                .then(response => {
                    this.Posts = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        refreshList() {
            this.showTutorials();
        },
        // setActivePost(Post, index) {

        //     this.currentIndex = Post ? index : -1;
        // }
    },
    mounted() {
        this.showTutorials();
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    font-weight: semibold;
    font-size: 2em;
    width: 100%;
}
</style>