import Image from 'next/image';


const Header = () => {
  return (

    <section className='flex flex-col items-center justify-center'>

      <article className='h-auto max-w-full flex justify-center'>
        <Image
          className='h-auto max-w-full rounded-lg'
          src='/logo.png'
          alt=''
          width={350}
          height={350}
        />
      </article>
    </section>

  );
};

export default Header;
