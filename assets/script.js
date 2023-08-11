// JAVASCRIPT COMES HERE
// --------------------------------------------------------

//get the popup elements:
const openPopup = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const popupCover = document.getElementById("popupCover");



// SHOW HIDE POPUPS
//---------------------------------------------------------

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
