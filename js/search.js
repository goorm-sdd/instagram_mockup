import { posts } from "../data/mockData.js";

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".explore-search-bar");
  const resultBox = document.querySelector(".autocomplete-results");

  if (!searchInput || !resultBox) return;

 
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
