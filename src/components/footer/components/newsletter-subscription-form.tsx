'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NewsLetterForm } from '@/lib/schema';
import { NewsLetter } from '@/lib/server-actions/footer-actions';
import { newsLetterSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

function NewsLetterSubscription() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(newsLetterSchema),
    });
    

/**
 * Handles the submission of the newsletter form.
 * 
 * @param {unknown} data - The form data to be submitted.
 * @throws Will alert an error message if the submission fails.
 */
    const onSubmit = async (data: unknown) => {
        try {
            await NewsLetter(data as NewsLetterForm);
            reset();
        } catch ( error ) {
          alert(error);
        }
      };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={'flex space-x-[16px]'}>
                <Input placeholder={'Enter your email address'} type="text" {...register('email')}/>                 
                <Button variant="outline">Subscribe</Button>
            </div>
            {errors.email && <p className="text-red-500 text-[12px] ml-1">{errors.email.message as string}</p>}
        </form>
    );
}

export default NewsLetterSubscription;