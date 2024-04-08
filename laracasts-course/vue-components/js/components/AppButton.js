export default {
  template: `
    <button
      :class="{
        'p-2 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500': true,
        'bg-blue-200 hover:bg-blue-400': type === 'primary',
        'bg-purple-200 hover:bg-purple-400': type === 'secondary',
        'bg-white border-l text-black hover:bg-gray-400': type === 'muted',
      }"
      :disabled="processing"
    >
      <span v-if="processing">Loading...</span>
      <span v-else><slot/></span>
    </button>
  `,

  props: {
    type: {
      type: String,
      default: 'primary'
    },
    processing: {
      type: Boolean,
      default: false
    },
    class: {
      type: String,
      default: ''
    }
  }
}
