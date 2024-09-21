# 📝 Todo Application with JavaScript and Rest API's
A modern **Todo Application** built with **Django**, **Django REST Framework**, **Bootstrap 5**, and JavaScript **async/await**. This project demonstrates how to create a dynamic task manager with a clean UI and robust backend API.

## 🚀 Features
- Add, Edit, Delete tasks with Django Rest Framework.
- Validations both client-side and server-side.
- Bootstrap 5 modals for task management.
- Asynchronous operations using `async/await`.
- Beautiful UI with a gradient background and smooth animations.

## 🛠️ Installation

### 1. Set up the virtual environment using `pipenv`:
```bash
pip install pipenv
pipenv install
pipenv shell
```

### 2. Install Django and Django REST framework:
```bash
pipenv install django djangorestframework
```

### 3. Create a new Django project:
```bash
django-admin startproject todoproject .
```

### 4. Create the app:
```bash
python manage.py startapp todoapp
```

---

## ⚙️ Configuration

### 1. Add the app to `INSTALLED_APPS` in `settings.py`:
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'todoapp',  # new
    'rest_framework',  # new
]
```

---

## 📦 Database and Models

### 1. Create the **Todo** model in `models.py`:
```python
from django.db import models
from django.core.exceptions import ValidationError
import re

class Todo(models.Model):
    title = models.CharField(max_length=40)
    created = models.DateTimeField(auto_now_add=True)

    def clean(self):
        if len(self.title) < 5:
            raise ValidationError('Title 5 characters se kam nahin ho sakta.')
        if len(self.title) > 40:
            raise ValidationError('Title 40 characters se zyada nahin ho sakta.')
        if not re.match("^[A-Za-z ]+$", self.title):
            raise ValidationError('Title mein sirf letters aur spaces allowed hain.')
        if self.title.strip() == '':
            raise ValidationError('Title empty nahin ho sakta.')

    def __str__(self):
        return self.title
```

### 2. Make migrations and migrate:
```bash
python manage.py makemigrations todoapp
python manage.py migrate
```

---

## 🛠️ API Development

### 1. Create the **Todo Serializer** in `serializers.py`:
```python
from rest_framework import serializers
from .models import Todo
import re

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'

    def validate_title(self, value):
        if not value.strip():
            raise serializers.ValidationError('Title empty nahin ho sakta.')
        if len(value) < 5:
            raise serializers.ValidationError('Title 5 characters se kam nahin ho sakta.')
        if len(value) > 40:
            raise serializers.ValidationError('Title 40 characters se zyada nahin ho sakta.')
        if not re.match("^[A-Za-z ]+$", value):
            raise serializers.ValidationError('Title mein sirf letters aur spaces allowed hain.')

        return value
```

### 2. Create the **Todo ViewSet** in `views.py`:
```python
from rest_framework import viewsets
from .models import Todo
from .serializers import TodoSerializer
from django.shortcuts import render

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

def index(request):
    return render(request, 'index.html')
