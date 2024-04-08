export default {
  template: `
    <li>
      <label class="p-2 flex justify-between items-center gap-6">
        {{ assignment.name }} <input type="checkbox" v-model="assignment.complete" />
      </label>
    </li>
  `,

  props: {
    assignment: {
      type: Object,
      required: true
    }
  }
}
