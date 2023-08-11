// Get references to the button and the div
const colorButton = document.getElementById("colorButton");
const colorDiv = document.getElementById("colorDiv");

// Array of colors to choose from
const colors = ["red", "blue", "green", "orange", "purple", "aqua"];

// Add a click event listener to the button
colorButton.addEventListener("click", changeColor);

function changeColor() {
  // Generate a random index to pick a color from the array
  const randomIndex = Math.floor(Math.random() * colors.length);

  // Get the color from the array
  const newColor = colors[randomIndex];

  // Change the background color of the div
  colorDiv.style.backgroundColor = newColor;
  colorButton.style.backgroundColor = newColor;
}
