"use client";

import { useForm } from "react-hook-form";
import { useContactForm } from "@/hooks/useContactForm";
import toast from "react-hot-toast";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const { errors, validateForm } = useContactForm();
  const { register, reset: formReset } = useForm<FormData>();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    const result = validateForm(data);
    if (!result.success) return;
    
    const loadingToast = toast.loading('Üzenet küldése...');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data)
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Hiba történt a küldés során');
      }
      
      formReset();
      toast.success('Üzenet sikeresen elküldve!', { id: loadingToast });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Hiba történt az üzenet küldése során', { id: loadingToast });
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="relative space-y-6">
      {/* Dekoratív elemek */}
      <div className="bg-accent-500/10 group-hover:bg-accent-500/20 dark:bg-accent-400/5 dark:group-hover:bg-accent-400/10 absolute -right-4 -top-4 h-24 w-24 rounded-full transition-all duration-500" />
      <div className="bg-primary-500/10 group-hover:bg-primary-500/20 dark:bg-primary-400/5 dark:group-hover:bg-primary-400/10 absolute -bottom-4 -left-4 h-24 w-24 rounded-full transition-all duration-500" />

      <input
        type="text"
        name="honeypot"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="group relative">
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Név"
            className={`border-primary-200/50 text-primary-900 focus:ring-primary-500/20 dark:bg-primary-900/80 w-full rounded-lg border p-3 transition-all duration-300 placeholder:text-primary-400 hover:border-primary-300 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 dark:border-primary-700 dark:bg-primary-900 dark:text-primary-50 dark:hover:border-primary-600 dark:focus:border-primary-500 dark:focus:bg-primary-900 ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>
        <div className="group relative">
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className={`border-primary-200/50 text-primary-900 focus:ring-primary-500/20 dark:bg-primary-900/80 w-full rounded-lg border p-3 transition-all duration-300 placeholder:text-primary-400 hover:border-primary-300 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 dark:border-primary-700 dark:bg-primary-900 dark:text-primary-50 dark:hover:border-primary-600 dark:focus:border-primary-500 dark:focus:bg-primary-900 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        <div className="group relative">
          <input
            {...register("subject", { required: true })}
            type="text"
            placeholder="Tárgy"
            className={`border-primary-200/50 text-primary-900 focus:ring-primary-500/20 dark:bg-primary-900/80 w-full rounded-lg border p-3 transition-all duration-300 placeholder:text-primary-400 hover:border-primary-300 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 dark:border-primary-700 dark:bg-primary-900 dark:text-primary-50 dark:hover:border-primary-600 dark:focus:border-primary-500 dark:focus:bg-primary-900 ${
              errors.subject ? "border-red-500" : ""
            }`}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
          )}
        </div>
      </div>
      <div className="group relative">
        <textarea
          {...register("message", { required: true })}
          placeholder="Üzenet"
          rows={6}
          className={`border-primary-200/50 focus:ring-primary-500/20 dark:bg-primary-900/80 w-full rounded-lg border p-3 text-primary-900 transition-all duration-300 placeholder:text-primary-400 hover:border-primary-300 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 dark:border-primary-700 dark:bg-primary-900 dark:text-primary-50 dark:hover:border-primary-600 dark:focus:border-primary-500 dark:focus:bg-primary-900 ${
            errors.message ? "border-red-500" : ""
          }`}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="text-primary-950 hover:shadow-accent-500/25 rounded-full bg-accent-500 px-8 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-accent-400 hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          Üzenet küldése
        </button>
      </div>
    </form>
  );
}
