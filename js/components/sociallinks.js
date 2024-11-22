import socialLinksData from "../data/sociallink_data.js";

document.addEventListener("DOMContentLoaded", () => {
  const socialLinksContainer = document.getElementById("social-links");

  socialLinksData.forEach((link) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${link.url}" target="_blank" rel="noopener noreferrer">
            <i class="fab ${link.icon}"></i>
        </a>`;
    socialLinksContainer.appendChild(li);
  });
});
