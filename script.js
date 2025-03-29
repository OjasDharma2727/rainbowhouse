document.addEventListener("DOMContentLoaded", () => {
  // Animation for hero section text
  const heroText = document.querySelector(".hero-section h2");
  if (heroText) {
    heroText.style.opacity = 0;
    heroText.style.transform = "translateY(-20px)";
    setTimeout(() => {
      heroText.style.transition = "all 1s ease";
      heroText.style.opacity = 1;
      heroText.style.transform = "translateY(0)";
    }, 500);
  }

  // Animation for feature items
  const featureItems = document.querySelectorAll(".feature-item");
  featureItems.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = "scale(0.8)";
    setTimeout(() => {
      item.style.transition = `all 0.5s ease ${index * 0.2}s`;
      item.style.opacity = 1;
      item.style.transform = "scale(1)";
    }, 500);
  });

  // Animation for teacher cards
  const teacherCards = document.querySelectorAll(".teacher-card");
  teacherCards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = `all 0.5s ease ${index * 0.2}s`;
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 500);
  });

  // Animation for testimonials
  const testimonials = document.querySelectorAll(".testimonial");
  testimonials.forEach((testimonial, index) => {
    testimonial.style.opacity = 0;
    testimonial.style.transform = "translateX(-20px)";
    setTimeout(() => {
      testimonial.style.transition = `all 0.5s ease ${index * 0.2}s`;
      testimonial.style.opacity = 1;
      testimonial.style.transform = "translateX(0)";
    }, 500);
  });
});

// Lightbox functionality
// Lightbox Functionality
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll(".program-item");

  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.boxShadow = "0 8px 16px rgba(49, 222, 141, 0.7)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.boxShadow = "0 4px 8px rgba(49, 222, 141, 0.3)";
    });
  });
});
document
  .getElementById("admissionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const admissionType = document.getElementById("admissionType").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "919817457552"; // Ensure this is the correct number with country code
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAdmission Type: ${admissionType}\nMessage: ${message}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  });
