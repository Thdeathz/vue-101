<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const { quiz } = defineProps(['quiz'])
</script>

<template>
  <div class="rounded-md relative shadow">
    <RouterLink :to="`/quiz/${quiz.id}`" class="w-full h-full absolute top-0 left-0 z-[1]" />

    <img :src="quiz.img" :alt="quiz.name" class="rounded-t-md" />

    <div class="py-2 px-4">
      <h2 class="text-xl font-semibold">{{ quiz.name }}</h2>
      <p class="font-medium">{{ quiz.questions.length }} questions</p>
    </div>
  </div>
</template>
