import { posts } from "../data/mockData.js";

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".explore-search-bar");
  const resultBox = document.querySelector(".autocomplete-results");
  const exploreGrid = document.querySelector(".explore-post-feed");

  if (!searchInput || !resultBox) return;

  // usernames 배열 만들기
  const usernames = [...new Set(posts.map(post => post.username))];

  const renderResults = (filtered) => {
    resultBox.innerHTML = "";  

    filtered.forEach(username => {
      const userPost = posts.find(post => post.username === username);
      const userAvatar = userPost ? userPost.avatar : ''; 

      const div = document.createElement("div");
      div.classList.add("autocomplete-item");

      const imgElement = document.createElement("img");
      imgElement.src = userAvatar;
      imgElement.alt = username;
      imgElement.classList.add("autocomplete-item-img");

      const textElement = document.createElement("span");
      textElement.textContent = username;

      div.appendChild(imgElement);
      div.appendChild(textElement);

      div.addEventListener("click", () => {
        window.location.href = `search.html?user=${encodeURIComponent(username)}`;
      });

      resultBox.appendChild(div);
    });
  };

  // 검색어 입력시 필터링
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.trim().toLowerCase();
    if (keyword === "") {
      resultBox.innerHTML = "";
      if (exploreGrid) {
        exploreGrid.classList.remove("hide-grid"); // 검색어가 비었을 때 grid 보이게
      }
      return;
    }

    const filtered = usernames.filter(username =>
      username.toLowerCase().includes(keyword)
    );

    if (exploreGrid) {
      exploreGrid.classList.add("hide-grid"); // 검색어 입력 시 grid 숨기기
    }

    renderResults(filtered);
  });

  document.addEventListener("click", (e) => {
    if (!resultBox.contains(e.target) && e.target !== searchInput) {
      resultBox.innerHTML = "";
    }
  });
});
