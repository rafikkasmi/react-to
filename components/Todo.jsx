import styles from '../styles/todos/todos.module.scss'

export default function Todo ({ todo, toggleEvent, deleteEvent }) {

    return (
        <div className={`${styles.todoElement} ${todo.completed ? styles.todoContainerCompleted : ''}`}>
            <p className={todo.completed ? styles.todoCompleted : ''}>{todo.task}</p>
            <button onClick={() => toggleEvent(todo.id)}><i className={`far fa-${!todo.completed ? 'check' : 'times'}`}></i></button>
            <button className={styles.delete} onClick={() => deleteEvent(todo.id)}><i className="far fa-trash-alt"></i></button>
        </div>
    )
}