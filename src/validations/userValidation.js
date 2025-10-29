import z, { email } from "zod";

export const createUserScheme = z.object({
  fullname: z.string().min(3, "fullname require 3 characters or more"),
  username: z.string().min(3, "username require 3 characters or more"),
  email: z.email("email invalid"),
  password: z.string().min(6, "password require 6 characters or more"),
  role: z.enum(["admin", "user"], "role either 'admin' or 'user'"),
});
