/**
 * @Author: Musa Hayta - musahayta@gmail.com
 * @Date:   2024-05-11 16:31:00
 * @Last Modified by:   Musa Hayta - musahayta@gmail.com
 * @Last Modified time: 2024-05-11 16:31:15
 */
import { object, string } from "zod";

export const signInSchema = object({
  email: string({ required_error: "Email is required" }).min(1, "Email is required").email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});
