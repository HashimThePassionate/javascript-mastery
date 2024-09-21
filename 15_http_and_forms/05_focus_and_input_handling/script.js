// Automatically focus on the name input field when the page loads
document.querySelector("#name").focus();

// Function to handle form data and display it
function handleSubmit() {
    // Get the values from form fields
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const isPurpleChecked = document.getElementById('purple').checked;
    const selectedRadioButton = document.querySelector('input[name="color"]:checked');
    const selectedColor = selectedRadioButton ? selectedRadioButton.value : 'None';
    const fileUpload = document.getElementById('fileUpload').files[0] ? document.getElementById('fileUpload').files[0].name : 'No file selected';
    const comments = document.getElementById('comments').value;

    // Display the form data
    document.getElementById('formData').innerText = `
        Name: ${name}\n
        Password: ${password}\n
        Background Color (Purple): ${isPurpleChecked ? 'Yes' : 'No'}\n
        Selected Color: ${selectedColor}\n
        Uploaded File: ${fileUpload}\n
        Comments: ${comments}
    `;
}

// Listen for form submission
document.getElementById('submitBtn').addEventListener('click', handleSubmit);

// Checkbox interaction to change background color
document.getElementById('purple').addEventListener('change', () => {
    document.body.style.background = document.getElementById('purple').checked ? 'mediumpurple' : '';
});

// Radio buttons to change background color based on selection
let colorButtons = document.querySelectorAll('input[name="color"]');
colorButtons.forEach(button => {
    button.addEventListener('change', () => {
        document.body.style.background = button.value;
    });
});

// Track the length of the name input field in real time
document.getElementById('name').addEventListener('input', () => {
    console.log(`Name length: ${document.getElementById('name').value.length}`);
});
