import React from 'react';
import { Check, Zap, Crown, Building, ArrowRight, Flame } from 'lucide-react';
import BackgroundVideo from './BackgroundVideo';
import { Section, Container, Grid, Flex, Box, Text, Heading, Badge, Card, Button } from '@radix-ui/themes';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$5.99",
      period: "month",
      annualPrice: "$59.99",
      annualPeriod: "year",
      description: "Perfect for casual traders getting started with AI insights",
      icon: <Zap className="w-6 h-6" />,
      color: "neon-cyan",
      popular: false,
      features: [
        "Lite Trading Assistant",
        "3 Custom Bots",
        "5 Wallet Tracking",
        "Basic Market Analysis",
        "Email Support",
        "Mobile App Access"
      ]
    },
    {
      name: "Professional",
      price: "$199.99",
      period: "month",
      annualPrice: "$1,999.99",
      annualPeriod: "year",
      description: "Advanced AI suite for serious traders and professionals",
      icon: <Crown className="w-6 h-6" />,
      color: "tradair-purple",
      popular: true,
      features: [
        "Full AI Trading Suite",
        "25 Custom Bots",
        "Unlimited Wallet Tracking",
        "Advanced Analytics",
        "Real-time Alerts",
        "Priority Support",
        "API Access",
        "Risk Management Tools"
      ]
    },
    {
      name: "Enterprise",
      price: "$2,000",
      period: "month",
      annualPrice: "$20,000",
      annualPeriod: "year",
      description: "Complete solution for institutions and trading firms",
      icon: <Building className="w-6 h-6" />,
      color: "neon-pink",
      popular: false,
      features: [
        "Multi-Client Management",
        "White-label Platform",
        "Institutional Advisory Tools",
        "Custom Client Reports",
        "Dedicated Account Manager",
        "Custom Integrations",
        "SLA Guarantee",
        "On-premise Deployment"
      ]
    }
  ];

  const tokenBenefits = [
    {
      icon: <Check className="w-5 h-5" />,
      title: "20% Discount",
      description: "Pay with $TRADAIR tokens and save 20% on all subscription plans"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Exclusive Access",
      description: "Early access to new AI tools and features before public release"
    },
    {
      icon: <Crown className="w-5 h-5" />,
      title: "DAO Voting",
      description: "Participate in platform governance and feature decision making"
    },
    {
      icon: <Flame className="w-5 h-5" />,
      title: "Revenue Share",
      description: "Private sale participants receive percentage of platform revenue"
    }
  ];

  return (
    <Section 
      asChild
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      <section
        id="pricing"
        aria-label="Pricing plans and token benefits"
      >
        
        {/* Background video removed for cleaner look */}

        <Container size="4" className="relative z-10">
          
          {/* Section Header */}
          <Flex direction="column" align="center" mb="8" className="text-center">
            <Badge 
              size="2" 
              mb="6"
              className="bg-tradair-purple/20 border border-tradair-purple/30 text-tradair-purple backdrop-blur-sm"
            >
              <Crown className="w-4 h-4 mr-2" />
              Pricing & Token Utility
            </Badge>
            
            <Heading 
              size="8" 
              mb="6"
              className="font-display text-white"
            >
              Choose Your <Text className="text-glow-cyan text-neon-cyan">Trading</Text>{' '}
              <Text className="bg-purple-gradient bg-clip-text text-transparent">Advantage</Text>
            </Heading>
            
            <Text 
              size="4" 
              className="font-body text-medium-gray max-w-3xl leading-relaxed"
            >
              Start with our basic plan or unlock the full power of AI trading with professional and enterprise solutions.
            </Text>
          </Flex>

          {/* Pricing Cards */}
          <Grid columns={{ initial: "1", lg: "3" }} gap="6" mb="8">
            {plans.map((plan, index) => (
              <Box 
                key={index}
                className={`relative group reveal interactive-hover ${plan.popular ? 'transform scale-105' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <Box className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-purple-gradient text-white px-4 py-2 font-bold shadow-lg">
                      Most Popular
                    </Badge>
                  </Box>
                )}

                {/* Pricing Card */}
                <Card className={`relative bg-gradient-to-br from-cyber-black/80 to-dark-gray/20 backdrop-blur-sm border p-8 h-full transition-all duration-300 hover:shadow-card ${
                  plan.popular 
                    ? 'border-tradair-purple/60 shadow-purple-glow' 
                    : 'border-tradair-purple/20 hover:border-tradair-purple/40'
                }`}>
                  
                  {/* Header */}
                  <Flex direction="column" align="center" mb="6">
                    <Flex 
                      align="center" 
                      justify="center" 
                      mb="4"
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${plan.color}/20 to-${plan.color}/10 border border-${plan.color}/30`}
                    >
                      <Box className={`text-${plan.color}`}>
                        {plan.icon}
                      </Box>
                    </Flex>
                    
                    <Heading size="5" className="font-interface text-white mb-2">
                      {plan.name}
                    </Heading>
                    
                    <Text size="2" className="font-body text-medium-gray mb-4 text-center">
                      {plan.description}
                    </Text>
                    
                    <Flex direction="column" gap="2" align="center">
                      <Text size="7" weight="bold" className="font-display text-white">
                        {plan.price}
                        <Text size="4" className="font-body text-medium-gray">/{plan.period}</Text>
                      </Text>
                      <Text size="2" className="font-body text-neon-cyan">
                        or {plan.annualPrice}/{plan.annualPeriod} (save 17%)
                      </Text>
                    </Flex>
                  </Flex>

                  {/* Features */}
                  <Flex direction="column" gap="3" mb="6">
                    {plan.features.map((feature, featureIndex) => (
                      <Flex key={featureIndex} align="start" gap="3">
                        <Check className={`w-5 h-5 text-${plan.color} mt-0.5 flex-shrink-0`} />
                        <Text size="2" className="font-body text-medium-gray">{feature}</Text>
                      </Flex>
                    ))}
                  </Flex>

                  {/* CTA Button */}
                  <Box className="mt-auto">
                    <Button
                      asChild
                      size="3"
                      className={`group w-full font-bold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-purple-gradient text-white hover:scale-105 hover:shadow-purple-glow'
                          : `bg-transparent border-2 border-${plan.color} text-${plan.color} hover:bg-${plan.color} hover:text-cyber-black`
                      }`}
                    >
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfstlZZ2b1ROmlq0C_JD_wnomy5mgaJR69Cp22OX7unbVU57g/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </Button>
                  </Box>
                </Card>
              </Box>
            ))}
          </Grid>

          {/* Token Benefits Section */}
          <Card className="bg-gradient-to-br from-tradair-purple/10 to-neon-cyan/5 backdrop-blur-sm border border-tradair-purple/30 p-8 lg:p-12">
            <Flex direction="column" align="center" mb="8">
              <Badge 
                size="2" 
                mb="6"
                className="bg-tradair-purple/20 border border-tradair-purple/30 text-tradair-purple backdrop-blur-sm"
              >
                <Flame className="w-4 h-4 mr-2" />
                $TRADAIR Token Benefits
              </Badge>
              
              <Heading 
                size="7" 
                mb="4"
                className="font-display text-white text-center"
              >
                Exclusive Benefits for <Text className="text-glow-pink text-neon-pink">Token Holders</Text>
              </Heading>
              
              <Text 
                size="3" 
                className="font-body text-medium-gray max-w-2xl text-center"
              >
                Hold $TRADAIR tokens to unlock exclusive features, discounts, and revenue sharing opportunities.
              </Text>
            </Flex>

            {/* Benefits Grid */}
            <Grid columns={{ initial: "1", md: "2", lg: "4" }} gap="6" mb="6">
              {tokenBenefits.map((benefit, index) => (
                <Flex key={index} direction="column" align="center" className="text-center group">
                  <Flex 
                    align="center" 
                    justify="center" 
                    mb="4"
                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-tradair-purple/20 to-neon-cyan/10 border border-tradair-purple/30 group-hover:scale-110 transition-transform duration-300"
                  >
                    <Box className="text-tradair-purple">
                      {benefit.icon}
                    </Box>
                  </Flex>
                  <Heading size="4" weight="bold" className="font-interface text-white mb-2">
                    {benefit.title}
                  </Heading>
                  <Text size="2" className="font-body text-medium-gray">
                    {benefit.description}
                  </Text>
                </Flex>
              ))}
            </Grid>

            {/* Token CTA */}
            <Flex justify="center">
              <Button
                asChild
                size="4"
                className="bg-gradient-to-r from-tradair-purple to-neon-pink text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-purple-glow"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfstlZZ2b1ROmlq0C_JD_wnomy5mgaJR69Cp22OX7unbVU57g/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Flame className="mr-2 w-5 h-5" />
                  Join Private Sale & Get Revenue Share
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </Flex>
          </Card>
        </Container>
      </section>
    </Section>
  );
};

export default Pricing;