
const searchInput = document.querySelector('input[type="search"]');
const searchButton = document.querySelector('button[type="button"]');
const profilesContainer = document.querySelector('.profiles');

searchButton.addEventListener('click', async () => {
    const searchTerm = searchInput.value;
    const response = await fetch(`/search?q=${searchTerm}`);
    const profiles = await response.json();
    renderProfiles(profiles);
});

function renderProfiles(profiles) {
    profilesContainer.innerHTML = '';
    profiles.forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');

        const profileLink = document.createElement('a');
        profileLink.href = 'profile.html';

        const profileImg = document.createElement('img');
        profileImg.src = 'img/profilePic.png';
        profileImg.width = 100;
        profileImg.height = 100;
        profileImg.alt = 'Profile Picture';

        const profileInfoDiv = document.createElement('div');
        profileInfoDiv.classList.add('profile-info');

        const profileName = document.createElement('h4');
        profileName.textContent = profile.name;

        const profileField = document.createElement('p');
        profileField.textContent = profile.field;

        profileInfoDiv.appendChild(profileName);
        profileInfoDiv.appendChild(profileField);

        profileLink.appendChild(profileImg);
        profileLink.appendChild(profileInfoDiv);

        profileDiv.appendChild(profileLink);

        profilesContainer.appendChild(profileDiv);
    });
}