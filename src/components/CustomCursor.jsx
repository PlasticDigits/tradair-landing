import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  // All hooks must be called before any early returns
  const [isDesktop, setIsDesktop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const trailRef = useRef([]);
  const trailElements = useRef([]);
  
  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    // Only add event listeners if on desktop
    if (!isDesktop) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add new trail position
      trailRef.current.push({ x: e.clientX, y: e.clientY, id: Date.now() });
      
      // Keep only last 10 trail positions
      if (trailRef.current.length > 10) {
        trailRef.current.shift();
      }
    };

    const handleMouseEnter = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.onclick) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Mouse move listener
    window.addEventListener('mousemove', updateMousePosition);

    // Hover detection
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [isDesktop]);

  // Update trail elements
  useEffect(() => {
    if (!isDesktop) return;

    trailElements.current.forEach((element, index) => {
      if (element && trailRef.current[index]) {
        const position = trailRef.current[index];
        const opacity = (index + 1) / trailRef.current.length * 0.6;
        
        element.style.left = `${position.x - 2}px`;
        element.style.top = `${position.y - 2}px`;
        element.style.opacity = opacity;
      }
    });
  }, [mousePosition, isDesktop]);

  // Only render on desktop devices
  if (!isDesktop) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${mousePosition.x - 10}px`,
          top: `${mousePosition.y - 10}px`,
        }}
      />
      
      {/* Trail elements */}
      {Array.from({ length: 10 }, (_, index) => (
        <div
          key={index}
          ref={(el) => (trailElements.current[index] = el)}
          className="custom-cursor-trail"
          style={{
            animationDelay: `${index * 0.05}s`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;