import React from 'react';
import { ArrowRight, Bot, TrendingUp, Zap } from 'lucide-react';
import { Section, Container, Flex, Grid, Box, Text, Heading, Button, Badge } from '@radix-ui/themes';
import { LINKS } from '../constants/links';

const Hero = () => {
  return (
    <Section 
      asChild
      className="relative min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden"
    >
      <section
        id="hero"
        aria-label="Hero section - Traken AI introduction"
        className="scroll-offset"
      >
        
        {/* Background video removed for cleaner look; relying on cosmic background */}

        {/* Content */}
        <Container size="4" className="relative z-10 pt-28 pb-20" px="4">
          <Grid columns={{ initial: "1", lg: "2" }} gap={{ initial: '8', lg: '10' }} align="center">
            
            {/* Left Column - Text Content */}
            <Flex direction="column" align={{ initial: "center", lg: "start" }}>
              {/* Badge */}
              <Badge 
                size="2" 
                className="mb-6 bg-traken-violet/20 border border-traken-violet/30 text-traken-violet backdrop-blur-sm"
              >
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Trading Revolution
              </Badge>

              {/* Main Headline */}
              <Heading 
                size="9" 
                className="font-display text-white mb-6 leading-tight text-center lg:text-left max-w-[800px] text-4xl sm:text-5xl lg:text-7xl text-balance break-words"
              >
                Where <Text className="text-glow-cyan text-neon-cyan">Artificial Intelligence</Text> meets{' '}
                <Text className="bg-purple-gradient bg-clip-text text-transparent">Intelligent Trading</Text>
              </Heading>

              {/* Subtitle */}
              <Text 
                size="5" 
                className="font-body text-medium-gray mb-8 leading-relaxed max-w-[720px] text-center lg:text-left text-base sm:text-lg"
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
                  <Text size="6" weight="bold" className="font-accent text-traken-violet text-glow block">
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
                  className="group bg-violet-magenta-gradient text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-traken-glow w-full sm:w-auto"
                >
                  <a
                    href={LINKS.PRIVATE_SALE_FORM}
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
                  className="group border-2 border-neon-cyan text-neon-cyan font-bold transition-all duration-300 hover:bg-neon-cyan hover:text-cyber-black cyberpunk-border w-full sm:w-auto"
                >
                  <a
                    href={LINKS.TELEGRAM_BOT}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Bot className="mr-2 w-5 h-5" />
                    Try Trading Bot
                  </a>
                </Button>
              </Flex>

              {/* Social Proof */}
              <Box className="mt-8 pt-8 border-t border-traken-violet/20">
                <Text size="2" className="font-interface text-medium-gray mb-4 block">
                  Join our growing community:
                </Text>
                <a
                  href={LINKS.X}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-neon-cyan hover:text-white transition-colors duration-300 font-interface"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  @trakenai on X
                </a>
              </Box>
            </Flex>

            {/* Right Column - Hero Graphic */}
            <Box className="relative lg:pl-14 reveal-right">
              <Box className="relative parallax-mouse w-full max-w-[600px] lg:max-w-[720px] mx-auto">
                {/* Main Hero Image */}
                <img 
                  src="/images/ai-trading-hero-transparency.png" 
                  alt="AI Trading Dashboard"
                  className="w-full h-auto drop-shadow-2xl animate-float-slow object-contain"
                />
                
                {/* Floating Elements */}
                <Box className="absolute -top-4 -right-4 w-16 h-16 bg-neon-cyan/20 rounded-full blur-xl animate-pulse parallax-mouse"></Box>
                <Box className="absolute -bottom-6 -left-6 w-20 h-20 bg-neon-pink/20 rounded-full blur-xl animate-pulse parallax-mouse" style={{animationDelay: '1s'}}></Box>
                
              </Box>
            </Box>
          </Grid>
        </Container>

        {/* Scroll Indicator - hidden on very small screens to avoid overlap */}
        <Box className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <Box className="w-1 h-12 bg-gradient-to-b from-traken-violet to-transparent rounded-full animate-pulse"></Box>
        </Box>
      </section>
    </Section>
  );
};

export default Hero;