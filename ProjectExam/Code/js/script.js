const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  console.log("The form was submitted");

  const name = document.querySelector("#name");
  const nameError = document.querySelector("#nameError");
  const nameValue = name.value;

  if (checkInputLength(nameValue) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");

  const emailValue = email.value;

  if (checkInputLength(emailValue) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (validateEmail(emailValue) === true) {
    invalidEmailError.style.display = "none";
  } else {
    invalidEmailError.style.display = "block";
  }
}

function checkInputLength(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length > 0) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}
