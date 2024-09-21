# Explanation of `index.html` for Todo Application
## 🔧 **HTML Structure**:

```html
<!DOCTYPE html>
<html lang="en">
{% load static %}
```

- **`<!DOCTYPE html>`**: This tag declares that the document is an **HTML5** document.
- **`<html lang="en">`**: This defines the language of the page as English (`en`), which helps search engines and browsers handle content correctly.
- **`{% load static %}`**: This is a **Django template tag** used to load static files (like CSS and JavaScript). In this case, it will be used to load your custom JavaScript file later.


## 🖼️ **Head Section**:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Todo Application</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

- **`<meta charset="UTF-8">`**: This defines the character encoding for the document as **UTF-8**, which supports all characters and symbols.
- **`<meta name="viewport" content="width=device-width, initial-scale=1">`**: This makes sure the page is **responsive** on all devices. The content is adjusted according to the device’s width.
- **`<title>Todo Application</title>`**: Sets the title of the page, which appears in the browser tab.
- **Bootstrap 5 CSS**: The Bootstrap 5 CSS file is included via a **CDN** (Content Delivery Network) to provide styling and layout features.


## 🎨 **Custom CSS Styling**:

```css
<style>
    :root {
        --primary-color: #0b57d0;
        --secondary-color: #ff5722;
        --background-gradient: linear-gradient(135deg, #f9f9f9, #f0f0f0);
        --button-hover-color: #084ba8;
    }
```

- **`:root {}`**: This declares **CSS variables** that can be reused throughout the document.
    - **`--primary-color`**: The main color used throughout the design, a shade of blue.
    - **`--secondary-color`**: An accent color, orange, that could be used for contrast elements.
    - **`--background-gradient`**: A smooth gradient used as the background for the entire page.
    - **`--button-hover-color`**: A slightly darker version of the primary color for button hover effects.


## 🌐 **Body and Heading Styling**:

```css
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
```

- **Body Styling**: The body has a background using the defined **background gradient**, and the font is set to **Arial** for a clean, modern look.
- **Heading Styling**: The `h1` heading (Todo Application) has:
    - Bold weight (`font-weight: 700`),
    - The primary color (`color: var(--primary-color)`),
    - A shadow (`text-shadow`) to make it stand out more.


## 🛠️ **Button Styling**:

```css
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
```

- **Button Styling (`.btn-primary`)**: This is the primary button used for adding tasks.
    - The button color is set to **`var(--primary-color)`** (blue).
    - **Rounded corners** are added using `border-radius: 30px`.
    - The hover effect changes the background to the **hover color**, adds a shadow, and slightly lifts the button for a **3D effect** (`translateY(-2px)`).


## 📝 **Task List Styling**:

```css
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
```

- **Cards**: This section styles the task list items as **cards**.
    - **Shadows** are applied to make the cards appear lifted off the page (`box-shadow`).
    - On hover, the card **slightly grows in size** (`transform: scale(1.03)`) and the shadow becomes stronger to indicate interactivity.
    - **Card header**: Uses the primary color for background and white text, with padding for spacing.


## 🛠️ **Modal Styling**:

```css
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
```

- **Modal Styling**: Modals are used for adding, editing, and deleting tasks.
    - **Rounded corners** are applied to the entire modal.
    - The modal header uses the **primary color** and has rounded top corners (`15px`), while the modal footer has rounded bottom corners.
    - The **input fields** inside the modals also have rounded corners and padding for a cleaner, consistent design.
    - The **close button** (`btn-close`) is circular with a hover effect to change its background color.


## 🛠️ **Button Styling for Edit/Delete**:

```css
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
```

- **Edit (`btn-warning`)** and **Delete (`btn-danger`) buttons** have distinct styles:
    - Rounded corners (`border-radius: 30px`) and padding make the buttons feel clickable.
    - Hover effects make the buttons **shift upwards** slightly for a 3D effect.
    - The **background color changes** on hover to make it clear the button is interactive.


## 📋 **Main HTML Content**:

```html
<body>
    <div class="container mt-5">
        <h1 class="text-center">Todo Application</h1>
        <div class="d-flex justify-content-center">
            <button class="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#createTodoModal">Add Todo</button>
        </div>
        <div id="todo-list" class="row"></div>
    </div>
```

- **Container**: Bootstrap’s **container** class ensures the content is centered and has padding around it. The **`mt-5`** class adds a top margin.
- **Heading**: The `<h1>` heading is centered and displays the application name ("Todo Application").
- **Add Todo Button**: This button triggers the modal for adding

 a new task.
    - **`data-bs-toggle="modal"`**: This triggers the Bootstrap modal.
    - **`data-bs-target="#createTodoModal"`**: Targets the modal with the `id="createTodoModal"` for display.
- **Todo List (`#todo-list`)**: This `div` will be populated dynamically with tasks as they are added, laid out using the Bootstrap grid (`row`).


## 📝 **Create Todo Modal**:

```html
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
```

- **Create Todo Modal**: This modal is triggered when the "Add Todo" button is clicked.
    - **Modal Header**: Displays the title "Add New Task" and has a **close button**.
    - **Modal Body**: Contains an input field where the user can enter the task’s title.
        - The `id="create-title-error"` is a `div` that will show validation errors if the input is invalid (this is handled by JavaScript).
    - **Modal Footer**: The user can submit the task by clicking the **Add Task** button, which triggers the JavaScript function `createTodo()`.


## 📝 **Edit and Delete Todo Modals**:

```html
    <!-- Edit Todo Modal -->
    <div class="modal fade" id="editTodoModal" tabindex="-1" aria-labelledby="editTodoModalLabel" aria-hidden="true">
        <!-- Similar structure as the Create Todo modal -->
    </div>

    <!-- Delete Todo Modal -->
    <div class="modal fade" id="deleteTodoModal" tabindex="-1" aria-labelledby="deleteTodoModalLabel" aria-hidden="true">
        <!-- Similar structure but includes a confirmation message -->
    </div>
```

- **Edit Todo Modal**: This modal allows users to edit existing tasks. It includes an input field for modifying the task title and a button to save changes.
- **Delete Todo Modal**: This modal is used for deleting a task. It asks for confirmation ("Are you sure you want to delete this task?") and provides options to **Delete** or **Cancel**.


## 🔌 **JavaScript and Bootstrap JS**:

```html
    <!-- Bootstrap 5 JS Bundle -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Custom JS -->
    <script src="{% static 'app.js' %}"></script>
</body>
</html>
```

- **Bootstrap JS**: The Bootstrap JS bundle is included from a CDN to handle modal behavior and other interactive components.
- **Custom JS**: The custom JavaScript (`app.js`) is loaded via a Django **static file tag**. This file will contain the logic for adding, editing, and deleting tasks.
