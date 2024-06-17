import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface TarotBookingEmailTemplateProps {
  enquiryType: string | undefined;
  phoneNumber: string;
  clientName: string;
  emailAddress: string;
  dateOrder: string | undefined;
}

const imgLogo = process.env.LOGO_LINK;

export const TarotBookingEmailTemplate = ({
  clientName,
  enquiryType,
  phoneNumber,
  emailAddress,
  dateOrder = 'n/a',
}: TarotBookingEmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>Details of a new request for Tarot reading.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src={imgLogo} width='200' height='150' alt='21 Sid logo' style={logo} />
        <Text style={paragraph}>Hi Laura,</Text>
        <Text style={paragraph}>A new tarot reading has been requested!</Text>
        <Section style={container}>
          <Text style={paragraph}>
            Details of the order:
            <ul>
              <li>
                <strong>Customer name</strong> - {clientName}
              </li>
              <li>
                <strong>Phone number</strong> - {phoneNumber}
              </li>
              <li>
                <strong>Email address</strong> - {emailAddress}
              </li>
              <li>
                <strong>Type of enquiry</strong> - {enquiryType}
              </li>
              <li>
                <strong>Reading date</strong> - {dateOrder?.slice(0, 16)}
              </li>
            </ul>
          </Text>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The Tarot Readings Form
        </Text>
        <Hr style={hr} />
        <Text style={footer}>21 Sidworth Street London, UK E8 3SD</Text>
      </Container>
    </Body>
  </Html>
);

TarotBookingEmailTemplate.PreviewProps = {
  enquiryType: 'n/a',
  phoneNumber: 'n/a',
  clientName: 'n/a',
  emailAddress: 'n/a',
  dateOrder: 'n/a',
} as TarotBookingEmailTemplateProps;

export default TarotBookingEmailTemplate;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};
