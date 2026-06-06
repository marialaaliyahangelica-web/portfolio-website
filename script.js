const navLinks = document.querySelectorAll(".nav-links a");
const navMenu = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
    navMenu.classList.remove("show");
  });
});

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeIcon.textContent = "🌙";
} else {
  themeIcon.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeIcon.textContent = "🌙";
  } else {
    localStorage.setItem("theme", "light");
    themeIcon.textContent = "☀️";
  }
});