'use server';

import { Resend } from 'resend';
import { CakeOrderReceiptEmailTemplate } from '../components/CakeOrderReceiptEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.MAIL_DOMAIN;

export async function cakeOrderReceiptEmail(
  emailAddress: string,
  clientName: string,
  numberPeople: string,
  diet: string,
  flavours: string | undefined,
  dateOrder: string | undefined
) {
  const { data, error } = await resend.emails.send({
    from: `Laura <noreply@${domain}>`,
    to: emailAddress,
    subject: 'Thank you for your order!',
    react: CakeOrderReceiptEmailTemplate({ clientName, numberPeople, diet, flavours, dateOrder }),
  });

  if (error) {
    return error;
  }

  console.log(data);
  return 'Email sent successfully!';
}
