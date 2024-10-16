    // JavaScript code for form validation
    const form = document.getElementById('myForm');
    const inputField = document.getElementById('inputField');
    
form.addEventListener('submit', function(event) {
	// Prevent form from submitting
  event.preventDefault();
      // Retrieve the input field value
  const inputValue = inputField.value;
      // Regular expression pattern for alphanumeric input
  const regex = /^[a-zA-Z0-9]+$/;
      // Check if the input value matches the pattern
  if (regex.test(inputValue)) {
  
  // Valid input: display confirmation and submit the form
    alert("Form Submitted");
    inputField.value = '';
  } else {

  // Invalid input: display error message
    alert("Please enter alphanumeric characters only.");
      }
      });