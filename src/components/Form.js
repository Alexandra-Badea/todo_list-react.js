import React from 'react'

const Form = ({ todos, setTodos, showForm, setShowForm, inputValue, setInputValue }) => {


  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    setTodos([
        ...todos, {text: inputValue, completed: false, id: Math.random() * 1000}
    ])
    setInputValue('');
  };

  const handleCancelForm = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  }

  return (
    <div>
        <form>
            <h2>Add TODO</h2>

            <label htmlFor="title">Title</label>
            <input value={inputValue} onChange={inputValueHandler} type="text" id="title" name="title" />

            <button onClick={handleAddTask}>Add Task</button>
            <button className="btn-cancel" onClick={handleCancelForm}>Cancel</button>
        </form>
    </div>
  )
}

export default Form