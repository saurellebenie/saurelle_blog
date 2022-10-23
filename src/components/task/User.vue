<template>
    <h1>Users</h1>
    <table>
        <thead>
            <tr>
                <!-- <th>ID</th> -->
                <th scope="col">Username</th>
                <th scope="col">Email</th>

                <th scope="col">CreatedAt</th>
                <th scope="col">IsLoggedIn</th>
                <th scope="col">#Post</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(User,i) in Users" :key="i">
                <!-- <td>{{ User.id}}</td> -->
                <td data-label="Username">{{ User.username }}</td>
                <td data-label="Email"><a href="#">{{User.email}}</a></td>
                <td data-label="CreateAt">{{ User.createdAt }}</td>
                <td data-label="IsLoggedIn">{{ User.isLoggedIn }}</td>
                <td data-label="#Post">{{User.NoPost}}</td>

            </tr>
        </tbody>
    </table>
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