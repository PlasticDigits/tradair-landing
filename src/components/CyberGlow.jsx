import React, { useEffect, useRef } from 'react';

const CyberGlow = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const setCanvasSize = () => {
      // Ensure canvas covers the full page and is crisp on HiDPI
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = Math.max(window.innerHeight, document.body.scrollHeight);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Neural network nodes for AI brain effect
    const nodes = [];
    const numNodes = 15;
    
    // Initialize nodes with random positions
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        baseRadius: Math.random() * 3 + 2,
        pulsePhase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.5 ? '#8B5CF6' : '#00D4FF'
      });
    }

    // Generate smooth flowing energy waves that repeat periodically
    const drawEnergyWaves = () => {
      ctx.globalCompositeOperation = 'screen';
      // Wave repetition cycle - creates periods of waves with breaks
      const wavePhase = (time * 0.004) % (Math.PI * 4);
      const phaseOffset = Math.sin(time * 0.002) * 0.5;
      const waveIntensity = Math.max(0, Math.sin(wavePhase * 0.6 + phaseOffset)) * 0.8 + 0.2;

      if (waveIntensity > 0.12) {
        // Repeat bands every N px so waves are visible throughout the page
        const bandSpacing = Math.max(360, Math.min(520, canvas.height * 0.2));
        const numBands = Math.ceil(canvas.height / bandSpacing) + 1;
        const ampBase = Math.max(30, Math.min(120, bandSpacing * 0.18)) * waveIntensity;
        const step = 5;

        for (let b = -1; b < numBands; b++) {
          const baseY = b * bandSpacing + bandSpacing * 0.5;
          for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            const color = i === 0
              ? `rgba(138, 60, 255, ${0.10 * waveIntensity})`
              : i === 1
              ? `rgba(0, 212, 255, ${0.085 * waveIntensity})`
              : `rgba(228, 94, 255, ${0.07 * waveIntensity})`;
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.2;

            for (let x = 0; x <= canvas.width; x += step) {
              const y = baseY
                + Math.sin((x + time * 1.3) * 0.012 + i) * ampBase
                + Math.sin((x + time * 2.1) * 0.006 + i * 0.7) * (ampBase * 0.6);
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.stroke();
          }
        }
      }
    };

    // Generate neural network connections
    const drawNeuralNetwork = () => {
      ctx.globalCompositeOperation = 'screen';
      
      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;
        
        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });

      // Draw connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const opacity = (200 - distance) / 200 * 0.3;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes with pulsing glow
      nodes.forEach(node => {
        const pulseIntensity = Math.sin(time * 0.05 + node.pulsePhase) * 0.5 + 0.5;
        const radius = node.baseRadius + pulseIntensity * 2;
        
        // Create radial gradient for glow effect
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, radius * 3
        );
        
        gradient.addColorStop(0, node.color + '80');
        gradient.addColorStop(0.5, node.color + '30');
        gradient.addColorStop(1, node.color + '00');
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, radius * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw the core node
        ctx.beginPath();
        ctx.fillStyle = node.color;
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Generate elegant ambient particles
    const drawAmbientParticles = () => {
      ctx.globalCompositeOperation = 'screen';
      
      // Reduced number and much slower, more elegant movement
      for (let i = 0; i < 12; i++) {
        // Much slower drift with subtle vertical movement
        const baseX = (i / 12) * canvas.width;
        const driftX = Math.sin(time * 0.001 + i * 0.8) * 100;
        const driftY = Math.sin(time * 0.0008 + i * 0.5) * 50;
        
        const x = baseX + driftX;
        const y = canvas.height * 0.3 + (i % 3) * (canvas.height * 0.2) + driftY;
        
        // Gentle size pulsing
        const size = Math.sin(time * 0.003 + i) * 0.5 + 1.5;
        // Gentle opacity breathing
        const opacity = (Math.sin(time * 0.002 + i * 0.4) * 0.1 + 0.2) * 0.6;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 8);
        gradient.addColorStop(0, `rgba(0, 212, 255, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(x, y, size * 8, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Main animation loop
    const animate = () => {
      // Clear canvas with fade effect for smooth trailing
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(10, 10, 10, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw all effects
      drawEnergyWaves();
      drawAmbientParticles();
      drawNeuralNetwork();

      time += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -2,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
        opacity: 0.6
      }}
    />
  );
};

export default CyberGlow;