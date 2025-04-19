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
    </div>
    <p class="story-username">${user.username}</p>
  `;

  storyBar.appendChild(storyItem);
});
