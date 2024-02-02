const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', (event) => {
  const inputText = event.target.value.trim(); // Remove leading and trailing spaces

  if (inputText === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputText;
  }
});