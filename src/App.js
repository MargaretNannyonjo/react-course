import "./App.css";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  //TODO LIST APP...
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setToDoList([...toDoList, task]);
    setNewTask("");
  };

  const completeTask = (id) => {
    setToDoList(
      toDoList.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  //FETCHING DATA USING APIS
  const [catFact, setCatfact] = useState("");
  useEffect(() => {
    Axios.get("https//:catfact.ninja/fact").then((res) => {
      setCatfact(res.data.fact);
    });
  }, []);

  const generateFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatfact(res.data.fact);
    });
  };

  return (
    <div className="App">
      TODO LIST OUTPUT
      <div className="addTask">
        <input value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {toDoList.map((task) => (
          <div
            key={task.id}
            style={{ backgroundColor: task.completed ? "green" : "red" }}
          >
            <h1>{task.taskName}</h1>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => completeTask(task.id)}>Complete</button>
          </div>
        ))}
      </div>
      {/* //FETCHING DATA USING APIS */}
      <button onClick={generateFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
