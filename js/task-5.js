const changeColorButton = document.querySelector('.change-color');
const changeColorSpan = document.querySelector('color');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


changeColorButton.addEventListener('click', function () {
  const randomColor = getRandomHexColor();

  // Set background color for body
  document.body.style.backgroundColor = randomColor;

  // Set text content for span.color
  colorSpan.textContent = randomColor;
});
