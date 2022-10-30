<template>
  <div
    :class="{
      'row shadow-sm p-2 mb-2 bg-white rounded': !task.done,
      'row shadow-sm p-2 mb-2 rounded': task.done,
    }"
  >
    <div class="col p-0">
      <span :class="{ 'text-decoration-line-through text-muted': task.done }">{{
        task.content
      }}</span>
    </div>
    <div class="col-auto p-0">
      <button
        type="button"
        :class="{
          'btn btn-success btn-sm': !task.done,
          'btn btn-secondary btn-sm ': task.done,
        }"
        @click="toggleDone"
      >
        {{ task.done ? 'Undo' : 'Done' }}
      </button>
      <button
        type="button"
        class="btn btn-danger btn-sm ms-1"
        @click="removeTask"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    toggleDone() {
      this.$store.commit('toggleTask', this.task)
      this.$store.dispatch('saveTasks')
    },
    removeTask() {
      this.$store.commit('removeTask', this.task)
      this.$store.dispatch('saveTasks')
    },
  },
}
</script>

<style>
</style>