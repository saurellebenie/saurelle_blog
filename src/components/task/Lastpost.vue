<template>
    <section class="antialiased text-gray-600 h-full mt-5">
        <div class="flex flex-col justify-center h-full">
            <!-- Table -->
            <div class="w-full  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <header class="px-5 py-4 border-b border-gray-100">
                    <h2 class="font-semibold text-gray-800 text-3xl	">Recent Posts</h2>
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
                                        <div class="font-semibold text-left">Content</div>
                                    </th>
                                    <th class="p-3 whitespace-nowrap" scope="col">
                                        <div class="text-left font-bold text-red-500"> Likes</div>
                                    </th>
                                    <th class="p-3 whitespace-nowrap" scope="col">
                                        <div class="font-semibold text-left">Comments</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="text-sm divide-y divide-gray-100">
                                <tr v-for="(Post, i) in Posts" :key="i">
                                    <td class="p-3 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full"
                                                    src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                                                    width="40" height="40" alt="Burak Long">
                                            </div>
                                            <div class="font-medium text-gray-800">{{ Post.owner_id }}</div>
                                        </div>
                                    </td>
                                    <!-- <td >{{ Post.id}}</td> -->
                                    <td class="p-3 whitespace-nowrap" data-label="Title">
                                        <div class="font-medium text-gray-800">{{ Post.title }}</div>
                                    </td>
                                    <td class="p-3 whitespace-nowrap" data-label="Content">
                                        <div class="text-gray-800"><a href="#">{{ Post.content
                                        }}</a></div>
                                    </td>
                                    <td class="p-3 whitespace-nowrap" data-label="Likes">
                                        <div class="text-lg text-center font-bold text-red-500">{{ Post.like }}</div>
                                    </td>
                                    <td class="p-3 whitespace-nowrap" data-label="Comments">
                                        <div class="text-lg text-center font-bold">{{ Post.comment }}</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    setup() {

    },
    data() {
        return {
            Posts: [

                {
                    id: 1,
                    title: "the best course at Seven",
                    content: "This is the coures ...",
                    owner_id: "John Doe",
                    like: 12,
                    comment: 5
                },
                {
                    id: 2,
                    title: "the best course at GPS",
                    content: "This is the coures taht teaches...",
                    owner_id: "Aimee meilleur",
                    like: 5,
                    comment: 9
                },
                {
                    id: 2,
                    title: "the best course at GPS",
                    content: "This is the coures taht teaches...",
                    owner_id: "Saurelle benie",
                    like: 5,
                    comment: 0
                }


            ]
        }
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