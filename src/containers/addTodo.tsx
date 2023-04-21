import { useState } from 'react'
import { useTodosStore } from '../store/todos'

// addTodo.js is where new todos are added to our backend.
export const AddTodo = () => {
  const [todoText, setTodoText] = useState('')
  const { addTodo } = useTodosStore()

  const submitHandler = () => {
    addTodo(todoText)
    setTodoText('')
  }

  return (
    <div className="addTodoContainer">
      <input
        className="todoInputText"
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
      <input
        className="todoInputButton"
        type="button"
        value="Add Todo"
        onClick={submitHandler}
      />
    </div>
  )
}
