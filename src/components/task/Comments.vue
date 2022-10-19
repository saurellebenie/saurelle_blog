<template>
    <h1>Comments Posts</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Post_ID</th>
                <th>Message</th>
                <th>Likes</th>
                <th>Comments</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(comment,i) in Comments" :key="i">
                <td>{{ comment.id}}</td>
                <td>{{ comment.post_id }}</td>
                <td><a href="#">{{ comment.message }}</a></td>
                <td>{{ comment.like }}</td>
                <td>{{ comment.comment }}</td>
                
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
            Comments: [

                {
                    id: 1,
                    post_id: 1,
                    message: "Thanks for published this post",
                    like: 2,
                    comment:3
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