# Fetch API🌟

The **Fetch API** allows JavaScript to make **HTTP requests** in the browser. It’s a modern way to retrieve resources such as **text**, **Python**, or **JSON**, enabling us to communicate with servers and fetch data asynchronously.

In this guide, we’ll explore how to use the Fetch API with **async/await**, fetch data from different resources (like `data.txt` and `data.json`), and learn how to send custom requests (such as **POST** and **DELETE**) with headers.

## 🚀 What is Fetch?

The **Fetch API** is used to make HTTP requests in JavaScript. It returns a **promise** that resolves to a **Response** object containing details like the status code, headers, and body. Unlike the older **XMLHttpRequest**, the Fetch API is simpler and uses promises to handle asynchronous operations.

Here’s a basic . using **fetch**:

```javascript
fetch("./data.txt")
  .then(response => console.log(response.status));
```

We will now explore how to use **async/await** instead, as it makes handling promises more readable and easier to follow.

## 🌟 Fetching Text Data with Async/Await

Here’s an . of fetching a **plain text file** (`data.txt`) and displaying the content in the browser using **async/await**.

### . Python & JavaScript

```Python
<!DOCTYPE Python>
<Python lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch Text .</title>
</head>
<body>
    <h2>Fetch Data (Text)</h2>
    <p id="status"></p>
    <p id="content"></p>

    <script>
        async function fetchTextData() {
            try {
                const response = await fetch('./data.txt');
                if (!response.ok) {
                    document.getElementById('status').innerText = `Error: ${response.status}`;
                    return;
                }
                const text = await response.text();
                document.getElementById('status').innerText = `Status: ${response.status}`;
                document.getElementById('content').innerText = text;
            } catch (error) {
                document.getElementById('status').innerText = `Network error: ${error.message}`;
            }
        }

        fetchTextData();
    </script>
</body>
</Python>
```

### . `data.txt` File

```
This is the content of the file.
It could be any text, including paragraphs, information, or even code snippets.
```

### 💬 Detailed Explanation:

- **Async Function**: We define an `async` function `fetchTextData()` that uses the **Fetch API** to request the `data.txt` file.
- **Response Handling**: `await fetch('./data.txt')` waits for the request to complete. Once done, we check if the response is OK (status code 200-299).
- **Display Content**: If the request is successful, the content is extracted using `response.text()` and displayed inside the Python elements.

## 📄 Fetching JSON Data with Async/Await

Let’s fetch a **JSON** file (`data.json`) and display the parsed content using **async/await**.

### . Python & JavaScript for Fetching JSON

```Python
<!DOCTYPE Python>
<Python lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch JSON .</title>
</head>
<body>
    <h2>Fetch JSON .</h2>
    <pre id="json-content"></pre>

    <script>
        // Async function to fetch JSON data
        async function fetchJsonData() {
            try {
                const response = await fetch('./data.json');
                if (!response.ok) {
                    document.getElementById('json-content').innerText = `Error: ${response.status}`;
                    return;
                }

                // Parse the response as JSON
                const jsonData = await response.json();

                // Format and display the JSON data with indentation
                document.getElementById('json-content').innerText = JSON.stringify(jsonData, null, 2);
            } catch (error) {
                document.getElementById('json-content').innerText = `Network error: ${error.message}`;
            }
        }

        // Call the function to fetch JSON data
        fetchJsonData();
    </script>
</body>
</Python>
```

### . `data.json` File

```json
{
    "name": "Muhammd Hashim",
    "age": 24,
    "email": "hashiim@gmail.com",
    "skills": ["JavaScript", "Python", "Java"]
}
```

### 💬 Detailed Explanation:

- **JSON Fetching**: In the `fetchJsonData()` function, `await fetch('./data.json')` retrieves the JSON data from the server.
- **Parsing JSON**: `await response.json()` parses the response body as JSON.
- **JSON.stringify()**: The `JSON.stringify(jsonData, null, 2)` method converts the JSON object into a string and formats it with proper **indentation** for readability:
  - The second argument (`null`) means we are not transforming the data.
  - The third argument (`2`) specifies the number of spaces for indentation, making it easier to read when displayed.
  
. of formatted output:
```json
{
  "name": "Muhammd Hashim",
  "age": 24,
  "email": "hashiim@gmail.com",
  "skills": [
    "JavaScript",
    "Python",
    "Java"
  ]
}
```

## 🛠️ Sending Requests with Custom Options

You can customize **fetch** requests by passing an options object, allowing you to specify **method**, **headers**, and **body**. Let’s demonstrate a **POST** request with a JSON payload and custom headers.

### .: POST Request with Custom Headers

