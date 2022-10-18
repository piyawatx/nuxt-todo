<template>
  <div>
    <h1>Task Board</h1>
    <p>Create a list of tasks</p>
    <div>
      <input
        type="text"
        v-model="newTask"
        placeholder="Add a new task"
        @keypress.enter="addTask"
      />
      <button @click="addTask">Add</button>
    </div>
    <div>
      <Task v-for="(task, i) in $store.state.tasks" :key="i" :task="task" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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
      }
    },
  },
}
</script>
