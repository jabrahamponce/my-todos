<template>
  <div class="listItem">
    <li class="list-group-item list-group-item-action">
      <div class="row">
        <div class="col-4 middle">
          <h4>{{ title }}</h4>
        </div>
        <div class="col middle">
          <p style="text-align: center">
            {{ description }}
          </p>
        </div>
        <div class="col-1 middle">
          <button
            type="button"
            class="btn btn-outline-danger btn-sm"
            @click="removeItem"
          >
            X
          </button>
        </div>
        <!-- <div class="col-1 middle">
          Deletion will be implemented soon
          <button class="btn btn-danger" @click="removeItem">X</button>
        </div> -->
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
  },
}
</script>
