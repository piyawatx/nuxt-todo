export const state = () => ({
  tasks: [],
})

export const mutations = {
  addTask(state, task) {
    state.tasks = [{ content: task, done: false }, ...state.tasks]
  },
  removeTask(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1)
  },
  toggleTask(state, task) {
    task.done = !task.done
  },
  setTasks(state, tasks) {
    state.tasks = tasks
  },
}

export const actions = {
  saveTasks({ state }) {
    const parsed = JSON.stringify(state.tasks)
    localStorage.setItem('tasks', parsed)
    console.log(localStorage.tasks)
  },
}
