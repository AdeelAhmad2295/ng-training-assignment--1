import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSave, onCancel, selectedTask }) => {
  const [task, setTask] = useState({
    assignedTo: '',
    status: 'Not Started',
    dueDate: '',
    priority: 'Normal',
    description: ''
  });

  useEffect(() => {
    if (selectedTask) {
      setTask(selectedTask);
    }
  }, [selectedTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
    setTask({ assignedTo: '', status: 'Not Started', dueDate: '', priority: 'Normal', description: '' });
  };

  return (
    <div className="modal">
      <h2>New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Assigned To:</label>
        <input name="assignedTo" value={task.assignedTo} onChange={handleChange} required />

        <label>Status:</label>
        <select name="status" value={task.status} onChange={handleChange} required>
          <option>Not Started</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <label>Due Date:</label>
        <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />

        <label>Priority:</label>
        <select name="priority" value={task.priority} onChange={handleChange} required>
          <option>Low</option>
          <option>Normal</option>
          <option>High</option>
        </select>

        <label>Description:</label>
        <textarea name="description" value={task.description} onChange={handleChange}></textarea>

        <div>
          <button type="button" onClick={onCancel}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
