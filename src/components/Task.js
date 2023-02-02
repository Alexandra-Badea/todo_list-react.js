import React from 'react'

const Task = ({ text, todos, setTodos, todo, editTaskId, setEditTaskId, newTaskValue, setNewTaskValue }) => {
    const handleCheck = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
    };

    const deleteTask = () => {
        setTodos(todos.filter(elem => elem.id !== todo.id));
    };

    const handleEditTask = (taskId) => {
        setEditTaskId(taskId);
        setNewTaskValue(todo.text);
    };

    const handleTaskValueChange = (e) => {
        setNewTaskValue(e.target.value);
    };

    const handleSaveNewTask = (taskId) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === taskId) {
                    todo.text = newTaskValue
                }
                return todo;
            })
        );
        setEditTaskId(null);
        setNewTaskValue("");
    };
    
  return (
      <div>
          <li>
              {editTaskId === todo.id ? (
                  <div className='edit-task'>
                      <input type="text" value={newTaskValue} onChange={handleTaskValueChange} />
                      <button onClick={() => handleSaveNewTask(todo.id)}>Save</button>
                  </div>
              ) : (
                  <div className="task">
                      <div>
                        <input checked={todo.completed} onChange={() => handleCheck(todo.id)} type="checkbox" />
                        {text}
                      </div>
                      <div className="btn-task">
                        <button onClick={deleteTask}><i className='fas fa-trash'></i></button>
                        <button onClick={() => handleEditTask(todo.id)}><i className='fas fa-edit'></i></button>
                      </div>
                  </div>
              )}
          </li>
      </div>
  )
}

export default Task