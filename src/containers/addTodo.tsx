import { useState } from 'react'
import { useTodosStore } from '../store/todos'
import { Alert } from '../components/common/Alert'
import { Button, ButtonType } from '../components/common/Button'
import { Paper } from '../components/common/UI'

// addTodo.js is where new todos are added to our backend.
export const AddTodo = () => {
  const [todoText, setTodoText] = useState('')
  const { addTodo } = useTodosStore()

  const submitHandler = () => {
    if (todoText.trim().length === 0) {
      return Alert({ text: 'Please fill the text field' })
    }
    addTodo(todoText)
    setTodoText('')
  }

  return (
    <Paper className="w-full flex">
      <input
        className=" px-4 py-2 text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent grow"
        type="text"
        placeholder="Add new todo here..."
        id="todoText"
        onKeyDown={e => {
          if (e.code === 'Enter') {
            submitHandler()
          }
        }}
        onChange={event => setTodoText(event.target.value)}
        value={todoText}
      />
      <Button type={ButtonType.primary} onClick={submitHandler}>
        Add Todo
      </Button>
    </Paper>
  )
}
