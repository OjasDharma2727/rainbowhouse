const images = [
  "image/makoon-banners.jpg",
  "image/5.jpg",
  "image/4.jpg",
  "image/3.jpg",
  "image/2.jpg",
  "image/6.jpg",
];

let currentImageIndex = 0;

function openLightbox(index) {
  currentImageIndex = index;
  document.getElementById("lightbox-img").src = images[currentImageIndex];
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  document.getElementById("lightbox-img").src = images[currentImageIndex];
}
