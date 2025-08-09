import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Orb = ({ className, style }) => (
  <div
    className={`absolute rounded-full blur-3xl pointer-events-none ${className ?? ''}`}
    style={{
      background: 'radial-gradient(circle, rgba(138,60,255,0.35) 0%, rgba(228,94,255,0.18) 45%, rgba(0,0,0,0) 70%)',
      aspectRatio: '1 / 1',
      ...style,
    }}
  />
);

const CosmicBackground = () => {
  useEffect(() => {
    // generate twinkle stars once
    const layer = document.getElementById('twinkle-layer');
    if (!layer) return;
    const count = 48;
    const stars = [];
    for (let i = 0; i < count; i++) {
      const s = document.createElement('div');
      s.style.position = 'absolute';
      const size = Math.random() < 0.8 ? 1 : 2;
      s.style.width = `${size}px`;
      s.style.height = `${size}px`;
      s.style.borderRadius = '50%';
      s.style.background = Math.random() < 0.5 ? 'rgba(255,255,255,0.8)' : 'rgba(194,126,255,0.8)';
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 100 + '%';
      s.style.opacity = '0.08';
      layer.appendChild(s);
      stars.push(s);
    }

    // animate twinkle (per-star yoyo to avoid synchronized global pulsing)
    stars.forEach((el, i) => {
      const base = gsap.utils.random(0.12, 0.28);
      gsap.to(el, {
        opacity: base + gsap.utils.random(0.07, 0.18),
        duration: gsap.utils.random(1.2, 2.5),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.07 + Math.random() * 1.5,
      });
    });

    return () => {
      // Kill only the tweens that target these stars
      gsap.globalTimeline.getChildren().forEach((t) => {
        const targets = t.targets ? t.targets() : [];
        if (targets && targets.length && stars.includes(targets[0])) {
          t.kill();
        }
      });
      stars.forEach((el) => el.remove());
    };
  }, []);

  useEffect(() => {
    // mild parallax on orbs
    const orbs = Array.from(document.querySelectorAll('.parallax-orb'));
    if (!orbs.length) return;
    const onScroll = () => {
      const y = window.scrollY || 0;
      orbs.forEach((el, i) => {
        const strength = (i + 1) * 0.02;
        el.style.transform = `translate3d(0, ${y * strength}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-20 pointer-events-none"
      style={{
        position: 'fixed',
        background:
          'radial-gradient(ellipse at 50% 55%, var(--color-cosmic-indigo) 0%, var(--color-cyber-black) 58%, var(--color-cyber-black) 100%)',
      }}
    >
      {/* Curved grid overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ willChange: 'transform' }}
      >
        <defs>
          <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-grid-stroke)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--color-grid-stroke)" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        {/* Longitudinal lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <path
            key={`lon-${i}`}
            d={`M ${i * 9} 0 C ${i * 9} 33, ${50 + (i - 6) * 3} 66, ${i * 9} 100`}
            fill="none"
            stroke="url(#fade)"
            strokeWidth="0.2"
          />
        ))}
        {/* Latitudinal lines */}
        {Array.from({ length: 10 }).map((_, i) => (
          <path
            key={`lat-${i}`}
            d={`M 0 ${i * 10} C 33 ${i * 10 + 5}, 66 ${i * 10 - 5}, 100 ${i * 10}`}
            fill="none"
            stroke="url(#fade)"
            strokeWidth="0.2"
          />
        ))}
      </svg>

      {/* Soft vignette */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 50% 60%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35) 100%)',
      }} />

      {/* Glow orbs */}
      <Orb className="parallax-orb" style={{ width: 380, left: '-6%', bottom: '8%' }} />
      <Orb className="parallax-orb" style={{ width: 280, right: '8%', top: '12%' }} />
      <Orb className="parallax-orb" style={{ width: 220, right: '16%', bottom: '6%' }} />

      {/* Static star seeds for GSAP twinkle */}
      <div id="twinkle-layer" className="absolute inset-0" />
    </div>
  );
};

export default CosmicBackground;


