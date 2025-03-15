import Image from 'next/image';
import { aboutUsDataBlur } from '@/lib/aboutUsDataBlur';

const About = () => {
  return (
    <section className='flex flex-col items-center gap-5 my-12'>
      <h3 className='text-3xl font-bold mb-10'>About Us</h3>
      <Image
        src='/flash.webp'
        width={750}
        height={500}
        alt='A blur memeber of staff running behind the counter. On their back, we see a white wall with the 21 Sid logo.'
        placeholder={aboutUsDataBlur}
      ></Image>
      <br />
      <span className='max-w-[750px] prose prose-lg'>
        <p className=''>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac quam non ex ultrices
          luctus sit amet id eros. Donec sed ipsum eros. Nulla eget augue dictum eros facilisis
          varius. Suspendisse diam orci, scelerisque ut rhoncus sed, fringilla sit amet ligula.
          Vivamus semper malesuada porta. Nullam quis lacus facilisis tellus imperdiet bibendum et
          sit amet est. Proin vehicula ligula sed arcu cursus, et accumsan velit suscipit. Nullam
          nec magna eget purus sollicitudin maximus. In sed dictum justo. Maecenas nec auctor urna.
          Suspendisse iaculis justo non elit elementum lacinia. Pellentesque molestie, est id cursus
          rhoncus, justo quam pharetra leo, semper interdum lacus quam eu risus. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Maecenas tempor lacus id rutrum varius. Sed id
          neque nisi.{' '}
        </p>

        <p className=''>
          Donec nibh lacus, lacinia id suscipit vitae, viverra vel enim. In tristique ultricies est
          a mattis. Duis finibus quam tristique, condimentum orci sit amet, hendrerit nibh.
          Phasellus eu sodales mauris, in feugiat ligula. Duis tincidunt, dolor eu ornare volutpat,
          felis nunc facilisis sapien, quis mollis mauris ante sit amet dolor. Etiam in iaculis
          purus. Suspendisse lacus arcu, pharetra non lobortis quis, ullamcorper eu felis. Praesent
          dictum varius turpis et laoreet. Nulla in nisi id metus rutrum consequat.{' '}
        </p>

        <p className=''>
          Sed vulputate, nisl sit amet commodo auctor, erat ipsum tristique leo, sed tincidunt nisl
          sem quis ante. Integer sodales eget lorem vel ultrices. Fusce eget ligula sit amet augue
          auctor viverra. Sed non enim erat. Vestibulum auctor, urna nec euismod dignissim, nunc
          ipsum lobortis neque, at malesuada nisi nisl ac odio. Fusce euismod non tortor eget
          imperdiet. Aliquam quis metus urna. Vestibulum ultricies ut urna ac posuere. Vivamus eget
          faucibus elit.{' '}
        </p>
      </span>
    </section>
  );
};

export default About;
