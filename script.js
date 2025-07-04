let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function displayTasks() {
    const myTasksElement = document.getElementById('my-tasks');
    myTasksElement.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.innerHTML = `
    <div class=" taskss py-2 lh-base" style="background-color: rgba(231, 246, 252, 0.78)">
      <input class="" type="checkbox" id="checkbox-${index}" ${task.completed ? 'checked' : ''}>
      <span id="task-${index}" class="${task.completed ? 'completed' : ''}">${task.name}</span>
      <button class="btn position-absolute" style=" right: 10px;  margin-top: -8px;"  onclick="deleteTask(${index})">🗑</button></div>
    `;
        taskElement.querySelector('input[type="checkbox"]').addEventListener('change', () => {
            task.completed = !task.completed;
            taskElement.querySelector(`#task-${index}`).classList.toggle('completed');
        });
        myTasksElement.appendChild(taskElement);
    });
}

document.getElementById('task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const taskName = document.getElementById('task-name').value;
    if (taskName) {
        tasks.push({ name: taskName, completed: false });
        displayTasks();
        document.getElementById('task-form').reset();
    }
});

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

document.getElementById('save-tasks').addEventListener('click', () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
});

displayTasks();