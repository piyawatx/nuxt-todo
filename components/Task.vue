<template>
  <div class="row shadow-sm p-2 mb-2 bg-white rounded">
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
    },
    removeTask() {
      this.$store.commit('removeTask', this.task)
    },
  },
}
</script>

<style>
</style>