window.addEventListener("load", () => {
  for (let i of document.querySelectorAll(".gallery img")) {
    i.onclick = () => i.classList.toggle("full");
  }
});
window.addEventListener("load", () => {
  for (let i of document.querySelectorAll(".gallery video")) {
    i.onclick = () => i.classList.toggle("full");
  }
});
