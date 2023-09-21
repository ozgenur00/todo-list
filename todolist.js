
const TODO_LIST_ID = "#todo-list";
const TODO_LIST_KEY = "todoList";

let form = document.querySelector('#formToDo');
let input = document.querySelector('#add-task');
let todoList = document.querySelector(TODO_LIST_ID);

function initializeApp() {
form.addEventListener('submit', submitForm)
todoList.addEventListener('click', onTodoItemClick);
loadTodoListFromLocalStorage();
}


function onTodoItemClick(e) {
    if (e.target && e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        updateLocalStorage();
    }
}

function submitForm(e) {
    e.preventDefault();
    console.log(input.value);
    let newTask = document.createElement('li');
    newTask.innerText = input.value;
    let removeTaskBtn = document.createElement('button');
    removeTaskBtn.innerText = 'done!';
    newTask.appendChild(removeTaskBtn);
    input.value = '';
    todoList.appendChild(newTask);

    updateLocalStorage();
}

function loadTodoListFromLocalStorage() {
    let storedTodoList = localStorage.getItem(TODO_LIST_KEY);
    if (storedTodoList) {
        todoList.innerHTML = storedTodoList;
    }
}

function updateLocalStorage() {
    localStorage.setItem(TODO_LIST_KEY, todoList.innerHTML);
}

addEventListener("DOMContentLoaded", initializeApp);