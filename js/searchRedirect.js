document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".explore-search-bar");
  const searchBtn = document.querySelector(".explore-search-button");

  if (!searchInput || !searchBtn) return;

  const redirectToSearch = () => {
    const keyword = searchInput.value.trim();
    if (keyword) {
      window.location.href = `search.html?user=${encodeURIComponent(keyword)}`;
    }
  };

  searchBtn.addEventListener("click", redirectToSearch);
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      redirectToSearch();
    }
  });
});
