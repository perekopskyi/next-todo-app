import { ExistedTodo } from '../helpers/types'
import { useTodosStore } from '../store/todos'

interface TodoItem {
  todo: ExistedTodo
}

export const TodoItem = ({ todo }: TodoItem) => {
  const { editTodo, removeTodo } = useTodosStore()
  return (
    <div className="todoItem">
      <div className="todoItemText">{todo.toDoText}</div>
      <div className="todoItemControls">
        <i className="todoItemControlEdit">
          <button className="bg-default" onClick={() => editTodo(todo)}>
            Edit
          </button>
        </i>
        <i className="todoItemControlDelete">
          <button className="bg-danger" onClick={() => removeTodo(todo)}>
            Del
          </button>
        </i>
      </div>
    </div>
  )
}
