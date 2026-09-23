
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click",function(){
   let taskk = taskInput.value
   console.log(taskk);
   if (taskk === "") {
      alert("Enter Your Task")
      return
   }

   let Tasklist = document.createElement("li");
   Tasklist.setAttribute("class", "Task");
   Tasklist.textContent = taskk;

   taskList.appendChild(Tasklist);
    taskInput.value = "";

    taskCount.textContent = "Total Tasks: " + Tasklist.children.length;

   
   
   
})
