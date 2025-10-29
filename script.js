document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");
  if (btn) {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  }
});
