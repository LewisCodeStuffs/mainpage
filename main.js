document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || (!savedTheme && prefersDark.matches)) {
    document.body.classList.add("dark");
    toggle.textContent = "Light";
  } else {
    toggle.textContent = "Dark";
  }
  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");

    toggle.textContent = isDark ? "Light" : "Dark";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
  prefersDark.addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      document.body.classList.toggle("dark", e.matches);
      toggle.textContent = e.matches ? "Light" : "Dark";
    }
  });
});
