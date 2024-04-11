// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Navbar functionality
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });

  // Smooth scrolling for links
  const scrollLinks = document.querySelectorAll(".nav-link");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetPosition = document.querySelector(targetId).offsetTop;

      window.scrollTo({
        left: 0,
        top: targetPosition,
        behavior: "smooth",
      });

      navbarCollapse.classList.remove("show");
    });
  });

  // Accordion functionality
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const button = item.querySelector("button");
    const content = item.querySelector(".accordion-content");

    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", !expanded);
      content.classList.toggle("open");

      if (content.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });

  // Hero button click event
  const heroButton = document.querySelector(".button");

  heroButton.addEventListener("click", () => {
    // Replace this with your desired action, like opening a modal or navigating to another page
    alert("Button Clicked! Replace this with your action.");
  });
});

  