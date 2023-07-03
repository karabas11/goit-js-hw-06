const conteiner = document.querySelector('.widget');
const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

btnChangeColor.addEventListener('click', onChangeColor);

function onChangeColor() {
  conteiner.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = conteiner.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
