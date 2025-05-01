# To-Do List Application

A simple and responsive To-Do list web application built using:

- Frontend: React (Vite + Tailwind CSS)
- Backend: Spring Boot (Java)
- Database: MySQL

## Features

- Add new tasks
- View list of tasks
- Edit existing tasks
- Delete tasks
- Responsive UI (mobile + desktop)
- RESTful APIs
- Persistent storage with MySQL

## Project Structure

todo-app/ ├── backend/ # Spring Boot project │ ├── src/main/java/com/example/todo │ └── ... (Controller, Entity, Repository, Service) ├── frontend/ # React project (Vite) │ ├── src/ │ │ ├── components/ │ │ │ ├── TaskForm.jsx │ │ │ └── TaskList.jsx │ │ ├── services/taskService.js │ │ ├── App.jsx │ │ └── main.jsx

## Getting Started

### Backend Setup (Spring Boot + MySQL)

1. Open the backend project in **Eclipse/IntelliJ**.
2. Configure your `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/tododb
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.cors.allowed-origins=http://localhost:5173
Create MySQL database:

CREATE DATABASE tododb;
Run the backend server (TodoApplication.java).

Frontend Setup (React + Vite)
Navigate to the frontend folder:
cd frontend
Install dependencies:

npm install
Start the development server:

npm run dev
Open in browser: http://localhost:5173

API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/task	Create a new task
PUT	/api/task/{id}	Update task by ID
DELETE	/api/task/{id}	Delete task by ID

Tech Stack
React + Vite + Tailwind CSS
Java + Spring Boot
MySQL
Axios (API calls)

Author
Adeel Ahmad Khan..
