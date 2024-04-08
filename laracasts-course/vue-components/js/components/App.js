import Assignments from './Assignments.js'
import Panel from './Panel.js'

export default {
  components: {
    Assignments,
    Panel
  },

  template: `
    <div class="grid gap-6">
      <assignments />

      <panel>
        This is the default slot content
      </panel>

      <panel>
        <template #heading>
          <h2 class="text-xl">Custom heading</h2>
        </template>

        This is the default slot content
      </panel>

      <panel theme="light">
        This is the default slot content

        <template #footer>
          <p class="text-sm">Custom footer</p>
        </template>
      </panel>
    </div>
  `
}
