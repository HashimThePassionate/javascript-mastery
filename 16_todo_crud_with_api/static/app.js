// Escape HTML to prevent XSS attacks
function escapeHtml(text) {
    return text.replace(/[\"&'\/<>]/g, function (a) {
        return {
            '"': '&quot;', '&': '&amp;', "'": '&#39;',
            '/': '&#47;', '<': '&lt;', '>': '&gt;'
        }[a];
    });
}

// Fetch and display todos
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

// Create Todo
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

// Open Edit Modal
function openEditModal(id, title) {
    document.getElementById('edit-todo-id').value = id;
    document.getElementById('edit-title').value = title;
    document.getElementById('edit-title-error').innerText = '';

    // Show modal
    const editModalElement = document.getElementById('editTodoModal');
    const editModal = new bootstrap.Modal(editModalElement);
    editModal.show();
}

// Update Todo
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

// Open Delete Modal
function openDeleteModal(id) {
    document.getElementById('delete-todo-id').value = id;

    // Show modal
    const deleteModalElement = document.getElementById('deleteTodoModal');
    const deleteModal = new bootstrap.Modal(deleteModalElement);
    deleteModal.show();
}

// Delete Todo
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

// Real-time validation for Edit Todo
document.getElementById('edit-title').addEventListener('input', function() {
    const title = this.value;
    const errorDiv = document.getElementById('edit-title-error');
    errorDiv.innerText = '';

    if (title.length < 5) {
        errorDiv.innerText = 'Title 5 characters se kam nahin ho sakta.';
    } else if (title.length > 40) {
        errorDiv.innerText = 'Title 40 characters se zyada nahin ho sakta.';
    } else if (!/^[A-Za-z ]+$/.test(title)) {
        errorDiv.innerText = 'Title mein sirf letters aur spaces allowed hain.';
    }
});

// Initialize
fetchTodos();
