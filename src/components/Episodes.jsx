import React from 'react';
import { PlayCircle, Clock } from 'lucide-react';

const episodes = [
  {
    id: 1,
    title: 'Scaling Ethereum: Danksharding, PBS, and What Comes Next',
    tag: 'Core Protocol',
    duration: '48:13',
    highlight: 'Deep dive into the future of Ethereum throughput and decentralization.'
  },
  {
    id: 2,
    title: 'Modular vs. Monolithic: The Rise of App-Chains',
    tag: 'Infra',
    duration: '52:06',
    highlight: 'How modular stacks unlock new design space for startups.'
  },
  {
    id: 3,
    title: 'AI x Crypto: Agents, Wallets, and Autonomous Economies',
    tag: 'Frontier',
    duration: '44:22',
    highlight: 'Why inference costs and onchain incentives are converging.'
  },
  {
    id: 4,
    title: 'Restaking and the New Security Markets',
    tag: 'DeFi',
    duration: '39:41',
    highlight: 'Shared security, AVSs, and the evolving validator landscape.'
  },
  {
    id: 5,
    title: 'Account Abstraction: UX that Onboards the Next 100M',
    tag: 'Wallets',
    duration: '36:54',
    highlight: 'Smart accounts, gas sponsorship, and embedded wallets.'
  },
  {
    id: 6,
    title: 'L2 Wars: Sequencers, Data Availability, and Beyond',
    tag: 'Layer 2',
    duration: '47:09',
    highlight: 'A candid look at decentralizing rollups and the road ahead.'
  }
];

const Episodes = () => {
  return (
    <section id="episodes" className="relative z-10 w-full bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>Latest Episodes</h2>
          <p className="mt-3 text-gray-600">Curated, high-signal conversations with the builders behind the next internet.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {episodes.map((ep) => (
            <article key={ep.id} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/0 via-fuchsia-50/0 to-cyan-50/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                  {ep.tag}
                </div>
                <h3 className="mt-4 line-clamp-2 text-lg font-semibold text-gray-900">{ep.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600">{ep.highlight}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" />{ep.duration}</span>
                  <button className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-3 py-1.5 text-white transition hover:bg-black">
                    <PlayCircle className="h-4 w-4" />
                    Play
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Episodes;
