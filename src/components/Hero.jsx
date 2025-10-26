import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* 3D Cover Background */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle top/bottom gradient overlays to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-white shadow-lg backdrop-blur">
          <span className="text-xs font-medium tracking-wide">The Voice of Builders in Web3</span>
        </div>

        <h1 className="mt-6 font-extrabold leading-tight text-gray-900" style={{ fontFamily: 'Mona Sans, Inter, ui-sans-serif, system-ui' }}>
          <span className="block text-4xl sm:text-6xl md:text-7xl">BUIDL Cast</span>
          <span className="mt-2 block text-lg text-gray-700 sm:text-2xl">Where innovation meets narrative</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base text-gray-700 sm:text-lg">
          We spotlight founders, protocols, and primitives shaping the decentralized internet. High-signal conversations on the tech, the teams, and the moments that move Web3 forward.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#episodes"
            className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg transition hover:shadow-xl"
          >
            <PlayCircle className="h-5 w-5 transition group-hover:scale-105" />
            <span className="font-medium">Listen to Episodes</span>
          </a>
          <a
            href="#subscribe"
            className="group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-6 py-3 text-gray-900 backdrop-blur transition hover:bg-white"
          >
            <span className="font-medium">Subscribe for Drops</span>
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-10 flex items-center gap-4 text-xs text-gray-600">
          <span>Layer 1s</span>
          <span>•</span>
          <span>AI x Crypto</span>
          <span>•</span>
          <span>DeFi & Infra</span>
          <span>•</span>
          <span>Open-Source Builders</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
