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

import { tarotBookingReceiptEmail } from '../mailer/tarotBookingReceiptEmail';
import { tarotBookingEmail } from '@/mailer/tarotBookingEmail';

const formSchema = z.object({
  enquiryType: z.string().max(50).optional(),
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
  dateOrder: z.date(),
});

export function TarotReadingsForm() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      enquiryType: '',
      phoneNumber: '',
      clientName: '',
      emailAddress: '',
    },
  });

  const { reset } = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    tarotBookingReceiptEmail(
      values.emailAddress,
      values.clientName,
      values.enquiryType,
      values.dateOrder?.toString()
    );
    tarotBookingEmail(
      values.emailAddress,
      values.clientName,
      values.phoneNumber,
      values.enquiryType,
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
          <DialogContent className='bg-red-100 rounded-full border-double border-2 border-red-300 h-fit w-full ring-2 ring-red-300'>
            <DialogHeader>
              <DialogTitle className='text-2xl text-center'>{`\uD83E\uDE77 Your request has been sent! \uD83E\uDE77`}</DialogTitle>
              <DialogDescription className='text-xl'>
                <br />
                <p>
                  Soon you will receive an email of confirmation with the details of your request.
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
            name='enquiryType'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type of enquiry</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Feel free to share the kind of reading you are looking for.
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
                <FormDescription>When would you like your reading to be?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            className='place-self-end rounded-xl bg-[#c7fcc7] hover:bg-[#fcc7f9]'
          >
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
