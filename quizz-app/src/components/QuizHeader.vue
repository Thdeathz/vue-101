<script setup>
const { selectedOptions, currentQuestion, quizLength } = defineProps([
  'selectedOptions',
  'currentQuestion',
  'quizLength'
])
</script>

<template>
  <header>
    <h1 class="text-xl font-medium">Question {{ currentQuestion + '/' + quizLength }}</h1>

    <div class="border-2 border-orange-300 h-8 w-56 mt-2">
      <div
        class="bg-orange-300 h-full transition-all duration-300"
        :style="{
          width: `${(selectedOptions / quizLength) * 100}%`
        }"
      />
    </div>
  </header>
</template>
