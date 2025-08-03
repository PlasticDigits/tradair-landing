import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing AI Systems...');
  const [isVisible, setIsVisible] = useState(true);

  const loadingMessages = [
    'Initializing AI Systems...',
    'Loading Neural Networks...',
    'Connecting to Trading Servers...',
    'Analyzing Market Data...',
    'Optimizing Performance...',
    'Ready to Trade!'
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          
          // Start fade out transition and complete loading together
          setTimeout(() => {
            setIsVisible(false);
            // Complete loading immediately when fade starts
            onLoadingComplete?.();
          }, 800);
          
          return 100;
        }
        
        const newProgress = prev + Math.random() * 15 + 5;
        
        // Update loading text based on progress
        const messageIndex = Math.floor((newProgress / 100) * loadingMessages.length);
        if (messageIndex < loadingMessages.length) {
          setLoadingText(loadingMessages[messageIndex]);
        }
        
        return Math.min(newProgress, 100);
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`loading-screen ${!isVisible ? 'hidden' : ''}`}
      role="dialog"
      aria-label="Loading Tradair AI application"
      aria-live="polite"
    >
      {/* Matrix background effect */}
      <div className="matrix-bg">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="matrix-column"
            style={{
              left: `${(i * 5)}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {Array.from({ length: 20 }, (_, j) => (
              <div key={j} style={{ display: 'block' }}>
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Logo */}
      <img 
        src="/branding-images/tradair-logo-horizontal-white-text-no-bg.png" 
        alt="Tradair AI"
        className="loading-logo"
      />

      {/* Progress bar */}
      <div className="loading-progress">
        <div 
          className="loading-bar"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading text */}
      <div className="loading-text" aria-live="polite">
        {loadingText}
      </div>
      
      {/* Screen reader progress announcement */}
      <div className="sr-only" aria-live="polite">
        Loading progress: {Math.round(progress)}% complete
      </div>

      {/* Additional effects */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-tradair-purple rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;