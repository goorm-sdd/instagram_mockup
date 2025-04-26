document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabInner = tab.querySelector(".tab-inner");
      const tabId = tabInner.id;

      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const grid = document.querySelector(".grid");

      if (tabId === "post-tab") {
        grid.innerHTML = "";
        for (let i = 1; i <= 10; i++) {
          const img = document.createElement("img");
          img.src = `../assets/images/post${i}.jpg`;
          img.alt = `post${i}`;
          grid.appendChild(img);
        }
      } else {
        grid.innerHTML = "";
      }
    });
  });

  const postTabInner = document.getElementById("post-tab");
  const postTabButton = postTabInner.closest(".tab");
  postTabButton.click();
});
