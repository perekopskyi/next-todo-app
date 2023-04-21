import { StrapiTodo } from './types'

export const transformDataFromStrapi = (todo: StrapiTodo) => {
  return { id: todo.id, ...todo.attributes }
}
