// Get the textarea element
const textArea = document.getElementById("textArea");

// Function to save the textarea content to local storage
function saveToLocalStorage() {
    localStorage.setItem("savedText", textArea.value);
}

// Check if there's existing data in local storage and populate the textarea
if (localStorage.getItem("savedText")) {
    textArea.value = localStorage.getItem("savedText");
}

// Add an event listener to the textarea for input changes and save to local storage
textArea.addEventListener("input", saveToLocalStorage);
