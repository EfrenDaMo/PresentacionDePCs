/*document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('#cardContainer > div');
    const totalSlides = slides.length;

    function showSlide(index) {
        //Esconde todas las tarjetas
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        //Muestra las tarjetas
        slides[index].style.display = 'block';
    }

    showSlide(currentIndex);

    document.getElementById('nextBtn').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    });

    document.getElementById('prevBtn').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    });
}); */

document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll("#cardContainer > div");
  const totalSlides = slides.length;

  function showSlide(index) {
    // Hide all slides by setting opacity to 0
    slides.forEach((slide) => {
      slide.classList.remove("show");
    });
    // Show the current slide by setting opacity to 1
    slides[index].classList.add("show");
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
