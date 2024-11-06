'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactUs } from '@/lib/server-actions/contact-action';
import { constactSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
} = useForm({
    resolver: zodResolver(constactSchema),
});

const onSubmit = async (data) => {
  try {
      await contactUs(data);
      reset();
  } catch ( error ) {

  }
};
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full space-y-4">
        <div className="space-y-2">
          <label className="font-[500] ml-1">Name</label>
          <Input placeholder="Name" type="text" {...register('name')} />
          {errors.name && <p className="text-red-500 text-[12px] ml-1">{errors.name.message as string}</p>}
        </div>
        <div className="space-y-2">
          <label className="font-[500] ml-1">Email</label>
          <Input placeholder="Email" type="email" {...register('email')} />
          {errors.email && <p className="text-red-500 text-[12px] ml-1">{errors.email.message as string}</p>}
        </div>
        <div className="space-y-2">
          <label className="font-[500] ml-1">Subject</label>
          <Input placeholder="Subject" type="text" {...register('subject')} />
          {errors.subject && <p className="text-red-500 text-[12px] ml-1">{errors.subject.message as string}</p>}
        </div>
        <div className="space-y-2">
          <label className="font-[500] ml-1">Messages</label>
          <Textarea placeholder="Messages" {...register('message')}  />
          {errors.message && <p className="text-red-500 text-[12px] ml-1">{errors.message.message as string}</p>}
        </div>
        <Button className="w-full" type='submit'>Submit</Button>
      </div>
    </form>
  );
}

export default Form;