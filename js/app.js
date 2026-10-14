/**
 * FARHAN SAEFULAH - PORTFOLIO INTERACTION & SCROLL ENGINE
 * 240-Frame Canvas Scroll Animation + Frosted Glass UI Interactions
 */

(function () {
  'use strict';

  // --- CONFIGURATION ---
  const TOTAL_FRAMES = 240;
  const FRAME_DIR = 'ezgif-38b467b4eb66498b-jpg';
  const FRAME_PREFIX = 'ezgif-frame-';
  const FRAME_EXT = '.jpg';
  const LERP_DAMPING = 0.085; // Silky smooth deceleration factor

  // --- DOM ELEMENTS ---
  const canvas = document.getElementById('hero-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  const siteNav = document.getElementById('site-nav');
  const preloader = document.getElementById('preloader');
  const loaderBar = document.getElementById('loader-bar');
  const loaderPct = document.getElementById('loader-pct');
  const loaderCount = document.getElementById('loader-count');

  // Mobile Menu Elements
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileClose = document.getElementById('mobile-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Contact & Toast Elements
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');

  // Desktop Nav Links
  const navLinks = document.querySelectorAll('.nav-links .nav-link');
  const sections = document.querySelectorAll('section[id], main[id]');

  // --- STATE ---
  const images = [];
  let loadedCount = 0;
  let targetFrame = 1;
  let currentFrame = 1;
  let lastDrawnFrame = -1;

  // Zero-padding helper: 1 -> "001"
  function padZero(num, size = 3) {
    let s = String(num);
    while (s.length < size) s = '0' + s;
    return s;
  }

  function getFrameUrl(index) {
    return `${FRAME_DIR}/${FRAME_PREFIX}${padZero(index)}${FRAME_EXT}`;
  }

  // --- CANVAS RESIZE & HiDPI ---
  function resizeCanvas() {
    if (!canvas || !ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    if (lastDrawnFrame > 0) {
      drawFrame(lastDrawnFrame, true);
    }
  }

  // --- DRAW FRAME (COVER FIT) ---
  function drawFrame(frameIndex, forceRedraw = false) {
    if (!ctx) return;
    const clampedIndex = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(frameIndex)));
    const img = images[clampedIndex];

    if (!img || !img.complete || img.naturalWidth === 0) {
      return;
    }

    if (clampedIndex === lastDrawnFrame && !forceRedraw) {
      return;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      drawHeight = height;
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

    lastDrawnFrame = clampedIndex;
  }

  // --- PRELOADER & STREAMING ---
  function preloadImages() {
    // Priority 1: frame 1
    const firstImg = new Image();
    firstImg.src = getFrameUrl(1);
    images[1] = firstImg;

    firstImg.onload = function () {
      loadedCount++;
      resizeCanvas();
      drawFrame(1, true);
      preloadRemaining();
    };

    firstImg.onerror = function () {
      preloadRemaining();
    };
  }

  function preloadRemaining() {
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      images[i] = img;

      img.onload = onSingleFrameLoaded;
      img.onerror = onSingleFrameLoaded;
    }
  }

  function onSingleFrameLoaded() {
    loadedCount++;
    const pct = Math.floor((loadedCount / TOTAL_FRAMES) * 100);

    if (loaderBar) loaderBar.style.width = pct + '%';
    if (loaderPct) loaderPct.textContent = pct + '%';
    if (loaderCount) loaderCount.textContent = `${loadedCount} / ${TOTAL_FRAMES} frames`;

    if (loadedCount >= TOTAL_FRAMES) {
      dismissPreloader();
    }
  }

  function dismissPreloader() {
    setTimeout(() => {
      if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 600);
      }
    }, 250);
  }

  // Safety fallback timeout for preloader
  setTimeout(() => {
    if (preloader && !preloader.classList.contains('fade-out')) {
      dismissPreloader();
    }
  }, 3500);

  // --- SCROLL PROGRESS ---
  function getScrollProgress() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return 0;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    return Math.max(0, Math.min(1, scrollY / maxScroll));
  }

  // --- RAF MAIN TICK LOOP ---
  function tick() {
    const progress = getScrollProgress();

    // Update glowing scroll progress bar
    const scrollProgressBar = document.getElementById('scroll-progress-bar');
    if (scrollProgressBar) {
      scrollProgressBar.style.width = (progress * 100).toFixed(2) + '%';
    }

    // Ambient glow blob parallax drift
    const glow1 = document.querySelector('.ambient-glow-1');
    const glow2 = document.querySelector('.ambient-glow-2');
    if (glow1) {
      glow1.style.transform = `translate3d(0, ${(progress * 140).toFixed(1)}px, 0)`;
    }
    if (glow2) {
      glow2.style.transform = `translate3d(0, ${(-progress * 120).toFixed(1)}px, 0)`;
    }

    // Map scroll progress to 1..240
    targetFrame = 1 + progress * (TOTAL_FRAMES - 1);

    // Smooth LERP (Linear Interpolation)
    const diff = targetFrame - currentFrame;
    if (Math.abs(diff) > 0.001) {
      currentFrame += diff * LERP_DAMPING;
    } else {
      currentFrame = targetFrame;
    }

    drawFrame(currentFrame);

    requestAnimationFrame(tick);
  }

  // --- SCROLLSPY & NAVBAR SCROLLED STATE ---
  function updateScrollSpy() {
    const scrollPosition = window.scrollY + 180;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Desktop nav update
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });

        // Mobile nav update
        mobileNavLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });

    // Navbar scrolled background blur toggle
    const headerWrapper = document.getElementById('header-wrapper');
    if (window.scrollY > 30) {
      if (siteNav) siteNav.classList.add('scrolled');
      if (headerWrapper) headerWrapper.classList.add('scrolled');
    } else {
      if (siteNav) siteNav.classList.remove('scrolled');
      if (headerWrapper) headerWrapper.classList.remove('scrolled');
    }
  }

  // --- MOBILE MENU HANDLERS ---
  function openMobileMenu() {
    if (mobileMenu) mobileMenu.classList.add('open');
    if (mobileOverlay) mobileOverlay.classList.add('open');
    if (hamburger) hamburger.classList.add('active');
    document.body.classList.add('menu-open');
  }

  function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('open');
    if (hamburger) hamburger.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu && mobileMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // --- SMOOTH SCROLL OFFSET FOR ANCHOR LINKS ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 95;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  // --- CONTACT FORM & TOAST NOTIFICATION ---
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameVal = document.getElementById('input-name')?.value || 'there';

      if (toast && toastText) {
        toastText.textContent = `Thank you, ${nameVal}! Your message has been sent successfully.`;
        toast.classList.add('show');

        setTimeout(() => {
          toast.classList.remove('show');
        }, 4000);
      }

      contactForm.reset();
    });
  }

  // --- SCROLL REVEAL (INTERSECTION OBSERVER) ---
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // --- 3D INTERACTIVE TILT & DYNAMIC GLARE SPOTLIGHT ---
  function init3DTilt() {
    const tiltElements = document.querySelectorAll('.tool-item.tool-3d, .about-feature-card, .project-card, .timeline-card');

    tiltElements.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const cardRect = card.getBoundingClientRect();
        const mouseX = e.clientX - cardRect.left;
        const mouseY = e.clientY - cardRect.top;
        const cardW = cardRect.width;
        const cardH = cardRect.height;

        // Dynamic specular spotlight calculation
        const xPct = (mouseX / cardW) * 100;
        const yPct = (mouseY / cardH) * 100;
        card.style.setProperty('--mouse-x', `${xPct.toFixed(1)}%`);
        card.style.setProperty('--mouse-y', `${yPct.toFixed(1)}%`);

        // Apply physical 3D tilt on devices that support hover
        if (window.matchMedia('(hover: hover)').matches) {
          const isProject = card.classList.contains('project-card');
          const isTimeline = card.classList.contains('timeline-card');
          const isTool = card.classList.contains('tool-item');
          const maxDeg = isProject ? 11 : (isTimeline ? 8 : (isTool ? 15 : 9));
          const tiltX = (((mouseY / cardH) - 0.5) * -maxDeg).toFixed(2);
          const tiltY = (((mouseX / cardW) - 0.5) * maxDeg).toFixed(2);
          const scale = isProject ? '1.025' : (isTimeline ? '1.018' : (isTool ? '1.05' : '1.02'));
          const zDepth = isProject ? '22px' : (isTimeline ? '16px' : (isTool ? '14px' : '10px'));

          card.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(${zDepth}) scale3d(${scale}, ${scale}, ${scale})`;
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.removeProperty('--mouse-x');
        card.style.removeProperty('--mouse-y');
      });
    });
  }

  // --- MARQUEE PAUSE-ON-HOVER & TOUCH HANDLER ---
  // Requested: "bisa berjalan dan saat cursor ke logo di arahkan menjadi berhenti"
  function initMarqueeHover() {
    const ribbonCard = document.getElementById('tech-ribbon-card');
    const track = document.querySelector('.ribbon-marquee-track');
    const logoItems = document.querySelectorAll('.ribbon-logo-item');
    if (!track) return;

    function pauseMarquee() {
      track.style.animationPlayState = 'paused';
    }

    function resumeMarquee() {
      track.style.animationPlayState = 'running';
    }

    if (ribbonCard) {
      ribbonCard.addEventListener('mouseenter', pauseMarquee);
      ribbonCard.addEventListener('mouseleave', resumeMarquee);
      ribbonCard.addEventListener('touchstart', pauseMarquee, { passive: true });
      ribbonCard.addEventListener('touchend', resumeMarquee, { passive: true });
    }

    // Direct listener on each individual logo item for 100% immediate responsiveness
    logoItems.forEach(item => {
      item.addEventListener('mouseenter', pauseMarquee);
      item.addEventListener('mouseleave', resumeMarquee);
      item.addEventListener('pointerenter', pauseMarquee);
      item.addEventListener('pointerleave', resumeMarquee);
    });
  }

  // --- WINDOW EVENTS ---
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('scroll', updateScrollSpy, { passive: true });

  // ==========================================================================
  //  PROJECT GALLERY SLIDESHOW
  // ==========================================================================
  function initProjectGalleries() {
    const galleries = document.querySelectorAll('.project-gallery');

    galleries.forEach(gallery => {
      const slides = gallery.querySelectorAll('.gallery-slide');
      const dots = gallery.querySelectorAll('.gallery-dot');
      const prevBtn = gallery.querySelector('.gallery-prev');
      const nextBtn = gallery.querySelector('.gallery-next');
      const counter = gallery.querySelector('.gallery-counter');
      const totalSlides = slides.length;

      if (totalSlides <= 1) return; // Skip single-image galleries

      let currentIndex = 0;
      let autoPlayInterval = null;
      const AUTO_PLAY_DELAY = 4000; // 4 seconds

      function goToSlide(index) {
        // Wrap around
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;

        // Update slides
        slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
        });

        // Update dots
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });

        // Update counter
        if (counter) {
          counter.textContent = `${index + 1} / ${totalSlides}`;
        }

        currentIndex = index;
      }

      function nextSlide() {
        goToSlide(currentIndex + 1);
      }

      function prevSlide() {
        goToSlide(currentIndex - 1);
      }

      // Auto-play
      function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(nextSlide, AUTO_PLAY_DELAY);
      }

      function stopAutoPlay() {
        if (autoPlayInterval) {
          clearInterval(autoPlayInterval);
          autoPlayInterval = null;
        }
      }

      // Navigation buttons
      if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          nextSlide();
          startAutoPlay(); // Reset timer after manual nav
        });
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          prevSlide();
          startAutoPlay();
        });
      }

      // Dot navigation
      dots.forEach((dot, i) => {
        dot.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          goToSlide(i);
          startAutoPlay();
        });
      });

      // Pause on hover, resume on leave
      gallery.addEventListener('mouseenter', stopAutoPlay);
      gallery.addEventListener('mouseleave', startAutoPlay);

      // Touch/swipe support
      let touchStartX = 0;
      let touchEndX = 0;

      gallery.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
      }, { passive: true });

      gallery.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) nextSlide();
          else prevSlide();
        }
        startAutoPlay();
      }, { passive: true });

      // Start auto-play
      startAutoPlay();
    });
  }

  // --- REACTBITS SPLASH CURSOR (WebGL Fluid Animation) ---
  // Requested: "buat untuk cursornya menjadi https://reactbits.dev/animations/splash-cursor"
  function initSplashCursor() {
    const splashCanvas = document.getElementById('splash-cursor-canvas');
    if (!splashCanvas) return;

    if (typeof window['webgl-fluid'] === 'undefined' && typeof window.WebGLFluid === 'undefined') {
      return;
    }

    const fluidInit = (window['webgl-fluid'] && window['webgl-fluid'].default) || window.WebGLFluid;

    try {
      fluidInit(splashCanvas, {
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 512,
        CAPTURE_RESOLUTION: 256,
        DENSITY_DISSIPATION: 4.8,
        VELOCITY_DISSIPATION: 2.5,
        PRESSURE: 0.2,
        PRESSURE_ITERATIONS: 15,
        CURL: 20,
        SPLAT_RADIUS: 0.12,
        SPLAT_FORCE: 3500,
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 8,
        PAUSED: false,
        BACK_COLOR: { r: 0, g: 0, b: 0 },
        TRANSPARENT: true,
        BLOOM: false,
        SUNRAYS: false
      });
    } catch (err) {
      console.warn('Splash cursor initialization warning:', err);
    }
  }

  // --- INITIALIZE ---
  preloadImages();
  resizeCanvas();
  requestAnimationFrame(tick);
  updateScrollSpy();
  initScrollReveal();
  init3DTilt();
  initMarqueeHover();
  initProjectGalleries();
  initSplashCursor();

})();

