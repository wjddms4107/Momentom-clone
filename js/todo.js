const toDoForm = document.getElementById("todo-form");
const toDoInput= toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  //toDos array의 내용을 localStorage에 넣기
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
  //클릭했던 li의 id를 갖고 있는 toDo를 지우고 싶어
  //즉, toDo의 id가 li의 id와 다른 걸 남기고 싶다는 뜻
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  
  toDoList.appendChild(li);
}


function handleToDoSubmit(e) {
  e.preventDefault();  
  const newTodo = toDoInput.value; 
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();


}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
 
if (savedToDos !== null) {
  //localstorage가 차있으면 그 값을 array로 변경하고
  //toDos에 배열로 변경된 그 값을 넣어서 전에 있던 toDo들을 복원
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  
}
