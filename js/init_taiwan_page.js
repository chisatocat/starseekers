import createSlideshow from "./components/slideshow.js";

document.addEventListener("DOMContentLoaded", () => {
  const slideshow = createSlideshow("slideshow-area", "92vh");
  slideshow.initialize("../data/slide_taiwan_data.js");
});