document.addEventListener('DOMContentLoaded', function () {
  const profileImage = document.getElementById('profile-image');
  const name = document.getElementById('name');
  const major = document.getElementById('major');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const editButton = document.getElementById('edit-btn');
  const editModal = document.getElementById('edit-modal');
  const editForm = document.getElementById('edit-form');

  // Fetch user profile data from MongoDB
  // Replace this with your actual code to fetch data
  let userProfileData = {
    profileImageURL: 'img/profilePic.png',
    name: 'Dalia',
    major: 'Computer Science',
    email: 'alasmaridalia@gmail.com',
    phone: '+966 59 2070 816',
    socialMedia: [
      { name: 'Twitter', link: 'https://twitter.com/' },
      { name: 'LinkedIn', link: 'https://linkedin.com/' }
    ]
  };

  // Function to populate form fields with profile data
  function populateFormFields() {
    editForm['edit-name'].value = userProfileData.name;
    editForm['edit-major'].value = userProfileData.major;
    editForm['edit-email'].value = userProfileData.email;
    editForm['edit-phone'].value = userProfileData.phone;
    editForm['edit-twitter'].value = userProfileData.socialMedia[0].link;
    editForm['edit-linkedin'].value = userProfileData.socialMedia[1].link;
  }

  // Populate profile fields with retrieved data
  profileImage.src = userProfileData.profileImageURL;
  name.textContent = userProfileData.name;
  major.textContent = userProfileData.major;
  email.textContent = userProfileData.email;
  phone.textContent = userProfileData.phone;

  // Show edit modal when Edit Profile button is clicked
  editButton.addEventListener('click', function () {
    populateFormFields(); // Populate form fields with existing data
    editModal.style.display = 'block';
  });

  // Close edit modal when close button is clicked
  editModal.querySelector('.close').addEventListener('click', function () {
    editModal.style.display = 'none';
  });

  // Save edited profile information
  editForm.addEventListener('submit', function (event) {
    event.preventDefault();
    userProfileData = {
      name: editForm['edit-name'].value,
      major: editForm['edit-major'].value,
      email: editForm['edit-email'].value,
      phone: editForm['edit-phone'].value,
      socialMedia: [
        { name: 'Twitter', link: editForm['edit-twitter'].value },
        { name: 'LinkedIn', link: editForm['edit-linkedin'].value }
      ],
      profileImageURL: profileImage.src // Update profile image URL
    };
    // Add code to update profile data in MongoDB
    // Display updated profile data
    name.textContent = userProfileData.name;
    major.textContent = userProfileData.major;
    email.textContent = userProfileData.email;
    phone.textContent = userProfileData.phone;
    // Update social media links
    userProfileData.socialMedia.forEach((social, index) => {
      const socialLink = document.getElementById(`social-link-${index + 1}`);
      socialLink.href = social.link;
    });
    // Hide edit modal
    editModal.style.display = 'none';
  });

  // Update profile image when a new image is selected
  editForm['edit-profile-image'].addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });

  // Make email clickable
  email.addEventListener('click', function () {
    window.location.href = 'mailto:' + userProfileData.email;
  });

  // Make phone clickable
  phone.addEventListener('click', function () {
    window.location.href = 'tel:' + userProfileData.phone;
  });
});
