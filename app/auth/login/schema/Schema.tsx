import * as z from "zod";

export const formSchema = z.object({
  email: z.string().min(1, "Email wajib diisi").email("Format email salah"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

export type LoginForm = z.infer<typeof formSchema>;