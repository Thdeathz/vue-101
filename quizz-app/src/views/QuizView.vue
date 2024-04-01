<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import q from '../data/quizzes.json'

import RightArrow from '../components/icons/RightArrow.vue'
import LeftArrow from '../components/icons/LeftArrow.vue'
import QuizHeader from '../components/QuizHeader.vue'
import QuizQuestion from '../components/QuizQuestion.vue'
import BackButton from '../components/BackButton.vue'
import QuestionControl from '../components/QuestionControl.vue'

const route = useRoute()
const { query } = defineProps(['query'])

const quizId = parseInt(route.params.id)
const currentQuestion = ref(query ? parseInt(query) - 1 : 0)
const quiz = ref(q.find(q => q.id === quizId))
const selectedOptions = ref([...Array(quiz.value.questions.length).fill(null)])

const correctAnswers = ref(null)

const onOptionSelected = option => {
  selectedOptions.value[currentQuestion.value] = option
}

const onSubmitQuiz = () => {
  correctAnswers.value = quiz.value.questions
    .filter((q, i) => q.options[selectedOptions.value[i] - 1].isCorrect)
    .length.toString()
}

watch(
  () => route.query,
  query => {
    currentQuestion.value = query.q ? parseInt(query.q) - 1 : 0
  }
)
</script>

<template>
  <BackButton />

  <div class="w-[600px] mx-auto">
    <div v-if="quiz.questions[currentQuestion] && !correctAnswers">
      <QuizHeader
        :selectedOptions="selectedOptions.filter(q => q).length"
        :currentQuestion="currentQuestion + 1"
        :quizLength="quiz.questions.length"
      />

      <div>
        <QuizQuestion
          :question="quiz.questions[currentQuestion]"
          :selectedOption="selectedOptions[currentQuestion]"
          @selectOption="onOptionSelected"
        />

        <div class="mt-4 flex justify-between items-center">
          <QuestionControl
            :currentQuestion="currentQuestion"
            :questionLength="quiz.questions.length - 1"
          />

          <button
            v-if="selectedOptions.filter(q => q).length === quiz.questions.length"
            class="mt-4 bg-orange-300 py-2 px-4 rounded-md font-semibold text-white hover:bg-orange-500 transition-all duration-200 hover:translate-y-[-3px] active:scale-95"
            @click="onSubmitQuiz"
          >
            Submit
          </button>
        </div>
      </div>
    </div>

    <div v-else-if="correctAnswers" class="text-center text-4xl font-medium py-12">
      Point
      <br />
      {{ Math.round((Number(correctAnswers) / quiz.questions.length) * 100) }}
    </div>

    <div v-else>
      <p class="text-center text-2xl mt-4 font-medium opacity-40">Question not found >!</p>
    </div>
  </div>
</template>
