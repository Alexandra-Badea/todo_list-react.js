import React from 'react';
import Form from './Form'

const Button = ({ setShowForm, showForm, inputValue, setInputValue, todos, setTodos }) => {
    const handleShowForm = () => {
        setShowForm(!showForm);
    }

  return (
    <div>
        <button className="add-task" onClick={handleShowForm}>Add Task</button>
        {showForm ? <Form todos={todos} setTodos={setTodos} inputValue={inputValue} setInputValue={setInputValue} setShowForm={setShowForm} showForm={showForm} /> : null}
    </div>
  )
}

export default Button