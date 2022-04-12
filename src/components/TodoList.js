import React from 'react';
import { useState } from 'react';
import TodoInput from './TodoInput'
import Todos from './Todos';

export default function TodoList() {

    //State array which holds all todos
    const [todos, setTodos] = useState([]);

    //Add a task to list
    const addTask = task => {
        if (!task.text) {
            return
        }

        const newTodos = [task,...todos];
        setTodos(newTodos);
    }

    //Remove task from list
    const removeTask = id => {
        let updatedTasks = [...todos].filter(task => task.id !== id)
        setTodos(updatedTasks)
    }


    //Task is completed
    const completeTask = id => {
        let updatedTasks = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = true;
            }
            return todo;
        })
        setTodos(updatedTasks)
    }

  return (
    <div>
        <TodoInput addTask={addTask}></TodoInput>
        <Todos todos={todos} completeTask={completeTask} removeTask={removeTask} ></Todos>
    </div>
  )
}
