'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {zodResolver} from '@hookform/resolvers/zod'
import { userCredentialsSchema } from '@/lib/validation';
import { useForm } from 'react-hook-form';
import { login } from '@/lib/server-actions/auth';
import { useRouter } from 'next/navigation';

function Login() {
    const route = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(userCredentialsSchema),
    });
    const onSubmit = async (data) => {
        try {
            await login(data)
            route.push('/')
        } catch ( error ) {

        }
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-[16px]">
            <div>
                <Input
                    placeholder="Email"
                    type="email"
                    {...register("email")}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <div>
                <Input
                    placeholder="Password"
                    type="password"
                    {...register("password")}
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>

            <Button type="submit">Sign In</Button>
        </form>
    )
}

export default Login;
