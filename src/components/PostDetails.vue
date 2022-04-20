<template>
    <div>
        <h2>Post Details</h2>
        <table class="table-fixed md:mx-auto">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in postDetails" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from "vue"
import axios from 'axios'
import { onMounted } from 'vue'
const postDetails = ref([]);
const formatPostDetails = (posts) =>{
for(let key in posts){
    postDetails.value.push({...posts[key], id: key})    
}
console.log(postDetails.value)
}

const getPostDetails = () =>{
   axios.get(`https://vue-learn-auth-default-rtdb.firebaseio.com/posts.json`)
   .then(response=>{
        formatPostDetails(response.data)
   }

   )
}

onMounted(() => {
  getPostDetails()
})
</script>