import taiwanSpotData from "../data/taiwan_spot_data.js";

function createSpotContainer(spot) {
  const container = document.createElement("div");
  container.classList.add("spot-container", "m-5");

  const title = document.createElement("h2");
  title.classList.add("mb-3");
  title.textContent = spot.title;

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("spot-image-container");
  const img = document.createElement("img");
  img.src = spot.image;
  img.alt = spot.title;
  imageContainer.appendChild(img);

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("spot-info-container");
  const description = document.createElement("p");
  description.classList.add("my-3");
  description.textContent = spot.description;

  infoContainer.appendChild(description);

  // Create transportation information

  const transportContainer = document.createElement("div");
  transportContainer.classList.add("spot-transport-container");

  const transportationTitle = document.createElement("h3");
  transportationTitle.classList.add("my-2");
  transportationTitle.textContent = "交通方式";
  transportContainer.appendChild(transportationTitle);

  spot.transportation.forEach((item) => {
    const transportMethod = document.createElement("p");
    transportMethod.innerHTML = `<strong>${item.method}:</strong> ${item.details}`;
    transportContainer.appendChild(transportMethod);
  });

  container.appendChild(title);
  container.appendChild(imageContainer);
  container.appendChild(infoContainer);
  container.appendChild(transportContainer);

  return container;
}

function loadSpots() {
  const spotArea = document.getElementById("spot-area");
  taiwanSpotData.forEach((spot) => {
    const spotElement = createSpotContainer(spot);
    spotArea.appendChild(spotElement);
  });
}

// Load spots when the document is ready
document.addEventListener("DOMContentLoaded", loadSpots);
