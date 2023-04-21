import Head from 'next/head'
import { useEffect } from 'react'
import { Header } from '../components/header'
import { AddTodo } from '../containers/addTodo'
import { TodoList } from '../containers/todoList'
import { useTodosStore } from '../store/todos'

export default function Home() {
  const { getTodos } = useTodosStore()

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div className="bg-sky-50">
      <div className="container mx-auto">
        <Head>
          <title>ToDo app</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="py-3 flex flex-col items-center justify-center flex-1">
          <AddTodo />
          <TodoList />
        </main>
      </div>
    </div>
  )
}
