import Head from 'next/head'
import { useEffect } from 'react'
import { Header } from '../components/header'
import { AddTodo } from '../containers/addTodo'
import { TodoList } from '../containers/todoList'
import { useTodosStore } from '../store/todos'

export default function Home() {
  const { todos, getTodos } = useTodosStore()

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div>
      <Head>
        <title>ToDo app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <AddTodo />
        <TodoList {...{ todos }} />
      </main>
    </div>
  )
}
