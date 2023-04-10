const checkboxes = document.querySelectorAll(".task input");

checkboxes.forEach((element) => {
  element.addEventListener("click", function () {
    const taskContent = element.parentElement;
    const taskText = taskContent.querySelector("p");

    if (element.checked) {
      taskText.style.textDecoration = "line-through";
      taskText.style.color = "gray";
    } else {
      taskText.style.textDecoration = "none";
      taskText.style.color = "white";
    }
  });
});
