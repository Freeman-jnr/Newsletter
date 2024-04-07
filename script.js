// Function to validate email
function validateEmail() {
    var emailInput = document.getElementById('email-input');
    var errorAlert = document.getElementById('error-alert');
    var successAlert = document.getElementById('success-alert');
  
    var email = emailInput.value.trim();
  
    // Regular expression for email validation
    var re = /\S+@\S+\.\S+/;
    
    if (!re.test(email)) {
      errorAlert.style.display = 'block';
      successAlert.style.display = 'none';
      return false;
    } else {
      errorAlert.style.display = 'none';
      successAlert.style.display = 'block';
      emailInput.value = ''; // Clear the input after successful submission
      return true;

    }
  }
 
  