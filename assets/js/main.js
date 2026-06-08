/**
 * Elite Game Dev Unit - Core Javascript Interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Navigation Scroll opacity shift
  const mainNav = document.getElementById("main-nav");
  if (mainNav) {
    const handleScrollNav = () => {
      if (window.scrollY > 10) {
        mainNav.classList.add("scrolled");
      } else {
        mainNav.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScrollNav);
    handleScrollNav(); // Run once on startup to set initial state
  }

  // 2. Mobile Nav Drawer Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNavDrawer = document.getElementById("mobile-nav-drawer");
  if (mobileMenuBtn && mobileNavDrawer) {
    const mobileLinks = mobileNavDrawer.querySelectorAll("a");
    
    mobileMenuBtn.addEventListener("click", () => {
      const isActive = mobileNavDrawer.classList.toggle("active");
      const icon = mobileMenuBtn.querySelector(".material-symbols-outlined");
      if (icon) {
        icon.textContent = isActive ? "close" : "menu";
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileNavDrawer.classList.remove("active");
        const icon = mobileMenuBtn.querySelector(".material-symbols-outlined");
        if (icon) {
          icon.textContent = "menu";
        }
      });
    });
  }

  // 3. Stats Counter Animation (Ease-Out Expo)
  const animateValue = (obj, start, end, duration) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      obj.innerHTML = end;
      return;
    }
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      obj.innerHTML = Math.floor(easeOut * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        obj.innerHTML = end;
      }
    };
    window.requestAnimationFrame(step);
  };

  // 4. Scroll Reveal with IntersectionObserver
  const revealElements = document.querySelectorAll(".scroll-reveal");
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          
          // Trigger bento grid stats counters
          const counters = entry.target.querySelectorAll(".counter-val");
          counters.forEach(counter => {
            if (!counter.dataset.animated) {
              const targetVal = parseInt(counter.dataset.target, 10);
              animateValue(counter, 0, targetVal, 1500);
              counter.dataset.animated = "true";
            }
          });
          
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // 5. Glass Panel Spotlight coordinates mouse tracking
  const interactiveCards = document.querySelectorAll(".glass-interactive");
  interactiveCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });

  // 6. Carousel Scroll Chevrons Navigation (Infinite Looping Slider)
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const track = document.getElementById("team-carousel-track");
  if (prevBtn && nextBtn && track) {
    let isTransitioning = false;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const getSlideWidthAndGap = () => {
      const slides = track.querySelectorAll(".carousel-slide");
      if (slides.length === 0) return { width: 0, gap: 0 };
      const width = slides[0].getBoundingClientRect().width;
      const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
      return { width, gap };
    };

    const handleNext = () => {
      if (isTransitioning) return;
      isTransitioning = true;

      const { width, gap } = getSlideWidthAndGap();
      const amount = width + gap;

      const completeNext = () => {
        const firstSlide = track.querySelector(".carousel-slide");
        if (firstSlide) {
          track.appendChild(firstSlide);
        }
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
        isTransitioning = false;
      };

      if (prefersReducedMotion) {
        completeNext();
      } else {
        track.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
        track.style.transform = `translateX(${-amount}px)`;

        const onNextEnd = () => {
          track.removeEventListener("transitionend", onNextEnd);
          completeNext();
        };
        track.addEventListener("transitionend", onNextEnd);
      }
    };

    const handlePrev = () => {
      if (isTransitioning) return;
      isTransitioning = true;

      const { width, gap } = getSlideWidthAndGap();
      const amount = width + gap;

      const completePrev = () => {
        isTransitioning = false;
      };

      const slides = track.querySelectorAll(".carousel-slide");
      const lastSlide = slides[slides.length - 1];
      if (lastSlide) {
        track.insertBefore(lastSlide, slides[0]);
      }

      if (prefersReducedMotion) {
        completePrev();
      } else {
        track.style.transition = "none";
        track.style.transform = `translateX(${-amount}px)`;

        track.offsetHeight; // Force reflow

        track.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
        track.style.transform = "translateX(0)";

        const onPrevEnd = () => {
          track.removeEventListener("transitionend", onPrevEnd);
          completePrev();
        };
        track.addEventListener("transitionend", onPrevEnd);
      }
    };

    nextBtn.addEventListener("click", handleNext);
    prevBtn.addEventListener("click", handlePrev);

    // Touch Swipe Navigation for Mobile
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchEndX - touchStartX;
      const threshold = 50; // minimum swipe distance in pixels
      if (swipeDistance < -threshold) {
        handleNext();
      } else if (swipeDistance > threshold) {
        handlePrev();
      }
    }, { passive: true });
  }



  // 8. Contact Form Acquisition Interceptor
const contactForm = document.getElementById("acquisition-form");
const successWrapper = document.getElementById("contact-success-wrapper");
const formWrapper = document.getElementById("contact-form-wrapper");

if (contactForm && successWrapper && formWrapper) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    try {
      const response = await fetch("https://formspree.io/f/xrevqkqp", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        // Animate transition to success state
        contactForm.style.opacity = 0;
        setTimeout(() => {
          contactForm.style.display = "none";
          successWrapper.style.display = "flex";
          formWrapper.classList.add("success-border");
          formWrapper.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
      } else {
        alert("Er is iets misgegaan. Probeer het opnieuw.");
      }
    } catch (error) {
      alert("Er is een netwerkfout opgetreden. Probeer het opnieuw.");
    }
  });
}

  // 9. Back to Top Button
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

});
