// First Image
const image1 = document.getElementById("image1");
const originalImageSrc1 = "ip15.png";
const newImageSrc1 = "ip152.png";

image1.addEventListener("mouseover", () => {
  image1.src = newImageSrc1; // Change the image source on hover
});

image1.addEventListener("mouseout", () => {
  image1.src = originalImageSrc1; // Revert to the original image source on unhover
});

// Second Image
const image2 = document.getElementById("image2");
const originalImageSrc2 = "mac.png";
const newImageSrc2 = "macp1.png";

image2.addEventListener("mouseover", () => {
  image2.src = newImageSrc2; // Change the image source on hover
});

image2.addEventListener("mouseout", () => {
  image2.src = originalImageSrc2; // Revert to the original image source on unhover
});

const image3 = document.getElementById("image3");
const originalImageSrc3 = "pc.png";
const newImageSrc3 = "pc1.png";

image3.addEventListener("mouseover", () => {
  image3.src = newImageSrc3; // Change the image source on hover
});

image3.addEventListener("mouseout", () => {
  image3.src = originalImageSrc3; // Revert to the original image source on unhover
});

const image4 = document.getElementById("image4");
const originalImageSrc4 = "sam.png";
const newImageSrc4 = "sam1.png";

image4.addEventListener("mouseover", () => {
  image4.src = newImageSrc4; // Change the image source on hover
});

image4.addEventListener("mouseout", () => {
  image4.src = originalImageSrc4; // Revert to the original image source on unhover
});

// Get a reference to the button element
const button = document.querySelector(".glow-button4");

// Disable the button
button.disabled = true;

