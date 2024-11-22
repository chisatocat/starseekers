import heroImages from "../data/heroimage_data.js";

const heroImageContainerClasName = "hero-image-container";

const heroContainer = document.getElementById("hero");

heroImages.forEach((image) => {
  const container = document.createElement("div");
  container.classList.add(heroImageContainerClasName);

  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;

  const alink = document.createElement("a");
  alink.href = image.link;

  const overlayDiv = document.createElement("div");

  overlayDiv.classList.add("hero-overlay");
  overlayDiv.innerText = image.alt;

  alink.appendChild(img);

  container.appendChild(alink);
  container.appendChild(overlayDiv);

  heroContainer.appendChild(container);
});
