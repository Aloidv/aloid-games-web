"use strict";
(() => {
  const root = document.documentElement;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const choices = ["auto", "light", "dark"];
  let preference = "auto";
  try {
    const stored = window.localStorage.getItem("aloid-theme");
    if (choices.includes(stored)) preference = stored;
  } catch { /* El modo automático sigue funcionando sin almacenamiento. */ }
  function applyTheme() {
    const theme = preference === "auto" ? (systemTheme.matches ? "dark" : "light") : preference;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    const browserColor = document.querySelector('meta[name="theme-color"]');
    if (browserColor) browserColor.content = theme === "dark" ? "#151515" : "#f7f6f0";
  }
  applyTheme();
  systemTheme.addEventListener("change", () => { if (preference === "auto") applyTheme(); });
  document.addEventListener("DOMContentLoaded", () => {
    const select = document.querySelector("#theme-select");
    select.value = preference;
    select.addEventListener("change", () => {
      preference = choices.includes(select.value) ? select.value : "auto";
      try { window.localStorage.setItem("aloid-theme", preference); } catch { /* La selección funciona durante esta visita. */ }
      applyTheme();
    });
  });
})();
