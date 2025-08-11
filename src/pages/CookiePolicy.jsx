import React from 'react';
import { Container, Heading, Text, Box } from '@radix-ui/themes';

const CookiePolicy = () => {
  return (
    <Container size="3" px="4" className="font-body">
      <Box my="6">
        <Heading size="8" weight="bold" className="font-interface mb-4">
          Cookie Policy
        </Heading>

        <Text as="p" size="3" className="text-medium-gray mb-6">
          Last updated: October 2024
        </Text>

        <Heading size="5" className="font-interface mb-2">Do we use cookies?</Heading>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          We do not currently set or use cookies on this website. We also do not load third‑party analytics, advertising,
          or social pixels that would place tracking cookies in your browser.
        </Text>

        <Heading size="5" className="font-interface mb-2">Local storage used instead of cookies</Heading>
        <Text as="p" size="3" className="text-medium-gray mb-2">
          To remember that you have acknowledged important notices, we use your browser's localStorage. This data stays on
          your device and is not sent to our servers.
        </Text>
        <Box asChild className="text-medium-gray mb-4">
          <ul className="list-disc pl-6 space-y-1">
            <li><code>agree_disclaimer_general</code>: remembers that you acknowledged the general disclaimer.</li>
            <li><code>agree_disclaimer_ai_bias</code>: remembers that you acknowledged the AI bias disclaimer.</li>
          </ul>
        </Box>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          These values are simple booleans ("true") and do not contain personal information.
        </Text>

        <Heading size="5" className="font-interface mb-2">Third‑party cookies</Heading>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          Our pages do not embed third‑party scripts that set cookies. If you follow links to external sites
          (for example, X/Twitter or Telegram), those services may set their own cookies in accordance with their
          respective policies.
        </Text>

        <Heading size="5" className="font-interface mb-2">How to manage or clear local data</Heading>
        <Text as="p" size="3" className="text-medium-gray mb-2">
          You can manage cookies and site data from your browser settings. Since we do not set cookies, you typically only
          need to clear this site's storage to remove the acknowledgements:
        </Text>
        <Box asChild className="text-medium-gray mb-4">
          <ul className="list-disc pl-6 space-y-1">
            <li>Clear site data for <code>traken.xyz</code> (cookies and local storage) in your browser settings; or</li>
            <li>Use your browser's developer tools to remove the keys listed above under Application/Storage.</li>
          </ul>
        </Box>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          After clearing, you may be asked to acknowledge the disclaimers again the next time you visit.
        </Text>

        <Heading size="5" className="font-interface mb-2">Changes to this policy</Heading>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          If we introduce cookies or third‑party analytics in the future, we will update this page and, where required,
          request your consent.
        </Text>

        <Heading size="5" className="font-interface mb-2">Contact</Heading>
        <Text as="p" size="3" className="text-medium-gray">
          Questions about this policy? Contact us at <a className="text-traken-violet underline" href="mailto:contact@traken.xyz">contact@traken.xyz</a>.
        </Text>
      </Box>
    </Container>
  );
};

export default CookiePolicy;


