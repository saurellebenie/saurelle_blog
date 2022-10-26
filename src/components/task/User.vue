<template>
    <!-- <section class="antialiased text-gray-600 h-full mt-5"> -->
        <div class="flex flex-col justify-center h-full mt-3">
            <!-- Table -->
            <div class="w-full  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <header class="px-5 py-4 border-b border-gray-100">
                    <h2 class="font-semibold text-gray-800 text-3xl	text-center">#Users</h2>
                </header>
                <div class="">
                    <div class="overflow-x-auto">
                        <table class="table-auto w-full">
                            <thead class="text-xm font-semibold text-gray-400 bg-gray-100">
                                <tr>

                                    <!-- <th>ID</th> -->
                                    <th class="p-3 whitespace-nowrap" scope="col">
                                        <div class="font-semibold text-left">UserName</div>
                                    </th>
                                    <th class="p-3 whitespace-nowrap" scope="col">
                                        <div class="font-semibold text-left">Email</div>
                                    </th>
                                    <th class="p-3 whitespace-nowrap" scope="col">
                                        <div class="font-semibold text-left">CreatedAt</div>
                                    </th>
                                    <th class="p-3 whitespace-nowrap" scope="col">
                                        <div class="font-semibold text-center">IsLoggedIn</div>
                                    </th>
                                    <th class="p-3 whitespace-nowrap" scope="col">
                                        <div class="font-semibold text-center">#Post</div>
                                    </th>

                                </tr>
                            </thead>
                            <tbody class="text-sm divide-y divide-gray-100">
                                <tr v-for="(User, i) in Users" :key="i">
                                    <!-- <td>{{ User.id}}</td> -->
                                    <td class="p-3 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full"
                                                    src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                                                    width="40" height="40" alt="Burak Long">
                                            </div>
                                            <div class="font-medium text-gray-800">{{ User.username}}</div>
                                        </div>
                                    </td>
                                    <td class="p-3 whitespace-nowrap">
                                        <div class="text-left text-gray-800">{{ User.email }}</div>
                                    </td>
                                    <td class="p-3 whitespace-nowrap">
                                        <div class=" text-left text-gray-800">{{ User.createdAt }}</div>
                                    </td>
                                    <td class="p-3 whitespace-nowrap">
                                        <div class="font-medium text-center text-gray-800">{{ User.isLoggedIn }}</div>
                                    </td>
                                    <td class="p-3 whitespace-nowrap">
                                        <div class="font-medium text-center text-gray-800">{{ User.NoPost }}</div>
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
            Users: [

                {
                    id: 1,
                    username: "Kambang",
                    email: "kambang@mail.com",
                    password: 'heroTester',
                    isLoggedIn: true,
                    createdAt: new Date().toLocaleDateString(),
                    NoPost: 3
                },
                {
                    id: 2,
                    username: "John Doe",
                    email: "JohnDoe@email.com",
                    password: 'heroTest',
                    isLoggedIn: true,
                    createdAt: new Date().toLocaleDateString(),
                    NoPost: 5
                },
                {
                    id: 3,
                    username: "Saurelle",
                    email: "saurelle@email.com",
                    password: 'atlhdj12',
                    isLoggedIn: false,
                    createdAt: new Date().toLocaleDateString(),
                    NoPost: 8
                },


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