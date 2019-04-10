
const toggleMenu = (menu) => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('body .menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.header img');
// Using your menuButton reference, add a click handler that calls toggleMenus
menuButton.addEventListener('click', function() {
  // menuButton.style.display = 'None';
  toggleMenu(menu);
});

