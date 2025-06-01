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

  
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.offcanvas-body a');
    const offcanvas = document.getElementById('mobileNav');
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvas);

    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (href.startsWith('#')) {
          e.preventDefault();
          const targetID = href.substring(1);
          const target = document.getElementById(targetID);

          if (target) {
            // Close the menu immediately
            bsOffcanvas.hide();

            // Wait for the offcanvas to *fully finish closing*
            offcanvas.addEventListener('hidden.bs.offcanvas', () => {
              // Scroll to the section
              target.scrollIntoView({ behavior: 'smooth' });
            }, { once: true }); // Only run this once
          } else {
            bsOffcanvas.hide(); // Just close if no target
          }
        } else {
          bsOffcanvas.hide(); // External links
        }
      });
    });
  });



