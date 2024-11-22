import { navbarData } from "../data/navbar_data.js";

document.addEventListener("DOMContentLoaded", () => {
  const navList = document.getElementById("nav-list");
  const navbarVideo = document.getElementById("navbar-video");

  // Base URL for comparison (optional, adjust if necessary)
  const baseUrl = window.location.origin;

  // Get current path
  const currentPath = window.location.pathname;

  navbarData.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.link;
    a.textContent = item.name;

    // Check if the link matches the current path

    if (item.link.includes(currentPath)) {
      /* console.log(currentPath + "! " + item.link); */

      li.classList.add("active"); // Add active class if it matches
    }

    li.appendChild(a);
    navList.appendChild(li);
  });

  // Lazy load the video when the navbar is ready
  const loadVideo = () => {
    navbarVideo.src = "./video/background_video.mp4";
    navbarVideo.style.display = "block";
    navbarVideo.play();
  };

  // Check if the video is already loaded
  if (navbarVideo.src) {
    loadVideo();
  } else {
    // Load video when the page is fully loaded
    window.addEventListener("load", loadVideo);
  }
});
