window.addEventListener("DOMContentLoaded", (event) => {
  const btn = document.getElementById("button");

  function divShow() {
    const box = document.getElementById("box");

    if (box.style.display === "none") {
      // 👇️ this SHOWS the form
      box.style.display = "block";
    } else {
      // 👇️ this HIDES the form
      box.style.display = "none";
    }
  }

  divShow();
  btn.addEventListener("click", divShow());
});
