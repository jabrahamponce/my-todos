<template>
  <div class="listItem">
    <li class="list-group-item list-group-item-action">
      <div class="listItem-title">
        <h1 class="display-6" style="display: inline; vertical-align: middle">
          {{ title }}
        </h1>
        <button
          type="button"
          class="btn btn-small btn-outline-success btn-sm"
          style="display: inline"
          @click="enableEditMode"
        >
          <i class="bi-pen"></i>
        </button>
        <button
          type="button"
          class="btn btn-outline-danger btn-sm"
          style="display: inline"
          @click="removeItem"
        >
          <i class="bi-trash"></i>
        </button>
      </div>
      <br />
      <div>
        <p style="text-align: left">
          {{ description }}
        </p>
      </div>
      <div v-if="editMode">
        <form @submit.prevent="onSubmit">
          <div class="col col-sm-8" style="display: block; margin: 0 auto">
            <p style="text-align: center">Title</p>
            <input
              v-model="editedTodo.title"
              class="form-control"
              aria-label="ToDo Title"
            />
          </div>
          <div
            class="col col-sm-8"
            style="display: block; margin: 0 auto; margin-top: 10px"
          >
            <p style="text-align: center">Description</p>
            <textarea
              v-model="editedTodo.description"
              class="form-control"
              aria-label="ToDo Description"
            />
          </div>
          <br />
          <div style="text-align: center">
            {{ editedTodo }}
            <button
              class="btn btn-outline-success"
              style="margin: 0 auto"
              type="button"
              @click="updateTodoInfo"
            >
              Update ToDo
            </button>
          </div>
        </form>
      </div>
    </li>
  </div>
</template>

<style scoped>
.middle {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script>
export default {
  name: 'TodoListItem',
  props: {
    description: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      editMode: false,
      editedTodo: {
        id: this.getId(),
        title: '',
        description: '',
      },
    }
  },
  methods: {
    removeItem() {
      // this.id is being $emit-ted to be used in the TodoList.vue component
      // Used as @delete="alertId"
      this.$emit('delete', this.id)
    },
    getId() {
      return this.id
    },
    enableEditMode() {
      // This method enables a todoItem to be edited.
      this.editMode = !this.editMode
    },
    updateTodoInfo() {
      // this.title = this.editedTodo.title
      // this.description = this.editedTodo.description
      this.$emit('edit', this.editedTodo)
      this.enableEditMode()
      this.$router.push('/')
    },
    clearForm() {
      this.editedTodo.title = ''
      this.editedTodo.description = ''
    },
  },
}
</script>
