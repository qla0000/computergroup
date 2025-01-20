"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Hiba:", result);
        throw new Error(result.error?.message || "Hiba történt a küldés során");
      }

      setStatus("success");
      reset(); // Form mezők törlése
    } catch (error) {
      console.error("Fetch hiba:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-6">
      {/* Dekoratív elemek */}
      <div className="bg-accent-500/10 group-hover:bg-accent-500/20 dark:bg-accent-400/5 dark:group-hover:bg-accent-400/10 absolute -right-4 -top-4 h-24 w-24 rounded-full transition-all duration-500" />
      <div className="bg-primary-500/10 group-hover:bg-primary-500/20 dark:bg-primary-400/5 dark:group-hover:bg-primary-400/10 absolute -bottom-4 -left-4 h-24 w-24 rounded-full transition-all duration-500" />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="group relative">
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Név"
            className="border-primary-200/50 text-primary-950 focus:ring-primary-500/20 dark:bg-primary-900/80 w-full rounded-lg border p-3 transition-all duration-300 placeholder:text-primary-400 hover:border-primary-300 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 dark:border-primary-700 dark:bg-primary-900 dark:text-primary-50 dark:hover:border-primary-600 dark:focus:border-primary-500 dark:focus:bg-primary-900"
          />
        </div>
        <div className="group relative">
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="border-primary-200/50 text-primary-950 focus:ring-primary-500/20 dark:bg-primary-900/80 w-full rounded-lg border p-3 transition-all duration-300 placeholder:text-primary-400 hover:border-primary-300 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 dark:border-primary-700 dark:bg-primary-900 dark:text-primary-50 dark:hover:border-primary-600 dark:focus:border-primary-500 dark:focus:bg-primary-900"
          />
        </div>
        <div className="group relative">
          <input
            {...register("subject", { required: true })}
            type="text"
            placeholder="Tárgy"
            className="border-primary-200/50 text-primary-950 focus:ring-primary-500/20 dark:bg-primary-900/80 w-full rounded-lg border p-3 transition-all duration-300 placeholder:text-primary-400 hover:border-primary-300 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 dark:border-primary-700 dark:bg-primary-900 dark:text-primary-50 dark:hover:border-primary-600 dark:focus:border-primary-500 dark:focus:bg-primary-900"
          />
        </div>
      </div>
      <div className="group relative">
        <textarea
          {...register("message", { required: true })}
          placeholder="Üzenet"
          rows={6}
          className="border-primary-200/50 focus:ring-primary-500/20 dark:bg-primary-900/80 w-full rounded-lg border p-3 text-black transition-all duration-300 placeholder:text-primary-400 hover:border-primary-300 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 dark:border-primary-700 dark:bg-primary-900 dark:text-primary-50 dark:hover:border-primary-600 dark:focus:border-primary-500 dark:focus:bg-primary-900"
        ></textarea>
      </div>
      <div className="text-center">
        {status === "success" && (
          <div className="mb-4 text-green-500 dark:text-green-400">
            Üzenet sikeresen elküldve!
          </div>
        )}
        {status === "error" && (
          <div className="mb-4 text-red-500 dark:text-red-400">
            Hiba történt a küldés során.
          </div>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="text-primary-950 hover:shadow-accent-500/25 rounded-full bg-accent-500 px-8 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-accent-400 hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {isLoading ? "Küldés..." : "Üzenet küldése"}
        </button>
      </div>
    </form>
  );
}
