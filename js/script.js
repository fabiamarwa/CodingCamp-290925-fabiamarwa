/// Initialize an empty array to store todo items
let todos = [];

function addTodo() {
    /// Get input values
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");

    /// Validate input
    if (validateInput(todoInput.value, todoDate.value)) {
        let todo = { task: todoInput.value, date: todoDate.value };
        todos.push(todo);

        /// Render the update todo list
        renderTodo();
    }
}

function renderTodo() { 
    /// Get the todo list container
    const todoList = document.getElementById("todo-list");

    /// Clear existing list
    todoList.innerHTML = '';

    /// Render each todo item
    todos.forEach((todo, index) => {
    todoList.innerHTML += `
        <li class="border p-2 mb-2 flex justify-between items-center">
            <div>
                <p class="font-bold">${todo.task}</p>
                <p class="text-sm text-gray-500">${todo.date}</p>
            </div>
            <button onclick="deleteTodo(${index})" class="bg-red-500 text-white p-1 rounded">Delete</button>
        </li>
    `;
});
}

function deleteTodo() { }
    todos = [];

function filterNameTodo() { }

function validateInput(todo, date) {
    if (todo === '' || date === '') {
        alert("Please fill in all fields");
        return false;
    }
    return true;
}