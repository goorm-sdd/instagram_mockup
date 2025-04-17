window.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("header-placeholder");
  fetch("../html/header.html")
    .then((res) => res.text())
    .then((data) => {
      placeholder.innerHTML = data;
    });
});
