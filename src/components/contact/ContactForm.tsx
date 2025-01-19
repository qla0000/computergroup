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
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (!response.ok) {
        console.error('Hiba:', result);
        throw new Error(result.error?.message || 'Hiba történt a küldés során');
      }
      
      setStatus('success');
      reset(); // Form mezők törlése
    } catch (error) {
      console.error('Fetch hiba:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="group">
          <input
            {...register('name', { required: true })}
            type="text"
            placeholder="Név"
            className="w-full rounded-lg border border-primary-700 bg-primary-800 p-3 text-primary-50 placeholder:text-primary-400 transition-all duration-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 group-hover:border-primary-400"
          />
        </div>
        <div className="group">
          <input
            {...register('email', { required: true })}
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-primary-700 bg-primary-800 p-3 text-primary-50 placeholder:text-primary-400 transition-all duration-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 group-hover:border-primary-400"
          />
        </div>
        <div className="group">
          <input
            {...register('subject', { required: true })}
            type="text"
            placeholder="Tárgy"
            className="w-full rounded-lg border border-primary-700 bg-primary-800 p-3 text-primary-50 placeholder:text-primary-400 transition-all duration-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 group-hover:border-primary-400"
          />
        </div>
      </div>
      <div className="group">
        <textarea
          {...register('message', { required: true })}
          placeholder="Üzenet"
          rows={6}
          className="w-full rounded-lg border border-primary-700 bg-primary-800 p-3 text-primary-50 placeholder:text-primary-400 transition-all duration-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 group-hover:border-primary-400"
        ></textarea>
      </div>
      <div className="text-center">
        {status === 'success' && (
          <div className="text-green-500">Üzenet sikeresen elküldve!</div>
        )}
        {status === 'error' && (
          <div className="text-red-500">Hiba történt a küldés során.</div>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="rounded-full bg-accent-500 px-8 py-3 font-semibold text-primary-950 transition-all duration-300 hover:bg-accent-400 disabled:opacity-50"
        >
          {isLoading ? 'Küldés...' : 'Üzenet küldése'}
        </button>
      </div>
    </form>
  );
}