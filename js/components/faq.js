import faqData from "../data/faq_data.js";

function createFaqItem(faq) {
  const faqItem = document.createElement("div");
  faqItem.classList.add("faq-item");

  const title = document.createElement("h2");
  title.classList.add("my-3");
  title.textContent = faq.title;

  const content = document.createElement("p");
  content.innerHTML = faq.content; // Use innerHTML for multiline content

  faqItem.appendChild(title);
  faqItem.appendChild(content);

  return faqItem;
}

function generateFaqSection() {
  const faqContainer = document.getElementById("faq-container"); // Ensure this container exists in your HTML

  faqData.forEach((faq) => {
    const faqItem = createFaqItem(faq);
    faqContainer.appendChild(faqItem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  generateFaqSection();
});
