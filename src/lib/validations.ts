import { z } from 'zod';

/**
 * Common validation schemas for the application
 */

// Email validation schema
export const emailSchema = z
  .string()
  .email('Please enter a valid email address')
  .min(1, 'Email is required');

// Password validation schema
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    'Password must contain at least one lowercase letter, one uppercase letter, and one number'
  );

// Phone number validation schema
export const phoneSchema = z
  .string()
  .regex(
    /^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/,
    'Please enter a valid phone number'
  );

// Name validation schema
export const nameSchema = z
  .string()
  .min(2, 'Name must be at least 2 characters')
  .max(50, 'Name must be less than 50 characters')
  .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces');

// URL validation schema
export const urlSchema = z
  .string()
  .url('Please enter a valid URL')
  .optional()
  .or(z.literal(''));

// Contact form validation schema
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema.optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  service: z.string().optional(),
  urgency: z.enum(['low', 'medium', 'high']).default('medium'),
});

// User registration schema
export const userRegistrationSchema = z
  .object({
    firstName: nameSchema,
    lastName: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
    terms: z.boolean().refine(val => val === true, {
      message: 'You must accept the terms and conditions',
    }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

// Login schema
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional(),
});

// Search schema
export const searchSchema = z.object({
  query: z.string().min(1, 'Search query is required').max(100),
  category: z.string().optional(),
  location: z.string().optional(),
});

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: emailSchema,
  preferences: z.array(z.string()).optional(),
});

// Review schema
export const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  title: z.string().min(5, 'Title must be at least 5 characters').max(100),
  content: z
    .string()
    .min(20, 'Review must be at least 20 characters')
    .max(1000),
  recommend: z.boolean(),
  service: z.string().optional(),
});

// Address schema
export const addressSchema = z.object({
  street: z.string().min(1, 'Street address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(2, 'State is required').max(2),
  zipCode: z
    .string()
    .regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code'),
  country: z.string().default('US'),
});

// Type exports for use in components
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type UserRegistrationData = z.infer<typeof userRegistrationSchema>;
export type LoginData = z.infer<typeof loginSchema>;
export type SearchData = z.infer<typeof searchSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
export type ReviewData = z.infer<typeof reviewSchema>;
export type AddressData = z.infer<typeof addressSchema>;
