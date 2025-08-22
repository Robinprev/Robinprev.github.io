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

// Accordéon des actualités
document.querySelectorAll('.actu summary').forEach(s => {
  s.addEventListener('click', e => {
    const d = s.parentElement;
    if (!d.open) {
      document.querySelectorAll('.actu[open]').forEach(o => { if(o!==d) o.open=false; });
    }
  });
});
