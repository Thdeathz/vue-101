<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="bg-[#edf2f7] w-screen h-screen overflow-x-hidden overflow-y-auto">
    <NavBar />

    <div class="p-12 max-w-[1600px] mx-auto"><RouterView /></div>
  </div>
</template>
