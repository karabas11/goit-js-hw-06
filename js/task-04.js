const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

const spanValue = document.querySelector('#value');
console.log(spanValue.textContent);

btnDecrement.addEventListener('click', onMinusClick);
btnIncrement.addEventListener('click', onPlusClick);

let counterValue = 0;

function onPlusClick(event) {
  spanValue.textContent = event.currentTarget.value++;
  counterValue = spanValue.textContent;
}

function onMinusClick(event) {
  spanValue.textContent = event.currentTarget.value--;
  counterValue = spanValue.textContent;
}
