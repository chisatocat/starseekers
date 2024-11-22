// slideshow.js
let slideData = [];
let currentIndex = 0;

function createSlideshow(containerId, height = "500px") {
  // Accept height as a parameter
  const container = document.getElementById(containerId);

  // Create slideshow elements
  const slideshowContainer = document.createElement("div");
  slideshowContainer.classList.add("slideshow-container");

  // This function will create image elements based on slideData
  function initializeImages() {
    // Clear previous images if any
    slideshowContainer.innerHTML = "";

    // Create an array to hold image elements
    slideData.forEach((src) => {
      const img = document.createElement("img");
      img.classList.add("slides", "fade"); // Start with fade class
      img.src = src; // Set image source
      slideshowContainer.appendChild(img);
    });

    container.appendChild(slideshowContainer);
  }

  // Define the CSS styles
  const styles = `
        .slideshow-container {
            position: relative;
            width: 100%;
            height: ${height}; /* Set the height of the slideshow container */
            margin: auto;
            overflow: hidden;
        }
        .slides {
            display: none; /* Initially hide all slides */
            position: absolute;
            width: 100%;
            height: 100%; /* Ensure images fill the container */
            object-fit: cover; /* Maintain aspect ratio while covering the container */
            transition: opacity 1s ease-in-out;
            object-position:center;
        }
        .slides.active {
            display: block;
            opacity: 1;
        }
        .slides.fade {
            opacity: 0;
        }
    `;

  const styleSheet = document.createElement("style");
  styleSheet.appendChild(document.createTextNode(styles));
  document.head.appendChild(styleSheet);

  function showSlide(index) {
    const slides = slideshowContainer.querySelectorAll(".slides");

    // Set the active class for the current slide
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active"); // Fade in
        slide.style.display = "block";
        setTimeout(() => {
          slide.style.opacity = "1"; // Set opacity to 1 for fade-in effect
        }, 10); // Timeout to allow the browser to register the display change
      } else {
        slide.style.opacity = "0"; // Fade out
        slide.classList.remove("active");
        setTimeout(() => {
          slide.style.display = "none"; // Hide after fading out
        }, 1000); // Match this to the CSS transition duration
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideData.length;
    showSlide(currentIndex);
  }

  function startSlideshow() {
    if (slideData.length > 0) {
      showSlide(currentIndex);
      setInterval(nextSlide, 5000);
    }
  }

  async function loadSlides(dataFile) {
    const module = await import(`./${dataFile}`);
    slideData = module.default;
    currentIndex = 0;
    initializeImages();
    startSlideshow();
  }

  // Public method to initialize the slideshow
  return {
    initialize: loadSlides,
  };
}

// Export the createSlideshow function
export default createSlideshow;