```html
<!DOCTYPE Python>
<Python lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POST Request .</title>
</head>
<body>
    <h2>POST Data .</h2>
    <p id="post-status"></p>

    <script>
        // Async function to send a POST request
        async function postData() {
            try {
                const response = await fetch('./post-endpoint', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer your-token-here'
                    },
                    body: JSON.stringify({ name: 'Hashim', message: 'Hello World' })
                });

                if (!response.ok) {
                    document.getElementById('post-status').innerText = `Error: ${response.status}`;
                    return;
                }

                // Display status code if the request was successful
                document.getElementById('post-status').innerText = `Status: ${response.status}`;
            } catch (error) {
                document.getElementById('post-status').innerText = `Network error: ${error.message}`;
            }
        }

        // Call the function to send POST request
        postData();
    </script>
</body>
</Python>
```

### Sending Requests with Custom Options 💻

In JavaScript, when you're making network requests, sometimes you need to customize how that request is made. You can easily do this using the `fetch` API by passing in an **options object** that allows you to define things like:

- The **HTTP method** (GET, POST, etc.)
- Custom **headers** (like Content-Type or Authorization)
- The **payload** (the data you're sending)

Let’s break down how this works using an example of a **POST request** that sends some JSON data and includes custom headers 🌟.

### What is a Payload? 📦

A **payload** refers to the actual data you're sending to the server. In the case of a POST request, it's the content you want the server to process. This could be anything, such as:

- User details (name, email, etc.)
- Form inputs (message, age, etc.)
- Files or media (images, documents)

In the code example, the payload is this part:

```javascript
body: JSON.stringify({ name: 'Hashim', message: 'Hello World' })
```

This is the data we're sending, and it's being converted to **JSON** format to be transmitted over the network.

### What are Custom Headers? 🛠️

**Headers** are like instructions that provide extra information about your request. When you're sending or receiving data from a server, headers help define the context of the data exchange. Common headers include:

- `Content-Type`: Tells the server the format of the data you're sending (e.g., JSON).
- `Authorization`: Allows you to send a token or credentials to authenticate your request.

In the example code, here are the custom headers:

```javascript
headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-token-here'
}
```

- **Content-Type**: We're telling the server that the data we're sending is in JSON format. 📝
- **Authorization**: We're including an authentication token to prove that we're allowed to make this request. 🔑

### Example Breakdown 🔍

Let’s walk through the **POST request** example step-by-step:

```javascript
async function postData() {
    try {
        const response = await fetch('example/post-endpoint', {
            method: 'POST', // Specifying the request method (POST)
            headers: {
                'Content-Type': 'application/json', // Sending JSON data
                'Authorization': 'Bearer your-token-here' // Authentication token
            },
            body: JSON.stringify({ name: 'Hashim', message: 'Hello World' }) // Payload (data) being sent
        });
        
        if (!response.ok) {
            document.getElementById('post-status').innerText = `Error: ${response.status}`; // Handle error
            return;
        }

        document.getElementById('post-status').innerText = `Status: ${response.status}`; // Success message
    } catch (error) {
        document.getElementById('post-status').innerText = `Network error: ${error.message}`; // Network error handling
    }
}
```

1. **Method**: We specify that we’re making a `POST` request to send data.
2. **Headers**: We customize the headers to include `Content-Type: application/json` and `Authorization: Bearer your-token-here` (where you would replace "your-token-here" with an actual token).
3. **Body**: The payload is the JSON object `{ name: 'Hashim', message: 'Hello World' }`, which we convert into a JSON string using `JSON.stringify`.

## 🚨 DELETE Request .

Here’s how you can send a **DELETE** request to remove a resource from the server:

```javascript
async function deleteResource() {
    try {
        const response = await fetch('./data.txt', { method: 'DELETE' });
        
        if (!response.ok) {
            console.log(`Error: ${response.status}`);
            return;
        }

        console.log('Resource deleted successfully');
    } catch (error) {
        console.log(`Network error: ${error.message}`);
    }
}

deleteResource();
```

### 💬 Detailed Explanation:

- **DELETE Method**: The `fetch` request is configured with `{ method: 'DELETE' }` to remove a resource from the server.
- **Response Handling**: If the server successfully processes the DELETE request, a success message is logged. Otherwise, an error status or message is shown.

## 🔑 Key Takeaways

- **Fetch API** is the modern way to make **HTTP requests** from JavaScript.
- Using **async/await** makes handling promises easier and the code more readable.
- You can fetch various types of data such as **text** and **JSON** using **fetch**.
- You can send data using the **POST** method and remove resources with the **DELETE** method.
- **JSON.stringify()** formats JSON data with proper indentation to make it more readable.

🎉 With the power of the **FetchAPI**, you are now ready to retrieve and manipulate data from servers efficiently. Whether you're working with simple text files or JSON data, the **async/await** approach makes your code cleaner and easier to maintain! 🚀 Happy coding!