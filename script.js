const navLinks = document.querySelectorAll(".nav-links a");
const navMenu = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

/* Active navbar link */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");

    if (navMenu) {
      navMenu.classList.remove("show");
    }
  });
});

/* Mobile menu */
if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

/* Light and dark mode */
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");

  if (themeIcon) {
    themeIcon.textContent = "🌙";
  }
} else {
  if (themeIcon) {
    themeIcon.textContent = "☀️";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");

      if (themeIcon) {
        themeIcon.textContent = "🌙";
      }
    } else {
      localStorage.setItem("theme", "light");

      if (themeIcon) {
        themeIcon.textContent = "☀️";
      }
    }
  });
}

/* Scroll reveal animation */
const revealItems = document.querySelectorAll(
  ".section-heading, .about-card, .skill-card, .project-card, .contact-box"
);

revealItems.forEach((item, index) => {
  item.classList.add("reveal");

  const delayClass = `delay-${(index % 4) + 1}`;
  item.classList.add(delayClass);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});