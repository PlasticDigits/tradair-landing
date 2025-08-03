import React, { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all elements with reveal classes
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach((el) => observer.observe(el));

    // Parallax effect for hero background
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      // Remove parallax for background videos - they should stay fixed
      // Background videos should have a particular point and not follow the user

      // Floating elements
      const floatingElements = document.querySelectorAll('.animate-float-slow');
      floatingElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${Math.sin((scrolled + index * 100) * 0.01) * 10}px)`;
      });

      // Header background opacity
      const header = document.querySelector('header');
      if (header) {
        const opacity = Math.min(scrolled / 100, 0.95);
        header.style.backgroundColor = `rgba(10, 10, 10, ${opacity})`;
      }
    };

    // Mouse move parallax effect
    const handleMouseMove = (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      // Parallax for floating elements
      const parallaxElements = document.querySelectorAll('.parallax-mouse');
      parallaxElements.forEach((element, index) => {
        const speed = 10 + (index * 5);
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        element.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    // Add scroll and mouse listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Trigger initial scroll handler
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollAnimations;