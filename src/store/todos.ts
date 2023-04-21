import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
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

export const useTodosStore = create<TodosState>()(
  devtools(
    persist(
      set => ({
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
          const newTodoText = prompt('Enter new todo text or description:')
          if (newTodoText != null) {
            const response = await api.updateTodo({
              ...todo,
              toDoText: newTodoText,
            })
            set(state => ({
              todos: state.todos.map(_todo =>
                _todo.id === todo.id
                  ? transformDataFromStrapi(response.data.data)
                  : _todo
              ),
            }))
          }
        },
        removeTodo: async todo => {
          if (confirm('Do you really want to delete this item?')) {
            await api.removeTodo(todo.id)
            set(state => ({
              todos: state.todos.filter(({ id }) => id !== todo.id),
            }))
          }
        },
      }),
      {
        name: 'todos-storage',
      }
    )
  )
)
