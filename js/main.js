// get in touch form validation
let firstname = document.getElementById("get-in-touch-name");
let email = document.getElementById("get-in-touch-email");
let message = document.getElementById("get-in-touch-message");
let submit = document.getElementById("get-in-touch-submit");
let getInTouchToast = document.getElementById("get-in-touch-toast");

const validateGetInTouch = (e) => {
  e.preventDefault();
  const toastTitle = document.getElementById("get-in-touch-toast-title");
  const toastBody = document.getElementById("get-in-touch-toast-body");
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(getInTouchToast);

  if (
    validFirstname(firstname.value) &&
    validEmail(email.value) &&
    validMessage(message.value)
  ) {
    toastTitle.innerText = "Your data is submited";
    toastBody.innerText = `Name: ${firstname.value}
Email: ${email.value}
Message: ${message.value}`;
    getInTouchToast.classList.remove("bg-danger");
    getInTouchToast.classList.add("bg-success");

    firstname.value = "";
    email.value = "";
    message.value = "";
  } else {
    toastTitle.innerText = "You have to fill these fields with valid formats:";
    toastBody.innerText = `Name: only letters, no numbers
Email: must be in valid email format
Message: must be between 1 and 99 characters long`;
    getInTouchToast.classList.remove("bg-success");
    getInTouchToast.classList.add("bg-danger");
  }

  toastBootstrap.show();
};

const validFirstname = (firstname) => {
  if (isNaN(firstname)) return true;
  else return false;
};

const validEmail = (email) => {
  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  //Vraca null ako nije dobro, vraca unetu vrednost ako je dobro
  let result = email.match(pattern);
  if (result === null) return false;
  else return true;
};

const validMessage = (message) => {
  if (message.length > 0 && message.length < 100) return true;
  else return false;
};

submit.addEventListener("click", validateGetInTouch);

// Subscribe validation
let subscribeEmail = document.getElementById("subscribe-email");
let subscribeSubmit = document.getElementById("subscribe-submit");
let subscribeToast = document.getElementById("subscribe-toast");

const validateSubscribe = (e) => {
  e.preventDefault();
  const toastTitle = document.getElementById("subscribe-toast-title");
  const toastBody = document.getElementById("subscribe-toast-body");
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(subscribeToast);

  if (validEmail(subscribeEmail.value)) {
    toastTitle.innerText = "YOUR SUBSCRIBITION IS NOTED";
    toastBody.innerText = `Email: ${subscribeEmail.value}`;
    subscribeToast.classList.remove("bg-danger");
    subscribeToast.classList.add("bg-success");
    subscribeEmail.value = "";
  } else {
    toastTitle.innerText = "Error:";
    toastBody.innerText = `Email must be in valid format`;
    subscribeToast.classList.remove("bg-success");
    subscribeToast.classList.add("bg-danger");
  }

  toastBootstrap.show();
};

subscribeSubmit.addEventListener("click", validateSubscribe);
