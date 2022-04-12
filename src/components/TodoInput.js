import React, { useState } from "react";

export default function TodoInput(props) {
  //State
  const [input, setInput] = useState("");

  const handleChange = e => {
      setInput(e.target.value)
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      props.addTask({
          id: Math.floor(Math.random() * 1000000),
          text: input,
          isComplete: false
        })
        setInput('')
  }

  return (
    <form className = 'todo-form'>
      <input type="text" placeholder="Add a task" onChange={handleChange} className='todo-input' value={input} name='text' />
      <button type="submit" className="todo-btn" onClick={handleSubmit} >ADD TASK</button>
    </form>
  );
}
