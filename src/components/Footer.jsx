import React from 'react';
import { Send, MessageSquare, Globe, Shield, Heart } from 'lucide-react';
import { Container, Grid, Flex, Box, Text, Heading, Button, Link } from '@radix-ui/themes';
import { LINKS } from '../constants/links';

const Footer = () => {
  const quickLinks = [
    { href: LINKS.SECTION_FEATURES, label: 'Features' },
    { href: LINKS.SECTION_ABOUT, label: 'About' },
    { href: LINKS.SECTION_PRICING, label: 'Pricing' },
    { href: LINKS.PRIVATE_SALE_FORM, label: 'Private Sale', external: true }
  ];

  const resources = [
    { href: LINKS.X, label: 'X (Twitter)', external: true },
    { href: LINKS.TELEGRAM_COMMUNITY, label: 'Telegram Community', external: true },
    { href: LINKS.TELEGRAM_BOT, label: 'Trading Bot', external: true }
  ];

  const legal = [
    { href: LINKS.PRIVACY, label: 'Privacy Policy' },
    { href: LINKS.TERMS, label: 'Terms of Service' },
    { href: LINKS.COOKIES, label: 'Cookie Policy' },
    { href: LINKS.DISCLAIMER, label: 'Disclaimer' },
    { href: LINKS.AI_BIAS, label: 'AI Bias Disclaimer' }
  ];

  return (
    <Box asChild className="relative bg-cyber-black border-t border-traken-violet/20 overflow-hidden">
      <footer>
        
        {/* Background video removed for cleaner look; cosmic background handles ambiance */}

        <Container size="4" className="relative z-10" px="4" style={{
          paddingBottom:'2em'
        }}>
          
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
                  <Text size="3" className="font-body text-medium-gray leading-relaxed max-w-md text-base sm:text-lg">
                    Revolutionizing cryptocurrency trading with artificial intelligence. 
                    Get daily insights, smart recommendations, and automated trading through our Telegram chatbot.
                  </Text>
                </Box>

                {/* Social Links */}
                <Flex gap="4">
                  <a
                    href={LINKS.X}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-neon-cyan/20 to-neon-cyan/10 border border-neon-cyan/30 rounded-lg text-neon-cyan hover:bg-neon-cyan hover:text-cyber-black transition-all duration-300"
                    aria-label="X (Twitter)"
                  >
                    <Send className="w-5 h-5" />
                  </a>
                  <a
                    href={LINKS.TELEGRAM_BOT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-traken-violet/20 to-traken-violet/10 border border-traken-violet/30 rounded-lg text-traken-violet hover:bg-traken-violet hover:text-white transition-all duration-300"
                    aria-label="Trading Bot"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </a>
                  <a
                    href={LINKS.WEBSITE}
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
          <Box className="border-t border-traken-violet/20 py-8 mb-10">
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
              <Flex align="center" gap="2" className="text-neon-cyan mb-10">
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