const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

};

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
};

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.className = 'toDo';
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.className = 'toDo__button';
    button.innerHTML = "❌" 
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
};

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObject = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObject);
    paintToDo(newTodoObject);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("This is the turn of", item);
};

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const pasredToDos = JSON.parse(savedToDos);
    toDos = pasredToDos;
    pasredToDos.forEach(paintToDo);
}