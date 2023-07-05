const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

const spanValue = document.querySelector('#value');

btnDecrement.addEventListener('click', onMinusClick);
btnIncrement.addEventListener('click', onPlusClick);

let counterValue = parseInt(spanValue.textContent);
console.log(counterValue);
console.log(spanValue.textContent);

function onPlusClick() {
  counterValue++;
  spanValue.textContent = counterValue;
}

function onMinusClick() {
  counterValue--;
  spanValue.textContent = counterValue;
}
