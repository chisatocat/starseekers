import { footerData } from "../data/footer_data.js";

// Create footer content
const footer = document.getElementById("footer");

const socaialDiv = document.createElement("ul");
socaialDiv.id = "social-links";
socaialDiv.classList.add("social-links");
const desc = document.createElement("p");
desc.innerHTML = `Designed by ${footerData.designer} © ${footerData.year}`;

footer.appendChild(socaialDiv);
footer.appendChild(desc);
