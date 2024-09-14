// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
// Smooth Scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Open and close modal for videos
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");

document.querySelectorAll(".video-thumbnail").forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    e.preventDefault();
    const videoSrc = thumbnail.getAttribute("data-video");
    modalContent.innerHTML = `<iframe src="${videoSrc}" frameborder="0" allowfullscreen></iframe>`;
    modal.classList.add("open");
  });
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("open");
  modalContent.innerHTML = ""; // Clear the video content when modal is closed
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
    modalContent.innerHTML = ""; // Clear the video content when modal is closed
  }
});
// Simple form validation
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // If validation passes
    alert("Form submitted successfully");
    this.reset();
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
document.addEventListener("scroll", function () {
  const backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY > 200) {
    backToTopButton.computedStyleMap.display = "block";
  } else {
    backToTopButton.computedStyleMap.display = "none";
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
