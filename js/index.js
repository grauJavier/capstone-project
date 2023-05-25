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

// BAND MEMBERS OBJECT BUILDER
let arrContent = [];

function objBuilder(name, awards, text, img_src) {
  let newObj = new Object();
  arrContent.push(newObj);

  let i = arrContent.length - 1;

  arrContent[i].name = name;
  arrContent[i].awards = awards;
  arrContent[i].text = text;
  arrContent[i].img_src = img_src;
}

objBuilder(
  "Joshua Redman",
  "9 Grammy Awards / 2002 MacArthur Fellowship",
  "From early age, Redman took up the saxophone, becoming a standout talent among jazz musicians.",
  "./img/cards/portrait__joshua-redman.jpg"
);
objBuilder(
  "Brad Mehldau",
  "2005 Grammy Award / 2009 MacArthur Fellowship",
  "Peerless pianist known for his innovative and eclectic style, which draws on a wide range of influences.",
  "./img/cards/portrait__brad-mehldau.jpg"
);
objBuilder(
  "Christian McBride",
  "8 Grammy Awards / 2018 Kennedy Center Honors",
  "Incredible jazz bassist he has appeared on more than 300 recordings as a sideman.",
  "./img/cards/portrait__christian-mcbride.jpg"
);
objBuilder(
  "Brian Blade",
  "10 Grammy Awards / 2015 Doris Duke Artist Award",
  "Brian Blade his virtuosic drum playing and his ability to blend seamlessly into any musical setting.",
  "./img/cards/portrait__brian-blade.jpg"
);

// BAND MEMBERS HTML BUILDER
let bandCardsContainer = document.querySelector("#band-members__cards");
let bandPairedMembers = document.createElement("div");

function htmlBuilder() {
  for (let i = 0; i < arrContent.length; i++) {
    if (i % 2 === 0) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("f-row", `band-members__paired-cards${i}`);
      bandCardsContainer.insertAdjacentElement("beforeend", newDiv);
      bandPairedMembers = document.querySelector(
        `.band-members__paired-cards${i}`
      );
    }

    bandPairedMembers.insertAdjacentHTML(
      "beforeend",
      `
        <div class="f-col" id="band-members__cards">
          <div class="band-members__card">
            <img class="band-members__card-portrait" src="${arrContent[i].img_src}">
            <div class="band-members__card-texts f-col">
              <h3 class="band-members__card-title">${arrContent[i].name}</h3>
              <h4 class="band-members__card-subtitle orange">${arrContent[i].awards}</h4>
              <hr class="line-light" />
              <p>${arrContent[i].text}</p>
            </div>
          </div>
        </div>
    `
    );
  }

  if (window.innerWidth < 1100) {
    document.querySelector(".band-members__paired-cards0").style =
      "flex-direction: column";
    document.querySelector(".band-members__paired-cards2").style =
      "flex-direction: column";
  }
}

htmlBuilder();

// BAND MEMBERS MORE BUTTON
let moreButton = document.querySelector("#band-members__btn-more");
let buttonActivity = false;
let pairedcards = document.querySelector(".band-members__paired-cards2");

moreButton.addEventListener("click", () => {
  if (buttonActivity === false) {
    moreButton.innerHTML =
      'LESS <i class="bi bi-chevron-up orange" id="btn-more__chevron-icon"></i>';
    pairedcards.style.display = "grid";
    buttonActivity = true;
  } else {
    moreButton.innerHTML =
      'MORE <i class="bi bi-chevron-down orange" id="btn-more__chevron-icon"></i>';
    pairedcards.style.display = "none";
    buttonActivity = false;
  }
});

// BACK TO TOP BUTTON
let backToTopButton = document.querySelector("#back-to-top-button");

window.addEventListener("scroll", () => {
  let scrollPos = window.pageYOffset;

  if (scrollPos > 500) {
    backToTopButton.style.opacity = 1;
  } else {
    backToTopButton.style.opacity = 0;
  }
});