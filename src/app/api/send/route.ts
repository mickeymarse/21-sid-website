'use server';

import { Resend } from 'resend';
import { KoalaWelcomeEmail } from '../../../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function receiptEmail(emailAddress: string, clientName: string) {
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: emailAddress,
    subject: 'Hello World',
    react: KoalaWelcomeEmail({ clientName }),
  });

  if (error) {
    return error;
  }

  console.log(data);
  return 'Email sent successfully!';
}
