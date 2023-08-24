function showA() {
  let divA = document.getElementById("a");
  divA.style.display = "block";
}

const btn2 = document.getElementById("button2");
const divB = document.getElementById("b");
btn2.addEventListener("click", showB);

function showB() {
  divB.style.display = "block";
}

const close1 = document.getElementById("close1");

close1.addEventListener("click", () => {
  const divA = document.getElementById("a");
  divA.style.display = "none";
});

const bigger = document.getElementById("bigger");

bigger.addEventListener("click", () => {
  const widthB = document.getElementById("b").style.width.value + px;
  widthB += 20;
});
