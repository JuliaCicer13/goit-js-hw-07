


const loginForm = document.querySelector(".login-form");



const handleSubmit = (event) => {


  const form = event.target;
  const email =
    form.elements.email.value;
  
  const password =
    form.elements.password.value;

  if (email === "" || password === "") {


    alert("Please fill all the empty fields!");

    
  }

  else {
    
    console.log (`Email: ${email.trim()}, Password:${password.trim()}`)

    form.rest();


}



}



loginForm.addEventListener('submit', handleSubmit);