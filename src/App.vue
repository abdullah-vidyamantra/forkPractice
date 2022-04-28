<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

import PosT from './components/PosT.vue'
import PostDetails from './components/PostDetails.vue'
import { ref } from 'vue'
import vHtml from './components/vHtml.vue'

let showPost = ref(true);
const onCreatePost =() =>{
showPost.value = false;
setTimeout(() => {
  showPost.value = true;
}, 50);
}

</script>

<template>
<div class="">


 <!-- <PosT @postCreated="onCreatePost" class="md:mx-auto"></PosT>
 <PostDetails v-if="showPost"></PostDetails> -->
 <vHtml></vHtml>
 <h1>hello1 World!!</h1>

 
 

</div>
 
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
