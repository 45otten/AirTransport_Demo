document.addEventListener("DOMContentLoaded", function() {
  const showMapOneBtn = document.getElementById("showMapOne");
  const showMapTwoBtn = document.getElementById("showMapTwo");
  const mapOne = document.getElementById("mapOne");
  const mapTwo = document.getElementById("mapTwo");

  if (showMapOneBtn) {
      showMapOneBtn.addEventListener("click", function() {
          toggleMapVisibility(mapOne, showMapOneBtn);
      });
  }

  if (showMapTwoBtn) {
      showMapTwoBtn.addEventListener("click", function() {
          toggleMapVisibility(mapTwo, showMapTwoBtn);
      });
  }

  function toggleMapVisibility(map, button) {
      if (map.style.display === "none" || map.style.display === "") {
          map.style.display = "block";
          button.textContent = "Hide Map";
          button.style.color='green'
      } else {
          map.style.display = "none";
          button.textContent = "Show Map";
          button.style.color =""
      }
  }
});

const toBookingPage = document.getElementById('toBookingPage');

if(toBookingPage){
  document.addEventListener("DOMContentLoaded", function() {

    toBookingPage.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './booking.html';
    });
});
}





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

if(logInBtn)

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


  if(logInMail){
    logInMail.addEventListener('input', validateForm);
    logInPass.addEventListener('input', validateForm);
    logInConfirmPass.addEventListener('input', validateForm);
  }


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
  var translateOne = document.getElementById('translateOne');
  var translateTwo = document.getElementById('translateTwo');

  function validateForm() {
      resetValidationClasses();

      var isValid = true;

      if (pickUpDateInput.value === "") {
          isValid = false;
          showError(pickUpDateInput, "Please select a pick-up date.");
      }

      if (pickUpTimeInput.value === "") {
          isValid = false;
          showError(pickUpTimeInput, "Please select a pick-up time.");
      }

      if (pickUpLocationSelect.value === dropOffLocationSelect.value) {
          isValid = false;
          showError(dropOffLocationSelect, "Pick-up and drop-off locations should not be the same.");
      }

      if (passengerNameInput.value.trim() === "") {
          isValid = false;
          showError(passengerNameInput, "Please enter the passenger's name.");
      }

      if (emailInput.value.trim() === "") {
          isValid = false;
          showError(emailInput, "Please enter your email address.");
      }
      if (phoneNumberInput.value.trim() === "") {
          isValid = false;
          showError(phoneNumberInput, "Please enter your phone number.");
      }
      if (addressInput.value.trim() === "") {
          isValid = false;
          showError(addressInput, "Please enter your address.");
      }

      if (!creditCardRadio.checked && !payPalRadio.checked && !cashRadio.checked) {
          isValid = false;
          showError(document.querySelector('.payment-method'), "Please select a payment method.");
      }

      return isValid;
  }

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

  function showError(inputField, message) {
      var errorMessage = inputField.nextElementSibling;
      errorMessage.textContent = message;
      errorMessage.classList.remove('hidden');
      inputField.classList.add('border-red-500');
  }
if(confirmButton)
  confirmButton.addEventListener('click', function(event) {
      event.preventDefault();
      
      var isValid = validateForm();
      function displayId(){
        translateOne.classList.add('flex','translateOne')
        translateOne.classList.remove('hidden')
        translateTwo.classList.add('flex','translateTwo')
        translateTwo.classList.remove('hidden')
      }

      if (isValid) {
          console.log("Form submitted successfully.");
           displayId();
        }
  });
});


if(window.onload){

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
}



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












