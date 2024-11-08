'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {zodResolver} from '@hookform/resolvers/zod';
import { userCredentialsSchema } from '@/lib/validation';
import { useForm } from 'react-hook-form';
import { login } from '@/lib/server-actions/auth';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

function Login() {
    const route = useRouter();
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(userCredentialsSchema),
    });
    const onSubmit = async (data: unknown) => {
        try {
            await login(data as { email: string, password: string });
            route.push('/');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch ( error: any) {
            toast({
                variant: 'destructive',
                title: 'Uh oh! Something went wrong.',
                description: error.message as string,
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
                {errors.email && <p className="text-red-500">{errors.email.message as string}</p>}
            </div>

            <div>
                <Input
                    placeholder="Password"
                    type="password"
                    {...register('password')}
                />
                {errors.password && <p className="text-red-500">{errors.password.message as string}</p>}
            </div>

            <Button type="submit">Sign In</Button>
        </form>
    );
}

export default Login;
