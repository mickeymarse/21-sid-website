'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { cakeOrderReceiptEmail } from '../mailer/cakeOrderReceiptEmail';
import { cakeOrderEmail } from '@/mailer/cakeOrderEmail';

const formSchema = z.object({
  numberPeople: z
    .string({ required_error: 'A number of people is required' })
    .min(1, { message: `How many people are going to eat this cake?` })
    .max(2),
  diet: z
    .string({ required_error: 'Dietary restrictions are required' })
    .min(3, { message: `Insert N/A if you don't have any dietary requirements.` })
    .max(250),
  flavours: z.string().max(250).optional(),
  phoneNumber: z
    .string({ required_error: 'A phone number is required' })
    .min(11, { message: `Please, insert your number.` })
    .max(14),
  clientName: z
    .string({ required_error: 'A name is required' })
    .min(2, { message: `Please, insert a name.` })
    .max(50),
  emailAddress: z
    .string({ required_error: 'An email address is required' })
    .email({ message: `Check the email format is correct.` }),
  dateOrder: z.date().optional(),
});

export function BespokeCakesForm() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      numberPeople: '',
      diet: '',
      flavours: '',
      phoneNumber: '',
      clientName: '',
      emailAddress: '',
    },
  });

  const { reset } = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    cakeOrderReceiptEmail(
      values.emailAddress,
      values.clientName,
      values.numberPeople,
      values.diet,
      values.flavours,
      values.dateOrder?.toString()
    );
    cakeOrderEmail(
      values.emailAddress,
      values.clientName,
      values.phoneNumber,
      values.numberPeople,
      values.diet,
      values.flavours,
      values.dateOrder?.toString()
    );
    console.log(values);
    reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsDialogOpen(true), 800);
  }

  return (
    <>
      {isDialogOpen && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className='bg-lime-100 rounded-full border-double border-2 border-lime-500 h-fit w-full ring-2 ring-lime-500'>
            <DialogHeader>
              <DialogTitle className='text-3xl text-center'>{`\uD83D\uDC9A Your order has been sent! \uD83D\uDC9A`}</DialogTitle>
              <DialogDescription className='text-xl'>
                <br />
                <p>
                  Soon you will receive an email of confirmation with the details of your order.
                </p>
                <br />
                <p>After that, Laura will contact you via phone to finalise the details.</p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 flex flex-col'>
          <FormField
            control={form.control}
            name='clientName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='emailAddress'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phoneNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  You will receive a call to finalise the order details.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='numberPeople'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of People</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  This is the number of people who would be eating the cake.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='diet'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dietary Requirements</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Inform us about your allergies as well as dietary requirements/preferences.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='flavours'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Flavours</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Let us know about your preferred flavours. This will need to be discussed again
                  later on.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='dateOrder'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Collection Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-[240px] pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0 bg-white' align='start'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  When would you like to collect your delicious cake?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            className='place-self-end rounded-xl bg-[#fcc7f9] hover:bg-[#c7fcc7]'
          >
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
