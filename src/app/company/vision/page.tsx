'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function VisionPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8">
              Our Vision
            </h1>
            <p className="text-2xl text-gray-400 leading-relaxed">
              A world where blockchain technology is accessible, scalable, and useful for everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="p-12 border border-gray-700 bg-gray-900/50">
              <h2 className="text-3xl font-bold mb-6">The Problem</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                Today&apos;s blockchains face fundamental tradeoffs: they can be fast or decentralized, cheap or secure. Users face congested networks, high fees, and poor user experiences. This limits blockchain adoption to a small percentage of the global population.
              </p>
            </div>

            <div className="p-12 border border-gray-700 bg-gray-900/50">
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                Brixs is a Layer 2 blockchain that breaks these tradeoffs. We achieve 10,000+ transactions per second with sub-second finality and zero gas fees—all while maintaining full Ethereum security and composability. This enables the next billion users to participate in the blockchain economy.
              </p>
            </div>

            <div className="p-12 border border-gray-700 bg-gray-900/50">
              <h2 className="text-3xl font-bold mb-6">The Path Forward</h2>
              <ul className="space-y-6 text-gray-400">
                <li className="flex gap-4">
                  <span className="text-white font-bold">1.</span>
                  <div>
                    <strong className="text-white">Scale Infrastructure</strong>
                    <p>Build robust, audited, institutional-grade infrastructure</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-white font-bold">2.</span>
                  <div>
                    <strong className="text-white">Empower Builders</strong>
                    <p>Provide tools, documentation, and funding for developers</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-white font-bold">3.</span>
                  <div>
                    <strong className="text-white">Grow Community</strong>
                    <p>Foster a vibrant ecosystem of users, projects, and protocols</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-white font-bold">4.</span>
                  <div>
                    <strong className="text-white">Decentralize Governance</strong>
                    <p>Transition to full community-driven DAO governance</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
