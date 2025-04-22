import { posts } from "../data/mockData.js";

document.addEventListener("DOMContentLoaded", () => {

  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("user");

  if (!username) return;

  const userPosts = posts.filter(post => post.username === username);
  if (userPosts.length === 0) return;

  const userAvatar = userPosts[0].avatar;

  document.querySelector(".profile-avatar").src = userAvatar;
  document.querySelector(".profile-username").textContent = username;

  const grid = document.getElementById("user-posts");
  grid.innerHTML = ""; 

  for (let i = 1; i <= 10; i++) {
    const img = document.createElement("img");
    img.src = `../assets/images/post${i}.jpg`; 
    img.alt = `post${i}`;  
    grid.appendChild(img);  
  }
});
