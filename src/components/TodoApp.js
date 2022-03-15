import React, { useState } from 'react';
import "../App.css"

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value)
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className='input'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    )

}

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    return (
        <div
            className='todo'
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>
    )
}

const TodoApp = () => {
    const [todos, setTodos] = useState([
        {
            text: "Learn python",
            isCompleted: false
        },
        {
            text: "Participate in Job interview",
            isCompleted: false
        },
        {
            text: "Show off this cool todo app",
            isCompleted: false
        }
    ])

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="todo-list">
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                />
            ))}
            <TodoForm addTodo={addTodo} />
        </div>
    );
}

export default TodoApp;
