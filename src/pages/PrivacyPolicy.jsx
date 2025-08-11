import React from 'react';
import { Container, Heading, Text, Box } from '@radix-ui/themes';

const PrivacyPolicy = () => {
  return (
    <Container size="3" px="4" className="font-body">
      <Box my="6">
        <Heading size="8" weight="bold" className="font-interface mb-4">
          Privacy Policy
        </Heading>

        <Text as="p" size="3" className="text-medium-gray mb-6">
          Traken AI ("we", "us", or "our") is committed to maintaining the accuracy, confidentiality, and security of your
          personally identifiable information ("Personal Information"). This Privacy Policy explains how we collect, use,
          disclose, and safeguard Personal Information when you use our website, applications, and related services.
          Our policy is informed by the values set by the Canadian Standards Association's Model Code for the Protection of
          Personal Information and Canada's Personal Information Protection and Electronic Documents Act (PIPEDA).
        </Text>

        <Heading size="5" className="font-interface mb-2">1. Introduction</Heading>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          We are responsible for Personal Information under our control and have designated individuals responsible for
          compliance with this Privacy Policy.
        </Text>

        <Heading size="5" className="font-interface mb-2">2. Identifying Purposes</Heading>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          We collect, use, and disclose Personal Information to provide the products and services you request and to offer
          additional products and services we believe may interest you. The purposes for which we collect Personal
          Information will be identified before or at the time of collection. In certain cases, the purposes may be clear
          and your consent implied (for example, when you provide name, address, and payment information during an order
          process).
        </Text>

        <Heading size="5" className="font-interface mb-2">3. Consent</Heading>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          Knowledge and consent are required for the collection, use, or disclosure of Personal Information except where
          required or permitted by law. Providing Personal Information is your choice; however, declining to provide certain
          information may limit our ability to deliver some products or services. We will not require you to consent to
          unrelated collection, use, or disclosure of information as a condition of service.
        </Text>

        <Heading size="5" className="font-interface mb-2">4. Limiting Collection</Heading>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          We limit the Personal Information we collect to that which is necessary for identified purposes. With your
          consent, we may collect Personal Information in person, by phone, via email, or over the Internet.
        </Text>

        <Heading size="5" className="font-interface mb-2">5. Limiting Use, Disclosure, and Retention</Heading>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          Personal Information will only be used or disclosed for the purposes for which it was collected unless you
          provide additional consent or when permitted or required by law. We retain Personal Information only as long as
          needed to fulfill those purposes or as required by law. Where necessary to operate our services, we may share
          Personal Information with service providers (such as cloud hosting, analytics, payments, or customer support
          vendors) who are contractually obligated to protect it and use it only on our behalf.
        </Text>

        <Heading size="5" className="font-interface mb-2">6. Accuracy</Heading>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          We maintain Personal Information in as accurate, complete, and up-to-date a form as is necessary for the
          purposes for which it is used.
        </Text>

        <Heading size="5" className="font-interface mb-2">7. Safeguarding Customer Information</Heading>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          We use administrative, technical, and physical safeguards appropriate to the sensitivity of the information to
          protect Personal Information against loss, theft, and unauthorized access, disclosure, copying, use, or
          modification.
        </Text>

        <Heading size="5" className="font-interface mb-2">8. Openness</Heading>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          We make information about our policies and practices relating to the management of Personal Information readily
          available to individuals.
        </Text>

        <Heading size="5" className="font-interface mb-2">9. Customer Access</Heading>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          Upon request, you will be informed of the existence, use, and disclosure of your Personal Information and given
          access to it. You may challenge the accuracy and completeness of the information and have it amended as
          appropriate. In certain cases allowed by law, we may not be able to provide access (for example, where the
          information references other individuals or cannot be disclosed for legal, security, or proprietary reasons).
        </Text>

        <Heading size="5" className="font-interface mb-2">10. Handling Customer Complaints and Suggestions</Heading>
        <Text as="p" size="3" className="text-medium-gray mb-6">
          Questions or concerns regarding our privacy practices can be directed to us at
          {' '}<a className="text-traken-violet underline" href="mailto:contact@traken.xyz">contact@traken.xyz</a>.
        </Text>

        <Heading size="5" className="font-interface mb-2">Additional Information</Heading>
        <Heading size="4" className="font-interface mb-2 mt-4">Cookies</Heading>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          A cookie is a small file that may be stored on your device when you visit our website. We may use cookies to
          improve site functionality, remember preferences, and provide a more customized experience. You can adjust your
          browser settings to refuse cookies or to notify you when cookies are sent. Disabling cookies may impact site
          functionality.
        </Text>

        <Heading size="4" className="font-interface mb-2">Other Websites</Heading>
        <Text as="p" size="3" className="text-medium-gray mb-4">
          Our website may contain links to third-party sites not governed by this Privacy Policy. We are not responsible
          for the privacy practices of those sites. We encourage you to review the privacy statements of any third-party
          sites you visit to understand how your information may be collected, used, and disclosed.
        </Text>

        <Text as="p" size="2" className="text-dim-gray mt-8">
          If you have any questions about this Privacy Policy or our data practices, please contact us at
          {' '}<a className="text-traken-violet underline" href="mailto:contact@traken.xyz">contact@traken.xyz</a>.
        </Text>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;

