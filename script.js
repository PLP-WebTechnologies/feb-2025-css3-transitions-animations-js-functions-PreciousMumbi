 // Theme persistence using localStorage
 document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    body.classList.add("dark-theme");
  }

  document.getElementById("themeToggle").addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    const newTheme = body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
  });

  // Animation on click
  const btn = document.getElementById("animateBtn");
  btn.addEventListener("click", () => {
    btn.classList.add("animate");
    setTimeout(() => {
      btn.classList.remove("animate");
    }, 500); // match CSS animation duration
  });
});