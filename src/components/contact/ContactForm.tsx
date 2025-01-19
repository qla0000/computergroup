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
  return (
    <form className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="group">
          <input
            type="text"
            placeholder="Név"
            className="w-full rounded-lg border border-primary-200 p-3 transition-all duration-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 group-hover:border-primary-400 dark:border-primary-700 dark:bg-primary-800/50"
            required
          />
        </div>
        <div className="group">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-primary-200 p-3 transition-all duration-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 group-hover:border-primary-400 dark:border-primary-700 dark:bg-primary-800/50"
            required
          />
        </div>
      </div>
      <div className="group">
        <textarea
          placeholder="Üzenet"
          rows={6}
          className="w-full rounded-lg border border-primary-200 p-3 transition-all duration-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 group-hover:border-primary-400 dark:border-primary-700 dark:bg-primary-800/50"
          required
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="rounded-full bg-accent-500 px-8 py-3 font-semibold text-primary-950 transition-all duration-300 hover:bg-accent-400 hover:shadow-[0_0_30px_rgba(255,193,7,0.3)] hover:scale-105"
        >
          Üzenet küldése
        </button>
      </div>
    </form>
  );
}