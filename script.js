function validateForm() {
    event.preventDefault(); // prevent form submission if validation fails
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;
    let password = document.getElementById("password").value;
    let formIsValid = true;
  
    // Validate name
    if (name === "") {
      showError("name", "Name must be filled out");
      formIsValid = false;
    } else {
      showSuccess("name");
    }
  
    // Validate email
    if (email === "") {
      showError("email", "Email must be filled out");
      formIsValid = false;
    } else if (!isValidEmail(email)) {
      showError("email", "Please enter a valid email address");
      formIsValid = false;
    } else {
      showSuccess("email");
    }
  
    // Validate phone number
    if (phone === "") {
      showError("phone", "Phone number must be filled out");
      formIsValid = false;
    } else if (!isValidPhone(phone)) {
      showError("phone", "Please enter a valid 10 digit phone number");
      formIsValid = false;
    } else {
      showSuccess("phone");
    }
  
    // Validate gender
    if (gender === "") {
      showError("gender", "Please select your gender");
      formIsValid = false;
    } else {
      showSuccess("gender");
    }
  
    // Validate password
    if (password === "") {
      showError("password", "Password must be filled out");
      formIsValid = false;
    } else if (!isValidPassword(password)) {
      showError(
        "password",
        "Please enter a password that is at least 8 characters long, contains at least one uppercase letter, one lowercase letter, and one digit"
      );
      formIsValid = false;
    } else {
      showSuccess("password");
    }
  
    // Submit form if all validations pass
    if (formIsValid) {
      showSuccess("form");
      document.getElementById("myForm").submit();
    }
  }
  
  function showError(inputId, errorMessage) {
    document.getElementById(inputId).classList.remove("success");
    document.getElementById(inputId).classList.add("error");
    document.getElementById(inputId + "-error").innerHTML = errorMessage;
  }
  
  function showSuccess(inputId) {
    document.getElementById(inputId).classList.remove("error");
    document.getElementById(inputId).classList.add("success");
    document.getElementById(inputId + "-error").innerHTML = "";
  }
  
  function isValidEmail(email) {
    // Regular expression for email validation
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  function isValidPhone(phone) {
    // Regular expression for 10 digit phone number validation
    let regex = /^\d{10}$/;
    return regex.test(phone);
  }
  
  function isValidPassword(password) {
    // Regular expression for password validation
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  }
  