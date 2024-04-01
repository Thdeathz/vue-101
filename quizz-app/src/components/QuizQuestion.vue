<script setup>
import { toRefs, watch } from 'vue'

const props = defineProps(['question', 'selectedOption'])

const { question, selectedOption } = toRefs(props)

const emit = defineEmits(['selectOption'])

const emitSelectedOptions = option => {
  emit('selectOption', option)
}
</script>

<template>
  <p class="text-2xl font-medium mt-4">{{ question.text }}</p>

  <div class="flex flex-col gap-3 mt-3">
    <button
      v-for="option in question.options"
      :key="option.id"
      class="bg-pink-100 h-10 flex items-center gap-4 text-xl hover:opacity-85 transition-all duration-200 hover:translate-x-[-3px] disabled:opacity-40"
      @click="emitSelectedOptions(option.id)"
      :style="{
        opacity: `${
          selectedOption ? (selectedOption === option.id ? '100%' : '40%') : '100%'
        } !important`
      }"
    >
      <p class="bg-orange-300 h-10 flex justify-center items-center aspect-square">
        {{ option.label }}
      </p>
      <p class="text-lg font-medium">{{ option.text }}</p>
    </button>
  </div>
</template>
