let display = document.getElementById('display');
let currentInput = '0';
let operator = null;
let previousInput = null;

function appendToDisplay(value) {
  if (currentInput === '0' && value !== '.') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '0';
  operator = null;
  previousInput = null;
  display.value = currentInput;
}

function calculate() {
  try {
    let result;
    if (previousInput !== null && operator !== null) {
      switch (operator) {
        case '+':
          result = parseFloat(previousInput) + parseFloat(currentInput);
          break;
        case '-':
          result = parseFloat(previousInput) - parseFloat(currentInput);
          break;
        case '*':
          result = parseFloat(previousInput) * parseFloat(currentInput);
          break;
        case '/':
          if (parseFloat(currentInput) === 0) {
            display.value = 'Error';
            return;
          }
          result = parseFloat(previousInput) / parseFloat(currentInput);
          break;
        default:
          return;
      }
      currentInput = result.toString();
      display.value = currentInput;
      operator = null;
      previousInput = null;
    }
  } catch (error) {
    display.value = 'Error';
  }
}

function handleOperator(op) {
  if (previousInput === null) {
    previousInput = currentInput;
  } else if (operator !== null) {
    calculate();
    previousInput = currentInput;
  }
  operator = op;
  currentInput = '0';
}