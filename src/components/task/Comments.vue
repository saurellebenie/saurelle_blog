<template>
    <h1>Comments Posts</h1>
    <table>
        <thead>
            <tr>
                
                <th scope="col">#Post</th>
                <th scope="col">Message</th>
                <th scope="col">Likes</th>
                <th scope="col">Comments</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(comment,i) in Comments" :key="i">
                
                <td data-label="#Post">{{ comment.post_id }}</td>
                <td data-label="Message"><a href="#">{{ comment.message }}</a></td>
                <td data-label="Likes">{{ comment.like }}</td>
                <td data-label="Comments">{{ comment.comment }}</td>
                
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

</style>