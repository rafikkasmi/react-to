import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Todos from '../components/Todos'
import AddTodo from '../components/AddTodo'
import { useState, useEffect } from 'react'
export default function Home () {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Math.floor(Math.random() * 100000), task, completed: false }]);
  };
  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id != id)]);
    console.log(todos)
  };
  const toggleTodo = (id) => {
    setTodos([...todos.map(el => {
      if (el.id === id)
        el.completed = !el.completed;
      return el
    })])
  };
  //updating localstorage on change of todos
  useEffect(() => {
    if (!!!todos?.length) return
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  //on mount side effect
  useEffect(() => {
    const todosFromLS = localStorage.getItem("todos")
    setTodos(JSON.parse(todosFromLS))
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>My All Mighty Todo list</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
      </Head>

      <h1 className={styles.headerText}>My All Mighty Todo-List</h1>

      <main className={styles.main}>
        <AddTodo addTodo={addTodo} />
        {
          !!todos?.length ?
            <Todos deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={todos} />
            : <h1>You have no items</h1>
        }
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by{' '}
          <a href="https://github.com/rafikkasmi" target="_blank"><img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /></a>
        </a>
      </footer>
    </div>
  )
}
