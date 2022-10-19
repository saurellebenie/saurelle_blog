<template>
    <h1>Recent post</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>User_ID</th>
                <th>Title</th>
                <th>Content</th>
                <th>Likes</th>
                <th>Comments</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(Post,i) in Posts" :key="i">
                <td >{{ Post.id}}</td>
                <td>{{ Post.owner_id }}</td>
                <td>{{ Post.title }}</td>
                <td><a href="#">{{ Post.content }}</a></td>
                <td>{{Post.like}}</td>
                <td>{{Post.comment}}</td>
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
            Posts: [

                {
                    id: 1,
                    title: "the best course at Seven",
                    content: "This is the coures ...",
                    owner_id: 1,
                    like: 12,
                    comment: 5
                },
                {
                    id: 2,
                    title: "the best course at GPS",
                    content: "This is the coures taht teaches...",
                    owner_id: 2,
                    like: 5,
                    comment: 9
                },
                {
                    id: 2,
                    title: "the best course at GPS",
                    content: "This is the coures taht teaches...",
                    owner_id: 2,
                    like: 5,
                    comment: 0
                }


            ]
        }
    }
}
</script>

<style scoped>
h1{
    margin-top: 5rem;
}
table {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background-color: #fff;
    border-collapse: collapse;
}
thead,tbody{
    /* border: 1px solid #333; */
}
td{
    padding: 20px;
    text-align: start;
}
th{
    color: #42b983;
    font-size: 12px;
    font-weight: bold;
    padding: 10px;
    text-align: start;
}
tr th{
    background-color: #f5efe7;
}
tr:nth-child(even){
    background-color: #f5efe7;
}
</style>