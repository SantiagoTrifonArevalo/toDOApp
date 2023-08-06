const form = document.createElement("form");
form.textContent = "ToDo App";
const label = document.createElement("label");
const Input = document.createElement("input");
label.textContent = "Type a new to-do:";

document.body.appendChild(form);
form.appendChild(label);
form.appendChild(Input);

const buttonContainer = document.createElement("div");
form.appendChild(buttonContainer);

const button1 = document.createElement("button");
buttonContainer.appendChild(button1);
button1.textContent = "Add";
const button2 = document.createElement("button");
buttonContainer.appendChild(button2);
button2.textContent = "Clear";

const taskList = document.createElement("ul");
document.body.appendChild(taskList);

button1.addEventListener("click", addTask);
button2.addEventListener("click", clearTasks);

function clearTasks() {
  const taskList = document.querySelector("ul");
  taskList.innerHTML = "";
}

function addTask() {
  event.preventDefault();
  const taskText = Input.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    Input.value = "";
  }
}

const formElement = document.getElementsByTagName("form")[0];
formElement.style.display = "flex";
formElement.style.flexDirection = "column";
formElement.style.justifyContent = "center";
formElement.style.alignItems = "center";
formElement.style.minHeight = "33vh"; 
formElement.style.marginBottom = "0"; 

buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "center";
buttonContainer.style.marginTop = "10px"; 

const buttons = buttonContainer.querySelectorAll("button");
buttons.forEach((button) => {
  button.style.margin = "0 10px";
});

document.body.style.backgroundImage = 'url("https://i.pinimg.com/1200x/3d/a2/ed/3da2edfadd183bba7131dda17ca1cc93.jpg")'; 
document.body.style.backgroundSize = "cover"; 
document.body.style.backgroundPosition = "center";
document.body.style.height = "calc(67vh)"; 
document.body.style.margin = "0";

taskList.style.display = "flex";
taskList.style.flexDirection = "column";
taskList.style.alignItems = "center";

