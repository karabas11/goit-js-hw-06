const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', onInputRange);

function onInputRange(event) {
  console.log(event.currentTarget.value);

  text.style.fontSize = event.currentTarget.value + 'px';
}
