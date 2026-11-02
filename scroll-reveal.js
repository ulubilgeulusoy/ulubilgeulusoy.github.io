(function initScrollReveals() {
  let observer;
  let targets = [];
  function showAll() {
    if (observer) observer.disconnect();
    targets.forEach(function (element) {
      element.classList.remove("site-reveal", "is-pending", "is-revealed");
    });
  }
  try {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;

    // Animate content, leaving navigation, the homepage hero, and modal dialogs alone.
    const candidates = Array.from(document.querySelectorAll(
      "main.wrap .card, main.wrap .section-head, main.wrap > h2, " +
      "main.wrap .home-portfolio-nav, main.wrap #featured-title, " +
      "main.wrap .highlights-header, main.wrap .about-carousels > h2, " +
      "main.wrap > .embed"
    ));
    targets = candidates.filter(function (element) {
      return !element.parentElement.closest(".card, .modal-overlay");
    });
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle("is-pending", !entry.isIntersecting);
        entry.target.classList.toggle("is-revealed", entry.isIntersecting);
      });
    }, { threshold: 0.01 });

    document.querySelectorAll(".home-project-grid, .news-grid, .engagement-card-grid, .about-interest-dashboard, #projects-panel, .education-grid").forEach(function (grid) {
      let index = 0;
      Array.from(grid.children).forEach(function (element) {
        if (!element.classList.contains("card")) return;
        element.style.setProperty("--reveal-delay", ((index++ % 3) * 100) + "ms");
      });
    });
    targets.forEach(function (element) { observer.observe(element); });
    if (motion.addEventListener) motion.addEventListener("change", showAll, { once: true });
    targets.forEach(function (element) {
      element.classList.add("site-reveal", "is-pending");
      element.addEventListener("focusin", function () {
        element.classList.remove("site-reveal", "is-pending", "is-revealed");
        observer.unobserve(element);
      }, { once: true });
    });
  } catch (error) {
    showAll();
  }
})();
