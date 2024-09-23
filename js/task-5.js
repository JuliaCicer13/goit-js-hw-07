const getBackgroundColor = document.querySelector(".widget");
const getRandomColor = document.querySelector(".color");
const getButton = document.querySelector(".change-color");


getButton.addEventListener("click", handleClick);

const handleClick = (event) => {
  event;
  event.type;
  event.currentTarget;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}





}