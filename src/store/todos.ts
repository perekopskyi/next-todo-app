import { create } from 'zustand'
import { api } from '../api'
import { ExistedTodo, StrapiTodo } from '../helpers/types'
import { transformDataFromStrapi } from '../helpers/utils'

interface TodosState {
  todos: ExistedTodo[]
  getTodos: () => void
  addTodo: (todoText: string) => void
  editTodo: (todo: ExistedTodo) => void
  removeTodo: (todo: ExistedTodo) => void
}

export const useTodosStore = create<TodosState>()(set => ({
  todos: [],
  getTodos: async () => {
    const response = await api.getTodos()
    const todos = response.data.data
      .map((todo: StrapiTodo) => transformDataFromStrapi(todo))
      .sort((a: ExistedTodo, b: ExistedTodo) =>
        b.createdAt.localeCompare(a.createdAt)
      )
    set({ todos })
  },
  addTodo: async (todoText: string) => {
    const response = await api.postTodo(todoText)
    const addedTodo = transformDataFromStrapi(response.data.data)
    set(state => ({
      todos: [...state.todos, addedTodo].sort(
        (a: ExistedTodo, b: ExistedTodo) =>
          b.createdAt.localeCompare(a.createdAt)
      ),
    }))
  },
  editTodo: async todo => {
    const response = await api.updateTodo(todo)
    set(state => ({
      todos: state.todos.map(_todo =>
        _todo.id === todo.id
          ? transformDataFromStrapi(response.data.data)
          : _todo
      ),
    }))
  },
  removeTodo: async todo => {
    await api.removeTodo(todo.id)
    set(state => ({
      todos: state.todos.filter(({ id }) => id !== todo.id),
    }))
  },
}))
