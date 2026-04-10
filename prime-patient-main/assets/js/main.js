/**
 * Prime Patient Main Theme - Main JavaScript
 * 
 * @package prime-patient-main
 */

(function() {
  'use strict';

  /**
   * Scroll Reveal Animation
   */
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.prime-patient-main-reveal');
    
    if (!revealElements.length) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(element => {
      observer.observe(element);
    });
  }

  /**
   * FAQ Accordion
   */
  function initFAQ() {
    const faqItems = document.querySelectorAll('.prime-faq-item');
    
    if (!faqItems.length) return;

    faqItems.forEach(item => {
      const toggle = item.querySelector('.prime-faq-toggle');
      const content = item.querySelector('.prime-faq-content');
      const icon = item.querySelector('.prime-faq-icon');
      
      if (!toggle || !content) return;

      toggle.addEventListener('click', () => {
        const isOpen = !content.classList.contains('hidden');
        
        // Close all other FAQs
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            const otherContent = otherItem.querySelector('.prime-faq-content');
            const otherIcon = otherItem.querySelector('.prime-faq-icon');
            if (otherContent) otherContent.classList.add('hidden');
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
          }
        });
        
        // Toggle current FAQ
        if (isOpen) {
          content.classList.add('hidden');
          if (icon) icon.style.transform = 'rotate(0deg)';
        } else {
          content.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    });
  }

  /**
   * Smooth Scroll for Anchor Links
   */
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        if (href === '#' || href === '#!') return;
        
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  /**
   * CTA Button Interactions
   */
  function initCTAButtons() {
    const ctaButtons = document.querySelectorAll('.cta-button, .cta-button-outline');
    
    ctaButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        // Add your CTA action here
        // For example, open a contact form modal or redirect to a contact page
        console.log('CTA button clicked');
        
        // Example: You could add a custom event or redirect
        // window.location.href = '/contact';
        // or trigger a modal, etc.
      });
    });
  }

  /**
   * Parallax Effect (Simple CSS-based)
   * Already handled by CSS, but we can add scroll-based enhancements if needed
   */
  function initParallax() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Add any scroll-based parallax effects here if needed
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  /**
   * Initialize all functions when DOM is ready
   */
  function init() {
    initScrollReveal();
    initFAQ();
    initSmoothScroll();
    initCTAButtons();
    initParallax();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
