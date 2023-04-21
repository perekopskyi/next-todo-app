import axios from 'axios'
import { ExistedTodo } from '../helpers/types'
const BASE_URL_STRAPI = 'http://localhost:1337/api'
const TODOS_URL = `${BASE_URL_STRAPI}/to-dos`

export const api = {
  getTodos: () => axios.get(`${TODOS_URL}`),
  postTodo: (toDoText: string) =>
    axios.post(`${TODOS_URL}`, {
      data: { toDoText },
    }),
  updateTodo: (todo: ExistedTodo) =>
    axios.put(`${TODOS_URL}/${todo.id}`, {
      data: {
        toDoText: todo.toDoText,
      },
    }),
  removeTodo: (todoId: number) => axios.delete(`${TODOS_URL}/${todoId}`),
}
