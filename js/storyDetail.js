import { posts } from "../data/storyData.js";

function getUsernameFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("username");
}

const username = getUsernameFromURL();
const user = posts.find((user) => user.username === username);

const storyUser = document.createElement("div");
storyUser.className = "story-user";
storyUser.innerHTML = `
  <div class="story-avatar">
    <img src="${user.avatar}" alt="${user.username}" />
  </div>
  <p class="story-username">${user.username}</p>
`;

const background = document.querySelector(".background");
if (background) {
  background.appendChild(storyUser);
}

const images = [];
const addedImages = new Set();

const shuffled = posts.sort(() => 0.5 - Math.random());

for (const post of shuffled) {
  if (!addedImages.has(post.image)) {
    images.push(post.image);
    addedImages.add(post.image);
  }

  if (images.length >= 3) break;
}

const storyImages = document.querySelector(".story-images");
const barContainer = document.querySelector(".display-bar-container");

for (let i = 0; i < images.length; i++) {
  const displayBar = document.createElement("div");
  displayBar.className = `display-bar--${i}`;

  const storyImage = document.createElement("div");
  storyImage.className = "story-image";

  const image = document.createElement("img");
  image.src = images[i];

  barContainer.appendChild(displayBar);
  storyImages.appendChild(storyImage);
  storyImage.appendChild(image);
}

let currentLocation = 1;

function initializeDisplayBar() {
  const displayBars = document.querySelectorAll("[class^='display-bar--']");
  displayBars.forEach((bar, index) => {
    if (index === 0) {
      bar.style.backgroundColor = "white";
    } else {
      bar.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
  });
}

initializeDisplayBar();

function updateDisplayBar() {
  const displayBars = document.querySelectorAll("[class^='display-bar--']");
  displayBars.forEach((bar, index) => {
    if (index === currentLocation) {
      bar.style.backgroundColor = "white";
    } else if (index > currentLocation && index !== 0) {
      bar.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    } else if (index === 0) {
      bar.style.backgroundColor = "white";
    }
  });
}

let timeoutId;

function resetTimer() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    window.location.href = "../html/index.html";
  }, 4000);
}

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const storyImage = document.querySelector(".story-image");

arrowLeft.addEventListener("click", () => {
  const currentPosition = storyImages.scrollLeft;
  const imageWidth = storyImage.offsetWidth;

  storyImages.scrollTo({
    left: currentPosition - imageWidth,
  });

  currentLocation--;
  updateDisplayBar();
  if (currentLocation < 1) {
    currentLocation = 1;
  }
  resetTimer();
});

arrowRight.addEventListener("click", () => {
  const currentPosition = storyImages.scrollLeft;
  const imageWidth = storyImage.offsetWidth;

  storyImages.scrollTo({
    left: currentPosition + imageWidth,
  });
  updateDisplayBar();
  currentLocation++;
  if (currentLocation >= images.length) {
    currentLocation = images.length - 1;
  }
  resetTimer();
});

resetTimer();
