<script setup>
import { RouterLink } from 'vue-router'

import RightArrow from './icons/RightArrow.vue'
import LeftArrow from './icons/LeftArrow.vue'

const { questionLength, currentQuestion } = defineProps(['questionLength', 'currentQuestion'])
</script>

<template>
  <div class="flex gap-6">
    <RouterLink
      v-if="currentQuestion > 0 && currentQuestion <= questionLength"
      :to="`?q=${currentQuestion}`"
      class="group w-min whitespace-nowrap font-medium hover:underline opacity-60 hover:opacity-100 transition-opacity duration-200 flex items-center gap-2"
    >
      <LeftArrow
        class="w-[1.5rem] group-hover:translate-x-[-3px] transition-transform duration-200"
      />
    </RouterLink>

    <RouterLink
      v-if="currentQuestion < questionLength"
      :to="`?q=${currentQuestion + 2}`"
      class="group w-min whitespace-nowrap font-medium hover:underline opacity-60 hover:opacity-100 transition-opacity duration-200 flex items-center gap-2"
    >
      <RightArrow
        class="w-[1.5rem] group-hover:translate-x-[3px] transition-transform duration-200"
      />
    </RouterLink>
  </div>
</template>
