import React from 'react';
import { Box } from '@radix-ui/themes';

const BackgroundVideo = ({ 
  src, 
  opacity = 0.15, 
  filter = 'blur(0.5px) contrast(0.8) brightness(0.6)', 
  gradientOverlay = true,
  className = '',
  ...props 
}) => {
  return (
    <Box 
      className={`background-video-container ${className}`}
      {...props}
    >
      {/* Video Element */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        style={{
          opacity,
          filter
        }}
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      {gradientOverlay && (
        <Box 
          className="absolute inset-0 bg-gradient-to-b from-cyber-black/90 via-cyber-black/70 to-cyber-black/90"
          style={{ zIndex: -9 }}
        />
      )}

      {/* Additional Filter Overlay for Better Text Contrast */}
      <Box 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(10, 10, 10, 0.3) 70%, rgba(10, 10, 10, 0.6) 100%)',
          zIndex: -8
        }}
      />
    </Box>
  );
};

export default BackgroundVideo;