document.addEventListener('DOMContentLoaded', function () {
  const editButton = document.getElementById('edit-btn');
  const editModal = document.getElementById('edit-modal');
  const editForm = document.getElementById('edit-form');
  const profileImage = document.getElementById('profile-image');
  const name = document.getElementById('name');
  const major = document.getElementById('major');
  const emailIcon = document.getElementById('email-icon');
  const phoneIcon = document.getElementById('phone-icon');
  const githubIcon = document.getElementById('github-icon');
  const linkedinIcon = document.getElementById('linkedin-icon');

  // Mock user profile data (replace with your actual data)
  let userProfileData = {
    profileImageURL: 'img/profilePic.png',
    name: 'Dalia',
    major: 'Computer Science',
    email: 'alasmaridalia@gmail.com',
    phone: '+966 59 2070 816',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/'
  };

  // Function to populate form fields with profile data
  function populateFormFields() {
    editForm['edit-name'].value = userProfileData.name;
    editForm['edit-major'].value = userProfileData.major;
    editForm['edit-email'].value = userProfileData.email;
    editForm['edit-phone'].value = userProfileData.phone;
    editForm['edit-github'].value = userProfileData.github;
    editForm['edit-linkedin'].value = userProfileData.linkedin;
  }

  // Function to update profile data
  function updateProfileData() {
    name.textContent = userProfileData.name;
    major.textContent = userProfileData.major;
    profileImage.src = userProfileData.profileImageURL;
  }

  // Function to save edited profile information
  function saveProfileData() {
    userProfileData.name = editForm['edit-name'].value;
    userProfileData.major = editForm['edit-major'].value;
    userProfileData.email = editForm['edit-email'].value;
    userProfileData.phone = editForm['edit-phone'].value;
    userProfileData.github = editForm['edit-github'].value;
    userProfileData.linkedin = editForm['edit-linkedin'].value;

    // Update profile data display
    updateProfileData();
  }

  // Show edit modal when Edit Profile button is clicked
  editButton.addEventListener('click', function () {
    populateFormFields(); // Populate form fields with existing data
    editModal.style.display = 'block';
  });

  // Close edit modal when close button is clicked
  editModal.querySelector('.close').addEventListener('click', function () {
    editModal.style.display = 'none';
  });

  // Save edited profile information when form is submitted
  editForm.addEventListener('submit', function (event) {
    event.preventDefault();
    saveProfileData();
    editModal.style.display = 'none'; // Hide modal after saving
  });

  // Add click event listeners to icons
  emailIcon.addEventListener('click', function () {
    window.location.href = 'mailto:' + userProfileData.email;
  });

  phoneIcon.addEventListener('click', function () {
    window.location.href = 'tel:' + userProfileData.phone;
  });

  githubIcon.addEventListener('click', function () {
    window.open(userProfileData.github, '_blank');
  });

  linkedinIcon.addEventListener('click', function () {
    window.open(userProfileData.linkedin, '_blank');
  });

  // Initialize profile data display
  updateProfileData();

// Get all the add buttons
const addButtons = document.querySelectorAll('.add-button');

// Add event listener to each add button
addButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    // Prevent the default action of the anchor element
    event.preventDefault();
    // Find the parent element of the button
    const parent = button.parentElement;
    // Find the sibling element with class 'text-field'
    const textField = parent.nextElementSibling;

    // Check if the text field is hidden
    if (textField.classList.contains('hidden')) {
      // Show the text field
      textField.classList.remove('hidden');
    } else {
      // Hide the text field
      textField.classList.add('hidden');
    }
  });
});

// Get all the save buttons
const saveButtons = document.querySelectorAll('.save-button');

// Add event listener to each save button
saveButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Find the parent element of the button
    const parent = button.parentElement;
    // Find the textarea element within the parent
    const textarea = parent.querySelector('textarea');
    // Get the value of the textarea
    const text = textarea.value;
    // Split the text into lines
    const lines = text.split('\n');
    // Create a new paragraph element for each line
    lines.forEach(line => {
      if (line.trim() !== '') { // Skip empty lines
        const newPara = document.createElement('p');
        newPara.textContent = line;
        // Insert the new paragraph before the text field
        parent.parentElement.insertBefore(newPara, parent);
      }
    });
    // Hide the text field
    parent.classList.add('hidden');
    // Clear the textarea value
    textarea.value = '';
  });
});

});
