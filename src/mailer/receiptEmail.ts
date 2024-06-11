'use server';

import { Resend } from 'resend';
import { ReceiptEmail } from '../components/ReceiptEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function receiptEmail(
  emailAddress: string,
  clientName: string,
  numberPeople: string,
  diet: string,
  flavours: string | undefined,
  dateOrder: string | undefined
) {
  const { data, error } = await resend.emails.send({
    from: 'Laura <onboarding@resend.dev>',
    to: emailAddress,
    subject: 'Thank you for your order!',
    react: ReceiptEmail({ clientName, numberPeople, diet, flavours, dateOrder }),
  });

  if (error) {
    return error;
  }

  console.log(data);
  return 'Email sent successfully!';
}
