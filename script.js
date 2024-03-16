document.addEventListener('DOMContentLoaded', function() {
  // Get form elements
  var logInMail = document.getElementById("logInMail");
  var logInPass = document.getElementById("logInPass");
  var logInConfirmPass = document.getElementById("logInConfirmPass");
  var logInBtn = document.getElementById("logInButton");
  var passWarn = document.getElementById('passWarning');
  var rememberMeCheckbox = document.getElementById("rmbr");

  function validateForm() {
      var email = logInMail.value.trim();
      var password = logInPass.value.trim();
      var confirmPassword = logInConfirmPass.value.trim();

      if (email === "" || password === "" || confirmPassword === "") {
          logInBtn.disabled = true;
          logInBtn.classList.remove("bg-gradient", "from-blue-600", "to-blue-400");
          logInBtn.classList.add("bg-slate-300");
          return;
      }
      logInBtn.disabled = false;
      logInBtn.classList.remove("bg-slate-300");
      logInBtn.classList.add("bg-gradient", "from-blue-600", "to-blue-400");
      passWarn.classList.add('hidden');
  }

  logInBtn.addEventListener('click', function(event) {
      event.preventDefault();
      validateForm();

      if (logInPass.value === logInConfirmPass.value) {
          passWarn.classList.add('hidden');
      }
      else{
        passWarn.classList.remove('hidden')
      }
  });

  logInMail.addEventListener('input', validateForm);
  logInPass.addEventListener('input', validateForm);
  logInConfirmPass.addEventListener('input', validateForm);

  validateForm();
});

document.addEventListener('DOMContentLoaded', function() {
  // Get form elements
  var pickUpDateInput = document.getElementById("pickUpDateValue");
  var pickUpTimeInput = document.getElementById("pickUpTimeValue");
  var pickUpLocationSelect = document.getElementById("pickup");
  var dropOffLocationSelect = document.getElementById("dropoff");
  var passengerNameInput = document.getElementById("passengerName");
  var emailInput = document.getElementById("email");
  var phoneNumberInput = document.getElementById("phoneNumber");
  var addressInput = document.getElementById("address");
  var babySeatCheckbox = document.getElementById("babySeat");
  var textAreaBabyInput = document.getElementById("textAreaBaby");
  var creditCardRadio = document.getElementById("creditCard");
  var payPalRadio = document.getElementById("payPal");
  var cashRadio = document.getElementById("cash");
  var confirmButton = document.querySelector('.confirm-button');

  // Function to validate the form
  function validateForm() {
      // Reset validation classes
      resetValidationClasses();

      // Flag to track form validity
      var isValid = true;

      // Validate Pick-up date
      if (pickUpDateInput.value === "") {
          isValid = false;
          showError(pickUpDateInput, "Please select a pick-up date.");
      }

      // Validate Pick-up time
      if (pickUpTimeInput.value === "") {
          isValid = false;
          showError(pickUpTimeInput, "Please select a pick-up time.");
      }

      // Validate Pick-up and Drop-off locations
      if (pickUpLocationSelect.value === dropOffLocationSelect.value) {
          isValid = false;
          showError(dropOffLocationSelect, "Pick-up and drop-off locations should not be the same.");
      }

      // Validate Passenger's Name
      if (passengerNameInput.value.trim() === "") {
          isValid = false;
          showError(passengerNameInput, "Please enter the passenger's name.");
      }

      // Validate Email
      if (emailInput.value.trim() === "") {
          isValid = false;
          showError(emailInput, "Please enter your email address.");
      }

      // Validate Phone Number
      if (phoneNumberInput.value.trim() === "") {
          isValid = false;
          showError(phoneNumberInput, "Please enter your phone number.");
      }

      // Validate Address
      if (addressInput.value.trim() === "") {
          isValid = false;
          showError(addressInput, "Please enter your address.");
      }

      // Validate Payment Method
      if (!creditCardRadio.checked && !payPalRadio.checked && !cashRadio.checked) {
          isValid = false;
          showError(document.querySelector('.payment-method'), "Please select a payment method.");
      }

      return isValid;
  }

  // Function to reset validation classes
  function resetValidationClasses() {
      var errorMessages = document.querySelectorAll('.error-message');
      errorMessages.forEach(function(errorMessage) {
          errorMessage.classList.add('hidden');
      });

      var inputFields = document.querySelectorAll('.validate');
      inputFields.forEach(function(inputField) {
          inputField.classList.remove('border-red-500');
      });
  }

  // Function to show error message
  function showError(inputField, message) {
      var errorMessage = inputField.nextElementSibling;
      errorMessage.textContent = message;
      errorMessage.classList.remove('hidden');
      inputField.classList.add('border-red-500');
  }

  // Event listener for form submission
  confirmButton.addEventListener('click', function(event) {
      event.preventDefault();
      
      // Validate the form
      var isValid = validateForm();

      // If the form is valid, proceed with submission
      if (isValid) {
          // Proceed with form submission
          console.log("Form submitted successfully.");
      }
  });
});


