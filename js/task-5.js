const getBackgroundColor = document.querySelector(".widget");
const getRandomColor = document.querySelector(".color");
const getButton = document.querySelector(".change-color");
const getBodyColor = document.querySelector(".body-color")



const handleClick = (event) => {
  const randomColor = getRandomHexColor();
  event;
  event.type;
  event.currentTarget;
  getBodyColor.style.backgroundColor = randomColor;
  getRandomColor.textContent = randomColor;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}





}

getButton.addEventListener("click", handleClick);