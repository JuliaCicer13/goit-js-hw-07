const getBackgroundColor = document.querySelector(".widget");
const getRandomColor = document.querySelector(".color");
const getButton = document.querySelector(".change-color");
const getBodyColor = document.querySelector(".body-color")






const clickHandle = (event) => {

  const getColor = getRandomHexColor();
  event;
  event.target;
  event.carrentTarget;
  getBodyColor.style.backgroundColor = getColor;
  getRandomColor.textContent = getColor;



  
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;


  }



 }




getButton.addEventListener("click", clickHandle);





 















