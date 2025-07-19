let isDark = false;

function addTask() {
  const taskText = document.getElementById("taskInput").value.trim();
  const dueDate = document.getElementById("dueDate").value;
  const category = document.getElementById("category").value;
  const priority = document.getElementById("priority").value;

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.className = `task-item ${priority.toLowerCase()}`;

  li.innerHTML = `
    <strong>${taskText}</strong>
    <div class="meta">
      Due: ${dueDate || "No due date"} | Category: ${category || "None"} | Priority: ${priority}
    </div>
    <div class="actions">
      <button onclick="deleteTask(this)">❌ Delete</button>
    </div>
  `;

  taskList.appendChild(li);

  // Reset input fields
  document.getElementById("taskInput").value = "";
  document.getElementById("dueDate").value = "";
  document.getElementById("category").value = "";
  document.getElementById("priority").value = "Low";
}

function deleteTask(button) {
  const task = button.closest("li");
  task.remove();
}

function clearAll() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  isDark = !isDark;
}
