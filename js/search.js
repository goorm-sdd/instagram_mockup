import { posts } from "../data/mockData.js";

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".explore-search-bar");
  const resultBox = document.querySelector(".autocomplete-results");

  if (!searchInput || !resultBox) return;

  
  const usernames = [...new Set(posts.map(post => post.username))];


  const renderResults = (filtered) => {
    resultBox.innerHTML = "";

    filtered.forEach(username => {
      const div = document.createElement("div");
      div.classList.add("autocomplete-item");
      div.textContent = username;

      div.addEventListener("click", () => {
        window.location.href = `search.html?user=${encodeURIComponent(username)}`;
      });

      resultBox.appendChild(div);
    });
  };

  
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.trim().toLowerCase();
    if (keyword === "") {
      resultBox.innerHTML = "";
      return;
    }

    const filtered = usernames.filter(username =>
      username.toLowerCase().includes(keyword)
    );

    renderResults(filtered);
  });

  
  document.addEventListener("click", (e) => {
    if (!resultBox.contains(e.target) && e.target !== searchInput) {
      resultBox.innerHTML = "";
    }
  });
});
