document.addEventListener("DOMContentLoaded", () => {
 const toggleBtn = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('navbar-nav');

    if (toggleBtn && navMenu) {
      toggleBtn.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('is-active');
        toggleBtn.classList.toggle('is-active');
        toggleBtn.setAttribute('aria-expanded', isActive);
      });
    }
    const section1 = document.querySelector('[data-section-id="about-me"]');
  if (!section1) return;

  const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const elements = entry.target.querySelectorAll('.fade-up');
        elements.forEach(el => el.classList.add('is-visible'));
        observer1.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer1.observe(section1);
  const section2 = document.querySelector('[data-section-id="technical-arsenal"]');
    if (!section2) return;

    const cards = section2.querySelectorAll('.skill-card');
    
    const observerOptions2 = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer2 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions2);

    cards.forEach(card => {
      observer2.observe(card);
    });

    const section = document.querySelector('[data-section-id="contact-section"]');
    if (!section) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
          animatedElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('is-visible');
            }, index * 150);
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(section);

    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    const section3 = document.querySelector('[data-section-id="portfolio-showcase"]');
    if (!section3) return;

    const cards2 = section3.querySelectorAll('.project-card');
    
    // Initial state for animation
    cards2.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(32px)';
    });

    const observerOptions3 = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer3 = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const index = Array.from(cards2).indexOf(card);
          
          // Apply staggered animation
          setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            
            // Clean up inline styles after animation to allow hover effects to work properly
            setTimeout(() => {
              card.style.transition = 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease';
            }, 600);
            
          }, index * 150);
          
          observer.unobserve(card);
        }
      });
    }, observerOptions3);

    cards2.forEach(card => observer3.observe(card));

  });
   