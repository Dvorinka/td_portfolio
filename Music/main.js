const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem, i) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((item, j) => {
      item.className = "nav-item";
    });
    navItem.className = "nav-item active";
  });
});

const containers = document.querySelectorAll(".containers");

containers.forEach((container) => {
  let isDragging = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - container.offsetLeft;
    const step = (x - startX) * 0.6;
    container.scrollLeft = scrollLeft - step;
  });

  container.addEventListener("mouseup", () => {
    isDragging = false;
  });

  container.addEventListener("mouseleave", () => {
    isDragging = false;
  });
});

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  speed: 600,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 10,
    stretch: 120,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// JavaScript
function checkActiveElement() {
  let closest = null;
  let closestDistance = Infinity;

  document.querySelectorAll('.slide-overlay').forEach((element) => {
      const rect = element.getBoundingClientRect();
      const distance = Math.abs(rect.top);

      if (distance < closestDistance) {
          closest = element;
          closestDistance = distance;
      }
  });

  if (closest) {
      document.querySelectorAll('.slide-overlay.active').forEach((element) => {
          element.classList.remove('active');
      });

      closest.classList.add('active');
  }
}

// Call the function immediately to check on page load
checkActiveElement();

// Call the function at regular intervals to check without user action
setInterval(checkActiveElement, 500); // checks every second
