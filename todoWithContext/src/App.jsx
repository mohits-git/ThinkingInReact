import { useEffect, useState } from 'react'
import './App.css'
import { TodoForm, TodoItem } from './components';
import { TodoProvider } from './contexts';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const ourTodos = JSON.parse(localStorage.getItem('todos'))

        if(ourTodos && ourTodos.length > 0) {
            setTodos(ourTodos);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const addTodo = (todo) => {
        const newTodo = {
            id: Date.now(),
            ...todo
        }
       setTodos((prev) => [newTodo, ...prev])
    }
    const updateTodo = (id, todo) => {
       setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))); 
    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    }

    const toggleComplete = (id) => {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id !== id ? prevTodo : { ... prevTodo, completed: !prevTodo.completed})))
    }

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div key={todo.id} className='w-full'>
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
      </TodoProvider>
  )
}

export default App
