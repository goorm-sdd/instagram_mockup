import { posts } from "../data/mockData.js";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("user");

  if (!username) return;

  const userPosts = posts.filter(post => post.username === username);

  // 유저가 mockData에 없으면 다시 explore.html로 돌아가기
  if (userPosts.length === 0) {
    alert("존재하지 않는 사용자입니다.");
    window.location.href = "explore.html";
    return;
  }

  const userAvatar = userPosts[0].avatar;

  const profileImg = document.querySelector(".profile-avatar");
  if (profileImg) profileImg.src = userAvatar;

  const usernameElem = document.querySelector(".profile-username");
  if (usernameElem) usernameElem.textContent = username;

  const headerUsername = document.querySelector(".profile-username-text");
  if (headerUsername) headerUsername.textContent = username;
  
  const grid = document.getElementById("user-posts");
  if (!grid) return;

  grid.innerHTML = "";

  
  for (let i = 1; i <= 10; i++) {
    const img = document.createElement("img");
    img.src = `../assets/images/post${i}.jpg`;
    img.alt = `post${i}`;
    grid.appendChild(img);
  }
});

