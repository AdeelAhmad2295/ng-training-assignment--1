package com.todo.controller;

import com.todo.model.Task;
import com.todo.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class TaskController {

    @Autowired
    private TaskService service;

    @GetMapping("/tasks")
    public List<Task> getAllTasks() {
        return service.getAllTasks();
    }

    @PostMapping("/task")
    public Task createTask(@RequestBody Task task) {
        return service.saveTask(task);
    }
    @PostMapping("/task/{id}")
    public Task updateTask(@PathVariable Long id,@RequestBody Task task) {
    	return service.updateTask(id, task);
    }

//    @PutMapping("/task/{id}")
//    public Task updateTask(@PathVariable Long id, @RequestBody Task task) {
//        return service.updateTask(id, task);
//    }

    @DeleteMapping("/task/{id}")
    public void deleteTask(@PathVariable Long id) {
        service.deleteTask(id);
    }
}
