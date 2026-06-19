'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

export default function L2ChainPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="inline-block mb-6 px-4 py-1.5 border border-gray-700 bg-gray-900/50">
              <span className="text-sm text-gray-300">SOLUTIONS</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8">
              Brixs L2 Chain
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              The ultra-fast Ethereum L2 designed for institutional-grade infrastructure. 10,000+ TPS with sub-second finality and zero gas fees.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 p-12 border border-gray-700 bg-gray-900/50 min-h-[400px] flex items-center justify-center"
          >
            <div className="text-center">
              <p className="text-gray-400 text-lg mb-4">3D Architecture Visualization</p>
              <p className="text-gray-500">Your 3D model video will be displayed here</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-6">
                {[
                  { title: 'Lightning Fast', desc: 'Sub-second block times with instant finality' },
                  { title: 'Zero Gas Fees', desc: 'Native account abstraction at protocol level' },
                  { title: 'Unified Liquidity', desc: 'Seamless Ethereum composability' },
                  { title: 'Battle Tested', desc: 'Audited and production-ready infrastructure' },
                ].map((feature, idx) => (
                  <motion.li
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 border-l-2 border-white"
                  >
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.desc}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="p-8 border border-gray-700 bg-gray-900/50">
              <p className="text-gray-400 text-center py-12">Performance metrics and charts</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to build?</h2>
            <p className="text-xl text-gray-400 mb-8">Get started with comprehensive documentation and developer tools.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="flex items-center gap-2 px-8 py-4 bg-white text-gray-950 font-semibold hover:bg-gray-100 transition-colors">
                Start Building
                <ArrowRight size={18} />
              </button>
              <button className="flex items-center gap-2 px-8 py-4 border border-gray-700 hover:border-white transition-colors">
                View Docs
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
