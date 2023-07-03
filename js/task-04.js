const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

const spanValue = document.querySelector('#value');

btnDecrement.addEventListener('click', onMinusClick);
btnIncrement.addEventListener('click', onPlusClick);

let counterValue = 0;

function onPlusClick() {
  counterValue = spanValue.textContent++;
}

function onMinusClick() {
  counterValue = spanValue.textContent--;
}
