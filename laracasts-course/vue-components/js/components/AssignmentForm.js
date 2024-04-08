import AppButton from './AppButton.js'

export default {
  components: {
    AppButton
  },

  template: `
    <form class="flex items-center" @submit.prevent="add">
      <input v-model="newAssignment" class="p-2 text-black outline-none focus:ring w-0 grow shrink" placeholder="New assignment..." />

      <button type="submit" class="border-l py-2 px-1 bg-white text-black">Add</button>
    </form>
  `,

  data() {
    return {
      newAssignment: ''
    }
  },

  methods: {
    add() {
      this.$emit('add', this.newAssignment)

      this.newAssignment = ''
    }
  }
}
