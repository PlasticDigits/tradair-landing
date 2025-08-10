import React from 'react';
import { Brain, MessageSquare, TrendingUp, Shield, Zap, Target } from 'lucide-react';
import { Section, Container, Flex, Grid, Box, Text, Heading, Button, Badge, Card } from '@radix-ui/themes';
import { LINKS } from '../constants/links';


const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Trading Insights",
      description: "Daily buy, sell, and hold recommendations powered by advanced machine learning models trained on years of crypto data.",
      image: "/images/brain-trading-thoughts.png",
      color: "neon-cyan"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Telegram Integration",
      description: "Seamless conversational interface through Telegram. Get insights, ask questions, and execute trades through natural language.",
      image: "/images/chatbot.png",
      color: "neon-pink"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Real-Time Analysis",
      description: "Live market analysis across multiple exchanges with sentiment analysis from social media and news sources.",
      image: "/images/trading-dash.png",
      color: "tradair-purple"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management",
      description: "Intelligent risk assessment tailored to your trading style with automated stop-loss and profit-taking strategies.",
      image: "/images/market-risks.jpg",
      color: "neon-blue"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated Trading",
      description: "Set your parameters and let our black box AI handle execution with real-time performance monitoring.",
      image: "/images/automated-trading.jpg",
      color: "neon-cyan"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Portfolio Optimization",
      description: "Advanced analytics and on-chain monitoring to optimize your portfolio performance and track wallet behavior.",
      image: "/images/robot-wormhole-travel.png",
      color: "neon-pink"
    }
  ];

  return (
    <Section 
      asChild
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      <section
        id="features"
        aria-label="Platform features and capabilities"
      >
        
        {/* Background Video - replaced by subtle cosmic background; remove noisy video */}

        <Container size="4" className="relative z-10" px="4">
          
          {/* Section Header */}
          <Flex direction="column" align="center" mb="8" className="text-center reveal">
            <Badge 
              size="2" 
              mb="6"
              className="bg-tradair-purple/20 border border-tradair-purple/30 text-tradair-purple backdrop-blur-sm"
            >
              <Zap className="w-4 h-4 mr-2" />
              Platform Features
            </Badge>
            
            <Heading 
              size="8" 
              mb="6"
              className="font-display text-white text-3xl sm:text-5xl lg:text-6xl text-center"
            >
              Revolutionizing <Text className="text-glow-cyan text-neon-cyan glow-pulse">Crypto Trading</Text> with{' '}
              <Text className="bg-purple-gradient bg-clip-text text-transparent">Artificial Intelligence</Text>
            </Heading>
            
            <Text 
              size="4" 
              className="font-body text-medium-gray max-w-3xl leading-relaxed text-base sm:text-lg"
            >
              Experience the future of cryptocurrency trading with our comprehensive AI-powered platform designed for both beginners and professional traders.
            </Text>
          </Flex>

          {/* Features Grid */}
          <Grid columns={{ initial: "1", md: "2", lg: "3" }} gap="6" mb="8">
            {features.map((feature, index) => (
              <Box 
                key={index}
                className={`group relative reveal interactive-hover ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Feature Card */}
                <Card className="relative bg-gradient-to-br from-cyber-black/80 to-dark-gray/20 backdrop-blur-sm border border-tradair-purple/20 p-6 lg:p-8 h-full transition-all duration-300 hover:border-tradair-purple/40 hover:shadow-card hover:transform hover:scale-105">
                  
                  {/* Icon */}
                  <Flex 
                    align="center" 
                    justify="center" 
                    mb="6"
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/10 border border-${feature.color}/30 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Box className={`text-${feature.color}`}>
                      {feature.icon}
                    </Box>
                  </Flex>

                  {/* Content */}
                  <Heading 
                    size="5" 
                    mb="4"
                    className="font-interface text-white group-hover:text-tradair-purple transition-colors duration-300 text-xl"
                  >
                    {feature.title}
                  </Heading>
                  
                  <Text 
                    size="3" 
                    mb="6"
                    className="font-body text-medium-gray leading-relaxed text-sm sm:text-base"
                  >
                    {feature.description}
                  </Text>

                  {/* Feature Image */}
                  <Box className="relative overflow-hidden rounded-lg bg-gradient-to-br from-tradair-purple/10 to-transparent p-4">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-32 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </Box>

                  {/* Hover Glow Effect */}
                  <Box className={`absolute inset-0 rounded-card bg-gradient-to-br from-${feature.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></Box>
                </Card>
              </Box>
            ))}
          </Grid>

          {/* Bottom CTA */}
          <Flex justify="center" mt="8">
            <Flex direction={{ initial: "column", sm: "row" }} gap="4">
              <Button
                asChild
                size="4"
                className="bg-purple-gradient text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-purple-glow"
              >
                <a
                  href={LINKS.TELEGRAM_BOT}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Start Trading with AI
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="4"
                className="border-2 border-neon-cyan text-neon-cyan font-bold transition-all duration-300 hover:bg-neon-cyan hover:text-cyber-black cyberpunk-border"
              >
                <a href={LINKS.SECTION_PRICING}>
                  View Pricing Plans
                </a>
              </Button>
            </Flex>
          </Flex>
        </Container>
      </section>
    </Section>
  );
};

export default Features;