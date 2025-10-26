import React from 'react';
import Hero from './components/Hero';
import Episodes from './components/Episodes';
import About from './components/About';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Episodes />
      <About />
      <Subscribe />

      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} BUIDL Cast. All rights reserved.</p>
          <div className="text-sm text-gray-600">
            <a href="#episodes" className="hover:text-gray-900">Episodes</a>
            <span className="mx-3 text-gray-300">|</span>
            <a href="#subscribe" className="hover:text-gray-900">Subscribe</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
