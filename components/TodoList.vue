<template>
  <div>
    <ul v-if="todoItems.length > 0" class="list-group">
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
    <div v-else>
      <h2 style="text-align: center; color: #006666; margin-top: 2em">
        The list is empty :( <br /><br />
        Start by adding todos above! :)
      </h2>
    </div>
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
      // this.$store.dispatch('editTodo', todo)
      this.$store.dispatch('editTodo', {
        id: todo.id,
        title: todo.title,
        description: todo.description,
      })
    },
  },
}
</script>
