<template>
  <div>
    <ul class="list-group">
      <TodoListItem
        v-for="x in todoItems"
        :id="x.id"
        :key="x.id"
        :title="x.title"
        :description="x.description"
      />
    </ul>
  </div>
</template>

<style scoped></style>

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
}
</script>
