import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      todos: [],
    },
    mutations: {
      setTodo(state, todo) {
        state.todos = todo
      },
      addTodo(state, todo) {
        state.todos.push(todo)
      },
      removeTodo(state, todoId) {
        // Deletes ToDo based on the Todo id
        const myArr = state.todos
        const index = myArr.findIndex(function (o) {
          return o.id === todoId
        })
        if (index !== -1) myArr.splice(index, 1)
      },
      editTodo(state, todo) {
        const todoIndex = state.loadedPosts.findIndex(
          // Searching the index of a todo in the array. Will return true if found, or false otherwise
          (post) => post.id === todo.id
        )
        state.todos[todoIndex] = todo
      },
    },
    actions: {
      setTodo(vuexContext, todo) {
        vuexContext.commit('setTodo', todo)
      },
      addTodo(vuexContext, todo) {
        vuexContext.commit('addTodo', todo)
      },
      removeTodo(vuexContext, todo) {
        vuexContext.commit('removeTodo', todo)
      },
      editTodo(vuexContext, todo) {},
    },
    getters: {
      loadedTodos(state) {
        return state.todos
      },
    },
  })
}

export default createStore
