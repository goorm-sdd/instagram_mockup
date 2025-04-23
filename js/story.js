import { posts } from "../data/mockData.js";

const storyBar = document.getElementById("story-bar");

const addedUsernames = new Set();
const storyUsers = [];

const shuffled = posts.sort(() => 0.5 - Math.random());

for (const post of shuffled) {
  if (!addedUsernames.has(post.username)) {
    addedUsernames.add(post.username);
    storyUsers.push({
      username: post.username,
      avatar: post.avatar,
    });
  }

  if (storyUsers.length >= 10) break;
}

storyUsers.forEach((user) => {
  const storyItem = document.createElement("div");
  storyItem.className = "story-item";

  storyItem.innerHTML = `
    <div class="story-avatar">
      <img src="${user.avatar}" alt="${user.username}" />
      <a class="to-story-detail" href="../html/StoryDetail.html?username=${encodeURIComponent(
        user.username
      )}"></a>
    </div>
    <p class="story-username">${user.username}</p>
  `;

  storyBar.appendChild(storyItem);
});

let isDown = false;
let startX;
let scrollLeft;

storyBar.addEventListener("mousedown", (e) => {
  isDown = true;
  storyBar.classList.add("active");
  startX = e.pageX - storyBar.offsetLeft;
  scrollLeft = storyBar.scrollLeft;
});
storyBar.addEventListener("mouseleave", () => {
  isDown = false;
  storyBar.classList.remove("active");
});
storyBar.addEventListener("mouseup", () => {
  isDown = false;
  storyBar.classList.remove("active");
});
storyBar.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - storyBar.offsetLeft;
  const walk = (x - startX) * 1.5; // scroll speed
  storyBar.scrollLeft = scrollLeft - walk;
});
