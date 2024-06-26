'use server';

import { Resend } from 'resend';
import { CakeOrderEmailTemplate } from '../components/CakeOrderEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.MAIL_DOMAIN;
const orderMail = process.env.ORDERS_MAIL;

export async function cakeOrderEmail(
  emailAddress: string,
  clientName: string,
  phoneNumber: string,
  numberPeople: string,
  diet: string,
  flavours: string | undefined,
  dateOrder: string | undefined
) {
  const { data, error } = await resend.emails.send({
    from: `Bespoke Cakes Form <noreply@${domain}>`,
    to: `${orderMail}`,
    subject: `New cake order from ${clientName}`,
    react: CakeOrderEmailTemplate({
      clientName,
      numberPeople,
      phoneNumber,
      emailAddress,
      diet,
      flavours,
      dateOrder,
    }),
  });

  if (error) {
    return error;
  }

  console.log(data);
  return 'Email sent successfully!';
}
