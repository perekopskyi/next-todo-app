// todoList.js renders the todo list gotten from the Strapi backend.
import { Paper } from '../components/common/UI'
import { TodoItem } from '../components/todoItem'
import { ExistedTodo } from '../helpers/types'

export const TodoList = ({ todos }: { todos: ExistedTodo[] }) => (
  <Paper className="mt-2 w-full">
    <div className="pb-1 border-solid border-black border-b-2">Todos</div>
    {todos.map((todo: ExistedTodo, i: number) => (
      <TodoItem todo={todo} key={i} />
    ))}
  </Paper>
)
