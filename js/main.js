// Select the button element
const toggleBtn = document.querySelector('#theme-toggle');

// Check for saved user preference in localStorage
const currentTheme = localStorage.getItem('theme');

// If a theme is saved, apply it to the body
if (currentTheme) {
  document.body.classList.add(currentTheme);
}

// Add a click event listener
toggleBtn.addEventListener('click', () => {
  // Toggle the .dark-mode class on the body
  document.body.classList.toggle('dark-mode');
  
  // Determine which theme is active now
  let theme = 'light';
  if (document.body.classList.contains('dark-mode')) {
    theme = 'dark';
  }
  
  // Save the choice to localStorage
  localStorage.setItem('theme', theme);
});