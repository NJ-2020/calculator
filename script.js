const topNumber = document.querySelector(".topNum");
const topOperator = document.querySelector(".topOp");
const bottomNumber = document.querySelector(".bottomNum");
const number = document.querySelectorAll(".num");
const percentage = document.querySelector(".percent");
const operators = document.querySelectorAll(".operatorBut");
const total = document.querySelector(".total");
const dot = document.querySelector(".dot");
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");

number.forEach(function (el) {
  el.addEventListener("click", function () {
    if (bottomNumber.innerHTML === "0") {
      bottomNumber.innerHTML = el.innerHTML; // klo angkanya masih kosong, maka gantilah dg apa yg dipencet user aka reasign zero with number being clicked.
    } else {
      bottomNumber.innerHTML += el.innerHTML; // else concatenate the numbers
    }
  });
});

// when an operator is selected, move the numbers in the bottom to the top and move the operator to the top as well - each on its own div. - 2.10.22
operators.forEach(function (el) {
  el.addEventListener("click", function () {
    topNumber.innerHTML = bottomNumber.innerHTML;
    topOperator.innerHTML = el.innerHTML;
    bottomNumber.innerHTML = "0";
  });
});

total.addEventListener("click", function () {
  if (topOperator.innerHTML === "+") {
    bottomNumber.innerHTML =
      Number(topNumber.innerHTML) + Number(bottomNumber.innerHTML);
  }

  if (topOperator.innerHTML === "-") {
    bottomNumber.innerHTML =
      Number(topNumber.innerHTML) - Number(bottomNumber.innerHTML);
  }

  if (topOperator.innerHTML === "*") {
    bottomNumber.innerHTML =
      Number(topNumber.innerHTML) * Number(bottomNumber.innerHTML);
  }

  if (topOperator.innerHTML === "/") {
    bottomNumber.innerHTML =
      Number(topNumber.innerHTML) / Number(bottomNumber.innerHTML);
  }
});

percentage.addEventListener("click", function () {
  bottomNumber.innerHTML = Number(bottomNumber.innerHTML) / 100;
});

del.addEventListener("click", function () {
  if (bottomNumber.innerHTML.length === 1) {
    bottomNumber.innerHTML = "0";
  } else {
    bottomNumber.innerHTML = bottomNumber.innerHTML.slice(0, -1);
  }
});

clear.addEventListener("click", function () {
  bottomNumber.innerHTML = "0";
  topNumber.innerHTML = "";
  topOperator.innerHTML = "";
});

dot.addEventListener("click", function () {
  if (bottomNumber.innerHTML.includes(".")) {
    return; // exit from this callback function
  }
  bottomNumber.innerHTML += dot.innerHTML;
  // better way
  /* if(!bottomNumber.innerHTML.includes('.')) {
    bottomNumber.innerHTML += dot.innerHTML
  } */
});
