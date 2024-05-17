document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById('Username'); // Selecting the username input by its ID
    const emailInput = document.getElementById('email'); // Selecting the email input by its ID
    const passwordInput = document.getElementById('password'); // Selecting the password input by its ID
    const passwordConfirmationInput = document.getElementById('passwordconfirmation'); // Selecting the password confirmation input by its ID
    const signUpButton = document.getElementById('submit'); // Selecting the submit button by its ID

    signUpButton.addEventListener('click', function () {
        let isValid = true;

        // Validate username
        if (usernameInput.value.trim() === '') {
            alert('Username cannot be empty');
            isValid = false;
        }

        // Validate email
        if (emailInput.value.trim() === '') {
            alert('Email address cannot be empty');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            alert('Please enter a valid email address');
            isValid = false;
        }

        // Validate password
        if (passwordInput.value.trim() === '') {
            alert('Password cannot be empty');
            isValid = false;
        }

        // Validate password confirmation
        if (passwordConfirmationInput.value.trim() === '') {
            alert('Password confirmation cannot be empty');
            isValid = false;
        } else if (passwordInput.value !== passwordConfirmationInput.value) {
            alert('Password does not match');
            isValid = false;
        }

        if (isValid) {
            // Simulate form submission (replace with actual API call or server-side validation)
            // For demonstration purposes, alert the user with a success message
            alert('SignUp successful!');
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});