# 🛡️ **Function 1: Escaping HTML to Prevent XSS Attacks**

```javascript
function escapeHtml(text) {
    return text.replace(/[\"&'\/<>]/g, function (a) {
        return {
            '"': '&quot;', '&': '&amp;', "'": '&#39;',
            '/': '&#47;', '<': '&lt;', '>': '&gt;'
        }[a];
    });
}
```

## 📘 **Explanation**:
- **Purpose**: This function **prevents Cross-Site Scripting (XSS)** attacks by converting special characters into **safe HTML entities**.
- **How It Works**:
  1. The function takes in **user input** (like the todo title) as `text`.
  2. The **`replace()` method** looks for special characters (like `"` or `<`) and replaces them with **HTML entities** (like `&quot;` for `"`, `&lt;` for `<`).
  3. This prevents any malicious code from being executed if the title is injected into HTML, as it will be displayed as plain text.

## 🛡️ **Why It Matters**:
- **Security**: Without escaping, malicious users could insert harmful scripts into the application, which could lead to attacks like data theft or unwanted actions.

### 🔄 **Function 2: Fetch and Display Todos**

```javascript
async function fetchTodos() {
    const response = await fetch('/api/todos/');
    const todos = await response.json();
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.className = 'col-12 mb-2';

        const safeTitle = escapeHtml(todo.title);

        todoItem.innerHTML = `
            <div class="card">
                <div class="card-body d-flex justify-content-between align-items-center">
                    ${safeTitle}
                    <div>
                        <button class="btn btn-sm btn-warning" onclick="openEditModal(${todo.id}, '${safeTitle}')">Edit</button>
                        <button class="btn btn-sm btn-danger" onclick="openDeleteModal(${todo.id})">Delete</button>
                    </div>
                </div>
            </div>
        `;
        todoList.appendChild(todoItem);
    });
}
```

## 📘 **Explanation**:
- **Purpose**: This function fetches the list of **todos from the server** and displays them on the page.
- **How It Works**:
  1. **`fetch('/api/todos/')`**: Makes a GET request to the API endpoint to retrieve all todos.
  2. **`await response.json()`**: Converts the server’s response (JSON) into a JavaScript object (`todos` array).
  3. **Clear the List**: The `todoList.innerHTML = '';` clears the existing list before adding new content (prevents duplication).
  4. **Loop Through Todos**: The `forEach` loop iterates over the todos and creates **cards** for each one.
  5. **Escape HTML**: The title is sanitized using `escapeHtml()` to avoid XSS attacks.
  6. **Add Edit/Delete Buttons**: Each todo card has **Edit** and **Delete** buttons, with event handlers that open modals to modify or delete the todo.

## 📝 **Why It Matters**:
- This function is crucial because it **updates the UI** with the latest todos, ensuring that the user sees a dynamic and up-to-date list after any changes.

### 📝 **Function 3: Create a New Todo**

```javascript
async function createTodo() {
    const titleInput = document.getElementById('create-title');
    const title = titleInput.value.trim();
    const errorDiv = document.getElementById('create-title-error');
    errorDiv.innerText = '';

    // Client-side validation
    if (title.length < 5) {
        errorDiv.innerText = 'Title 5 characters se kam nahin ho sakta.';
        return;
    } else if (title.length > 40) {
        errorDiv.innerText = 'Title 40 characters se zyada nahin ho sakta.';
        return;
    } else if (!/^[A-Za-z ]+$/.test(title)) {
        errorDiv.innerText = 'Title mein sirf letters aur spaces allowed hain.';
        return;
    }

    const response = await fetch('/api/todos/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title})
    });

    if (response.ok) {
        // Close the modal
        const createModalElement = document.getElementById('createTodoModal');
        const createModal = bootstrap.Modal.getInstance(createModalElement) || new bootstrap.Modal(createModalElement);
        createModal.hide();

        // Clear input field
        titleInput.value = '';

        // Refresh todo list
        fetchTodos();
    } else {
        const data = await response.json();
        errorDiv.innerText = data.title || 'An error occurred.';
    }
}
```

## 📘 **Explanation**:
- **Purpose**: This function is responsible for **creating a new todo** by sending a POST request to the server.
- **How It Works**:
  1. **Grab Input**: The todo title is retrieved from the input field (`create-title`) and trimmed of leading/trailing spaces.
  2. **Client-Side Validation**:
     - **Minimum Length**: The title must have at least **5 characters**.
     - **Maximum Length**: The title should not exceed **40 characters**.
     - **Pattern Match**: The title should only contain **letters and spaces**. Numbers or special characters are not allowed.
  3. **AJAX POST Request**: If validation passes, the function sends a **POST request** to the API, creating the new todo.
  4. **Close Modal and Refresh**: If the response is successful, the **create modal is closed**, and the todo list is refreshed by calling `fetchTodos()`.

## ✅ **Why It Matters**:
- **Form Validation** ensures that only valid input is sent to the server.
- This function enables the **creation of new tasks**, making it central to the functionality of the application.

### 📝 **Function 4: Open Edit Modal**

```javascript
function openEditModal(id, title) {
    document.getElementById('edit-todo-id').value = id;
    document.getElementById('edit-title').value = title;
    document.getElementById('edit-title-error').innerText = '';

    // Show modal
    const editModalElement = document.getElementById('editTodoModal');
    const editModal = new bootstrap.Modal(editModalElement);
    editModal.show();
}
```

## 📘 **Explanation**:
- **Purpose**: This function opens the **Edit Todo modal** and pre-fills it with the todo’s current title and ID.
- **How It Works**:
  1. The todo’s **ID** and **title** are inserted into the appropriate fields in the modal (`edit-todo-id` and `edit-title`).
  2. **Clear Errors**: Any previous error messages are cleared.
  3. **Show Modal**: The **Bootstrap modal** is displayed by calling `Modal.show()`.

