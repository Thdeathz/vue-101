import Assignment from './Assignment.js'
import AssignmentTags from './AssignmentTags.js'
import Panel from './Panel.js'

export default {
  components: {
    Assignment,
    AssignmentTags,
    Panel
  },

  template: `
    <panel v-show="assignments.length" class="w-60" id="todo-list-panel">
      <div class="flex justify-between items-start">
        <h2 class="font-semibold mb-2">
          {{ title }}
          <span>({{ filteredAssignments.length }})</span>
        </h2>

        <button 
          v-show="canToggle"
          @click="$emit('toggle')"
        >
          &times;
        </button>
      </div>
      
      <assignment-tags 
        v-model:currentTag="currentTag"
        :initial-tags="assignments.map(a => a.tag)"
      />

      <ul class="border border-gray-600 divide-y divide-gray-600">
        <assignment v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment" />
      </ul>

      <slot />

      <template #footer>
        my footer
      </template>
    </panel>
  `,

  props: {
    assignments: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: 'Todo'
    },
    canToggle: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      currentTag: 'all'
    }
  },

  computed: {
    filteredAssignments() {
      if (!this.currentTag || this.currentTag === 'all') return this.assignments

      return this.assignments.filter(a => {
        return a.tag === this.currentTag
      })
    }
  }
}
