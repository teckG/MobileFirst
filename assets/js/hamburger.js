const hamburgerButton = document.getElementById("hamburger-button");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");

hamburgerButton.addEventListener("click", () => {
    hamburgerButton.classList.toggle("active");
    navbar.classList.toggle("active");
});

// Close the hamburger menu when a link is clicked
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        hamburgerButton.classList.remove("active");
        navbar.classList.remove("active");
    });
});
