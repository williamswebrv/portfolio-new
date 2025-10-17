"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Introduce tu nombre"),
  email: z.string().email("Correo inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres")
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");

  const onSubmit = async (values: FormValues) => {
    setStatus("pending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      if (!res.ok) {
        throw new Error("Request failed");
      }
      setStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-[#0B0D12]"
    >
      <div>
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200" htmlFor="name">
          Nombre
        </label>
        <Input id="name" {...register("name")} className="mt-2" autoComplete="name" />
        {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name.message}</p>}
      </div>
      <div>
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200" htmlFor="email">
          Correo electrónico
        </label>
        <Input id="email" type="email" {...register("email")} className="mt-2" autoComplete="email" />
        {errors.email && <p className="mt-1 text-xs text-rose-500">{errors.email.message}</p>}
      </div>
      <div>
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200" htmlFor="message">
          Mensaje
        </label>
        <Textarea id="message" {...register("message")} className="mt-2" rows={5} />
        {errors.message && <p className="mt-1 text-xs text-rose-500">{errors.message.message}</p>}
      </div>
      <Button type="submit" size="md" disabled={status === "pending"}>
        {status === "pending" ? "Enviando..." : "Enviar mensaje"}
      </Button>
      <div className="text-sm" aria-live="polite">
        {status === "success" && <p className="text-emerald-500">¡Gracias! Responderé pronto.</p>}
        {status === "error" && (
          <p className="text-rose-500">Algo salió mal. Intenta nuevamente o escríbeme directamente.</p>
        )}
      </div>
    </motion.form>
  );
}
