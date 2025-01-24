// JavaScript to Set Active Class
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname; // Get current page path
  const navLinks = document.querySelectorAll(".navbar nav a");

  navLinks.forEach((link) => {
    if (link.href.includes(currentPage)) {
      link.classList.add("active"); // Add 'active' class to matching link
    } else {
      link.classList.remove("active");
    }
  });
});
 