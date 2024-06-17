'use server';

import { Resend } from 'resend';
import { TarotBookingReceiptEmailTemplate } from '../components/TarotBookingReceiptEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.MAIL_DOMAIN;

export async function tarotBookingReceiptEmail(
  emailAddress: string,
  clientName: string,
  enquiryType: string | undefined,
  dateOrder: string | undefined
) {
  const { data, error } = await resend.emails.send({
    from: `Laura <noreply@${domain}>`,
    to: emailAddress,
    subject: 'Thank you for your request!',
    react: TarotBookingReceiptEmailTemplate({ clientName, enquiryType, dateOrder }),
  });

  if (error) {
    return error;
  }

  console.log(data);
  return 'Email sent successfully!';
}
