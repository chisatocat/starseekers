const toggleBtn = document.querySelector(".toggle-button");
const mobileNavList = document.querySelector(".mobile-nav-list");

toggleBtn.addEventListener("click", () => {
  mobileNavList.classList.toggle("active");
});
