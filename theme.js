(function () {
  const root = document.documentElement;
  const key = "portfolio-theme";
  let button;
  function apply(theme) {
    root.dataset.theme = theme === "light" ? "light" : "dark";
    if (button) {
      const light = root.dataset.theme === "light";
      button.textContent = light ? "\u263E" : "\u2600";
      button.setAttribute("aria-label", "Switch to " + (light ? "dark" : "light") + " mode");
      button.title = button.getAttribute("aria-label");
    }
  }
  try { apply(localStorage.getItem(key)); } catch (error) { apply("dark"); }
  document.addEventListener("DOMContentLoaded", function () {
    const actions = document.querySelector(".nav-inner > div:last-child");
    if (!actions) return;
    actions.classList.add("nav-actions");
    button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";
    button.addEventListener("click", function () {
      apply(root.dataset.theme === "light" ? "dark" : "light");
      try { localStorage.setItem(key, root.dataset.theme); } catch (error) { /* Keep the choice for this page. */ }
    });
    actions.prepend(button);
    apply(root.dataset.theme);
  });
  window.addEventListener("storage", function (event) {
    if (event.key === key || event.key === null) apply(event.newValue);
  });
})();
