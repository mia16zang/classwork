function choosePic() {
  let choice = document.getElementById("imageSelect").value;
  let imageChoice = document.getElementById("canvas-image");
  imageChoice.src = choice;
}

function primaryTitle() {
  let primaryTitle = document.getElementById("primary-title").value;
  let text1Element = document.getElementById("text-1");
  text1Element.textContent = primaryTitle;
}

function updateSecondaryTitle() {
  const secondaryTitle = document.getElementById("secondary-title").value;
  const text2Element = document.getElementById("text-2");
  text2Element.textContent = secondaryTitle;
}

function updateFontFamily() {
  const fontFamily = document.querySelector(
    'input[name="font-family"]:checked'
  ).value;

  const text1Element = document.getElementById("text-1");
  text1Element.style.fontFamily = fontFamily;

  const text2Element = document.getElementById("text-2");
  text2Element.style.fontFamily = fontFamily;
}

function updateFontColor() {
  const fontColor = document.getElementById("font-color").value;

  const text1Element = document.getElementById("text-1");
  text1Element.style.color = fontColor;

  const text2Element = document.getElementById("text-2");
  text2Element.style.color = fontColor;
}

function updateFontSize() {
  const fontSize = document.getElementById("font-size").value + "px";

  const text1Element = document.getElementById("text-1");
  text1Element.style.fontSize = fontSize;

  const text2Element = document.getElementById("text-2");
  text2Element.style.fontSize = fontSize;
}

function updateTextStroke() {
  const textStroke = document.getElementById("text-stroke").value;

  const text1Element = document.getElementById("text-1");
  text1Element.style.fontWeight = textStroke;

  const text2Element = document.getElementById("text-2");
  text2Element.style.fontWeight = textStroke;
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
document
  .getElementById("text-stroke")
  .addEventListener("input", updateTextStroke);

// Initial update
primaryTitle();
updateSecondaryTitle();
updateFontFamily();
updateFontColor();
updateFontSize();
updateTextStroke();