## ✏️ **Why It Matters**:
- This function sets up the modal for editing, allowing the user to quickly modify an existing task.

### 🔄 **Function 5: Update Todo**

```javascript
async function updateTodo() {
    const id = document.getElementById('edit-todo-id').value;
    const titleInput = document.getElementById('edit-title');
    const title = titleInput.value.trim();
    const errorDiv = document.getElementById('edit-title-error');
    errorDiv.innerText = '';

    // Client-side validation
    if (title.length < 5) {
        errorDiv.innerText = 'Title 5 characters se kam nahin ho sakta.';
        return;
    } else if (title.length > 40) {
        errorDiv.innerText = 'Title 40 characters se zyada nahin ho sakta.';
        return;
    } else if (!/^[A-Za-z ]+$/.test(title)) {
        errorDiv.innerText = 'Title mein sirf letters aur spaces allowed hain.';
        return;
    }

    const response = await fetch(`/api/todos/${id}/`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title})
    });

    if (response.ok) {
        // Close the modal
        const editModalElement = document.getElementById('editTodoModal');
        const editModal = bootstrap.Modal.getInstance(editModalElement);
        editModal.hide();

        // Refresh todo list
        fetchTodos();
    } else {
        const data = await response.json();
        errorDiv.innerText = data.title || 'An error occurred.';
    }
}
```

## 📘 **Explanation**:
- **Purpose**: This function updates an existing todo by sending a **PUT request** to the server with the updated title.
- **How It Works**:
  1. **Retrieve ID and Title**: The todo

’s **ID** and the new **title** are taken from the modal fields.
  2. **Client-Side Validation**: The same validation rules as in the `createTodo()` function are applied.
  3. **AJAX PUT Request**: A **PUT** request is sent to the server (`/api/todos/{id}/`) to update the task.
  4. **Close Modal and Refresh**: If the update is successful, the **modal is closed** and the todo list is refreshed.

## 🔧 **Why It Matters**:
- This function enables users to **modify existing tasks**, keeping the todo list up-to-date with changes.

### 🗑️ **Function 6: Open Delete Modal**

```javascript
function openDeleteModal(id) {
    document.getElementById('delete-todo-id').value = id;

    // Show modal
    const deleteModalElement = document.getElementById('deleteTodoModal');
    const deleteModal = new bootstrap.Modal(deleteModalElement);
    deleteModal.show();
}
```

## 📘 **Explanation**:
- **Purpose**: This function opens the **Delete Todo modal** and assigns the todo ID to be deleted.
- **How It Works**:
  1. The **todo ID** is stored in a hidden field (`delete-todo-id`).
  2. The **delete modal** is displayed using Bootstrap’s `Modal.show()` method.

## 🛑 **Why It Matters**:
- This allows users to confirm whether they want to delete a task, adding a **confirmation step** before the deletion.

### 🗑️ **Function 7: Delete Todo**

```javascript
async function deleteTodo() {
    const id = document.getElementById('delete-todo-id').value;

    const response = await fetch(`/api/todos/${id}/`, {
        method: 'DELETE',
    });

    if (response.ok) {
        // Close the modal
        const deleteModalElement = document.getElementById('deleteTodoModal');
        const deleteModal = bootstrap.Modal.getInstance(deleteModalElement);
        deleteModal.hide();

        // Refresh todo list
        fetchTodos();
    } else {
        alert('An error occurred while deleting the todo.');
    }
}
```

## 📘 **Explanation**:
- **Purpose**: This function deletes a todo by sending a **DELETE request** to the server.
- **How It Works**:
  1. **Retrieve ID**: The todo ID is taken from the hidden field.
  2. **AJAX DELETE Request**: A **DELETE** request is sent to `/api/todos/{id}/`.
  3. **Close Modal and Refresh**: If the deletion is successful, the modal is closed and the todo list is refreshed.

## ❌ **Why It Matters**:
- This function allows users to **remove tasks** from the list, ensuring they can manage their tasks effectively.

### 🛠️ **Real-Time Validation for Input Fields**

```javascript
// Real-time validation for Create Todo
document.getElementById('create-title').addEventListener('input', function() {
    const title = this.value;
    const errorDiv = document.getElementById('create-title-error');
    errorDiv.innerText = '';

    if (title.length < 5) {
        errorDiv.innerText = 'Title 5 characters se kam nahin ho sakta.';
    } else if (title.length > 40) {
        errorDiv.innerText = 'Title 40 characters se zyada nahin ho sakta.';
    } else if (!/^[A-Za-z ]+$/.test(title)) {
        errorDiv.innerText = 'Title mein sirf letters aur spaces allowed hain.';
    }
});
```

## 📘 **Explanation**:
- **Purpose**: This section provides **real-time validation** as the user types in the input field. Errors are shown immediately if the title doesn’t meet the criteria.

## ✅ **Why It Matters**:
- Real-time validation gives **instant feedback** to users, making the form more interactive and improving the user experience.

### 🔄 **Initialization: Fetch Todos on Page Load**

```javascript
fetchTodos();
```

## 📘 **Explanation**:
- **Purpose**: This line ensures that the **list of todos** is fetched and displayed as soon as the page loads.

### 🎉 **Final Thoughts**

This code efficiently manages the CRUD operations (Create, Read, Update, Delete) for a **Todo Application** using **AJAX requests** and **Bootstrap modals** for a smooth user experience. It also includes essential features like **client-side validation** and **real-time feedback**, ensuring users can interact with the app intuitively and securely.