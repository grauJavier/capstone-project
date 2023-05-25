// BACK TO TOP BUTTON
let backToTopButton = document.querySelector("#back-to-top-button");

window.addEventListener("scroll", () => {
  let scrollPos = window.pageYOffset;

  if (scrollPos > 300) {
    backToTopButton.style.opacity = 1;
  } else {
    backToTopButton.style.opacity = 0;
  }
});

// MOBILE MENU
let hamburguerButton = document.querySelector("#menu__btn--mobile-version");
let mobileMenu = document.querySelector("#menu__menulist--mobile-version");
let listButton = document.querySelector("#menu__menulist--mobile-version");
let buttonOpenClose = false;

hamburguerButton.addEventListener("click", () => {
  if (buttonOpenClose === false) {
    mobileMenu.style.display = "flex";
    hamburguerButton.classList.replace("bi-list", "bi-x");
    hamburguerButton.style.position = "fixed";
    buttonOpenClose = true;
  } else {
    mobileMenu.style.display = "none";
    hamburguerButton.classList.replace("bi-x", "bi-list");
    hamburguerButton.style.position = "static";
    buttonOpenClose = false;
  }
});

listButton.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  hamburguerButton.classList.replace("bi-x", "bi-list");
  hamburguerButton.style.position = "static";
  buttonOpenClose = false;
});