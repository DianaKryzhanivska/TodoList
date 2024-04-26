# <p align="center">TodoList</p>

![image](https://github.com/DianaKryzhanivska/TodoList/blob/main/home.png)

![image](https://github.com/DianaKryzhanivska/TodoList/blob/main/register.png)

![image](https://github.com/DianaKryzhanivska/TodoList/blob/main/login.png)

![image](https://github.com/DianaKryzhanivska/TodoList/blob/main/tasks.png)

![image](https://github.com/DianaKryzhanivska/TodoList/blob/main/add.png)

![image](https://github.com/DianaKryzhanivska/TodoList/blob/main/edit.png)

An application for a task management.
The website is designed with a mobile-first approach. Adaptive design with
breakpoints 320px, 375px, 768px, 1440px. Modal windows for Add task, Edit tasks.

Own API was created for the application [TodoList Backend API](https://github.com/DianaKryzhanivska/TodoList-backend)

The possibility of authorization was added to the
application (registration, login, obtaining data about the current user, logout)

It has 4 pages:

- Home page - /home | Page designed to show what this application offers.
- Register page - /register | Register form created with formik and yup libraries.
- Login page - /login | Login form created with formik and yup libraries.
- Tasks page - /tasks | Page displaying a list of tasks where user can mark tasks as completed,
  add new assignments, edit the task text and change the order of tasks by dragging.

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [styled-components](https://styled-components.com)

Additionally libraries used: react-beautiful-dnd, axios, formik, nanoid, yup, react-icons,
react-toastify, react-responsive.

## Installation

1. Clone this repository to your local computer.
2. Open a terminal and navigate to the root of your project.
3. Run `npm install` command to install project dependencies.
4. Run the `npm start` command to start the application's web server
