'user strict';

const inputField = document.querySelector('.input');
const btnNumbersEl = document.querySelectorAll('.btn-number');
const btnOperatorsEl = document.querySelectorAll('.btn-operator');
const btnEqualsEl = document.querySelector('[data-equals]');
const btnClearEl = document.querySelector('[data-clear]');

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? 'Nice try 😏' : a / b);

const operate = (operator, num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) return '';
  const operations = { add, subtract, multiply, divide };
  return Math.round((operations[operator]?.(num1, num2) || '') * 1000) / 1000;
};

let currentValue = '';
let previousValue = '';
let operator = '';

const handleNumberDisplay = function (number) {
  if (currentValue.length >= 5) return;
  if (number === '.' && currentValue.includes('.')) return;
  currentValue += number;
  inputField.value = currentValue;
};

const handleOperator = function (op) {
  if (!currentValue) return;
  if (previousValue && operator)
    previousValue = operate(
      operator,
      Number(previousValue),
      Number(currentValue)
    );

  operator = op;
  previousValue = currentValue;
  currentValue = '';
  inputField.value = previousValue;
};

btnOperatorsEl.forEach((btn) =>
  btn.addEventListener('click', (e) => handleOperator(e.target.dataset.value))
);
