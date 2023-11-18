"use strict";

const $HTML = document.documentElement;

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = "dark"; // Set the default theme to dark
}

const changeTheme = () => {
  $HTML.dataset.theme = sessionStorage.getItem("theme") === "dark";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
};

const $tabBtn = document.querySelectorAll("[data-tab-btn]");
let [lastActiveTab] = document.querySelectorAll("[data-tab-content]");
let [lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach(item => {
  item.addEventListener("click", function () {
    lastActiveTab.classList.remove("active");
    lastActiveTabBtn.classList.remove("active");

    const $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
    $tabContent.classList.add("active");
    this.classList.add("active");

    lastActiveTab = $tabContent;
    lastActiveTabBtn = this;
  });
});

const cursor = document.getElementById('cursor');
cursor.style.position = 'fixed'; // Add 'position: fixed' to ensure absolute positioning

let cursorX = 0,
  cursorY = 0;

const isTouchDevice = () => {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
};

const move = (e) => {
  cursorX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  cursorY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;
};

document.addEventListener('mouseenter', (e) => {
  cursor.style.zIndex = "9999";
  move(e);
});

document.addEventListener('mouseleave', () => {
  cursor.style.zIndex = "0";
});

document.addEventListener('mousemove', (e) => {
  move(e);
});

document.addEventListener('touchmove', (e) => {
  move(e);
});

document.addEventListener('touchend', (e) => {
  e.preventDefault();
});

document.addEventListener('touchstart', (e) => {
  const scrollX = e.touches[0].pageX;
  const scrollY = e.touches[0].pageY;
  move({ clientX: scrollX, clientY: scrollY });
});

// animate border
const borderAnimation = () => {
  requestAnimationFrame(borderAnimation);
};

requestAnimationFrame(borderAnimation);

// handle scroll event
document.addEventListener('scroll', (e) => {
  const scrollX = e.pageX;
  const scrollY = e.pageY;
  move({ clientX: scrollX, clientY: scrollY });
});