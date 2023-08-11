// DO NOT EDIT THIS JS FILE!

//get the popup elements:

const openPopup = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const popupCover = document.getElementById("popupCover");

// show & hide popups:

function showPopup() {
  popup.style.display = "block";
  popupCover.style.display = "block";
  openPopup.setAttribute("onClick", "hidePopup()");
}

function hidePopup() {
  popup.style.display = "none";
  popupCover.style.display = "none";
  openPopup.setAttribute("onClick", "showPopup()");
}

//save image

setUpDownloadPageAsImage();

function setUpDownloadPageAsImage() {
  document.getElementById("save-img").addEventListener("click", function () {
    html2canvas(document.getElementById("output-canvas")).then(function (
      canvas
    ) {
      console.log(canvas);
      simulateDownloadImageClick(canvas.toDataURL(), "GoodMorning.png");
    });
  });
}

function simulateDownloadImageClick(uri, filename) {
  var link = document.createElement("a");
  if (typeof link.download !== "string") {
    window.open(uri);
  } else {
    link.href = uri;
    link.download = filename;
    accountForFirefox(clickLink, link);
  }
}

function clickLink(link) {
  link.click();
}

function accountForFirefox(click) {
  // wrapper function
  let link = arguments[1];
  document.body.appendChild(link);
  click(link);
  document.body.removeChild(link);
}
