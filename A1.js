//choose image for canvas
function choosePic() {
  let choice = document.getElementById("imageSelect").value;
  let imageChoice = document.getElementById("canvas-image");
  imageChoice.src = choice;
}

// Function to update Primary title
function primaryTitle() {
  let primaryTitle = document.getElementById("primary-title").value;
  let text1Element = document.getElementById("text-1");
  text1Element.textContent = primaryTitle;
}

// Function to update Secondary title
function updateSecondaryTitle() {
  const secondaryTitle = document.getElementById("secondary-title").value;
  const text2Element = document.getElementById("text-2");
  text2Element.textContent = secondaryTitle;
}

// Function to update the font family
function updateFontFamily() {
  const fontFamily = document.querySelector(
    'input[name="font-family"]:checked'
  ).value;

  const text1Element = document.getElementById("text-1");
  text1Element.style.fontFamily = fontFamily;

  const text2Element = document.getElementById("text-2");
  text2Element.style.fontFamily = fontFamily;
}

//change font colour
function updateFontColor() {
  const fontColor = document.getElementById("font-color").value;

  const text1Element = document.getElementById("text-1");
  text1Element.style.color = fontColor;

  const text2Element = document.getElementById("text-2");
  text2Element.style.color = fontColor;
}

// Function to update the font size
function updateFontSize() {
  const fontSize = document.getElementById("font-size").value + "px";

  const text1Element = document.getElementById("text-1");
  text1Element.style.fontSize = fontSize;

  const text2Element = document.getElementById("text-2");
  text2Element.style.fontSize = fontSize;
}

//change stroke size
function adjuststroke() {
  textsin = document.getElementById("text-stroke").value;
  tostroke = document.getElementById("text-1");
  tostroke2 = document.getElementById("text-2");
  tostroke.style.webkitTextStrokeWidth = textsin + "px";
  tostroke2.style.webkitTextStrokeWidth = textsin + "px";
}

//change stroke color
function updateStrokeColor() {
  const strokeColorSelect = document.getElementById("stroke-color");
  const selectedStrokeColor = strokeColorSelect.value;

  const text1 = document.getElementById("text-1");
  const text2 = document.getElementById("text-2");

  text1.style.webkitTextStrokeColor = selectedStrokeColor;
  text2.style.webkitTextStrokeColor = selectedStrokeColor;

  text1.style.textStrokeColor = selectedStrokeColor;
  text2.style.textStrokeColor = selectedStrokeColor;
}

// Attach event listeners to input elements
document
  .getElementById("primary-title")
  .addEventListener("input", primaryTitle);
document
  .getElementById("secondary-title")
  .addEventListener("input", updateSecondaryTitle);
document.querySelectorAll('input[name="font-family"]').forEach((radio) => {
  radio.addEventListener("change", updateFontFamily);
});
document
  .getElementById("font-color")
  .addEventListener("change", updateFontColor);
document.getElementById("font-size").addEventListener("input", updateFontSize);
document.getElementById("text-stroke").addEventListener("change", adjuststroke);
document
  .getElementById("stroke-color")
  .addEventListener("change", updateStrokeColor);

// Initial update
choosePic();
primaryTitle();
updateSecondaryTitle();
updateFontFamily();
updateFontColor();
updateFontSize();
