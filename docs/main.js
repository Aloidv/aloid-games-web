"use strict";
const config = window.ALOID_CONFIG || {};
const labels = {steam: "Ver Wordhood en Steam", trailer: "Ver tráiler"};
document.querySelectorAll("[data-link]").forEach(link => {
  const key = link.dataset.link;
  const value = (config[key] || "").trim();
  if (!value) return;
  if (key === "email") {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return;
    link.href = "mailto:" + value;
  } else {
    try { const url = new URL(value); if (url.protocol !== "https:") return; link.href = url.href; } catch { return; }
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  link.removeAttribute("aria-disabled");
  const status = link.querySelector(".social-status");
  if (status) status.textContent = key === "email" ? value : "Visitar canal ↗";
  if (labels[key]) { link.textContent = labels[key] + " ↗"; }
  if (key === "trailer") document.querySelector("#trailer-description").textContent = "Descubre Wordhood en vídeo.";
});
document.querySelector("#year").textContent = new Date().getFullYear();
const modal = document.querySelector("#lightbox");
const largeImage = document.querySelector("#lightbox-image");
document.querySelectorAll("[data-image]").forEach(button => {
  button.addEventListener("click", () => {
    largeImage.src = button.dataset.image;
    largeImage.alt = button.querySelector("img").alt;
    document.querySelector("#lightbox-caption").textContent = button.dataset.caption;
    modal.showModal();
    document.body.classList.add("modal-open");
  });
});
modal.querySelector(".close-modal").addEventListener("click", () => modal.close());
modal.addEventListener("click", event => { if (event.target === modal) { const rect = modal.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) modal.close(); } });
modal.addEventListener("close", () => document.body.classList.remove("modal-open"));
