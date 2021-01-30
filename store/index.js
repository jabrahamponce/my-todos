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
      editTodo(state, editedTodo) {
        const myArr = state.todos
        const index = myArr.findIndex(function (o) {
          return o.id === editedTodo.id
        })
        if (index !== -1) {
          state.todos[index] = editedTodo
        }
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
      editTodo(vuexContext, editTodo) {
        vuexContext.commit('editTodo', editTodo)
      },
    },
    getters: {
      loadedTodos(state) {
        return state.todos
      },
    },
  })
}

export default createStore
