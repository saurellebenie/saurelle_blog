<template>
    <h1>Users</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>

                <th>createdAt</th>
                <th>isLoggedIn</th>
                <th>NoPost</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(User,i) in Users" :key="i">
                <td>{{ User.id}}</td>
                <td>{{ User.username }}</td>
                <td><a href="#">{{User.email}}</a></td>
                <td>{{ User.createdAt }}</td>
                <td>{{ User.isLoggedIn }}</td>
                <td>{{User.NoPost}}</td>

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
                    createdAt: new Date(Date.now()),
                    NoPost: 3
                },
                {
                    id: 2,
                    username: "John Doe",
                    email: "JohnDoe@email.com",
                    password: 'heroTest',
                    isLoggedIn: true,
                    createdAt: new Date(Date.now()),
                    NoPost: 5
                },
                {
                    id: 3,
                    username: "Saurelle",
                    email: "saurelle@email.com",
                    password: 'atlhdj12',
                    isLoggedIn: false,
                    createdAt: new Date(Date.now()),
                    NoPost: 8
                },


            ]
        }
    }
}
</script>

<style scoped>
table {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background-color: #fff;
    border-collapse: collapse;
}

thead,
tbody {
    /* border: 1px solid #333; */
}

td {
    padding: 20px;
    text-align: start;
}

th {
    color: #42b983;
    font-size: 12px;
    font-weight: bold;
    padding: 10px;
    text-align: start;
}

tr th {
    background-color: #f5efe7;
}

tr:nth-child(even) {
    background-color: #f5efe7;
}
</style>