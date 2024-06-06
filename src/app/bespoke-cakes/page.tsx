import { BespokeCakesForm } from '@/components/BespokeCakesForm';

export default function BespokeCakes() {
  return (
    <section className='flex flex-col max-w-fit my-10 mx-auto justify-center'>
      <h3 className='font-bold text-3xl place-self-center'>Order a cake to celebrate!</h3>
      <p className='font-medium my-5'>
        Fill the form to place an order for a bespoke cake. Laura will contact to confirm all the
        details.
      </p>
      <BespokeCakesForm />
    </section>
  );
}
