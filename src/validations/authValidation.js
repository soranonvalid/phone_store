import { email, z } from "zod";
import { da } from "zod/locales";

export const registerScheme = z
  .object({
    fullname: z.string().min(3, "Fullname must be more than 3 characters."),
    username: z
      .string()
      .min(3, "Username must be more than 3 characters.")
      .refine((s) => !s.includes(" "), "Username cant contain spaces [' ']."),
    email: z.email("Email not valid."),
    password: z.string().min(6, "Passowrd must be more than 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm passowrd must be more than 6 characters"),
    role: z.enum(["admin", "user"], {
      message: "Role must be either 'admin' and 'user'",
    }),
    address: z.string().min(3, "Address must be more than 5 characters"),
    phone_number: z
      .string()
      .regex(/^0\d{9,14}$/, "Number is invalid")
      .optional(),
    age: z
      .number({ invalid_type_error: "Age must be number" })
      .min(10, "Age must be more than 10 years old")
      .max(100, "Age must be less than 100 years old")
      .optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Both password and confirm password must be the same",
    path: ["confirmPassword"],
  });
