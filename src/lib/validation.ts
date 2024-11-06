import { z } from 'zod';

export const userCredentialsSchema = z.object({
    email: z.string().email({
        message: 'Invalid email address'
    }),
    password: z.string().min(8, {
        message: 'Password must be at least 8 characters long'
    }).regex(/[A-Z]/, {
        message: 'Password must contain at least one uppercase letter'
    }).regex(/[a-z]/, {
        message: 'Password must contain at least one lowercase letter'
    }).regex(/[0-9]/, {
        message: 'Password must contain at least one number'
    }).regex(/[@$!%*?&#]/, {
        message: 'Password must contain at least one special character'
    })
});

export const constactSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
    email: z.string().email({ message: 'Invalid email address' }),
    subject: z.string().min(2, { message: 'Subject must be at least 2 characters long' }),
    message: z.string().min(5, { message: 'Message must be at least 5 characters long' })
});