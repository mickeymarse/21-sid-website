'use server';

import { Resend } from 'resend';
import { TarotBookingEmailTemplate } from '../components/TarotBookingEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.MAIL_DOMAIN;
const orderMail = process.env.ORDERS_MAIL;

export async function tarotBookingEmail(
  emailAddress: string,
  clientName: string,
  phoneNumber: string,
  enquiryType: string | undefined,
  dateOrder: string | undefined
) {
  const { data, error } = await resend.emails.send({
    from: `Tarot Reading Form <noreply@${domain}>`,
    to: `${orderMail}`,
    subject: `New Tarot reading request from ${clientName}`,
    react: TarotBookingEmailTemplate({
      clientName,
      phoneNumber,
      emailAddress,
      enquiryType,
      dateOrder,
    }),
  });

  if (error) {
    return error;
  }

  console.log(data);
  return 'Email sent successfully!';
}
