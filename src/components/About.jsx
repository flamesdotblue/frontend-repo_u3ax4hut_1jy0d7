import React from 'react';
import { Rocket, Shield, Mic } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Builders over buzz',
    desc: 'We focus on teams shipping real products, not passing hype cycles. Practical insights from those pushing the frontier.'
  },
  {
    icon: Shield,
    title: 'Signal, not noise',
    desc: 'Every episode is curated for depth and clarity. Research-driven conversations that respect your time.'
  },
  {
    icon: Mic,
    title: 'Trusted platform',
    desc: 'A home for founders, researchers, and investors to share what actually matters in Web3.'
  }
];

const About = () => {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>Our Mission</h2>
          <p className="mt-3 text-gray-600">BUIDL Cast exists to shine a light on the people and primitives constructing the next internet.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
