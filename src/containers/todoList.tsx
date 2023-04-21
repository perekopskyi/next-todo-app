// todoList.js renders the todo list gotten from the Strapi backend.
import { TodoItem } from '../components/todoItem'
import { ExistedTodo } from '../helpers/types'

export const TodoList = ({ todos }: { todos: ExistedTodo[] }) => (
  <div className="todoListContainer">
    <div className="todosText">Todos</div>
    {todos.map((todo: ExistedTodo, i: number) => (
      <TodoItem todo={todo} key={i} />
    ))}
  </div>
)
