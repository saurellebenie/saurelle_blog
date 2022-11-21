<template>
    <!-- <section class="text-gray-600 h-full mt-5"> -->
        <div class="flex flex-col justify-center h-full mt-3">
            <!-- Table -->
            <div class="w-full  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <header class="px-5 py-4 border-b border-gray-100">
                    <h2 class="font-semibold text-gray-800 text-3xl	text-center">Last comments</h2>
                </header>
                <div class="">
                    <div class="overflow-x-auto">
                        <table class="table-auto w-full">
                            <thead class="text-xm font-semibold text-gray-400 bg-gray-100">
                                <tr>

                                    <th class="p-3 whitespace-nowrap" scope="col">
                                        <div class="font-semibold text-center">#Posts</div>
                                    </th>
                                    <th class="p-3 whitespace-nowrap" scope="col">
                                        <div class="font-semibold text-left">Message</div>
                                    </th>
                                    <th class="p-3 whitespace-nowrap" scope="col">
                                        <div class="font-semibold text-center text-red-500">Likes</div>
                                    </th>
                                    <th class="p-3 whitespace-nowrap" scope="col">
                                        <div class="font-semibold text-center">Comments</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="text-sm divide-y divide-gray-100">
                                <tr v-for="(comment, i) in Comments" :key="i">
                                    <td class="p-3 whitespace-nowrap">
                                        <div class="font-medium text-center text-gray-800">{{ comment.post_id }}</div>
                                    </td>
                                    <td class="p-3 whitespace-nowrap">
                                        <div class=" text-gray-800">{{ comment.message }}</div>
                                    </td>
                                    <td class="p-3 whitespace-nowrap">
                                        <div class="text-lg text-center font-bold text-red-500">{{ comment.like }}</div>
                                    </td>
                                    <td class="p-3 whitespace-nowrap">
                                        <div class="text-lg text-center font-bold">{{ comment.comment }}</div>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    <!-- </section> -->
</template>

<script>
export default {
    setup() {

    },
    data() {
        return {
            Comments: [

                {
                    id: 1,
                    post_id: 1,
                    message: "Thanks for published this post",
                    like: 2,
                    comment: 3
                },
                {
                    id: 2,
                    post_id: 2,
                    message: "Thanks for writing this amazing content",
                    like: 5,
                    comment: 4
                },
                {
                    id: 2,
                    post_id: 2,
                    message: "Thanks for writing this amazing content",
                    like: 5,
                    comment: 4
                },
                {
                    id: 2,
                    post_id: 2,
                    message: "Thanks for writing this amazing content",
                    like: 5,
                    comment: 4
                }


            ]
        }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    font-weight: bold;
    font-size: 2em;
    width: 100%;
}
</style>