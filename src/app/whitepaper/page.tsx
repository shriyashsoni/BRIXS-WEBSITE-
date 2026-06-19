'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight, Download } from 'lucide-react';

export default function WhitepaperPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8">
              The Brixs Whitepaper
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              A comprehensive technical document detailing the architecture, cryptographic foundations, and performance characteristics of the Brixs L2 chain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-950 font-semibold hover:bg-gray-100 transition-colors">
                <Download size={18} />
                Download PDF
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 text-white hover:border-white transition-colors">
                Read Online
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 p-12 border border-gray-700 bg-gray-900/50"
          >
            <h2 className="text-3xl font-bold mb-8">Contents</h2>
            <div className="space-y-6">
              {[
                { section: '1. Abstract', pages: 'p. 2' },
                { section: '2. Introduction', pages: 'p. 3' },
                { section: '3. Architecture Overview', pages: 'p. 5' },
                { section: '4. Consensus Mechanism', pages: 'p. 12' },
                { section: '5. Account Abstraction', pages: 'p. 18' },
                { section: '6. Unified Liquidity Protocol', pages: 'p. 24' },
                { section: '7. Security Considerations', pages: 'p. 32' },
                { section: '8. Performance Benchmarks', pages: 'p. 38' },
                { section: '9. Roadmap & Future Work', pages: 'p. 42' },
              ].map((item, idx) => (
                <motion.div
                  key={item.section}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between py-4 border-b border-gray-700 last:border-0"
                >
                  <h3 className="font-semibold text-lg">{item.section}</h3>
                  <span className="text-gray-500">{item.pages}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 p-12 border border-gray-700 bg-gray-900/50"
          >
            <h2 className="text-3xl font-bold mb-6">About This Document</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              The Brixs Whitepaper is the foundational technical document that describes our vision for a next-generation Layer 2 blockchain. It covers the cryptographic primitives, consensus mechanisms, and protocol innovations that enable us to achieve 10,000+ transactions per second with zero gas fees.
            </p>
            <p className="text-gray-400 leading-relaxed">
              This whitepaper has been peer-reviewed by leading researchers in the blockchain space and is available for the community to critique, discuss, and improve upon.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
