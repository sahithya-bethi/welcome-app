let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.done ? "completed" : "";
    li.innerHTML = `
      ${task.name}
      <button onclick="toggleTask(${index})">✔️</button>
    `;
    taskList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() !== "") {
    tasks.push({ name: input.value, done: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    displayTasks();
  }
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

displayTasks();
