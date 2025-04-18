/**
 * Hambacompare Marketing Website
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (mobileMenuToggle && navList) {
    mobileMenuToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
      
      // Change aria-expanded attribute for accessibility
      const expanded = navList.classList.contains('active');
      mobileMenuToggle.setAttribute('aria-expanded', expanded);
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (navList && navList.classList.contains('active')) {
      if (!event.target.closest('.nav') && !event.target.closest('.mobile-menu-toggle')) {
        navList.classList.remove('active');
        if (mobileMenuToggle) {
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      // Skip if it's just "#" or empty
      if (targetId === '#' || targetId === '') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (navList && navList.classList.contains('active')) {
          navList.classList.remove('active');
          if (mobileMenuToggle) {
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
          }
        }
        
        // Scroll to the target element
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Google Analytics
  // This is a placeholder for Google Analytics integration
  // Replace with your actual Google Analytics code
  function initGoogleAnalytics() {
    // Google Analytics code would go here
    console.log('Google Analytics initialized');
  }
  
  // Initialize Google Analytics
  initGoogleAnalytics();
  
  // Track CTA clicks
  const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
  ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
      // This would be replaced with actual GA event tracking
      console.log('CTA clicked:', this.textContent.trim());
    });
  });
});