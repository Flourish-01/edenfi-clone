const imageSlider = document.getElementById("imageSlider");
  const items = document.querySelectorAll(".carousel-img-container");
  const visibleItems = 3;
  const totalItems = items.length;

  let currentIndex = 0;

  function updateSlider() {
    const slideWidth = items[0].offsetWidth + 16; // 16px = me-3 spacing
    const maxIndex = totalItems - visibleItems;
    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
    const translateX = -currentIndex * slideWidth;
    imageSlider.style.transform = `translateX(${translateX}px)`;
  }

  function nextSlide() {
    if (currentIndex < totalItems - visibleItems) {
      currentIndex++;
      updateSlider();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  }

  window.addEventListener("resize", updateSlider);
  window.addEventListener("load", updateSlider);