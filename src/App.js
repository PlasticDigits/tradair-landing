import React, { useState } from 'react';
import './App.css';
import { Theme } from '@radix-ui/themes';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import ScrollAnimations from './components/ScrollAnimations';
import CyberGlow from './components/CyberGlow';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Theme 
      accentColor="violet" 
      grayColor="slate" 
      appearance="dark"
      radius="medium"
      scaling="100%"
    >
      <div className="App min-h-screen bg-cyber-black text-white overflow-x-hidden">
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        {/* Loading Screen */}
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        
        {/* Main Content - Only render after loading is complete */}
        {!isLoading && (
          <div className="main-content-wrapper">
            {/* Custom Cursor */}
            <CustomCursor />
            
            {/* Cyber Glow Background */}
            <CyberGlow />
            
            {/* Scroll Animations Handler */}
            <ScrollAnimations />
            
            {/* Main Content */}
            <Header />
            <main id="main-content">
              <Hero />
              <Features />
              <About />
              <Pricing />
            </main>
            <Footer />
          </div>
        )}
      </div>
    </Theme>
  );
}

export default App;
