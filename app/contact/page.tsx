import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold md:text-3xl">Contacto</h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Cuéntame sobre tu proyecto, necesidades de consultoría o colaboración.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
