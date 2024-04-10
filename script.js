// script.js
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function clearTasks() {
    taskList.innerHTML = ''; // Clear all tasks
}
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.innerHTML += '<button onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(li);
        taskInput.value = '';
    }
}



function deleteTask(button) {
    const listItem = button.parentNode;
    listItem.remove();
}
