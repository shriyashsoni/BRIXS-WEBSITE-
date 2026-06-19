'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { VideoPlayer } from '@/components/VideoPlayer';
import { ModelShowcase } from '@/components/3d/ModelShowcase';
import { Footer } from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { videoAssets } from '@/lib/videoAssets';

export default function L2ChainPage() {
  return (
    <main className="text-white min-h-screen">
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

          <VideoPlayer
            src={videoAssets.solutions.l2Chain}
            title="L2 Chain Architecture"
            className="mt-16 max-w-4xl aspect-video shadow-2xl"
          />

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

      <ModelShowcase
        title="Architecture Gallery"
        description="Explore different aspects of our L2 chain infrastructure"
        models={videoAssets.gallery.slice(0, 6)}
        layout="grid"
      />

      <section className="py-20 px-6 border-t border-white/10">
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
              <button className="flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-semibold hover:bg-white/90 transition-colors">
                Start Building
                <ArrowRight size={18} />
              </button>
              <button className="flex items-center gap-2 px-8 py-4 border border-white/30 hover:border-white hover:bg-white/10 transition-colors">
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
