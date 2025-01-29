const input = document.getElementById("input");
const todoList = document.getElementById("todoList");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && input.value !== "") {
    const task = input.value.trim();

    const listItem = document.createElement("li");
    listItem.className = "todo-item";

    listItem.textContent = task;
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
      listItem.remove();
    };


listItem.appendChild(deleteBtn);
todoList.appendChild(listItem);
input.value = "";


}
});