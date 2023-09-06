//editable title for header code saving in localstorage
const editableTitle = document.getElementById("editableTitle");

// Retrieve the stored title from local storage (if available)
const storedTitle = localStorage.getItem("userTitle");
if (storedTitle) {
  editableTitle.textContent = storedTitle;
}

// Listen for input changes and store the updated title in local storage
editableTitle.addEventListener("input", () => {
  const newTitle = editableTitle.textContent;
  localStorage.setItem("userTitle", newTitle);
});
