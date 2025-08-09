import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  // All hooks must be called before any early returns
  const [isDesktop, setIsDesktop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const trailRef = useRef([]);
  const trailElements = useRef([]);
  const rafId = useRef(null);
  
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
      if (trailRef.current.length === 0) {
        // seed positions on first move to avoid stuck dots
        trailRef.current = Array.from({ length: 12 }, () => ({ x: e.clientX, y: e.clientY }));
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

  // Animate trail using RAF + lerp for smooth tail
  useEffect(() => {
    if (!isDesktop) return;
    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      // decay target follows mouse
      const speed = 0.25;
      if (trailRef.current.length === 0) {
        trailRef.current = Array.from({ length: 12 }, () => ({ x: mousePosition.x, y: mousePosition.y }));
      }

      // first element chases mouse, others chase the previous element
      const points = trailRef.current;
      if (points.length) {
        points[0].x = lerp(points[0].x, mousePosition.x, speed);
        points[0].y = lerp(points[0].y, mousePosition.y, speed);
        for (let i = 1; i < points.length; i++) {
          points[i].x = lerp(points[i].x, points[i - 1].x, 0.35);
          points[i].y = lerp(points[i].y, points[i - 1].y, 0.35);
        }
      }

      // paint
      trailElements.current.forEach((el, i) => {
        if (!el || !points[i]) return;
        const p = points[i];
        const opacity = Math.max(0, 0.7 - i * 0.06);
        const scale = Math.max(0.4, 1 - i * 0.04);
        el.style.transform = `translate(${p.x - 2}px, ${p.y - 2}px) scale(${scale})`;
        el.style.opacity = String(opacity);
      });

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isDesktop, mousePosition.x, mousePosition.y]);

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
      {Array.from({ length: 12 }, (_, index) => (
        <div
          key={index}
          ref={(el) => (trailElements.current[index] = el)}
          className="custom-cursor-trail"
          style={{}}
        />
      ))}
    </>
  );
};

export default CustomCursor;