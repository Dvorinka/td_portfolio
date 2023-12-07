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
  if (!isTouchDevice()) {
    cursorX = e.clientX;
    cursorY = e.clientY;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
  } else {
    // Disable custom cursor on touch devices
    cursor.style.display = "none";
    return;
  }
  
  cursor.style.zIndex = "9999";
  cursor.style.display = "block";
};

document.addEventListener('mouseenter', (e) => {
  cursor.style.zIndex = "9999";
  move(e);
});

document.addEventListener('mouseleave', () => {
  if (isTouchDevice()) {
    cursor.style.display = "none";
  }
});

document.addEventListener('mousemove', (e) => {
  move(e);
});

document.addEventListener('touchmove', (e) => {
  move(e);
  cursor.style.display = "none";
});

document.addEventListener('touchend', () => {
  cursor.style.display = "none";
});

document.addEventListener('touchstart', (e) => {
  cursor.style.display = "none"; // Hide the cursor on touchstart
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

function sendEmail() {
  emailjs.send('service_j9prncb', 'template_drg2vil', {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  })
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
    console.log('FAILED...', error);
  });
}

const form = document.getElementById('myForm');
  const sendBtn = document.querySelector('.send-btn');
  const requiredInputs = form.querySelectorAll('input[required], textarea[required]');

  form.addEventListener('input', () => {
    const isFormValid = Array.from(requiredInputs).every(input => input.value !== '');
    sendBtn.disabled = !isFormValid;
  });