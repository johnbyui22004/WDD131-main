document.getElementById("add-todo").addEventListener("click", function () {
    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const todoList = document.getElementById("todo-list");

        // Create a new list item
        const listItem = document.createElement("li");
        listItem.className = "todo-item";

        // Add the text
        const textSpan = document.createElement("span");
        textSpan.textContent = todoText;
        listItem.appendChild(textSpan);

        // Add the check button
        const checkButton = document.createElement("button");
        checkButton.textContent = "✔";
        checkButton.className = "check-btn";
        checkButton.addEventListener("click", function () {
            listItem.classList.toggle("completed");
        });
        listItem.appendChild(checkButton);

        // Add the delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "✖";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", function () {
            todoList.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);

        // Add the list item to the list
        todoList.appendChild(listItem);

        // Clear the input
        todoInput.value = "";
    }
});