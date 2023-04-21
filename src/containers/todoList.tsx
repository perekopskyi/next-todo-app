// todoList.js renders the todo list gotten from the Strapi backend.
import { Paper } from '../components/common/UI'
import { TodoItem } from '../components/todoItem'
import { ExistedTodo } from '../helpers/types'
import { useTodosStore } from '../store/todos'

export const TodoList = () => {
  const { todos, error } = useTodosStore()
  return (
    <Paper className="mt-2 w-full">
      <div className="pb-1 border-solid border-black border-b-2">Todos</div>
      {error ? (
        <p className="text-red-500 text-base">{error}</p>
      ) : (
        todos.map((todo: ExistedTodo, i: number) => (
          <TodoItem todo={todo} key={i} />
        ))
      )}
    </Paper>
  )
}
