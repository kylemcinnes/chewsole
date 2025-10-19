import { z } from 'zod';

export const checkoutSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  address1: z.string().min(5, 'Address is required'),
  address2: z.string().optional(),
  city: z.string().min(2, 'City is required'),
  region: z.string().min(2, 'State/Region is required'),
  postalCode: z.string().min(3, 'Postal code is required'),
  country: z.string().min(2, 'Country is required'),
  items: z.array(
    z.object({
      sku: z.string(),
      flavor: z.string(),
      qty: z.number().min(1),
      price: z.number(),
    })
  ).min(1, 'Cart cannot be empty'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must consent to continue',
  }),
  notes: z.string().optional(),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;

export const adminLoginSchema = z.object({
  password: z.string().min(1, 'Password is required'),
});

export type AdminLoginData = z.infer<typeof adminLoginSchema>;

