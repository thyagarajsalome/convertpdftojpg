document
  .getElementById("toolsDropdown")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    const dropdown = document.getElementById("dropdownContent");
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });
// Close dropdown if clicking outside
document.addEventListener("click", function () {
  const dropdown = document.getElementById("dropdownContent");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  }
});
// Mobile menu toggle
document.getElementById("menuToggle").addEventListener("click", function () {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("active");
  const hamburger = this.querySelector(".hamburger");
  const closeIcon = this.querySelector(".close-icon");
  if (navMenu.classList.contains("active")) {
    hamburger.style.display = "none";
    closeIcon.style.display = "inline";
  } else {
    hamburger.style.display = "inline";
    closeIcon.style.display = "none";
  }
});

const tools = [
  {
    title: "Convert PDF to JPG",
    description:
      "Easily convert your PDF files to high-quality JPG images with a single click.",
    href: "./convertpdftojpg.html",
    tags: ["Conversion", "Image Processing"],
  },
  {
    title: "Image Resizer",
    description:
      "Resize Images & photos with live preview and download options.",
    href: "./imageresizer.html",
    tags: ["Photo Editing", "Image Resizing"],
  },
  {
    title: "jpg to png",
    description: "Convert images seamlessly between various formats.",
    href: "./jpgtopng.html",
    tags: ["Conversion", "Image Processing"],
  },

  {
    title: "image compressor",
    description: "Compress image files to reduce size and optimize storage.",
    href: "./imagecompressor.html",
    tags: ["File Management", "Compression"],
  },
];

const container = document.querySelector(".card-container");
tools.forEach((tool) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
      <a href="${tool.href}" target="_blank">
        <div class="card-content">
          <h3 class="card-title">${tool.title}</h3>
          <p class="card-description">${tool.description}</p>
          <div class="card-tags">
            ${tool.tags
              .map((tag) => `<span class="card-tag">${tag}</span>`)
              .join("")}
          </div>
        </div>
      </a>
    `;
  container.appendChild(card);
});

// IndexNow URL submission function
// indexnow.js
import fetch from "node-fetch";

const apiKey = "3758d3cdb7104d9ab130442dbce35de0"; // Your IndexNow API key

async function submitToIndexNow(urls) {
  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: "convertpdftojpg.in",
        key: apiKey,
        keyLocation: "https://convertpdftojpg.in/indexnow.txt",
        urlList: urls,
      }),
    });

    console.log("IndexNow Response:", await response.text());
  } catch (err) {
    console.error("IndexNow Error:", err);
  }
}

// Example usage: call this after updating pages
submitToIndexNow([
  "https://convertpdftojpg.in/",
  "https://convertpdftojpg.in/convertpdftojpg.html",
  "https://convertpdftojpg.in/imageresizer.html",
  "https://convertpdftojpg.in/jpgtopng.html",
  "https://convertpdftojpg.in/imagecompressor.html",
]);
