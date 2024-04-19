'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);

// Function to update the active count
function updateActiveCount() {
  // Get the current active count element
  var activeCountElement = document.getElementById('active-count');

  // Get the current active count
  var currentCount = parseInt(activeCountElement.textContent);

  // Generate a random change within the specified range
  var changeAmount;

  var currentHour = new Date().getHours();

  // Adjust the change amount and update interval based on the time of the day
  if (currentHour >= 7 && currentHour <= 22) {
      // Daytime change amount range: 1-10
      changeAmount = Math.floor(Math.random() * 10) + 1;
      var updateInterval = 5000; // 5 seconds
  } else {
      // Nighttime change amount range: 1-5
      changeAmount = Math.floor(Math.random() * 5) + 1;
      var updateInterval = 120000; // 2 minutes
  }

  // Generate a random direction for the change (positive or negative)
  var direction = Math.random() < 0.5 ? -1 : 1;

  // Calculate the new count within the appropriate range
  var newCount;
  if (currentHour >= 7 && currentHour <= 22) {
      // Daytime active count range: 90-500
      newCount = Math.min(Math.max(currentCount + direction * changeAmount, 90), 500);
  } else {
      // Nighttime active count range: 20-50
      newCount = Math.min(Math.max(currentCount + direction * changeAmount, 20), 50);
  }

  // Determine the color based on the direction of the change
  var textColor = direction === 1 ? '#00ff00' : '#ff0000'; // Green for increase, red for decrease

  // Update the text color
  activeCountElement.style.color = textColor;

  // Update the text content of the active count element
  activeCountElement.textContent = newCount;

  // After a short delay, revert the color back to default
  setTimeout(function() {
      activeCountElement.style.color = ''; // Revert to default color
  }, 500); // Change color back after 0.5 second (matching the transition duration)

  // Update the active count again after the specified interval
  setTimeout(updateActiveCount, updateInterval);
}

// Update the active count initially
updateActiveCount();


