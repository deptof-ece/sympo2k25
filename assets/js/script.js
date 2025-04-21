// ElectroFest2K25 JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggleBtn = document.getElementById("theme-toggle");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    body.classList.add(savedTheme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark-theme");
      const newTheme = body.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
      localStorage.setItem("theme", newTheme);
    });
  }

  // Event Filter Tabs
  const eventTabs = document.querySelectorAll(".event-tab");
  const eventCards = document.querySelectorAll(".event-card");

  eventTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const category = tab.dataset.category;

      eventCards.forEach(card => {
        card.style.display = category === "all" || card.classList.contains(category)
          ? "block"
          : "none";
      });

      eventTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });

  // Countdown Timer
  const countdownDate = new Date("April 26, 2025 21:00:00").getTime();
  const countdownElement = document.getElementById("countdown");

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    if (timeLeft <= 0) {
      countdownElement.innerHTML = "Event has started!";
      clearInterval(countdownInterval);
    } else {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }

  const countdownInterval = setInterval(updateCountdown, 1000);

  // Back to Top
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Loading Overlay
  const loadingOverlay = document.getElementById("loading-overlay");
  if (loadingOverlay) {
    setTimeout(() => {
      loadingOverlay.style.display = "none";
    }, 1500);
  }
});
