'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema } from '@/lib/validation';
import { useForm } from 'react-hook-form';
import { forgotPassword } from '@/lib/server-actions/auth';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { LoaderCircle } from 'lucide-react';

function ForgotPassword() {
  // const route = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });
  const onSubmit = async (data: unknown) => {
    setLoading(true);
    try {
      await forgotPassword(data as { email: string });
      toast({
        variant: 'success',
        title: 'Request Success',
        description: 'A reset password link has been sent to your email.'
      });
      // route.push('/');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setLoading(false);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error.message as string,
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-[16px]"
    >
      <div>
        <Input placeholder="Email" type="email" {...register('email')} />
        {errors.email && (
          <p className="text-red-500 text-[12px] ml-1">
            {errors.email.message as string}
          </p>
        )}
      </div>
      <Button disabled={loading} type="submit">
        {loading ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          <span>Request Link</span>
        )}
      </Button>
    </form>
  );
}

export default ForgotPassword;
