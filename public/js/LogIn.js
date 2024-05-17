document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById('email'); // Selecting the email input by its ID
    const passwordInput = document.getElementById('password'); // Selecting the password input by its ID
    const signInButton = document.getElementById('submit'); // Selecting the submit button by its ID

    signInButton.addEventListener('click', function () {
        let isValid = true;

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

        if (isValid) {
            // Simulate form submission (replace with actual API call or server-side validation)
            // For demonstration purposes, alert the user with a success message
            alert('Login successful!');
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});