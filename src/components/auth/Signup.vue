<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        
        <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
            <div class="flex justify-center">
                <div class="logo">GoBlog+</div>
            </div>

            <form action="" @submit.prevent="submit()">
                <div class="mt-4">
                    <div>
                        <label class="block" for="Name">Name</label>
                        <input v-model="username" type="text" placeholder="Name"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-600">
                        <span class="absolute text-red text-sm">{{ usernameWarn }}</span>
                    </div>
                    <div class="mt-4">
                        <label class="block" for="email">Email</label>
                        <input v-model="email" type="text" placeholder="Email"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-600">
                        <span class="absolute text-red text-sm">{{ emailWarn }}</span>
                    </div>
                    <div class="mt-4">
                        <label class="block">Password</label>
                        <input v-model="password" type="password" placeholder="Password"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-600"
                            required>
                    </div>
                    <div class="mt-4">
                        <input type="file" @change="upload">
                    </div>

                    <div class="flex">
                        <button type="submit"
                            class="w-full px-6 py-2 mt-4 text-white bg-teal-600 rounded-lg hover:bg-teal-900">Create
                            Account</button>
                    </div>
                    <div class="mt-6 text-grey-dark">
                        Already have an account?
                        <a class="text-red-600 hover:underline" href="/Login">
                            Log in
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<script>


export default {
    setup() {

    },


    data() {
        return {
            username: "",
            email: "",
            password: "",
            usernameWarn: "",
            emailWarn: ""
        }

    },
    methods: {
        submit() {
            if (this.password.length >= 6) {
                this.axios.post("http://localhost:3000/user/register", { "username": this.username.replace(/\s+/g, '-').toLowerCase(), "email": this.email, "password": this.password })
                    .then(res => {
                        if (res.status === 201) {
                            this.$router.push("/Dashboard");
                            // window.localStorage.setItem("login", JSON.stringify({ "loggedIn": true, "username": this.username.replace(/\s+/g, '-').toLowerCase(), "password": this.password }))
                        }
                    })
                    .catch(err => {
                        if (err.response.data.el === "username") {
                            this.usernameWarn = err.response.data.error;
                            this.emailWarn = "";
                        } else if (err.response.data.el === "email") {
                            this.emailWarn = err.response.data.error;
                            this.usernameWarn = "";
                        } else {
                            this.emailWarn = "";
                            this.usernameWarn = "";
                        }
                    });
            }
        }
    }
}


</script>

