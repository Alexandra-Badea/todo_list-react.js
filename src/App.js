import { useState } from "react";
import './App.css';
import Button from './components/Button';
import SelectStatus from './components/SelectStatus';
import TaskList from "./components/TaskList";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [filter, setFilter] = useState("all");
  const [editTaskId, setEditTaskId] = useState(null);
  const [newTaskValue, setNewTaskValue] = useState("");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed" && todo.completed) return true;
    if (filter === "uncompleted" && !todo.completed) return true;
    return false;
  });

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <header>
        <Button todos={todos} setTodos={setTodos} inputValue={inputValue} setInputValue={setInputValue} setShowForm={setShowForm} showForm={showForm} />
        <SelectStatus filter={filter} setFilter={setFilter} />
      </header>
      
      <TaskList newTaskValue={newTaskValue} setNewTaskValue={setNewTaskValue} editTaskId={editTaskId} setEditTaskId={setEditTaskId} filteredTodos={filteredTodos} checkboxValue={checkboxValue} setCheckboxValue={setCheckboxValue} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
