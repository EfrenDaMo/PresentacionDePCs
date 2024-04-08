document.addEventListener("DOMContentLoaded", function () {
  // Variables
  let currentIndex = 0;
  let cardClicked = false;

  // Constantes
  const slides = document.querySelectorAll("#cardContainer > div");
  const totalSlides = slides.length;
  const cards = document.querySelectorAll(".cards");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("show");
        slide.classList.remove("uninteractable");
      } else {
        slide.classList.remove("show");
        slide.classList.add("uninteractable");
      }
    });
  }

  showSlide(currentIndex);

  document.getElementById("backBtn").addEventListener("click", function () {
    const selectedCard = document.querySelector(".card-grow");
    if (selectedCard) {
      selectedCard.classList.remove(
        "card-grow",
        "clicked",
        "centered-card",
        "in-place"
      );

      setTimeout(() => {
        cardClicked = false;

        cards.forEach((otherCard) => {
          otherCard.style.pointerEvents = "";
          otherCard.classList.remove("fade-out");
          otherCard.classList.add("fade-in");
          setTimeout(() => {
            otherCard.classList.remove("fade-in");
          }, 60);
        });

        document.getElementById("nextBtn").classList.remove("fade-out");
        document.getElementById("prevBtn").classList.remove("fade-out");
        document.getElementById("Title1").classList.remove("fade-out");
        document.getElementById("Title2").classList.remove("fade-out");
        document.getElementById("Title3").classList.remove("fade-out");

        // Now, add the fade-in class and enable the elements if needed
        const elementsToFadeIn = [
          document.getElementById("nextBtn"),
          document.getElementById("prevBtn"),
          document.getElementById("Title1"),
          document.getElementById("Title2"),
          document.getElementById("Title3"),
        ];

        elementsToFadeIn.forEach((element) => {
          element.classList.add("fade-in");
          element.disabled = false;
          setTimeout(() => {
            element.classList.remove("fade-in");
          }, 60);
        });
      }, 50);

      document.getElementById("backBtn").classList.remove("fade-in");
      document.getElementById("backBtn").classList.add("fade-out");
    }
  });

  document.getElementById("nextBtn").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  });

  document.getElementById("prevBtn").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  });

  cards.forEach((card) => {
    card.addEventListener(`click`, function () {
      if (!cardClicked) {
        this.classList.add("card-grow");
        this.classList.add("clicked");
        cardClicked = true;

        setTimeout(() => {
          this.classList.add("centered-card");
          this.classList.add("in-place");
        }, 300);

        cards.forEach((otherCard) => {
          if (otherCard !== this) {
            otherCard.style.pointerEvents = "none";
            otherCard.classList.add("fade-out");
          }
        });

        document.getElementById("nextBtn").classList.add("fade-out");
        document.getElementById("prevBtn").classList.add("fade-out");
        document.getElementById("Title1").classList.add("fade-out");
        document.getElementById("Title2").classList.add("fade-out");
        document.getElementById("Title3").classList.add("fade-out");
        document.getElementById("nextBtn").disabled = true;
        document.getElementById("prevBtn").disabled = true;
        document.getElementById("backBtn").classList.add("fade-in");
      }
    });
  });
});