```

---

## 🌐 Frontend Setup

### 1. Set up the `index.html` in the `templates` directory:
```html
<!DOCTYPE html>
<html lang="en">
{% load static %}
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Todo Application</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        :root {
            --primary-color: #0b57d0;
            --secondary-color: #ff5722;
            --background-gradient: linear-gradient(135deg, #f9f9f9, #f0f0f0);
            --button-hover-color: #084ba8;
        }

        /* General Styling */
        body {
            background: var(--background-gradient);
            font-family: 'Arial', sans-serif;
        }

        h1 {
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 40px;
            font-size: 2.8rem;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        /* Add Task Button */
        .btn-primary {
            background-color: var(--primary-color);
            border: none;
            font-size: 1.1rem;
            padding: 10px 20px;
            border-radius: 30px;
            transition: background-color 0.3s ease;
        }

        .btn-primary:hover {
            background-color: var(--button-hover-color);
            box-shadow: 0px 8px 16px rgba(11, 87, 208, 0.3);
            transform: translateY(-2px);
        }

        /* Task List Cards */
        .card {
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
            border-radius: 15px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            background-color: #fff;
        }

        .card:hover {
            transform: scale(1.03);
            box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.2);
        }

        .card-header {
            background-color: var(--primary-color);
            color: white;
            padding: 10px;
            border-bottom: none;
            font-size: 1.2rem;
        }

        .card-body {
            padding: 15px;
        }

        /* Modal Custom Styling */
        .modal-content {
            border-radius: 15px; /* Apply border-radius to the entire modal */
            overflow: hidden;
        }
        
        .modal-header {
            background-color: var(--primary-color);
            color: white;
            padding: 15px;
            border-radius: 15px 15px 0 0; /* Round top-left and top-right corners */
        }
        
        .modal-footer {
            border-radius: 0 0 15px 15px; /* Round bottom-left and bottom-right corners */
            border-top: none;
            padding: 10px 15px;
        }
        
        .modal-body input {
            border-radius: 10px; /* Make input field more consistent */
            padding: 10px;
        }
        
        .btn-close {
            background-color: white;
            border-radius: 50%;
        }

        .btn-close:hover {
            background-color: #f1f1f1;
        }

        /* Button Styling in Card */
        .btn-warning, .btn-danger {
            border-radius: 30px;
            padding: 5px 15px;
            font-size: 0.9rem;
            transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .btn-warning:hover {
            background-color: #e0a800;
            transform: translateY(-2px);
        }

        .btn-danger:hover {
            background-color: #d63333;
            transform: translateY(-2px);
        }
        #create-title-error {
            margin-top: 15px; /* Adds a small space between the input field and the error message */
            font-size: 1.2rem;
        }
    </style>
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center">Todo Application</h1>
        <div class="d-flex justify-content-center">
            <button class="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#createTodoModal">Add Todo</button>
        </div>
        <div id="todo-list" class="row"></div>
    </div>

    <!-- Create Todo Modal -->
    <div class="modal fade" id="createTodoModal" tabindex="-1" aria-labelledby="createTodoModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add New Task</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="create-title" class="form-label">Task Title</label>
                        <input type="text" class="form-control" id="create-title" placeholder="Enter your task title">
                        <div id="create-title-error" class="text-danger"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" onclick="createTodo()">Add Task</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit Todo Modal -->
    <div class="modal fade" id="editTodoModal" tabindex="-1" aria-labelledby="editTodoModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Task</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <input type="hidden" id="edit-todo-id">
                    <div class="mb-3">
                        <label for="edit-title" class="form-label">Task Title</label>
                        <input type="text" class="form-control" id="edit-title" placeholder="Edit your task title">
                        <div id="edit-title-error" class="text-danger"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" onclick="updateTodo()">Save Changes</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Delete Todo Modal -->
    <div class="modal fade" id="deleteTodoModal" tabindex="-1" aria-labelledby="deleteTodoModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Delete Task</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete this task?</p>
                    <input type="hidden" id="delete-todo-id">
                </div>
                <div class="modal-footer">
                    <button class="btn btn-danger" onclick="deleteTodo()">Delete</button>
                    <button class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap 5 JS Bundle -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Custom JS -->
    <script src="{% static 'app.js' %}"></script>
</body>
</html>
```

### 2. JavaScript for handling async operations in `static/app.js`:
```javascript
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
```

---

## 🌍 Routing

### 1. Create the URLs in `todoapp/urls.py`:
```python
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TodoViewSet

router = DefaultRouter()
router.register(r'todos', TodoViewSet, basename='todo')

urlpatterns = router.urls
```

### 2. Create the URLs in `todoapp/frontend_urls.py`:
```python
from django.urls import path
from .views import index

urlpatterns = [
    path('', index, name='index'),
]
```

### 3. Update todoproject URLs:
```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('todoapp.urls')), # Isko hum agay define karain ge
    path('', include('todoapp.frontend_urls')),  # Isko hum agay define karain ge
]
```

### 4. `todoproject/settings.py`:
```python
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR, 'templates'], # new
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

...
STATIC_URL = 'static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')] # new
# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    ),
    'DEFAULT_PARSER_CLASSES': (
        'rest_framework.parsers.JSONParser',
    )
}
```

---

## 📄 API Endpoints

| Endpoint       | Method | Description            |
| -------------- | ------ | ---------------------- |
| `/api/todos/`  | GET    | List all Todos         |
| `/api/todos/`  | POST   | Create a new Todo      |
| `/api/todos/<id>/` | PUT   | Update an existing Todo |
| `/api/todos/<id>/` | DELETE| Delete a Todo         |

---

## 🧪 Real-Time Validation

Client-side validation ensures:
- The title is at least 5 characters long.
- No symbols or numbers are allowed.
- The maximum length is 40 characters.

---

## 🧑‍💻 Run the Project

1. generate pip freeze requirements file:
```bash
pip freeze > requirements.txt
```

2. Start the development server:
```bash
python manage.py runserver
```

3. Open your browser at `http://127.0.0.1:8000/` and enjoy the app! 🎉

> If you find this repository helpful, please give it a star ⭐! Your support helps keep this project going and encourages more content to be added. 🌟