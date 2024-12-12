const getallItems = document.getElementById("controls");
const inputItems = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const getrealItems = document.getElementById("boxes");

let sizes = 30;

createButton.addEventListener("click", createMarkup);

function createMarkup() {

    if (inputItems.value < 1 || inputItems.value > 100) {
    
        console.log("error");
        return;

    }
    
    
    createBoxes(inputItems.value);


  
}

function createBoxes(amount)
{ 
    clear();

    for (let i = 0; i < amount; i++) {

        const box = document.createElement("div");
        box.style.width = `${sizes}px`;
        box.style.height = `${sizes}px`;
        box.style.backgroundColor = getRandomHexColor();
        getrealItems.append(box);
        sizes += 10;
    }
    


    }
    

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



destroyButton.addEventListener("click", destroyBoxes);

function destroyBoxes() {
    getrealItems.value = "";
    clear();

    
}

function clear() {
    
 getrealItems.innerHTML = "";
    sizes = 30;


}