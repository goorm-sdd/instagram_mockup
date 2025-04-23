import { posts } from "../data/mockData.js"; 

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".explore-search-bar");
  const searchBtn = document.querySelector(".explore-search-button");

  if (!searchInput || !searchBtn) return;

  const isValidUsername = (username) => {
    const usernames = [...new Set(posts.map(post => post.username))];
    return usernames.includes(username);
  };

  const redirectToSearch = () => {
    const keyword = searchInput.value.trim();
    if (keyword && isValidUsername(keyword)) {
      window.location.href = `userProfile.html?user=${encodeURIComponent(keyword)}`;
    } else {
      alert("존재하지 않는 사용자입니다.");
    }
  };

  searchBtn.addEventListener("click", redirectToSearch);
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      redirectToSearch();
    }
  });
});
