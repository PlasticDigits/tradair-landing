import React from 'react';
import { Send, MessageSquare, Globe, Shield, Heart } from 'lucide-react';
import { Container, Grid, Flex, Box, Text, Heading, Button, Link } from '@radix-ui/themes';
import BackgroundVideo from './BackgroundVideo';

const Footer = () => {
  const quickLinks = [
    { href: '#features', label: 'Features' },
    { href: '#about', label: 'About' },
    { href: '#pricing', label: 'Pricing' },
    { href: 'https://docs.google.com/forms/d/e/1FAIpQLSfstlZZ2b1ROmlq0C_JD_wnomy5mgaJR69Cp22OX7unbVU57g/viewform', label: 'Private Sale', external: true }
  ];

  const resources = [
    { href: 'https://x.com/trakenai', label: 'X (Twitter)', external: true },
    { href: 'https://t.me/tradairofficial', label: 'Telegram Community', external: true },
    { href: 'https://t.me/tradair_bot', label: 'Trading Bot', external: true },
    { href: '#', label: 'Documentation' },
    { href: '#', label: 'API Reference' }
  ];

  const legal = [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Cookie Policy' },
    { href: '#', label: 'Disclaimer' }
  ];

  return (
    <Box asChild className="relative bg-cyber-black border-t border-traken-violet/20 overflow-hidden">
      <footer>
        
        {/* Background video removed for cleaner look; cosmic background handles ambiance */}

        <Container size="4" className="relative z-10">
          
          {/* Main Footer Content */}
          <Box py="8">
            <Grid columns={{ initial: "1", lg: "4" }} gap="6">
              
              {/* Brand Column */}
              <Flex direction="column" className="lg:col-span-2">
                <Box mb="6">
                  <img 
                    src="/branding-images/traken-logo-horizontal-white-text-no-bg.png" 
                    alt="Traken AI"
                    className="h-8 w-auto mb-4"
                  />
                  <Text size="3" className="font-body text-medium-gray leading-relaxed max-w-md">
                    Revolutionizing cryptocurrency trading with artificial intelligence. 
                    Get daily insights, smart recommendations, and automated trading through our Telegram chatbot.
                  </Text>
                </Box>

                {/* Newsletter Signup */}
                <Box mb="6">
                  <Heading size="4" weight="bold" className="font-interface text-white mb-4">
                    Stay Updated
                  </Heading>
                  <Flex direction={{ initial: "column", sm: "row" }} gap="3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-dark-gray/50 border border-traken-violet/30 rounded-button text-white placeholder-medium-gray focus:outline-none focus:border-traken-violet/60 backdrop-blur-sm"
                    />
                    <Button className="px-6 py-3 bg-violet-magenta-gradient text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-traken-glow">
                      <Send className="w-4 h-4" />
                    </Button>
                  </Flex>
                  <Text size="1" className="font-body text-medium-gray mt-2">
                    Get the latest updates on our AI trading platform and token launch.
                  </Text>
                </Box>

                {/* Social Links */}
                <Flex gap="4">
                  <a
                    href="https://x.com/trakenai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-neon-cyan/20 to-neon-cyan/10 border border-neon-cyan/30 rounded-lg text-neon-cyan hover:bg-neon-cyan hover:text-cyber-black transition-all duration-300"
                    aria-label="X (Twitter)"
                  >
                    <Send className="w-5 h-5" />
                  </a>
                  <a
                    href="https://t.me/tradair_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-traken-violet/20 to-traken-violet/10 border border-traken-violet/30 rounded-lg text-traken-violet hover:bg-traken-violet hover:text-white transition-all duration-300"
                    aria-label="Trading Bot"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </a>
                  <a
                    href="https://tradair.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-neon-pink/20 to-neon-pink/10 border border-neon-pink/30 rounded-lg text-neon-pink hover:bg-neon-pink hover:text-cyber-black transition-all duration-300"
                    aria-label="Website"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                </Flex>
              </Flex>

              {/* Quick Links */}
              <Flex direction="column">
                <Heading size="4" weight="bold" className="font-interface text-white mb-6">
                  Quick Links
                </Heading>
                <Flex direction="column" gap="3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                    className="font-body text-medium-gray hover:text-traken-violet transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </Flex>
              </Flex>

              {/* Resources */}
              <Flex direction="column">
                <Heading size="4" weight="bold" className="font-interface text-white mb-6">
                  Resources
                </Heading>
                <Flex direction="column" gap="3">
                  {resources.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                    className="font-body text-medium-gray hover:text-traken-violet transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </Flex>
              </Flex>
            </Grid>
          </Box>

          {/* Bottom Bar */}
          <Box className="border-t border-traken-violet/20 py-8">
            <Flex direction={{ initial: "column", lg: "row" }} align="center" justify="between" gap="6">
              
              {/* Copyright */}
              <Flex align="center" gap="4">
                <Text size="2" className="font-body text-medium-gray">
                  © 2024 Traken AI. All rights reserved.
                </Text>
                <Flex align="center" gap="1" className="text-traken-violet">
                  <Heart className="w-4 h-4" />
                  <Text size="2" className="font-body">Made with AI</Text>
                </Flex>
              </Flex>

              {/* Legal Links */}
              <Flex wrap="wrap" align="center" gap="6">
                {legal.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-body text-medium-gray hover:text-traken-violet transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </Flex>

              {/* Security Badge */}
              <Flex align="center" gap="2" className="text-neon-cyan">
                <Shield className="w-4 h-4" />
                <Text size="2" className="font-body">Audited & Secure</Text>
              </Flex>
            </Flex>
          </Box>
        </Container>

        {/* Background Glow Effects */}
        <Box className="absolute bottom-0 left-1/4 w-64 h-64 bg-traken-violet/10 rounded-full blur-3xl"></Box>
        <Box className="absolute bottom-0 right-1/4 w-48 h-48 bg-neon-cyan/10 rounded-full blur-2xl"></Box>
      </footer>
    </Box>
  );
};

export default Footer;