// Get the elements
const openFormBtn = document.getElementById("openFormBtn");
const popupForm = document.getElementById("popupForm");
const closeBtn = document.getElementById("closeBtn");
const form = document.getElementById("popupFormContent");

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");

const titleIcon = document.getElementById("title-icon");
const descriptionIcon = document.getElementById("description-icon");

// Open the form when the button is clicked
openFormBtn.addEventListener("click", () => {
  popupForm.style.display = "flex"; // Show the form (flex makes it centered)
});

// Close the form when the close button is clicked
closeBtn.addEventListener("click", () => {
  popupForm.style.display = "none"; // Hide the form
});

// Close the form when clicking outside of the form container
window.addEventListener("click", (e) => {
  if (e.target === popupForm) {
    popupForm.style.display = "none"; // Hide the form
  }
});

// Validation logic
function validateInput(input, regex, icon) {
  if (regex.test(input.value)) {
    input.style.borderColor = "green";
    icon.textContent = "✔";  // Display valid icon
    icon.className = "icon valid-icon";
  } else {
    input.style.borderColor = "red";
    icon.textContent = "✘";  // Display invalid icon
    icon.className = "icon invalid-icon";
  }
}

// Title validation (at least 3 characters, alphanumeric)
titleInput.addEventListener("input", () => {
  const titleRegex = /^[a-zA-Z0-9 ]{3,}$/;  // Title must have at least 3 alphanumeric characters
  validateInput(titleInput, titleRegex, titleIcon);
});

// Description validation (at least 10 characters)
descriptionInput.addEventListener("input", () => {
  const descriptionRegex = /^.{10,}$/;  // Description must have at least 10 characters
  validateInput(descriptionInput, descriptionRegex, descriptionIcon);
});

// Prevent form submission if invalid
form.addEventListener("submit", (e) => {
  if (titleInput.value.length < 3 || descriptionInput.value.length < 10) {
    e.preventDefault(); // Prevent form submission if inputs are invalid
    alert("Please fill out the form correctly.");
  }
});
