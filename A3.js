//editable title for header code saving in localstorage
document.getElementById("editableTitle").innerHTML =
  localStorage["editableTitle"] || "Title";

setInterval(function () {
  localStorage["editableTitle"] =
    document.getElementById("editableTitle").innerHTML;
}, 20 * 1000);
