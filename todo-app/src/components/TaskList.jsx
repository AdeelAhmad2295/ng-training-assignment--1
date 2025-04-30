// src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="task-list">
      <h3>Tasks</h3>
      <table>
        <thead>
          <tr>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.assignedTo}</td>
                <td>{task.status}</td>
                <td>{task.dueDate}</td>
                <td>{task.priority}</td>
                <td>{task.description}</td>
                <td>
                  <button onClick={() => onEdit(task)}>Edit</button>
                  <button onClick={() => onDelete(task.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No tasks found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
