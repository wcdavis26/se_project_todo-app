# Simple Todo App

A simple and interactive To-Do List web application that lets users add tasks with due dates using a popup form. Built with modular JavaScript, dynamic DOM manipulation, and client-side form validation.

---

This project allows users to create to-do items through a modal form and renders them dynamically on the page. Each task includes a unique ID and a timezone-aware due date. The form includes live validation for input correctness.

---

## ⚙️ Functionality

- ✅ **Add Task**: Users can click the "Add" button to open a popup and submit a new task.
- 🧾 **Form Validation**: Input is validated in real-time using a custom `FormValidator` class.
- 🆔 **Unique IDs**: Each to-do is given a unique UUID via the `uuid` library.
- 🌐 **Timezone-Aware Dates**: Adjusts input dates to account for timezone offsets.
- 🔁 **Dynamic Rendering**: New tasks are created with the `Todo` class and injected into the DOM.
- 🪟 **Popup Modals**: Reusable open/close modal logic enables clean UI interactions.

---

## 🛠️ Technology

- **HTML & CSS** – Structure and styling of the UI.
- **JavaScript (ES6 Modules)** – Modular architecture:
  - `Todo.js`: A reusable class to generate to-do items.
  - `FormValidator.js`: Custom form validation logic.
  - `constants.js`: Shared configuration and initial data.
- **[uuid](https://www.npmjs.com/package/uuid)** – Used to generate unique identifiers.
- **DOM API** – For manipulating elements and handling events.

## Technology

Give a description of the technologies and techniques used. Pictures, GIFs, or screenshots that detail the project features are recommended.

## Deployment

This project is deployed on GitHub Pages:

- (https://wcdavis26.github.io/se_project_todo-app/)
