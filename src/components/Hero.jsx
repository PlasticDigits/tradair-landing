import React from 'react';
import { ArrowRight, Bot, TrendingUp, Zap } from 'lucide-react';
import { Section, Container, Flex, Grid, Box, Text, Heading, Button, Badge } from '@radix-ui/themes';
import BackgroundVideo from './BackgroundVideo';

const Hero = () => {
  return (
    <Section 
      asChild
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <section
        id="hero"
        aria-label="Hero section - Tradair AI introduction"
      >
        
        {/* Background Video */}
        <BackgroundVideo 
          src="/videos/loop-starfield-galaxy.mp4"
          opacity={0.18}
          filter="blur(0.8px) contrast(0.7) brightness(0.5)"
        />

        {/* Content */}
        <Container size="4" className="relative z-10 pt-20 pb-16">
          <Grid columns={{ initial: "1", lg: "2" }} gap="6" align="center">
            
            {/* Left Column - Text Content */}
            <Flex direction="column" align={{ initial: "center", lg: "start" }}>
              {/* Badge */}
              <Badge 
                size="2" 
                className="mb-6 bg-tradair-purple/20 border border-tradair-purple/30 text-tradair-purple backdrop-blur-sm"
              >
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Trading Revolution
              </Badge>

              {/* Main Headline */}
              <Heading 
                size="9" 
                className="font-display text-white mb-6 leading-tight text-center lg:text-left"
              >
                Where <Text className="text-glow-cyan text-neon-cyan">Artificial Intelligence</Text> meets{' '}
                <Text className="bg-purple-gradient bg-clip-text text-transparent">Intelligent Trading</Text>
              </Heading>

              {/* Subtitle */}
              <Text 
                size="5" 
                className="font-body text-medium-gray mb-8 leading-relaxed max-w-2xl text-center lg:text-left"
              >
                Get daily trading insights, smart recommendations, and automated trading capabilities 
                delivered directly through our Telegram chatbot. No more guessing – let our AI guide your crypto decisions.
              </Text>

              {/* Stats */}
              <Flex 
                gap="6" 
                mb="8" 
                justify={{ initial: "center", lg: "start" }}
                wrap="wrap"
              >
                <Box className="text-center">
                  <Text size="6" weight="bold" className="font-accent text-neon-cyan text-glow-cyan block">
                    24/7
                  </Text>
                  <Text size="2" className="font-interface text-medium-gray">
                    AI Analysis
                  </Text>
                </Box>
                <Box className="text-center">
                  <Text size="6" weight="bold" className="font-accent text-neon-pink text-glow-pink block">
                    95%+
                  </Text>
                  <Text size="2" className="font-interface text-medium-gray">
                    Accuracy Rate
                  </Text>
                </Box>
                <Box className="text-center">
                  <Text size="6" weight="bold" className="font-accent text-tradair-purple text-glow block">
                    1000+
                  </Text>
                  <Text size="2" className="font-interface text-medium-gray">
                    Early Users
                  </Text>
                </Box>
              </Flex>

              {/* CTA Buttons */}
              <Flex 
                direction={{ initial: "column", sm: "row" }} 
                gap="4" 
                justify={{ initial: "center", lg: "start" }}
              >
                <Button
                  asChild
                  size="4"
                  className="group bg-purple-gradient text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-purple-glow"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfstlZZ2b1ROmlq0C_JD_wnomy5mgaJR69Cp22OX7unbVU57g/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Private Sale
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="4"
                  className="group border-2 border-neon-cyan text-neon-cyan font-bold transition-all duration-300 hover:bg-neon-cyan hover:text-cyber-black cyberpunk-border"
                >
                  <a
                    href="https://t.me/tradair_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Bot className="mr-2 w-5 h-5" />
                    Try Trading Bot
                  </a>
                </Button>
              </Flex>

              {/* Social Proof */}
              <Box className="mt-8 pt-8 border-t border-tradair-purple/20">
                <Text size="2" className="font-interface text-medium-gray mb-4 block">
                  Join our growing community:
                </Text>
                <a
                  href="https://t.me/tradairofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-neon-cyan hover:text-white transition-colors duration-300 font-interface"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  @tradairofficial on Telegram
                </a>
              </Box>
            </Flex>

            {/* Right Column - Hero Graphic */}
            <Box className="relative lg:pl-8 reveal-right">
              <Box className="relative parallax-mouse">
                {/* Main Hero Image */}
                <img 
                  src="/images/illustrations/hero/ai-trading-hero.svg" 
                  alt="AI Trading Dashboard"
                  className="w-full max-w-lg mx-auto drop-shadow-2xl animate-float-slow"
                />
                
                {/* Floating Elements */}
                <Box className="absolute -top-4 -right-4 w-16 h-16 bg-neon-cyan/20 rounded-full blur-xl animate-pulse parallax-mouse"></Box>
                <Box className="absolute -bottom-6 -left-6 w-20 h-20 bg-neon-pink/20 rounded-full blur-xl animate-pulse parallax-mouse" style={{animationDelay: '1s'}}></Box>
                
                {/* Additional floating tech elements */}
                <Box className="absolute top-1/4 -left-8 animate-float-slow" style={{animationDelay: '2s'}}>
                  <img 
                    src="/images/graphics/tech/neural-network.svg" 
                    alt="Neural Network"
                    className="w-12 h-12 opacity-60"
                  />
                </Box>
                <Box className="absolute bottom-1/4 -right-8 animate-float-slow" style={{animationDelay: '3s'}}>
                  <img 
                    src="/images/graphics/tech/ai-chip.svg" 
                    alt="AI Chip"
                    className="w-10 h-10 opacity-60"
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Container>

        {/* Scroll Indicator */}
        <Box className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <Box className="w-1 h-12 bg-gradient-to-b from-tradair-purple to-transparent rounded-full animate-pulse"></Box>
        </Box>
      </section>
    </Section>
  );
};

export default Hero;