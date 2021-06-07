const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const emailAddress = document.querySelector('#emailAddress');
const password = document.querySelector('#password');
const form = document.querySelector('form');
const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const submit = document.querySelector('.success');
const close = document.querySelector('.close');
let successMsg = document.querySelector('.success__msg');

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  if (firstName.value.length < 1) {
    setError(true, firstName, "First name cannot be empty");
  } else {
    setError(false, firstName);
  }
  if (lastName.value.length < 1) {
    setError(true, lastName, "Last name cannot be empty");
  } else {
    setError(false, lastName);
  }
  if (emailAddress.value.length < 1){
    setError(true, emailAddress, "Email address cannot be empty");
  } else if (emailValidation.test(emailAddress.value)) {
    setError(false, emailAddress);
  } else {
    setError(true, emailAddress, "Looks like this is not an email");
  }
  if (password.value.length < 1) {
    setError(true, password, "Password cannot be empty");
  } else {
    setError(false, password);
  }
  if (
    firstName.value.length >= 1 &&
    lastName.value.length >= 1 &&
    password.value.length >= 1 &&
    emailValidation.test(emailAddress.value)
  ) {
    successMsg.innerHTML = `<p>Thank you so much <strong>${firstName.value}</strong> for finding us and claiming your free reward.</p>
    <p>You will be recieving an email from us at <strong>${emailAddress.value}</strong> shortly.</p>
    <p>Keep an eye out for our wicked awesome email with even more wicked content!</p>`;
    submit.style.display = "flex";
    form.style.display = "none";
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input =>  input.value = '');
  }
});

close.addEventListener('click', ()=> {
  submit.style.display = "none";
  form.style.display = "block";
});

function setError(error, input, msg) {
  input.addEventListener('focus', ()=> {
      input.nextElementSibling.style.display = "none";
      input.parentElement.className = "";
  });
  if (error) {
      input.nextElementSibling.innerHTML = msg;
      input.nextElementSibling.style.display = "block";
      input.parentElement.className = "error";
  } else {
      input.nextElementSibling.style.display = "none";
      input.parentElement.className = "";
  }
};