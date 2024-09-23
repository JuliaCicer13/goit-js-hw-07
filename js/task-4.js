const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', handleSubmit);
  
function handleSubmit(event) {
    
  event.preventDefault();

  const form = event.target;
  const email =
    form.elements.email.value;
  const password =
    form.elements.password.value;
  
  if (email === "" || password === "") {

alert("Please fill in all fields!") 

  } else {

    console.log(`Login: ${login.trim()
  }, Password: ${ password.trim() }`);
    form.reset();
  }
  }


