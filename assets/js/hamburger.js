const hamburgerButton = document.getElementById("hamburger-button");
const navbar = document.getElementById("navbar");

hamburgerButton.addEventListener("click", () => {
    hamburgerButton.classList.toggle("active");
    navbar.classList.toggle("active");
});