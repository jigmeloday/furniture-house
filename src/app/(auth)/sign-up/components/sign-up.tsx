'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {zodResolver} from '@hookform/resolvers/zod';
import { userCredentialsSchema } from '@/lib/validation';
import { useForm } from 'react-hook-form';
import { signUp } from '@/lib/server-actions/auth';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

function SignUp() {
  const { toast } = useToast();
    const route = useRouter();


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(userCredentialsSchema),
    });
    const onSubmit = async (data: unknown) => {
        try {
            await signUp(data as { email: string, password: string });
            route.push('/login');
        } catch ( error ) {
            toast({
              variant: 'destructive',
              title: 'Uh oh! Something went wrong.',
              description: error as string,
            });
        }
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-[16px]">
            <div>
                <Input
                    placeholder="Email"
                    type="email"
                    {...register('email')}
                />
                {errors.email && <p className="text-red-500 text-[12px] ml-1">{errors.email.message as string}</p>}
            </div>

            <div>
                <Input
                    placeholder="Password"
                    type="password"
                    {...register('password')}
                />
                {errors.password && <p className="text-red-500 text-[12px] ml-1">{errors.password.message as string}</p>}
            </div>

            <Button type="submit">Sign Up</Button>
        </form>
    );
}

export default SignUp;
