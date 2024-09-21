#  **Todo Model 🌟**

This model defines a simple **Todo item** for your Django application. Each `Todo` has a **title** and a **created date**, and we enforce several custom validation rules to ensure the title is always valid before saving.

## 🛠️ **Code Breakdown**

### 1. **Imports**

```python
from django.db import models
from django.core.exceptions import ValidationError
import re
```

#### 📘 **What’s Happening Here?**

- **`models`**: Django’s module that allows you to define the structure of your database (tables, fields, etc.).
- **`ValidationError`**: This is a special exception provided by Django. We use it to raise errors when data doesn't meet certain criteria (e.g., title length).
- **`re`**: The regular expressions module from Python, which helps with pattern matching (we'll use it to ensure the title only contains letters and spaces).

### 2. **Defining the Todo Model**

```python
class Todo(models.Model):
    title = models.CharField(max_length=40)
    created = models.DateTimeField(auto_now_add=True)
```

#### 📘 **Explanation**:

- **`Todo`**: This is the model class that represents a task or item in a **Todo List**.
  
#### 🔧 **Fields**:

- **`title = models.CharField(max_length=40)`**:
  - The **title** of the task.
  - **CharField** is used for text-based fields, and `max_length=40` ensures the title can’t be longer than 40 characters.
  
  📝 **Example**: A title could be something like `"Buy Groceries"` or `"Complete Django Project"`.

- **`created = models.DateTimeField(auto_now_add=True)`**:
  - **DateTimeField** stores the **timestamp** for when the task was created.
  - **`auto_now_add=True`** means Django will automatically set this field to the current date and time when the Todo is first created. You don’t need to manually input this value.

### 3. **Custom Validation with the `clean()` Method**

```python
def clean(self):
    if len(self.title) < 5:
        raise ValidationError('Title 5 characters se kam nahin ho sakta.')
    if len(self.title) > 40:
        raise ValidationError('Title 40 characters se zyada nahin ho sakta.')
    if not re.match("^[A-Za-z ]+$", self.title):
        raise ValidationError('Title mein sirf letters aur spaces allowed hain.')
    if self.title.strip() == '':
        raise ValidationError('Title empty nahin ho sakta.')
```

#### 🧩 **Detailed Explanation**:

The `clean()` method is used to perform **custom validation** on the `Todo` instance before it is saved. Django calls this method automatically when you save or update an object.

### ⚙️ **Validation Steps**:

### Step 1: **Check Minimum Length**

```python
if len(self.title) < 5:
    raise ValidationError('Title 5 characters se kam nahin ho sakta.')
```

- **Logic**: Ensures the `title` has **at least 5 characters**.
- **Why?**: Short titles like "Buy" or "Do" are too vague and don’t provide enough detail.
  
  📝 **Example**: `"Study"` would fail this check because it has fewer than 5 characters, while `"Study for the exam"` would pass.

### Step 2: **Check Maximum Length**

```python
if len(self.title) > 40:
    raise ValidationError('Title 40 characters se zyada nahin ho sakta.')
```

- **Logic**: Ensures the `title` doesn’t exceed **40 characters**.
- **Why?**: Long titles can be difficult to display in the UI and make the data cumbersome to work with.

  📝 **Example**: `"Complete the final project for Django course by tomorrow"` would fail this check, while `"Complete Django project"` would pass.

### Step 3: **Check for Valid Characters**

```python
if not re.match("^[A-Za-z ]+$", self.title):
    raise ValidationError('Title mein sirf letters aur spaces allowed hain.')
```

- **Logic**: This regular expression ensures that the title contains **only letters (A-Z, a-z) and spaces**.
- **Why?**: We want the title to be human-readable and free from special characters or numbers, ensuring clarity in the task name.

  📝 **Example**: `"Finish Task #1!"` would fail, while `"Finish Task"` would pass.

### Step 4: **Check for Empty Titles**

```python
if self.title.strip() == '':
    raise ValidationError('Title empty nahin ho sakta.')
```

- **Logic**: This checks that the `title` isn’t empty or made up of only spaces.
- **Why?**: An empty title wouldn’t make sense, so this prevents saving a task without a meaningful name.

  📝 **Example**: `"   "` (a title with only spaces) would fail, while `"Organize desk"` would pass.

### 4. **Defining the String Representation**

```python
def __str__(self):
    return self.title
```

#### 📘 **Explanation**:
- The `__str__()` method defines how the `Todo` object will be represented as a string. 
- In this case, it returns the **title** of the task, which is helpful when displaying the task in the Django Admin or when debugging.

  📝 **Example**:
  - If a `Todo` has a title `"Buy Groceries"`, calling `str(todo_instance)` would return `"Buy Groceries"`.


### 🚀 **How It All Works Together**

1. **Creating a Todo**:
   - When a user submits a new task, the `Todo` model saves it with a `title` and automatically sets the `created` timestamp.
  
2. **Validating a Todo**:
   - Before saving, the `clean()` method ensures the `title` follows all the rules (at least 5 characters, no more than 40, letters and spaces only, and no empty titles).
  
3. **Displaying a Todo**:
   - The `__str__()` method makes it easy to display the title of the task when working with `Todo` instances in the Django Admin or elsewhere.

### 🔥 **Why This Validation is Important?**

- **Data Integrity**: Validation ensures that each task is meaningful, properly formatted, and clear to the user.
- **User-Friendly**: By enforcing these rules, you prevent users from entering data that might break the UI or make the Todo list difficult to understand.
- **Consistency**: Keeping title length within a reasonable range ensures tasks are easy to display and manage in any UI.

### 🎯 **Final Thoughts**:

This `Todo` model is designed to store, validate, and display tasks effectively, while ensuring that each task title is useful and well-formatted. The custom validation rules ensure a consistent user experience, and the `created` field automatically timestamps tasks, keeping track of when they were added.