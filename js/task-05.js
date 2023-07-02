const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');

input.addEventListener('input', onSearchInput);

function onSearchInput(event) {
  console.log(event.currentTarget.value);
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length === 0) {
    text.textContent = 'Anonymous';
  } else {
    text.textContent = event.currentTarget.value;
  }
}
