import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Flex, Container, Button, Link, Text, Box } from '@radix-ui/themes';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // JS guard to ensure hamburger only shows < lg
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#about', label: 'About' },
    { href: '#pricing', label: 'Pricing' },
    { href: 'https://x.com/trakenai', label: 'X', external: true },
    { href: 'https://t.me/tradairofficial', label: 'Telegram', external: true },
  ];

  return (
    <Box
      asChild
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cyber-black/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <header>
        <Container size="4" px="4">
          <Flex align="center" justify="between" py="4" className="h-16 lg:h-20">
            
            {/* Logo */}
            <Box className="flex-shrink-0">
              <img 
                src="/branding-images/traken-logo-horizontal-white-text-no-bg.png" 
                alt="Traken AI"
                className="h-8 lg:h-10 w-auto"
              />
            </Box>

            {/* Desktop Navigation (>= lg) */}
            <Flex 
              align="center" 
              gap="6" 
              className="hidden lg:flex"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  className="font-interface text-white hover:text-traken-violet transition-colors duration-300"
                  weight="medium"
                >
                  {link.label}
                </Link>
              ))}
            </Flex>

            {/* CTA Buttons (>= lg) */}
            <Flex 
              align="center" 
              gap="3" 
              className="hidden lg:flex"
            >
              <Button
                asChild
                size="3"
                className="bg-violet-magenta-gradient hover:scale-105 hover:shadow-traken-glow transition-all duration-300"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfstlZZ2b1ROmlq0C_JD_wnomy5mgaJR69Cp22OX7unbVU57g/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Private Sale
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="3"
                className="border-2 border-traken-violet text-traken-violet hover:bg-traken-violet hover:text-white transition-all duration-300"
              >
                <a
                  href="https://t.me/tradair_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Bot
                </a>
              </Button>
            </Flex>

            {/* Mobile menu button (< lg) */}
            {isMobile && (
              <Box className="lg:hidden">
                <Button
                  variant="ghost"
                  size="3"
                  onClick={toggleMenu}
                  className="text-white hover:text-traken-violet transition-colors duration-300"
                  aria-label="Toggle mobile menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
              </Box>
            )}
          </Flex>

          {/* Mobile Navigation */}
          {isMobile && isMenuOpen && (
            <Box className="lg:hidden absolute top-full left-0 right-0 bg-cyber-black/95 backdrop-blur-lg border-t border-traken-violet/20">
              <Flex direction="column" p="4" gap="4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    className="font-interface text-white hover:text-traken-violet transition-colors duration-300 py-2"
                    weight="medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                
                <Flex direction="column" gap="3" pt="4">
                  <Button
                    asChild
                    size="3"
                    className="bg-violet-magenta-gradient transition-all duration-300"
                  >
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfstlZZ2b1ROmlq0C_JD_wnomy5mgaJR69Cp22OX7unbVU57g/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Join Private Sale
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    variant="outline"
                    size="3"
                    className="border-2 border-traken-violet text-traken-violet transition-all duration-300"
                  >
                    <a
                      href="https://t.me/tradair_bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Try Bot
                    </a>
                  </Button>
                </Flex>
              </Flex>
            </Box>
          )}
        </Container>
      </header>
    </Box>
  );
};

export default Header;