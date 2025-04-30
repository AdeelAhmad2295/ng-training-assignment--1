package com.todo.service;

import com.todo.model.Task;
import com.todo.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository repo;

    public List<Task> getAllTasks() {
        return repo.findAll();
    }

    public Task saveTask(Task task) {
        return repo.save(task);
    }

    public Optional<Task> getTaskById(Long id) {
        return repo.findById(id);
    }

    public void deleteTask(Long id) {
        repo.deleteById(id);
    }

    public Task updateTask(Long id, Task taskDetails) {
        Task task = repo.findById(id).orElseThrow();
        task.setAssignedTo(taskDetails.getAssignedTo());
        task.setStatus(taskDetails.getStatus());
        task.setDueDate(taskDetails.getDueDate());
        task.setPriority(taskDetails.getPriority());
        task.setComments(taskDetails.getComments());
        return repo.save(task);
    }
}
