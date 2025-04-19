import { posts } from "../data/mockData.js";

const feed = document.getElementById("explore-post-feed");

posts.forEach((post) => {
  const card = document.createElement("div");
  card.className = "explore-post-card";

  card.innerHTML = `
    <div class="explore-post-image">
      <a href="post.html#${post.id}">
        <img src="${post.image}" alt="explore post image" />
      </a>
    </div>
    `;

  feed.appendChild(card);
});

// 게시물 이동!!

fetch("data/posts.json")
  .then((response) => response.json())
  .then((posts) => {
    const explore = document.getElementById("explore");
    posts.forEach((post) => {
      const img = document.createElement("img");
      img.src = post.image;
      img.alt = post.caption;
      img.classList.add("thumbnail");

      // 클릭하면 post.html로 이동 + ID 전달
      img.addEventListener("click", () => {
        window.location.href = `post.html#${post.id}`;
      });

      explore.appendChild(img);
    });
  });
