import React from 'react';
import { Section, Container, Flex, Box, Heading, Text, Grid, Card } from '@radix-ui/themes';

const PhaseCard = ({ phase, title, period, points = [] }) => {
  return (
    <Card className="relative bg-gradient-to-br from-cyber-black/80 to-dark-gray/20 backdrop-blur-sm border border-traken-violet/30 p-8 rounded-2xl overflow-hidden">
      <Box className="absolute -top-10 -right-10 w-56 h-56 bg-traken-violet/10 rounded-full blur-3xl" />
      <Text size="2" className="uppercase tracking-widest text-medium-gray">{phase}</Text>
      <Heading size="8" className="font-display text-white mt-2">{title}</Heading>
      <Text size="3" className="text-traken-violet mt-1">{period}</Text>
      <Flex direction="column" gap="3" className="mt-6">
        {points.map((p) => (
          <Text key={p} className="font-body text-white/80">• {p}</Text>
        ))}
      </Flex>
    </Card>
  );
};

const Roadmap = () => {
  return (
    <Section asChild className="relative py-20 scroll-offset">
      <section id="roadmap" aria-label="Product roadmap">
        <Container size="4">
          <Flex direction="column" align="center" className="mb-12">
            <Heading size="9" className="font-display text-white text-center">
              Traken AI Roadmap
            </Heading>
            <Text size="5" className="font-interface text-medium-gray mt-3 text-center">
              Phase 01 — Foundation & Launch (Months 0–3)
            </Text>
          </Flex>
          <Grid columns={{ initial: '1', md: '2' }} gap="6">
            <PhaseCard
              phase="Phase 01"
              title="Foundation & Launch"
              period="Months 0–3"
              points={[
                'Core AI model integration and testing',
                'Telegram bot early access',
                'Landing site and brand rollout',
                'Initial user feedback and iteration'
              ]}
            />
          </Grid>
        </Container>
      </section>
    </Section>
  );
};

export default Roadmap;


