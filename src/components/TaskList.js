import React from 'react'
import Task from './Task'

const TaskList = ({ todos, setTodos, checkboxValue, setCheckboxValue, filteredTodos, editTaskId, setEditTaskId, newTaskValue, setNewTaskValue }) => {
  return (
    <div>
        <ul>
            {filteredTodos.map((todo) => (
                <Task newTaskValue={newTaskValue} setNewTaskValue={setNewTaskValue} editTaskId={editTaskId} setEditTaskId={setEditTaskId} todos={todos} todo={todo} checkboxValue={checkboxValue} setCheckboxValue={setCheckboxValue} text={todo.text} key={todo.id} setTodos={setTodos} />
            ))}
        </ul>
    </div>
  )
}

export default TaskList