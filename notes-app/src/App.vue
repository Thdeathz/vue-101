<script setup lang="ts">
import { ref } from 'vue'

const showModal = ref(false)
const notes = ref([
  {
    id: 1,
    message:
      'You need a configuration file (tailwind.config.js) where you can specify the paths to all of your template',
    date: new Date().toLocaleDateString(),
    color: '#f6ad55'
  }
])
const newNote = ref('')

function randomColor() {
  return 'hls(' + 360 * Math.random() + ',100%,75%)'
}

function addNote() {
  notes.value.push({
    id: notes.value.length + 1,
    message: newNote.value,
    date: new Date().toLocaleDateString(),
    color: randomColor()
  })
  newNote.value = ''
  showModal.value = false
}
</script>

<template>
  <main>
    <div v-if="showModal">
      <div
        class="bg-black/35 backdrop-blur-sm absolute top-0 left-0 z-10 w-full h-full flex-center"
        @click="showModal = false"
      ></div>
      <div
        class="w-[36rem] bg-white rounded-md shadow-md p-6 absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] z-[11]"
      >
        <form>
          <label for="message" class="block mb-2 font-medium">Your message</label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your thoughts here..."
            v-model.trim="newNote"
          ></textarea>

          <button
            type="submit"
            class="mt-4 rounded-md w-full text-center bg-slate-600 py-2 text-white hover:bg-slate-400 transition-all duration-200 hover:translate-y-[-3px] active:scale-95"
            @click="addNote"
          >
            Add note
          </button>
        </form>
      </div>
    </div>

    <div class="max-w-[1000px] mx-auto p-12">
      <header class="flex justify-between items-end">
        <h1 class="text-6xl font-semibold">Notes</h1>
        <button
          type="button"
          alt="open-modal-button"
          class="w-10 hover:bg-black/80 transition-all duration-200 hover:translate-y-[-3px] active:scale-95 aspect-square rounded-full text-2xl bg-black text-white"
          @click="showModal = true"
        >
          +
        </button>
      </header>

      <div class="grid grid-cols-auto-fill gap-8 mt-8">
        <div
          v-for="note in notes"
          :key="note.id"
          class="p-4 rounded-xl shadow-md bg-amber-200 cursor-pointer aspect-square flex flex-col justify-between"
          :style="{ backgroundColor: note.color }"
        >
          <p class="text-base break-words">
            {{ note.message }}
          </p>
          <p class="font-medium">{{ note.date }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
