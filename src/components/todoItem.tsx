import Link from 'next/link'
import { ExistedTodo } from '../helpers/types'
import { useTodosStore } from '../store/todos'
import { useConfirmation } from './common/Alert'
import { Button, ButtonType } from './common/Button'
import Swal from 'sweetalert2'

interface TodoItem {
  todo: ExistedTodo
}

export const TodoItem = ({ todo }: TodoItem) => {
  const { editTodo, removeTodo } = useTodosStore()
  const confirmation = useConfirmation({
    text: 'Do you really want to delete this item?',
  })

  const removeHandler = async () => {
    if (await confirmation()) {
      removeTodo(todo)
    }
  }

  const editHandler = async () => {
    const { isConfirmed, value } = await Swal.fire({
      input: 'text',
    })
    if (isConfirmed && value.trim().length !== 0)
      editTodo({ ...todo, toDoText: value })
  }

  return (
    <div className="bg-white py-1 px-2 mt-1 rounded-md shadow-md flex items-center justify-between">
      <Link
        href={`/todo/${todo.id}`}
        className="todoItemText font-medium text-gray-800 hover:underline"
      >
        {todo.toDoText}
      </Link>
      <div className="todoItemControls flex ml-4">
        <Button type={ButtonType.secondary} onClick={editHandler}>
          Edit
        </Button>
        <Button type={ButtonType.danger} onClick={removeHandler}>
          Del
        </Button>
      </div>
    </div>
  )
}
