<template>
    <h1>Best Posts</h1>
    <table>
        <thead>
            <tr>
                
                <th scope="col">Username</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Likes</th>
                <th scope="col">Comments</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(Post,i) in Posts" :key="i">
                <!-- <td >{{ Post.id}}</td> -->
                <td data-label="Username">{{ Post.username }}</td>
                <td data-label="Title">{{ Post.title }}</td>
                <td data-label="Content"><a href="#">{{ Post.content }}</a></td>
                <td data-label="Likes">{{Post.like}}</td>
                <td data-label="Comments">{{Post.comment}}</td>
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
                    username: "Raphael kind",
                    like: 12,
                    comment: 5
                },
                {
                    id: 2,
                    title: "the best course at GPS",
                    content: "This is the coures taht teaches...",
                    username: "saurelle benie",
                    like: 5,
                    comment: 9
                },
                {
                    id: 2,
                    title: "the best course at GPS",
                    content: "This is the coures taht teaches...",
                    username: "Aimee meilleur",
                    like: 5,
                    comment: 0
                }


            ]
        }
    }
}
</script>

<style scoped>

</style>