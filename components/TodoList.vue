<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-4 middle">
            <h4>Title</h4>
          </div>
          <div class="col middle">
            <p>Description</p>
          </div>
          <div class="col-2 middle">
            <p style="text-align: left">Done</p>
          </div>
        </div>
      </li>
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
}
</script>
