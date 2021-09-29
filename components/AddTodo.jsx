import { useState } from 'react'
import styles from '../styles/todos/todos.module.scss'

export default function AddTodo ({ addTodo }) {
    const [task, setTask] = useState("");

    return (
        <>
            <div className={styles.todoForm}>
                <input type="text" placeholder="Wach khesek sahbé ?" value={task} onChange={e => setTask(e.target.value)} />
                <button onClick={() => { addTodo(task); setTask(""); }}>Add todo</button>
            </div>
        </>
    )
}