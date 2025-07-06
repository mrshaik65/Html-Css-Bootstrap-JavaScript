Task Manager Application

A simple task management application that allows users to create, display, and manage tasks.

Features

- Create tasks with a name and completion status
- Display tasks dynamically with checkboxes and delete buttons
- Mark tasks as completed or incomplete by checking/unchecking the checkbox
- Delete tasks by clicking the delete button
- Save tasks to local storage using JSON.stringify
- Retrieve tasks from local storage using JSON.parse when the page is reloaded

Usage

1. Open the application in a web browser.
2. Enter a task name in the input field and click the "Add Task" button to create a new task.
3. Check the checkbox next to a task to mark it as completed.
4. Click the delete button next to a task to remove it from the list.
5. Click the "Save Tasks" button to save the tasks to local storage.

Code Structure

- HTML: Defines the basic structure of the application, including the form, task list, and buttons.
- JavaScript: Handles user interactions, creates and manages tasks, and saves/retrieves tasks to/from local storage.
- CSS: Defines the styles for the application, including the completed task style.

Local Storage

- The application uses local storage to persist tasks between page reloads.
- Tasks are stored as a JSON string using JSON.stringify.
- Tasks are retrieved from local storage using JSON.parse when the page is reloaded.

Browser Compatibility

- The application should work in modern web browsers that support HTML5, CSS3, and JavaScript.

I hope this helps! Let me know if you have any questions or need further modifications.
