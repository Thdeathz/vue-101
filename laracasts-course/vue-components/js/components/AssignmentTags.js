export default {
  template: `
    <div class="flex gap-2 mb-6">
      <button
        v-for="tag in tags"
        :key="tag" 
        class="border px-1 rounded-md"
        :class="{
          'text-blue-500 border-blue-500': tag === currentTag
        }"
        @click="$emit('update:currentTag', tag)"
      >
        {{ tag }}
      </button>
    </div>
  `,

  props: {
    initialTags: Array,
    currentTag: String
  },

  computed: {
    tags() {
      return ['all', ...new Set(this.initialTags)]
    }
  }
}
