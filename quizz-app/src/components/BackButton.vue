<script setup>
import { RouterLink } from 'vue-router'
import LeftArrow from '../components/icons/LeftArrow.vue'
</script>

<template>
  <footer class="mt-2">
    <RouterLink
      to="/"
      class="text-lg group w-min whitespace-nowrap font-medium hover:underline opacity-60 hover:opacity-100 transition-opacity duration-200 flex items-center gap-2"
    >
      <LeftArrow
        class="w-[1rem] group-hover:translate-x-[-3px] transition-transform duration-200"
      />
      <span>Back to home</span>
    </RouterLink>
  </footer>
</template>
