import React, { useState, useEffect } from 'react';
import { Container, Heading, Text, Box, Button, Separator } from '@radix-ui/themes';

const Disclaimer = () => {
  const storageKey = 'agree_disclaimer_general';
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
          Disclaimer
        </Heading>

        <Heading size="5" className="font-interface mb-3">Important Notice: Please Read Carefully</Heading>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          Trading and investing in cryptocurrencies, tokens, or digital assets carries a high level of risk and may not be suitable for all investors. Prices of cryptocurrencies are extremely volatile and can fluctuate widely in a short amount of time due to factors such as market sentiment, regulatory news, global events, and technological developments. As a user, you are solely responsible for your own investment decisions, and you should carefully consider your financial situation, risk tolerance, and investment objectives before participating in any form of trading.
        </Text>

        <Text as="p" size="3" className="text-medium-gray mb-4">
          TRADAIR AI is a tool designed to assist users by providing AI-generated trading insights, market analytics, wallet activity monitoring, and pattern recognition. Our services are intended to be informational and educational only. We do not provide personalized financial, investment, tax, or legal advice, nor do we offer or promote any specific investment strategy.
        </Text>

        <Text as="p" size="3" className="text-medium-gray mb-4">
          While our platform utilizes artificial intelligence to identify potential trends and opportunities based on historical data and current blockchain activity, no AI system is infallible or capable of guaranteeing future outcomes. Our models and algorithms are based on patterns and data inputs, which may be incomplete, inaccurate, or subject to unexpected change. We do not guarantee the accuracy, timeliness, completeness, or usefulness of any AI-generated information.
        </Text>

        <Text as="p" size="3" className="text-medium-gray mb-3">
          By using TRADAIR AI, you acknowledge and agree that:
        </Text>
        <Box asChild className="text-medium-gray mb-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>All trading decisions are made at your own risk.</li>
            <li>You should only invest what you can afford to lose without affecting your standard of living.</li>
            <li>You understand that past performance is not a reliable indicator of future performance.</li>
            <li>
              TRADAIR AI, its developers, partners, affiliates, and contributors are not liable for any direct or indirect losses, including but not limited to financial loss, missed opportunities, or emotional stress resulting from your use of the platform.
            </li>
            <li>
              You are responsible for complying with all local, state, national, or international laws regarding cryptocurrency use, trading, taxation, and data privacy.
            </li>
            <li>
              Use of this app does not create a client, fiduciary, or advisory relationship between you and TRADAIR AI or any associated entity.
            </li>
          </ul>
        </Box>

        <Text as="p" size="3" className="text-medium-gray mb-4">
          Additionally, while we may monitor and analyze wallet behavior, on-chain data, token movements, and market sentiment, such insights are inherently limited in scope and do not constitute trading signals or guarantees. We are not responsible for interpreting such data for your specific situation.
        </Text>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          Third-party integrations and data sources (including blockchain explorers, exchanges, and APIs) may experience outages, delays, or inaccuracies. TRADAIR AI is not responsible for errors or losses that result from reliance on such external information.
        </Text>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          We recommend that you consult with a licensed financial advisor or investment professional before making any decisions based on information obtained from this app. The cryptocurrency market is speculative and unregulated in many jurisdictions; participation may expose you to increased risk of fraud, volatility, and legal uncertainty.
        </Text>
        <Text as="p" size="3" className="text-medium-gray mb-6">
          By accessing or using the TRADAIR AI platform, you acknowledge that you have read, understood, and agreed to this disclaimer in full. Use at your own discretion and risk.
        </Text>

        <Separator my="5" />
      </Box>
    </Container>
  );
};

export default Disclaimer;


