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
    editTodo(todo) {
      this.$store.dispatch('editTodo', todo)
    },
  },
}
</script>
