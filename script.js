// Dark mode toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('#themeIcon');
const body = document.body;

themeToggle.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    localStorage.removeItem('theme');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-moon');
  } else {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
});

// Set theme on initial load based on user preference
if (localStorage.getItem('theme') === 'dark') {
  body.setAttribute('data-theme', 'dark');
}

// Function to update the current time in UTC
function updateTime() {
  const currentTimeElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDayElement = document.querySelector(
    '[data-testid="currentDay"]'
  );
  const now = new Date();

  const utcTime = now.toUTCString().slice(17, 25); // Extract time portion in UTC
  const day = now.toLocaleString('en-US', { weekday: 'long' }); // Get current day of the week

  currentTimeElement.textContent = `Current Time (UTC): ${utcTime}`;
  currentDayElement.textContent = `Current Day: ${day}`;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call to set the time immediately

// Insert your profile picture and slack details dynamically
document.querySelector('[data-testid="slackDisplayName"]').textContent =
  'Fasakin Henry';
document.querySelector('[data-testid="slackEmail"]').textContent =
  'fasakinhenry@gmail.com';
document.querySelector('[data-testid="slackProfilePicture"]').src =
  'path/to/your/profile-picture.jpg'; // Update with the correct path to your profile picture
