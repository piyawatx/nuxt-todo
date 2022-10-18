<template>
  <div>
    <div>{{ task.content }}</div>
    <div>
      <button @click="toggleDone">{{ task.done ? 'Undo' : 'Done' }}</button>
      <button @click="removeTask">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    toggleDone() {
      this.$store.commit('toggleTask', this.task)
    },
    removeTask() {
      this.$store.commit('removeTask', this.task)
    },
  },
}
</script>

<style>
</style>