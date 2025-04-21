import { posts } from "../data/mockData.js";

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

console.log(images);

const storyImages = document.querySelector(".story-images");

for (let i = 0; i < images.length; i++) {
  const storyImage = document.createElement("div");
  storyImage.className = "story-image";

  const image = document.createElement("img");
  image.src = images[i];

  storyImages.appendChild(storyImage);
  storyImage.appendChild(image);
}

console.log(storyImages);

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const storyImage = document.querySelector(".story-image");

arrowLeft.addEventListener("click", () => {
  const currentPosition = storyImages.scrollLeft;
  const imageWidth = storyImage.offsetWidth;

  storyImages.scrollTo({
    left: currentPosition - imageWidth,
  });
});

arrowRight.addEventListener("click", () => {
  const currentPosition = storyImages.scrollLeft;
  const imageWidth = storyImage.offsetWidth;

  storyImages.scrollTo({
    left: currentPosition + imageWidth,
  });
});

// let currentIndex = images[0];

// const storyImage = document.querySelector(".story-images img");

// if (images.length > 0) {
//   storyImage.src = currentIndex;
// }

// let timeoutId;

// function resetTimer() {
//   clearTimeout(timeoutId);
//   timeoutId = setTimeout(() => {
//     window.location.href = "../html/index.html";
//   }, 4000);
// }

// arrowLeft.addEventListener("click", () => {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   storyImage.src = images[currentIndex];
//   // resetTimer();
// });

// arrowRight.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % images.length;
//   storyImage.src = images[currentIndex];
//   // resetTimer();
// });

// // resetTimer();
