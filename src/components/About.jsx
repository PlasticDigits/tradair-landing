import React from 'react';
import { CheckCircle, Cpu, Shield, Users, Globe, Award } from 'lucide-react';
import { Section, Container, Grid, Flex, Box, Text, Heading, Badge, Card } from '@radix-ui/themes';


const About = () => {
  const achievements = [
    { icon: <Users className="w-6 h-6" />, label: "1000+ Early Users", color: "neon-cyan" },
    { icon: <Award className="w-6 h-6" />, label: "95%+ Accuracy Rate", color: "neon-pink" },
    { icon: <Shield className="w-6 h-6" />, label: "Audited Smart Contracts", color: "traken-purple" },
    { icon: <Globe className="w-6 h-6" />, label: "Multi-chain Support", color: "neon-blue" }
  ];

  const features = [
    "Proprietary AI system developed through years of market research",
    "Real-time market analysis across multiple exchanges",
    "Natural language processing for conversational trading",
    "Advanced risk management and portfolio optimization",
    "Institutional-grade security and compliance",
    "24/7 automated trading with human oversight"
  ];

  return (
    <Section 
      asChild
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      <section
        id="about"
        aria-label="About Traken AI company and technology"
      >
        
        {/* Background video removed for cleaner look; cosmic background provides ambience */}

        <Container size="4" className="relative z-10" px="4">
          <Grid columns={{ initial: "1", lg: "2" }} gap="9" align="center">
            
            {/* Left Column - Content */}
            <Flex direction="column" className="reveal-left">
              <Badge 
                size="2" 
                mb="6"
                className="bg-traken-purple/20 border border-traken-purple/30 text-traken-purple backdrop-blur-sm w-fit"
              >
                <Cpu className="w-4 h-4 mr-2" />
                About Traken AI
              </Badge>

              <Heading 
                size="8" 
                mb="6"
                className="font-display text-white text-3xl sm:text-5xl lg:text-6xl"
              >
                The Future of <Text className="text-glow-cyan text-neon-cyan">Cryptocurrency Trading</Text> is{' '}
                <Text className="bg-purple-gradient bg-clip-text text-transparent">Here</Text>
              </Heading>

              <Text 
                size="4" 
                mb="6"
                className="font-body text-medium-gray leading-relaxed text-base sm:text-lg"
              >
                Traken AI combines cutting-edge artificial intelligence with conversational ease through Telegram. 
                Our intelligent chatbot delivers daily market insights, smart trading recommendations, and automated 
                trading capabilities directly in your messaging app.
              </Text>

              <Text 
                size="3" 
                mb="6"
                className="font-body text-medium-gray leading-relaxed text-sm sm:text-base"
              >
                Built by a team of AI researchers, quantitative analysts, and blockchain developers, our platform 
                gives traders the edge they need in today's volatile crypto markets through data-driven insights 
                delivered via natural conversation.
              </Text>

              {/* Features List */}
              <Flex direction="column" gap="3" mb="6">
                {features.map((feature, index) => (
                  <Flex key={index} align="start" gap="3">
                    <CheckCircle className="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" />
                    <Text className="font-body text-medium-gray">{feature}</Text>
                  </Flex>
                ))}
              </Flex>

              {/* Achievements */}
              <Grid columns="2" gap="3">
                {achievements.map((achievement, index) => (
                  <Card 
                    key={index}
                    className="bg-gradient-to-br from-cyber-black/60 to-dark-gray/20 backdrop-blur-sm border border-traken-purple/20 p-4"
                  >
                    <Flex align="center" gap="3">
                      <Box className={`text-${achievement.color}`}>
                        {achievement.icon}
                      </Box>
                      <Text size="2" weight="medium" className="font-interface text-white">
                        {achievement.label}
                      </Text>
                    </Flex>
                  </Card>
                ))}
              </Grid>
            </Flex>

            {/* Right Column - Visual */}
            <Box className="relative reveal-right">
              <Box className="relative">
                {/* Main Dashboard Image */}
                <Box className="relative bg-gradient-to-br from-traken-purple/20 to-neon-cyan/10 backdrop-blur-sm border border-traken-purple/30 rounded-2xl p-8">
                  <img 
                    src="/images/market-analysis.png" 
                    alt="Traken Market Analysis"
                    className="w-full h-auto drop-shadow-2xl object-contain"
                  />
                </Box>

                {/* Floating Tech Elements */}
                <Box className="absolute -top-6 -right-6">
                  <Box className="w-24 h-24 bg-gradient-to-br from-neon-cyan/20 to-transparent backdrop-blur-sm border border-neon-cyan/30 rounded-2xl p-4 animate-float">
                  <img 
                    src="/images/traken-buysell-ai-transformer.png" 
                    alt="Traken Buy/Sell AI Transformer"
                    className="w-full h-full object-contain"
                  />
                  </Box>
                </Box>

                <Box className="absolute -bottom-8 -left-8">
                  <Box className="w-20 h-20 bg-gradient-to-br from-neon-pink/20 to-transparent backdrop-blur-sm border border-neon-pink/30 rounded-2xl p-4 animate-float" style={{animationDelay: '1s'}}>
                  </Box>
                </Box>

                {/* Background Glow Effects */}
                <Box className="absolute top-1/4 right-1/4 w-32 h-32 bg-traken-purple/20 rounded-full blur-3xl animate-pulse"></Box>
                <Box className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-neon-cyan/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></Box>
              </Box>
            </Box>
          </Grid>

          {/* Bottom Stats Section */}
          <Box mt="9">
            <Grid columns={{ initial: "1", md: "3" }} gap="6" className="text-center">
              
              <Card className="group bg-gradient-to-br from-cyber-black/80 to-dark-gray/20 backdrop-blur-sm border border-traken-purple/20 p-8 transition-all duration-300 hover:border-traken-purple/40 hover:shadow-card">
                <Text size="8" weight="bold" className="font-accent text-neon-cyan text-glow-cyan mb-2 block">
                  24/7
                </Text>
                <Text size="4" weight="bold" className="font-interface text-white mb-2 block">
                  AI Market Analysis
                </Text>
                <Text size="2" className="font-body text-medium-gray">
                  Continuous monitoring and analysis of global cryptocurrency markets
                </Text>
              </Card>

              <Card className="group bg-gradient-to-br from-cyber-black/80 to-dark-gray/20 backdrop-blur-sm border border-traken-purple/20 p-8 transition-all duration-300 hover:border-traken-purple/40 hover:shadow-card">
                <Text size="8" weight="bold" className="font-accent text-neon-pink text-glow-pink mb-2 block">
                  500M+
                </Text>
                <Text size="4" weight="bold" className="font-interface text-white mb-2 block">
                  Data Points Analyzed
                </Text>
                <Text size="2" className="font-body text-medium-gray">
                  Historical and real-time data processed by our machine learning models
                </Text>
              </Card>

              <Card className="group bg-gradient-to-br from-cyber-black/80 to-dark-gray/20 backdrop-blur-sm border border-traken-purple/20 p-8 transition-all duration-300 hover:border-traken-purple/40 hover:shadow-card">
                <Text size="8" weight="bold" className="font-accent text-traken-purple text-glow mb-2 block">
                  &lt;1s
                </Text>
                <Text size="4" weight="bold" className="font-interface text-white mb-2 block">
                  Response Time
                </Text>
                <Text size="2" className="font-body text-medium-gray">
                  Lightning-fast AI insights delivered through our Telegram interface
                </Text>
              </Card>
            </Grid>
          </Box>
        </Container>
      </section>
    </Section>
  );
};

export default About;