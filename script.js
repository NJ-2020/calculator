const numButtons = document.querySelectorAll(".numBut");
const displayResult = document.querySelector("#display");

numButtons.forEach(function (el) {
  el.addEventListener("click", function (e) {
    if (displayResult.innerHTML === "0") {
      displayResult.innerHTML = e.target.innerHTML;
    } else {
      displayResult.innerHTML += e.target.innerHTML;
    }
  });
});
