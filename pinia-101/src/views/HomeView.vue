<template>
  <div>
    <p>{{ taskStore.name }}</p>
  </div>
</template>

<script>
import { useTaskStore } from '@/stores/modules/task'

export default {
  setup() {
    const taskStore = useTaskStore()

    return {
      taskStore
    }
  }
}
</script>
