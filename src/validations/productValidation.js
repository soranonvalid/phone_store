import z from "zod";

export const createProductScheme = z.object({
  user_id: z.number(),
  name: z.string().min(3, "name require 3 characters or more"),
  description: z.string().min(3, "description require 3 characters or more"),
  price: z.number().min(1, "price must be more than 1"),
  stock: z.number().min(1, "number must be more than 1"),
});
