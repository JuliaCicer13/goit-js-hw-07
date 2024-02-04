const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission and page reload

  // Collect input values
  const emailInput = this.elements.email;
  const passwordInput = this.elements.password;

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // Check if any field is empty
  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  // Create an object with input values
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // Log the object to the console
  console.log(formData);

  // Reset form fields
  this.reset();
});