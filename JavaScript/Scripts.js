document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll("#cardContainer > div");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add("show");
            slide.classList.remove("hide");
        } else {
            slide.classList.remove("show");
            slide.classList.add("hide");
        }
    });
  }

  showSlide(currentIndex);

  document.getElementById("nextBtn").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  });

  document.getElementById("prevBtn").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  });
});
