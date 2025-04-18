/**
 * Hambacompare Marketing Website
 * Form Validation JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Prevent the default form submission
      e.preventDefault();
      
      // Get form fields
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');
      
      // Reset previous error messages
      clearErrors();
      
      // Validate form fields
      let isValid = true;
      
      // Name validation
      if (!nameInput.value.trim()) {
        displayError(nameInput, 'Please enter your name');
        isValid = false;
      }
      
      // Email validation
      if (!emailInput.value.trim()) {
        displayError(emailInput, 'Please enter your email address');
        isValid = false;
      } else if (!isValidEmail(emailInput.value.trim())) {
        displayError(emailInput, 'Please enter a valid email address');
        isValid = false;
      }
      
      // Subject validation
      if (!subjectInput.value.trim()) {
        displayError(subjectInput, 'Please enter a subject');
        isValid = false;
      }
      
      // Message validation
      if (!messageInput.value.trim()) {
        displayError(messageInput, 'Please enter your message');
        isValid = false;
      }
      
      // If the form is valid, submit it
      if (isValid) {
        // In a real implementation, you would submit the form data to a server
        // For this example, we'll just show a success message
        showSuccessMessage();
        
        // Reset the form
        contactForm.reset();
      }
    });
  }
  
  // Helper function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Helper function to display error message
  function displayError(inputElement, errorMessage) {
    const formGroup = inputElement.closest('.form-group');
    const errorElement = document.createElement('div');
    
    errorElement.className = 'error-message';
    errorElement.textContent = errorMessage;
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
    
    formGroup.appendChild(errorElement);
    
    // Add error class to input
    inputElement.classList.add('is-invalid');
    inputElement.style.borderColor = 'red';
  }
  
  // Helper function to clear all error messages
  function clearErrors() {
    // Remove all error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(errorMessage) {
      errorMessage.remove();
    });
    
    // Remove error class from inputs
    const invalidInputs = document.querySelectorAll('.is-invalid');
    invalidInputs.forEach(function(input) {
      input.classList.remove('is-invalid');
      input.style.borderColor = '';
    });
  }
  
  // Helper function to show success message
  function showSuccessMessage() {
    const formContainer = contactForm.closest('.form-container');
    const successMessage = document.createElement('div');
    
    successMessage.className = 'success-message';
    successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    successMessage.style.color = 'green';
    successMessage.style.padding = '1rem';
    successMessage.style.marginTop = '1rem';
    successMessage.style.backgroundColor = 'rgba(0, 128, 0, 0.1)';
    successMessage.style.borderRadius = '4px';
    
    formContainer.appendChild(successMessage);
    
    // Remove the success message after 5 seconds
    setTimeout(function() {
      successMessage.remove();
    }, 5000);
  }
});