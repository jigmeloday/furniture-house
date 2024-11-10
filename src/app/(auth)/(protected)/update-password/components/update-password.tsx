'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { updatePasswordSchema } from '@/lib/validation';
import { useForm } from 'react-hook-form';
import { updatePassword } from '@/lib/server-actions/auth';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

function UpatePassword() {
  const route = useRouter();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updatePasswordSchema),
  });
  const onSubmit = async (data: unknown) => {
    try {
      await updatePassword(data as { password: string });
      // route.push('/');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
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
      <div>
        <Input
          placeholder="Confirm Password"
          type="password"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-[12px] ml-1">
            {errors.confirmPassword.message as string}
          </p>
        )}
      </div>
      <Button type="submit">Update</Button>
    </form>
  );
}

export default UpatePassword;
