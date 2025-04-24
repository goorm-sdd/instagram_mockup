window.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("footer-placeholder");
  fetch("../html/Footer.html")
    .then((res) => res.text())
    .then((data) => {
      placeholder.innerHTML = data;
    });
});
