import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { getTasks } from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Tasks</h1>
      <button onClick={() => setFormVisible(true)} className="bg-yellow-400 px-4 py-2 rounded">New Task</button>
      {formVisible && <TaskForm task={selectedTask} onClose={() => setFormVisible(false)} reload={loadTasks} />}
      <TaskList tasks={tasks} reload={loadTasks} setTask={setSelectedTask} setFormVisible={setFormVisible} />
    </div>
  );
}
export default App;
