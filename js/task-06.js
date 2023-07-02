const input = document.querySelector('#validation-input');
const minStringLength = input.dataset.length;
input.addEventListener('blur', onBlur);

function onBlur(event) {
  const stringLength = event.currentTarget.value.length;
  console.log(stringLength);

  if (stringLength >= minStringLength) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}
