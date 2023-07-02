const input = document.querySelector('#validation-input');
const minStringLength = input.dataset.length;
input.addEventListener('blur', onBlur);

function onBlur(event) {
  const stringLength = event.currentTarget.value.length;

  if (stringLength >= minStringLength) {
    input.classList.add('invalid');
  } else {
    input.classList.add('valid');
  }
}
