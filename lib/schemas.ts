import { z } from 'zod'

export const indianPhoneSchema = z
  .string()
  .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number')

export const pincodeSchema = z
  .string()
  .regex(/^\d{6}$/, 'Please enter a valid 6-digit pincode')

export const checkoutSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  mobile: indianPhoneSchema,
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  addressLine1: z.string().min(5, 'Please enter your complete address'),
  addressLine2: z.string().optional(),
  landmark: z.string().optional(),
  pincode: pincodeSchema,
  city: z.string().min(2, 'Please enter your city'),
  state: z.string().min(2, 'Please select your state'),
  orderNotes: z.string().optional(),
  agreeToTerms: z.boolean().refine((v) => v === true, {
    message: 'Please agree to the Terms and Refund Policy to proceed',
  }),
})

export type CheckoutFormData = z.infer<typeof checkoutSchema>

export const leadFormSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: indianPhoneSchema,
  concern: z.string().min(1, 'Please select your health concern'),
  consent: z.boolean().refine((v) => v === true, {
    message: 'Please agree to be contacted',
  }),
})

export type LeadFormData = z.infer<typeof leadFormSchema>

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: indianPhoneSchema,
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  message: z.string().min(10, 'Please enter a message (min 10 characters)'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const trackOrderSchema = z.object({
  orderId: z.string().min(5, 'Please enter a valid Order ID'),
  mobile: indianPhoneSchema,
})

export type TrackOrderFormData = z.infer<typeof trackOrderSchema>

export const orderItemSchema = z.object({
  productId: z.string(),
  slug: z.string(),
  title: z.string(),
  price: z.number(),
  quantity: z.number().int().positive(),
  image: z.string(),
})

export const createOrderSchema = checkoutSchema.extend({
  items: z.array(orderItemSchema).min(1, 'Cart is empty'),
  subtotal: z.number().positive(),
})

export type CreateOrderData = z.infer<typeof createOrderSchema>

export const orderResponseSchema = z.object({
  orderId: z.string(),
  status: z.enum(['confirmed', 'failed']),
  estimatedDelivery: z.string(),
  message: z.string(),
})

export type OrderResponse = z.infer<typeof orderResponseSchema>
