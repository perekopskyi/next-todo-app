import { useRouter } from 'next/router'
import { useTodosStore } from '../../store/todos'

const TodoPage = () => {
  const router = useRouter()
  const { todos } = useTodosStore()
  const id = Number(router.query.id)
  const todo = todos.find(_ => _.id === id)

  const allData = todo && Object.entries(todo)

  return (
    <div>
      <h2>TodoPage {id} </h2>
      {allData?.map(([key, value]) => (
        <p key={key}>
          {key}: {JSON.stringify(value)}
        </p>
      ))}
    </div>
  )
}

export default TodoPage
