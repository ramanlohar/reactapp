// navigation.js
const toggleNav = () => {
  const navList = document.querySelector('.header ul');
  navList.classList.toggle('show');
  const menu_btn = document.querySelector('.menu-btn');

  if (navList.classList.contains('show')) { // Corrected the condition
    menu_btn.innerHTML = "&times;";
    menu_btn.style.fontSize = "30px";
    menu_btn.style.fontWeight = "";
  } else {
    menu_btn.innerHTML = "&#9776;";
    menu_btn.style.fontSize = "20px";
    menu_btn.style.fontWeight = "bold";
  }
};

export { toggleNav };
