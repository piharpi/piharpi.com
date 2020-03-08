(() => {
  // Theme switch
  const themeSwitch = document.getElementById("mood");
  const root = document.body;

  if (themeSwitch) {
    initTheme(localStorage.getItem("theme"));
    themeSwitch.addEventListener("click", () =>
      toggleTheme(localStorage.getItem("theme"))
    );

    function toggleTheme(state) {
      if (state === "dark") {
        localStorage.setItem("theme", "light");
        // themeSwitch.textContent = "dark";
        root.removeAttribute("data-theme");
      } else if (state === "light") {
        localStorage.setItem("theme", "dark");
        // themeSwitch.textContent = "light";
        document.body.setAttribute("data-theme", "dark");
      } else {
        initTheme(state);
      }
    }

    function initTheme(state) {
      if (state === "dark") {
        document.body.setAttribute("data-theme", "dark");
        // themeSwitch.textContent = "light";
      } else if (state === "light") {
        root.removeAttribute("data-theme");
        // themeSwitch.textContent = "dark";
      }
    }
  }
})();
