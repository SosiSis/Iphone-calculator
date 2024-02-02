const display = document.querySelector('.value');
const numberKeys = document.querySelectorAll('.number');
const decimalKey = document.querySelector('.decimal');
const operatorKeys = document.querySelectorAll('.operator');
const equalsKey = document.querySelector('.equals');
const acKey = document.querySelector('.ac');

// Initialize variables to hold the calculator state
let firstNumber = null;
let operator = null;
let secondNumber = null;
let result = null;

// Add event listeners to the number keys
numberKeys.forEach(function(numberKey) {
  numberKey.addEventListener('click', function() {
    const targetNumber = this.textContent;
    if (display.textContent === '0') {
      display.textContent = targetNumber;
    } else {
      display.textContent += targetNumber;
    }
  });
});

// Add event listener to the decimal key
decimalKey.addEventListener('click', function() {
  if (!display.textContent.includes('.')) {
    display.textContent += '.';
  }
});

// Add event listeners to the operator keys
operatorKeys.forEach(function(operatorKey) {
  operatorKey.addEventListener('click', function() {
    // Release any previously pressed operator key
    operatorKeys.forEach(function(operatorKey) {
      operatorKey.classList.remove('active');
    });
    // Highlight the current operator key
    this.classList.add('active');
    // Store the current operator
    operator = this.textContent;
    // Store the first number if it hasn't been stored yet
    if (firstNumber === null) {
      firstNumber = Number(display.textContent);
      display.textContent = ' ';
    }
  });
});

// Add event listener to the equals key
equalsKey.addEventListener('click', function() {
  // Store the second number
  secondNumber = Number(display.textContent);
  // Calculate the result based on the stored values and operator
  switch(operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '−':
      result = firstNumber - secondNumber;
      break;
    case '×':
      result = firstNumber * secondNumber;
      break;
    case '÷':
      result = firstNumber / secondNumber;
      break;
  }
  // Display the result and reset the calculator state
  display.textContent = result.toString();
  firstNumber = null;
  operator = null;
  secondNumber = null;
  result = null;
  operatorKeys.forEach(function(operatorKey) {
    operatorKey.classList.remove('active');
  });
});

// Add event listener to the AC key
acKey.addEventListener('click', function() {
  // Reset the calculator state and display
  firstNumber = null;
  operator = null;
  secondNumber = null;
  result = null;
  display.textContent = '0';
  // Release any previously pressed operator key
  operatorKeys.forEach(function(operatorKey) {
    operatorKey.classList.remove('active');
  });
});