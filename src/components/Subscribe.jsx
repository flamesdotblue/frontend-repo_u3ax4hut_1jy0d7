import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <section id="subscribe" className="relative w-full bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-4 py-2 text-indigo-700">
          <Mail className="h-4 w-4" />
          <span className="text-sm font-medium">Get new drops in your inbox</span>
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>Subscribe to BUIDL Cast</h2>
        <p className="mt-2 text-gray-600">No spam. Only high-signal episodes, show notes, and the occasional community update.</p>

        <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@protocol.xyz"
            className="w-full flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-gray-900 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-white transition hover:bg-black sm:w-auto"
          >
            Subscribe
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-sm text-green-600">Thanks! You’re on the list — watch for our next drop.</p>
        )}

        <p className="mt-4 text-xs text-gray-500">By subscribing, you agree to receive emails from BUIDL Cast. You can unsubscribe at any time.</p>
      </div>
    </section>
  );
};

export default Subscribe;
