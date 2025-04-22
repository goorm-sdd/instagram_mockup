import { posts } from "../data/mockData.js";

const feed = document.getElementById("explore-post-feed");

const largePosts = [];
//일단 랜덤으로 6개 정도만 했는데, 더 필요할 경우 수정 가능 ~
while (largePosts.length < 6) {
  const randomIndex = Math.floor(Math.random() * posts.length);
  if (!largePosts.includes(randomIndex)) {
    largePosts.push(randomIndex);
  }
}

posts.forEach((post, i) => {
  const card = document.createElement("div");
  card.className = "explore-post-card";

  if (largePosts.includes(i)) {
    card.style.gridColumn = "span 2";
    card.style.gridRow = "span 2";
  }

  card.innerHTML = `
    <div class="explore-post-image">
      <a href="explorePost.html#${post.id}">
        <img src="${post.image}" alt="explore post image" />
      </a>
    </div>
  `;

  feed.appendChild(card);
});
