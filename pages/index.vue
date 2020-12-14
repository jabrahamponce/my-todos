<template>
  <div class="container">
    <div class="col-lg-10 col-md-11 col-sm-11 col-xs-11">
      <h1>My TODOs</h1>
      <br />
      <div>
        <form @submit.prevent="onSubmit">
          <div class="row">
            <div class="col">
              <p>Title</p>
              <input
                v-model="title"
                class="form-control"
                aria-label="ToDo Title"
              />
            </div>
            <div class="col">
              <p>Description</p>
              <input
                v-model="description"
                class="form-control"
                aria-label="ToDo Description"
              />
            </div>
          </div>
          <br />
          <button
            class="btn btn-outline-success"
            type="button"
            @click="onSubmit"
          >
            Add ToDo
          </button>
        </form>
        <br />
      </div>
      <TodoList :todo-items="ToDos" />
      <!-- <p>ToDos array</p>
      <p>{{ ToDos }}</p> -->
      <br /><br /><br /><br /><br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddTodoPage',
  data() {
    return {
      ToDos: [],
      id: '',
      title: '',
      description: '',
    }
  },
  methods: {
    onSubmit() {
      this.ToDos.push({
        id: this.ToDos.length + 1,
        title: this.title,
        description: this.description,
      })
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 40px;
}
p {
  text-align: left;
  font-weight: bold;
}
</style>
