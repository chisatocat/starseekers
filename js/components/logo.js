document.addEventListener("DOMContentLoaded", () => {
  function createLogo() {
    const whatsappIcon = document.querySelector(".logo-container");

    const anchor = document.createElement("a");
    anchor.href = "./index.html";

    const img = document.createElement("img");
    img.src = "/img/logo.png";
    img.alt = "Starseekers Logo";

    img.classList.add("logo");

    anchor.appendChild(img);
    whatsappIcon.appendChild(anchor);
  }

  createLogo();
});
