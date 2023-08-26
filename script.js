// constants contents
const navItems = ["Home", "New", "Popular", "Trending", "Categories"];
const rightContents = [
  {
    title: "Hydrogen VS Electric Cars",
    text: "Will hydrogen-fueled cars ever catch up to EVs?",
    isLast: false,
  },
  {
    title: "The Downsides of AI Artistry",
    text: "What are the possible adverse effects of on-demand AI image generation?",
    isLast: false,
  },
  {
    title: "Is VC Funding Drying Up?",
    text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    isLast: true,
  },
];
const footerContents = [
  {
    image: "./assets/images/image-retro-pcs.jpg",
    number: "01",
    title: "Reviving Retro PCs",
    text: "What happens when old PCs are given modern upgrades?",
  },
  {
    image: "./assets/images/image-top-laptops.jpg",
    number: "02",
    title: "Top 10 Laptops of 2022",
    text: "Our best picks for various needs and budgets.",
  },
  {
    image: "./assets/images/image-gaming-growth.jpg",
    number: "03",
    title: "The Growth of Gaming",
    text: "How the pandemic has sparked fresh opportunities.",
  },
];

// selecting elements
const NAV = document.querySelector(".nav");
const MOBILE_NAV = document.querySelector(".mobile-nav");
const RIGHT_CONTENT_CONTAINER = document.querySelector(
  ".right-content-container"
);
const FOOTER_CONTENT_CONTAINER = document.querySelector(
  ".footer-content-container"
);
const LEFT_HERO_IMAGE = document.querySelector(".left_hero_image");
const MENU_ICONS = document.querySelectorAll(".mobile-menu-icon");
const MODAL = document.querySelector(".modal");

// functions
const insertNavItems = (container) => {
  navItems.forEach((item) => {
    const NAV_ITEM = document.createElement("div");
    const NAV_LINK = document.createElement("a");

    NAV_LINK.textContent = item;
    NAV_ITEM.appendChild(NAV_LINK);

    container.appendChild(NAV_ITEM);
  });
};

const insertRightContents = (container) => {
  rightContents.forEach((item) => {
    const RIGHT_CONTENT = document.createElement("div");
    const RIGHT_CONTENT_TITLE = document.createElement("h3");
    const RIGHT_CONTENT_TEXT = document.createElement("p");

    const DIVIDER = document.createElement("div");
    DIVIDER.classList.add("divider");

    RIGHT_CONTENT.classList.add("right-content");

    RIGHT_CONTENT_TITLE.textContent = item.title;
    RIGHT_CONTENT_TEXT.textContent = item.text;

    RIGHT_CONTENT.append(RIGHT_CONTENT_TITLE, RIGHT_CONTENT_TEXT);
    container.appendChild(RIGHT_CONTENT);

    if (item.isLast) {
      RIGHT_CONTENT.style.paddingBottom = "0";
    } else {
      container.appendChild(DIVIDER);
    }
  });
};

const insertFooterContents = (container) => {
  footerContents.forEach((item) => {
    const FOOTER_CONTENT = document.createElement("div");
    const IMG = document.createElement("img");
    const FOOTER_CONTENT_RIGHT = document.createElement("div");
    const FOOTER_CONTENT_RIGHT_NUMBER = document.createElement("h1");
    const FOOTER_CONTENT_RIGHT_TITLE = document.createElement("h3");
    const FOOTER_CONTENT_RIGHT_TEXT = document.createElement("p");

    FOOTER_CONTENT.classList.add("footer-content");
    FOOTER_CONTENT_RIGHT.classList.add("footer-content_right");

    IMG.src = item.image;
    FOOTER_CONTENT_RIGHT_NUMBER.textContent = item.number;
    FOOTER_CONTENT_RIGHT_TITLE.textContent = item.title;
    FOOTER_CONTENT_RIGHT_TEXT.textContent = item.text;

    FOOTER_CONTENT_RIGHT.append(
      FOOTER_CONTENT_RIGHT_NUMBER,
      FOOTER_CONTENT_RIGHT_TITLE,
      FOOTER_CONTENT_RIGHT_TEXT
    );

    FOOTER_CONTENT.append(IMG, FOOTER_CONTENT_RIGHT);
    container.appendChild(FOOTER_CONTENT);
  });
};

const dynamicLeftHeroImage = (image) => {
  if (window.innerWidth < 480) {
    image.src = "./assets/images/image-web-3-mobile.jpg";
  } else {
    image.src = "./assets/images/image-web-3-desktop.jpg";
  }
};

const toggleMenu = () => {
  MODAL.classList.toggle("open");
};

// inserting to DOM
NAV && insertNavItems(NAV);
RIGHT_CONTENT_CONTAINER && insertRightContents(RIGHT_CONTENT_CONTAINER);
FOOTER_CONTENT_CONTAINER && insertFooterContents(FOOTER_CONTENT_CONTAINER);
MOBILE_NAV && insertNavItems(MOBILE_NAV);
LEFT_HERO_IMAGE && dynamicLeftHeroImage(LEFT_HERO_IMAGE);

// dynamically change hero image
window.addEventListener("resize", () => {
  LEFT_HERO_IMAGE && dynamicLeftHeroImage(LEFT_HERO_IMAGE);
});

// handle toggle menu
MENU_ICONS.forEach((icon) => icon.addEventListener("click", toggleMenu));
