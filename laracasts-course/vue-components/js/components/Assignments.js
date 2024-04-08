import AssignmentsList from './AssignmentsList.js'
import AssignmentForm from './AssignmentForm.js'

export default {
  components: {
    AssignmentsList,
    AssignmentForm
  },

  template: `
    <section class="flex gap-8">
      <assignments-list :assignments="filters.todo" title="Todo" >
        <assignment-form @add="add" />
      </assignments-list>
  
      <div v-show="showCompleted">
        <assignments-list 
          :assignments="filters.completed" 
          title="Completed" 
          can-toggle 
          @toggle="showCompleted = !showCompleted"
        />
      </div>

    </section>
  `,

  data() {
    return {
      assignments: [],
      showCompleted: true
    }
  },

  computed: {
    filters() {
      return {
        todo: this.assignments.filter(a => !a.complete),
        completed: this.assignments.filter(a => a.complete)
      }
    }
  },

  created() {
    fetch('http://localhost:3001/assignments')
      .then(response => response.json())
      .then(data => {
        this.assignments = data
      })
      .catch(error => console.error(error))
  },

  methods: {
    add(newAssignment) {
      this.assignments.push({
        id: this.assignments.length + 1,
        name: newAssignment,
        complete: false
      })
    }
  }
}
