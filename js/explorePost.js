import { posts } from "../data/mockData.js";

const feed = document.getElementById("explore-post-feed");

posts.forEach((post) => {
  const card = document.createElement("div");
  card.className = "explore-post-card";

  card.innerHTML = `
    <div class="explore-post-image">
      <a >
        <img src="${post.image}" alt="explore post image" />
      </a>
    </div>
    `;

  feed.appendChild(card);
});
