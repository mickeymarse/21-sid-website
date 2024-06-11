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

interface ReceiptEmailProps {
  numberPeople: string;
  diet: string;
  flavours: string | undefined;
  //   phoneNumber: string;
  clientName: string;
  //   emailAddress: string;
  dateOrder: string | undefined;
}

const imgLogo = process.env.LOGO_LINK;

export const ReceiptEmail = ({
  clientName,
  numberPeople,
  diet,
  flavours,
  dateOrder = 'n/a',
}: ReceiptEmailProps) => (
  <Html>
    <Head />
    <Preview>The sales intelligence platform that helps you uncover qualified leads.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src={imgLogo} width='190' height='150' alt='21 Sid logo' style={logo} />
        <Text style={paragraph}>Hi {clientName},</Text>
        <Text style={paragraph}>Your order has been received!</Text>
        <Section style={container}>
          <Text style={paragraph}>
            Recap of your order:
            <ul>
              <li>
                <strong>Number of people</strong> - {numberPeople}
              </li>
              <li>
                <strong>Dietary requirements</strong> - {diet}
              </li>
              <li>
                <strong>Flavour preferences</strong> - {flavours}
              </li>
              <li>
                <strong>Collection date</strong> - {dateOrder?.slice(0, 16)}
              </li>
            </ul>
          </Text>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          21 Sid
        </Text>
        <Hr style={hr} />
        <Text style={footer}>21 Sidworth Street London, UK E8 3SD</Text>
      </Container>
    </Body>
  </Html>
);

ReceiptEmail.PreviewProps = {
  numberPeople: 'n/a',
  diet: 'n/a',
  flavours: 'n/a',
  //   phoneNumber: 'n/a',
  clientName: 'n/a',
  // emailAddress: 'n/a',
  dateOrder: 'n/a',
} as ReceiptEmailProps;

export default ReceiptEmail;

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
