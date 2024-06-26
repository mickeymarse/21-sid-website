import { contactsDataBlur } from '@/lib/contactsDataBlur';
import Image from 'next/image';

const Contacts = () => {
  return (
    <>
      <h3 className='text-center text-3xl mt-10 font-bold'>Contacts</h3>
      <section className='flex flex-col-reverse md:flex-row justify-center gap-24 my-12'>
        <article className='flex flex-col gap-10'>
          <span className=''>
            <h3 className='contacts-h3'>Opening Hours</h3>
            <p className='contacts-p'>{`Mon - Fri: 8am - 6pm\nSat: 9am - 6pm\nSun: 10am - 4pm`}</p>
          </span>
          <span>
            <h3 className='contacts-h3'>Address</h3>
            <p className='contacts-p'>{`21 Sidworth Street\nLondon, UK\nE8 3SD`}</p>
          </span>
          <span>
            <h3 className='contacts-h3'>Contacts</h3>
            <p className='contacts-p'>{`+447777777777\nexample@email.com`}</p>
          </span>
        </article>
        <Image
          src='/benice.webp'
          width={500}
          height={750}
          alt='Picture of a glass wall with the words JUST BE NICE painted on it.'
          placeholder={contactsDataBlur}
        ></Image>
      </section>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.5738464283886!2d-0.05995412300997446!3d51.53937570836649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ce638e34551%3A0x2500d36ad1fc6b49!2s21%20SID!5e0!3m2!1sen!2sru!4v1718980951281!5m2!1sen!2sru'
        className='mx-auto my-12 w-full lg:w-[41%] h-96'
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </>
  );
};

export default Contacts;
