import { posts } from "../data/mockData.js";

const images = [];

const shuffled = posts.sort(() => 0.5 - Math.random());

for (const post of shuffled) {
  images.push(post.image);

  if (images.length >= 3) break;
}

let currentIndex = 0;

const storyImage = document.querySelector(".story-images img");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

if (images.length > 0) {
  storyImage.src = images[currentIndex];
}

let timeoutId;

function resetTimer() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    window.location.href = "../html/index.html";
  }, 4000);
}

arrowLeft.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  storyImage.src = images[currentIndex];
  resetTimer();
});

arrowRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  storyImage.src = images[currentIndex];
  resetTimer();
});

resetTimer();
