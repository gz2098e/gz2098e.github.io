/* ==============================================================================
   GOOUTO.com — Main JavaScript
   ============================================================================== */

(function() {
  'use strict';

  // --- Product thumbnail gallery ---
  function initThumbnailGallery() {
    var thumbs = document.querySelectorAll('.product-thumbs .thumb');
    var mainImage = document.querySelector('.product-main-image img');

    if (!thumbs.length || !mainImage) return;

    thumbs.forEach(function(thumb) {
      thumb.addEventListener('click', function() {
        var src = this.getAttribute('src');
        mainImage.setAttribute('src', src);
        thumbs.forEach(function(t) { t.style.borderColor = ''; });
        this.style.borderColor = 'var(--accent)';
      });
    });
  }

  // --- FAQ accordion smooth toggle ---
  function initFAQAccordion() {
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function(item) {
      item.addEventListener('toggle', function(e) {
        if (this.open) {
          faqItems.forEach(function(other) {
            if (other !== item && other.open) other.open = false;
          });
        }
      });
    });
  }

  // --- Smooth scroll for anchor links ---
  function initSmoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href === '#') return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // --- Lazy load images with IntersectionObserver ---
  function initLazyLoad() {
    if (!('IntersectionObserver' in window)) return;

    var lazyImages = document.querySelectorAll('img[loading="lazy"]');
    var observer = new IntersectionObserver(function(entries, obs) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          var dataSrc = img.getAttribute('data-src');
          if (dataSrc) {
            img.setAttribute('src', dataSrc);
            img.removeAttribute('data-src');
          }
          obs.unobserve(img);
        }
      });
    });

    lazyImages.forEach(function(img) { observer.observe(img); });
  }

  // --- Mobile menu: close on link click ---
  function initMobileMenuClose() {
    var mobileLinks = document.querySelectorAll('.mobile-nav-panel a');
    var menu = document.querySelector('.mobile-menu');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (menu) menu.removeAttribute('open');
      });
    });
  }

  // --- Init on DOM Ready ---
  document.addEventListener('DOMContentLoaded', function() {
    initThumbnailGallery();
    initFAQAccordion();
    initSmoothScroll();
    initLazyLoad();
    initMobileMenuClose();
  });
})();
