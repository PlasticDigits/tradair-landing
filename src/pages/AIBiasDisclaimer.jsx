import React, { useEffect, useState } from 'react';
import { Container, Heading, Text, Box, Button } from '@radix-ui/themes';

const AIBiasDisclaimer = () => {
  const storageKey = 'agree_disclaimer_ai_bias';
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    setAgreed(localStorage.getItem(storageKey) === 'true');
  }, []);

  const handleAgree = () => {
    localStorage.setItem(storageKey, 'true');
    setAgreed(true);
  };

  return (
    <Container size="3" px="4" className="font-body">
      <Box my="6">
        <Heading size="8" weight="bold" className="font-interface mb-4">
          AI Bias Disclaimer
        </Heading>

        <Text as="p" size="3" className="text-medium-gray mb-4">
          Our platform utilizes artificial intelligence to analyze data, identify patterns, and provide insights into cryptocurrency markets and wallet behavior. While our AI is designed to be objective and data-driven, it may reflect inherent biases based on the data it processes, the training models used, and limitations in interpreting market sentiment or context.
        </Text>

        <Heading size="5" className="font-interface mb-3">Please note:</Heading>
        <Box asChild className="text-medium-gray mb-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>AI-generated insights are not always neutral or accurate. They are shaped by available information, which may be incomplete, delayed, or skewed.</li>
            <li>The AI does not have foresight or human-level reasoning — it operates based on historical patterns, statistical probability, and learned behavior.</li>
            <li>Predictions, trade suggestions, and wallet analysis are speculative and should not be relied on without independent verification or research.</li>
          </ul>
        </Box>

        <Text as="p" size="3" className="text-medium-gray mb-6">
          We recommend using AI output as a supplementary tool, not a definitive guide. Always cross-check important decisions and maintain full responsibility for your trading activity.
        </Text>
      </Box>
    </Container>
  );
};

export default AIBiasDisclaimer;