window.onload = function() {
  const slider = document.querySelector('.infinite-slider');
  const slides = document.querySelectorAll('.infinite-slider h3');
  const slideWidth = slides[0].offsetWidth;
  const totalSlides = slides.length;

  let currentIndex = 0;

  function moveSlides() {
    currentIndex++;
    if (currentIndex === totalSlides) {
      currentIndex = 0;
    }
    const offset = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${offset}px)`;
  }
  setInterval(moveSlides, 500); 
};


let toggleNav = document.getElementById('toggleNav');

if(toggleNav){
  document.addEventListener('DOMContentLoaded',()=>{
    
    let toggleNavOn = document.getElementById('toggleNavOn');
    let toggleNavOff = document.getElementById('toggleNavOff');
    let screenSizeWidth = window.innerWidth;

if(screenSizeWidth <= 700){
  toggleNav.classList.add('hidden');
  console.log(screenSizeWidth + 'px');
}
else{
 toggleNav.classList.remove('hidden');
 console.log(screenSizeWidth + 'px')
}

    if(toggleNavOn){
      toggleNavOn.addEventListener('click',()=> {
        toggleNavOn.classList.add('hidden');
        toggleNavOff.classList.remove('hidden');
        toggleNav.classList.remove('hidden');
      });
    }

    if(toggleNavOff){
      toggleNavOff.addEventListener('click',()=>{
        toggleNavOn.classList.remove('hidden');
        toggleNavOff.classList.add('hidden');
        toggleNav.classList.add('hidden');
      });
    }
  });
}


let bookingFormSumbitBtn = document.getElementById('bookingFormSumbit')


if(bookingFormSumbitBtn){
  
  let pickUpDateValue = document.getElementById('pickUpDateValue');
  let pickUpTimeValue = document.getElementById('pickUpTimeValue');
  let pickup = document.getElementById('pickup');
  let dropoff = document.getElementById('dropoff');
  let psngrName = document.getElementById('psngrName');
  let emailAddress = document.getElementById('emailAddress');
  let phoneNumber = document.getElementById('phoneNumber');
  let psngrAddress = document.getElementById('psngrAddress');
  let cash = document.getElementById('cash');
  let payPal = document.getElementById('payPal');
  let creditCard = document.getElementById('creditCard');
  let warnBox = document.getElementById('warnBox');
  let bookingFormSumbitBtn = document.getElementById('bookingFormSumbit')
  

  bookingFormSumbitBtn.addEventListener('click',()=>{

    if(pickUpDateValue.value == "" || pickUpTimeValue.value == "" ||  pickup.value == "" ||  dropoff.value == "" ||  psngrName.value == "" ||  emailAddress.value == "" ||  phoneNumber.value == "" ||  psngrAddress.value == ""){
      warnBox.classList.add('flex');
      warnBox.classList.remove('hidden');
    }
    else{
      warnBox.classList.add('hidden');
      warnBox.classList.remove('flex');
      console.log("Your form has been submitted")
    }
  })

}












