import React from 'react';
import { Section, Container, Flex, Box, Heading, Text, Grid, Card } from '@radix-ui/themes';

const PhaseCard = ({ phase, title, period, points = [], image }) => {
  return (
    <Card className="relative bg-gradient-to-br from-cyber-black/80 to-dark-gray/20 backdrop-blur-sm border border-traken-violet/30 p-6 sm:p-8 rounded-2xl overflow-hidden">
      <Box className="absolute -top-10 -right-10 w-56 h-56 bg-traken-violet/10 rounded-full blur-3xl" />
      <img src={image} alt={title} className="mx-auto w-40 h-40 sm:w-48 sm:h-48 object-contain rounded-lg mb-6" />
      <Text size="2" className="uppercase tracking-widest text-medium-gray">{phase}</Text>
      <Heading size="8" className="font-display text-white mt-2 text-2xl sm:text-4xl">{title}</Heading>
      <Text size="3" className="text-traken-violet mt-1 text-sm sm:text-base">{period}</Text>
      <Flex direction="column" gap="3" className="mt-6">
        {points.map((p) => (
          <Text key={p} className="font-body text-white/80 text-sm sm:text-base">• {p}</Text>
        ))}
      </Flex>
    </Card>
  );
};

const Roadmap = () => {
  return (
    <Section asChild className="relative py-20 scroll-offset">
      <section id="roadmap" aria-label="Product roadmap">
        <Container size="4" px="4">
          <Flex direction="column" align="center" className="mb-12">
            <Heading size="9" className="font-display text-white text-center text-3xl sm:text-5xl lg:text-6xl">
              Traken AI Roadmap
            </Heading>
            <Text size="5" className="font-interface text-medium-gray mt-3 text-center text-base sm:text-lg">
              Phase 01–02: Foundation, Launch, and Expansion
            </Text>
          </Flex>
          <Grid columns={{ initial: '1', md: '2' }} gap="6">
            <PhaseCard
              phase="Phase 01"
              title="Foundation & Launch"
              period="Months 0–3"
              image="/images/ai-chip-brain.png"
              points={[
                'Official website launch; whitepaper and roadmap published',
                'Token utility; transparent tokenomics and vesting',
                'Public sale (Pinksale offering)',
                'Payment support: BNB, ETH, USDT, USDC, and $TRAKEN',
                'Multi-platform marketing: YouTube, TikTok, X, IG Shorts, Telegram AMAs',
                'Referral system launch: earn $TRAKEN for invites',
                'Telegram bot: price, wallet, staking, and referral tracking',
                'Partnerships with projects, media, and launchpads',
                'Security: smart-contract audits and liquidity lock (Team.Finance/Unicrypt)',
                '“Piece of the Pie” staking: earn from platform revenue'
              ]}
            />
            <PhaseCard
              phase="Phase 02"
              title="Expansion & Utility"
              period="Months 4–6"
              image="/images/robot-thumbsup.png"
              points={[
                'Traken AI app (beta): insights, wallet monitoring, AI alerts, dashboard',
                'iOS and Google Play availability; subscribe in-app or with $TRAKEN',
                'Multichain integration (e.g., Solana, Ethereum) for cross-chain utility',
                'DAO governance: holder voting on features and staking terms',
                'Community proposals for tools, chains, and allocations'
              ]}
            />
          </Grid>
        </Container>
      </section>
    </Section>
  );
};

export default Roadmap;


