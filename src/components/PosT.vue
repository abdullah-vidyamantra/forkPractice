<template>
  <div class="md:mx-auto">
 
<div class="block md:mx-auto p-6 rounded-lg shadow-lg bg-white max-w-sm">
  <form @submit.prevent="register">
    <div class="form-group mb-6">
      <label for="exampleInputEmail1" class="form-label inline-block mb-2 text-gray-700">Title</label>
      <input v-model="title" type="text" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
        aria-describedby="emailHelp" placeholder="Title">
 
    </div>
    <div class="form-group mb-6">
      <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">Details</label>
      <input v-model="description" type="texarea" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
        placeholder="Description">
    </div>
    
    <button type="submit" class="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Submit</button>
  </form>
  <button @click="store.randomizeCounter" >Count: {{store.counter}}</button>
</div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios"
 import { defineEmits } from 'vue'  
 import {useStore} from '../store/mainStore.js'
const store = useStore();
  let title = ref("");
  let description = ref("");
  const emit = defineEmits()
  const register = () => {
  
       axios.post(
         `posts.json`,
        {title: title.value, description: description.value},
       ).then(response => { 
        console.log(response) 
        emit('postCreated') 
        title.value = ''
        description.value = ''  
         })


    
        
  };

    store.$subscribe((mutation, state) => {
   console.log(mutqaation)
   console.log(state)

})
  
</script>

<style>
</style>