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

// MOBILE MENU

let mobileMenu = document.querySelector("#navbar__hamburguer__menulist");
let hamburgerIcon = document.querySelector("#hamburger i");
let navbarContainer = document.querySelector("#navbar__container");
let menuButtons = document.querySelector("#navbar__hamburguer__menulist");
let menuOpenClose = false;

let menuOpen = function (boolean) {
  if (boolean === true) {
    navbarContainer.style.margin = "20px 0 0 0";
    mobileMenu.style = "display: flex; opacity: 1";
    hamburgerIcon.classList.replace("bi-list", "bi-x");
    menuOpenClose = true;
  } else {
    navbarContainer.style.margin = "0 0 0 0";
    mobileMenu.style = "display: none; opacity: 0";
    hamburgerIcon.classList.replace("bi-x", "bi-list");
    menuOpenClose = false;
  }
};

hamburgerIcon.addEventListener("click", () => {
  if (menuOpenClose == false) {
    menuOpenClose = true;
    menuOpen(menuOpenClose);
  } else {
    menuOpenClose = false;
    menuOpen(menuOpenClose);
  }
});

menuButtons.addEventListener("click", () => {
  menuOpenClose = false;
  menuOpen(menuOpenClose);
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
  "Joshua Redman is an American jazz saxophonist and composer. Redman began playing the saxophone at the age of 12 and quickly established himself as one of the most promising young jazz musicians of his generation.",
  "./visuals/snapshot-joshua_redman.jpg"
);
objBuilder(
  "Brad Mehldau",
  "2005 Grammy Award / 2009 MacArthur Fellowship",
  "Brad Mehldau is an American jazz pianist, composer, and arranger. He is known for his innovative and eclectic style, which draws on a wide range of influences, including jazz, classical music, and pop.",
  "./visuals/snapshot-brad_mehldau.jpg"
);
objBuilder(
  "Christian McBride",
  "8 Grammy Awards / 2018 Kennedy Center Honors",
  "Brad Mehldau is an American jazz pianist, composer, and arranger. He is known for his innovative and eclectic style, which draws on a wide range of influences, including jazz, classical music, and pop.",
  "./visuals/snapshot-christian_mcbride.jpg"
);
objBuilder(
  "Brian Blade",
  "10 Grammy Awards / 2015 Doris Duke Artist Award",
  "Brian Blade is an American jazz drummer, composer, and bandleader. He is known for his virtuosic playing and his ability to blend seamlessly into any musical setting.Blade has appeared on over 200 recordings as a sideman, and has led his own groups since the early 1990s.",
  "./visuals/snapshot-brian_blade.jpg"
);

// BAND MEMBERS HTML BUILDER

let bandContainer = document.querySelector("#band__band-members-cards");

function htmlBuilder() {
  for (let i = 0; i < arrContent.length; i++) {
    if (i % 2 === 0) {
      let newDiv = document.createElement("div");
      newDiv.classList.add(
        "f-row",
        "g-70",
        `band__paired-members${i}`
      );
      bandContainer.insertAdjacentElement("beforeend", newDiv);
      bandPairedMembers = document.querySelector(`.band__paired-members${i}`);
    }

    bandPairedMembers.insertAdjacentHTML(
      "beforeend",
    `
    <div class="f-row g-30 w-100" id="band-member-cards__container">
      <img class="band-member-cards__portrait" src="${arrContent[i].img_src}" />
      <div class="f-col g-17">
        <h3 class="fs-25">${arrContent[i].name}</h3>
        <hr class="line-light" />
        <p class="orange fs-18 fs-italic fw-bold">
        ${arrContent[i].awards}
        </p>
        <p class="dark fs-18">
        ${arrContent[i].text}
        </p>
      </div>
    </div>
    `
    );
  }

  if (window.innerWidth < 1100) {
    document.querySelector(".band__paired-members0").style = "flex-direction: column";
    document.querySelector(".band__paired-members2").style = "flex-direction: column";
  }
}

htmlBuilder();
