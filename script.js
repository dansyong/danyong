const header = document.querySelector("header");
const footer = document.querySelector(".footer-section");

const loadElement = (element, fileName) => {
  fetch(`/constants/${fileName}.html`)
    .then(res => {
      return res.text();
    })
    .then(html => {
      element.innerHTML = html;
    })
};

loadElement(header, 'globalHeader');
loadElement(footer, 'globalFooter');
loadElement(document.querySelector(".wip"), 'notFound');

const menuButton = document.querySelector('.menu-button');

function showMenu() {

  const menuItems = document.querySelector('.navlinks');
  const transformHeader = document.querySelector('header');

  menuItems.classList.toggle('active');
  transformHeader.classList.toggle('active');

}

let backgrounds = document.querySelectorAll(".background");

let imageIndex = 0;

function changeBackground() {

  backgrounds[imageIndex].classList.remove("showing");
  imageIndex++;

  if (imageIndex >= backgrounds.length) {
    imageIndex = 0;
  }
  backgrounds[imageIndex].classList.add("showing");

}

setInterval(changeBackground, 4000);