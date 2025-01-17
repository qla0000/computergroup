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
            className="w-full rounded-lg border border-gray-300 p-3 transition-all duration-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 group-hover:border-primary-400 dark:border-gray-600 dark:bg-gray-700"
            required
          />
        </div>
        <div className="group">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-gray-300 p-3 transition-all duration-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 group-hover:border-primary-400 dark:border-gray-600 dark:bg-gray-700"
            required
          />
        </div>
      </div>
      <div className="group">
        <textarea
          placeholder="Üzenet"
          rows={6}
          className="w-full rounded-lg border border-gray-300 p-3 transition-all duration-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 group-hover:border-primary-400 dark:border-gray-600 dark:bg-gray-700"
          required
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="rounded-full bg-primary-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-primary-700 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-105"
        >
          Üzenet küldése
        </button>
      </div>
    </form>
  );
}