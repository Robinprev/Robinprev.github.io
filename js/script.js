// Charge le header
fetch("partials/header.html")
    .then(res => res.text())
    .then(data => document.getElementById("header").innerHTML = data);

// Charge le footer
fetch("partials/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data);

// Burger menu toggle
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});