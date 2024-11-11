/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { userCredentialsSchema } from '@/lib/validation';
import { useForm } from 'react-hook-form';
import { signUp } from '@/lib/server-actions/auth';
// import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { LoaderCircle } from 'lucide-react';

function SignUp() {
  const { toast } = useToast();
//   const route = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userCredentialsSchema),
  });
  const onSubmit = async (data: unknown) => {
    setLoading(true);
    try {
      await signUp(data as { email: string; password: string });

      toast({
        variant: 'success',
        title: 'Sign Up Success',
        description: 'A confirmation link has been sent to your email inbox'
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error.message as string,
      });
      setLoading(false);
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

      <div>
        <Input
          placeholder="Password"
          type="password"
          {...register('password')}
        />
        {errors.password && (
          <p className="text-red-500 text-[12px] ml-1">
            {errors.password.message as string}
          </p>
        )}
      </div>
      <Button disabled={loading} type="submit">
        {loading ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          <span>Sign In</span>
        )}
      </Button>
    </form>
  );
}

export default SignUp;
