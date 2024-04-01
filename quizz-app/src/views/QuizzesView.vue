<script setup>
import { ref, watch } from 'vue'
import q from '../data/quizzes.json'
import Card from '../components/Card.vue'

const quizzes = ref(q)
const search = ref('')

watch(search, value => {
  quizzes.value = q.filter(quiz => quiz.name.toLowerCase().includes(value.toLowerCase()))
})
</script>

<template>
  <header class="flex gap-4 items-end">
    <h1 class="text-4xl font-semibold">Quizzes</h1>

    <input
      type="text"
      id="search"
      v-model="search"
      class="bg-gray-50 w-[24rem] border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      placeholder="Search something..."
    />
  </header>

  <div class="grid grid-cols-auto-fill gap-8 mt-8">
    <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
  </div>
</template>
