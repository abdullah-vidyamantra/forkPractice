<template>
<div class="">
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
</div>
  
</template>

<script setup>
 const rawHtml = ` <span style="color: red">This should be red.</span>`
</script>

<style>

</style>