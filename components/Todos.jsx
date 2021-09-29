import Todo from "./Todo"
import styles from '../styles/todos/todos.module.scss'

export default function Todos ({ todos, toggleTodo, deleteTodo }) {

    return (
        <div className={styles.todosContainer}>
            {

                todos.map((todo) => (
                    <Todo deleteEvent={id => deleteTodo(id)} toggleEvent={id => toggleTodo(id)} todo={todo} />
                ))
            }
        </div>
    );
}