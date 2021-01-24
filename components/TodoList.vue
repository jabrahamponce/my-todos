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
        @edit="editById"
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
      // This todoId parameter comes from the TodoListItem component
      // alert(todoId)
      this.$store.dispatch('removeTodo', todoId)
    },
    editById(todoId) {
      // This todoId parameter comes from the TodoListItem component
      // alert('Todo Edit functionality will be soon implemented. ', todoId)
      // this.$store.dispatch('removeTodo', todoId)
    },
  },
}
</script>
