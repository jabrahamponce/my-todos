<template>
  <div>
    <h1 class="main-title">My TODOs</h1>
    <br />
    <form @submit.prevent="onSubmit">
      <div class="col col-sm-8" style="display: block; margin: 0 auto">
        <p style="text-align: center">Title</p>
        <input v-model="title" class="form-control" aria-label="ToDo Title" />
      </div>
      <div
        class="col col-sm-8"
        style="display: block; margin: 0 auto; margin-top: 10px"
      >
        <p style="text-align: center">Description</p>
        <input
          v-model="description"
          class="form-control"
          aria-label="ToDo Description"
        />
      </div>
      <br />
      <div style="text-align: center">
        <button
          class="btn btn-outline-success"
          style="margin: 0 auto"
          type="button"
          @click="onSubmit"
        >
          Add ToDo
        </button>
      </div>
    </form>
    <br />
    <TodoList
      :todo-items="loadedTodos"
      class="col col-sm-8"
      style="margin: 0 auto"
    />
    <br /><br /><br /><br /><br />
  </div>
</template>

<script>
export default {
  name: 'AddTodoPage',
  data() {
    return {
      ToDos: [],
      id: 0,
      title: '',
      description: '',
    }
  },
  computed: {
    loadedTodos() {
      return this.$store.getters.loadedTodos
    },
  },
  methods: {
    onSubmit() {
      if (this.title === '' || this.description === '') {
        alert('Both fields need to have text.')
      } else {
        this.id = this.id + 1
        this.$store.dispatch('addTodo', {
          id: this.id,
          title: this.title,
          description: this.description,
        })
        this.clearFields()
      }
    },
    clearFields() {
      this.title = ''
      this.description = ''
    },
  },
}
</script>

<style>
.main-title {
  text-align: center;
  margin-top: 1em;
}
p {
  text-align: left;
  margin-bottom: 0;
}
.todoForm {
  align-content: center;
}
</style>
