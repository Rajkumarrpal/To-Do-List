let taskInput = document.getElementById("taskInput");

let addBtn = document.getElementById("addBtn");

let taskList = document.getElementById("taskList");

let taskCount = document.getElementById("taskCount");

addBtn.addEventListener("click", function () {
  // 1. Input ki value lena
  let input = taskInput.value.trim();

  // 2. Empty input check
  if (input === "") {
    alert("Task enter karo");

    return;
  }

  // 3. New li create karna
  let task = document.createElement("li");

  // 4. li ko class dena
  task.setAttribute("class", "task");

  // 5. Task ka text add karna
  task.textContent = input;

  // 6. Task ko taskList mein add karna
  taskList.appendChild(task);

  // 7. Input clear karna
  taskInput.value = "";

  // 8. Task count update karna
  taskCount.textContent = "Total Tasks: " + taskList.children.length;
});
