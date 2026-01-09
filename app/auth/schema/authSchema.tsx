import * as z from "zod";

export const formLoginSchema = z.object({
  email: z.string().min(1, "Email wajib diisi").email("Format email salah"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});
export const formRegisterSchema = z.object({
  email: z.string().min(1, "Email wajib diisi").email("Format email salah"),
  name: z.string().min(1, "Nama wajib diisi"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

export type LoginForm = z.infer<typeof formLoginSchema>;
export type RegisterForm = z.infer<typeof formRegisterSchema>;
