function showA() {
  let divA = document.getElementById("a");
  divA.style.display = "block";
}

const btn2 = document.getElementById("button2");
const divB = document.getElementById("b");
btn2.addEventListener("click", function () {
  divB.style.display = "block";
});
