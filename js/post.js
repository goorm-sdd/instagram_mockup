import { posts } from "../data/mockData.js";

const feed = document.getElementById("post-feed");

posts.forEach((post) => {
  const card = document.createElement("div");
  card.className = "post-card";

  const randomUserObj = posts[Math.floor(Math.random() * posts.length)];
  const randomUser = randomUserObj.username;
  const randomAvatar = randomUserObj.avatar;

  card.innerHTML = `
    <div class="post-header">
      <img class="avatar" src="${post.avatar}" alt="${post.username}" />
      <div class="username">${post.username}</div>
      <span class="material-icons more">more_horiz</span>
    </div>
    <div class="post-image">
      <img src="${post.image}" alt="post image" />
    </div>
    <div class="post-actions">
      <div class="left-actions">
        <span class="material-icons like-btn">${post.isLiked ? "favorite" : "favorite_border"}</span>
        <span class="material-icons">chat_bubble_outline</span>
        <span class="material-icons">send</span>
      </div>
      <div class="right-actions">
        <span class="material-icons">bookmark_border</span>
      </div>
    </div>
    <div class="post-likes">
      <img class="like-avatar" src="${randomAvatar}" alt="${randomUser}" />
      <span><strong>${randomUser}</strong>님 외 <strong>${post.likes}명</strong>이 좋아합니다</span>
    </div>
    <div class="post-caption">
      <strong>${post.username}</strong> ${post.caption}
    </div>
    <div class="post-timestamp">
      ${formatDateToMonthDay(post.timestamp)}
    </div>
    <div class="post-comments">
      ${post.comments
        .slice(0, 2)
        .map((c) => `<p><strong>${c.user}</strong> ${c.text}</p>`)
        .join("")}
    </div>
  `;

  feed.appendChild(card);

  const likeBtn = card.querySelector(".like-btn");
  const likeText = card.querySelector(".post-likes span");
  let liked = post.isLiked;
  let likeCount = post.likes;

  likeBtn.addEventListener("click", () => {
    liked = !liked;
    likeBtn.textContent = liked ? "favorite" : "favorite_border";
    likeBtn.classList.toggle("liked", liked);
    likeCount += liked ? 1 : -1;
    likeText.innerHTML = `<strong>${randomUser}</strong>님 외 <strong>${likeCount}명</strong>이 좋아합니다`;
  });
});

function formatDateToMonthDay(timestamp) {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}월 ${day}일`;
}
