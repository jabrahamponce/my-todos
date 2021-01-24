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
          @click="editItem"
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
      <br /><br />
      <div>
        <p style="text-align: center">
          {{ description }}
        </p>
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
  methods: {
    removeItem() {
      // this.id is being $emit-ted to be used in the TodoList.vue component
      // Used as @delete="alertId"
      this.$emit('delete', this.id)
    },
    editItem() {
      // this.id is being $emit-ted to be used in the TodoList.vue component
      // Used as @edit="alertId"
      this.$emit('edit', this.id)
    },
  },
}
</script>
