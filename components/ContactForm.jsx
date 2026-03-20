'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-xl border border-purple-400/30 bg-purple-400/5 p-8 text-center">
        <p className="text-lg font-medium text-purple-400">
          Thanks for reaching out!
        </p>
        <p className="mt-2 text-sm text-zinc-400">
          I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      action="https://formspree.io/f/xvzwyvdd"
      method="POST"
      onSubmit={() => setSubmitted(true)}
      className="space-y-5"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-zinc-300"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition-colors focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-zinc-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition-colors focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-zinc-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition-colors focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50"
          placeholder="What's on your mind?"
        />
      </div>
      <button
        type="submit"
        className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-purple-400 px-6 py-3 text-sm font-medium text-zinc-950 transition-all duration-300 hover:bg-purple-300 hover:shadow-lg hover:shadow-purple-400/25"
      >
        Send Message
        <Send size={16} />
      </button>
    </form>
  );
};

export default ContactForm;
