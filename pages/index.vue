<template>
  <div class="container-fluid p-0 min-vh-100 bg-light" >
    <div class="container py-3" style="max-width: 720px">
      <div class="text-center">
        <h1>Task Board</h1>
        <p class="fs-5">Create a list of tasks</p>
      </div>

      <div class="d-flex justify-content-center pb-3">
        <div class="flex-fill me-3">
          <input
            type="text"
            class="form-control border-0 border-bottom bg-transparent"
            v-model="newTask"
            placeholder="Add a new task"
            @keypress.enter="addTask"
          />
        </div>
        <div>
          <button
            type="button"
            class="btn btn-success shadow-sm"
            @click="addTask"
          >
            Add
          </button>
        </div>
      </div>
      <div>
        <Task v-for="(task, i) in $store.state.tasks" :key="i" :task="task" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    if (localStorage.getItem('tasks')) {
      try {
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        this.$store.commit('setTasks', tasks)
      } catch (e) {
        localStorage.removeItem('tasks')
      }
    }
  },
  data() {
    return {
      newTask: '',
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit('addTask', this.newTask)
        this.newTask = ''
        this.$store.dispatch('saveTasks')
      }
    },
  },
}
</script>
