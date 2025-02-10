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
