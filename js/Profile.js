document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
});
const grid = document.querySelector(".grid");

for (let i = 1; i <= 10; i++) {
  const img = document.createElement("img");
  img.src = `../assets/images/post${i}.jpg`;
  img.alt = `post${i}`;
  grid.appendChild(img);
}