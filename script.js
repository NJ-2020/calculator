const numButtons = document.querySelectorAll('.numBut');
const displayResult = document.querySelector('#display');
const operatorButtons = document.querySelectorAll('.operatorBut'); // reference to all operator buttons
let operator; // is Operator Button that is chosen by user
let operatorSelected = false; // this variable will be used to check if an operator is selected or not
let nums = []; // the value of the numbers that is chosen by user
numButtons.forEach(function (el) {
  el.addEventListener('click', function (e) {
    if (displayResult.innerHTML.split('').length >= 12) {
      return;
    }
    if (displayResult.innerHTML === '0') {
      displayResult.innerHTML = e.target.innerHTML;
    } else {
      displayResult.innerHTML += e.target.innerHTML;
    }
    if (operatorSelected) {
      displayResult.innerHTML = e.target.innerHTML;
      operatorSelected = false;
    }
  });
});

operatorButtons.forEach(function (el) {
  el.addEventListener('click', function (e) {
    nums.push(Number(displayResult.innerHTML));
    operator = e.target.innerHTML;
    operatorSelected = true;
  });
});
