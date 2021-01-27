<template>
  <div>
    <ul class="list-group">
      <TodoListItem
        v-for="x in todoItems"
        :id="x.id"
        :key="x.id"
        :title="x.title"
        :description="x.description"
        @delete="deleteById"
        @edit="editTodo"
        @editedTitle="changeName"
        @editedDescription="changeDescription"
      />
    </ul>
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
import TodoListItem from '@/components/TodoListItem'

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
  },
  props: {
    todoItems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    deleteById(todoId) {
      this.$store.dispatch('removeTodo', todoId)
    },
    changeName(nameToChange) {
      // eslint-disable-next-line no-console
      console.log(nameToChange)
    },
    changeDescription(descToChange) {
      // eslint-disable-next-line no-console
      console.log(descToChange)
    },
    editTodo(todo) {
      this.$store.dispatch('editTodo', todo)
    },
  },
}
</script>
