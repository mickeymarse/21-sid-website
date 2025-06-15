import { TarotReadingsForm } from '@/components/TarotReadingsForm';
import Wrapper from '@/components/Wrapper';

export default function TarotReadings() {
  return (
    <section className='flex flex-col max-w-fit my-10 mx-5 md:mx-auto justify-center'>
      <h3 className='font-bold text-3xl place-self-center'>
        Request a Tarot reading to find guidance!
      </h3>
      <p className='font-medium my-5'>
        Fill the form to place a booking for a Tarot reading. Laura will contact to confirm all the
        details.
      </p>
      <Wrapper background='bg-lime-100'>
        <TarotReadingsForm />
      </Wrapper>
    </section>
  );
}
