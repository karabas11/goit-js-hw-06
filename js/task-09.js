const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const body = document.querySelector('body');

btnChangeColor.addEventListener('click', onChangeColor);

function onChangeColor() {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
