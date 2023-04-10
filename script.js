//Strike through text function
const checkboxes = document.querySelectorAll(".task input");
checkboxes.forEach((element) => {
  element.addEventListener("click", function () {
    const taskContent = element.parentElement;
    const taskText = taskContent.querySelector("p");

    if (taskText != null) {
      if (element.checked) {
        taskText.style.textDecoration = "line-through";
        taskText.style.color = "gray";
      } else {
        taskText.style.textDecoration = "none";
        taskText.style.color = "white";
      }
    }
  });
});

//Counter
const counter = document.querySelector(".control p span");
const tasks = document.querySelectorAll(".task");
counter.innerHTML = tasks.length - 2;

//Add new task
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    const newTask = document.querySelector(".text-input");

    //Creating div "task"
    const newDiv = document.createElement("div");
    newDiv.classList.add("task");

    const taskContent = document.createElement("div");
    taskContent.classList.add("task-content");
    newDiv.appendChild(taskContent);

    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("checkbox");
    taskContent.appendChild(input);

    const p = document.createElement("p");
    p.innerHTML = newTask.value;
    taskContent.appendChild(p);

    const img = document.createElement("img");
    img.src = "./images/icon-cross.svg";
    newDiv.appendChild(img);

    //Adding div to HTML
    const currentDiv = document.querySelector(".todos");
    const test = document.querySelector(".new-task");
    currentDiv.insertBefore(newDiv, test);
  }
});
