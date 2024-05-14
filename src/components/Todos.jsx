import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"

export default function Todos(){
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
        <h1>Tareas</h1>
        <ul className="list-none">
            {todos && todos.length > 0 ?
                todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <div className="text-white">{todo.text}</div>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            Eliminar
                        </button>

                    </li>
                ))
                : null
            }
        </ul>
        </>
    )
}