'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const grantTiers = [
  {
    name: 'Seed Grant',
    amount: 'Up to $10K',
    description: 'For early-stage ideas and prototypes',
    features: ['Quick approval', 'Mentorship', 'Community support']
  },
  {
    name: 'Development Grant',
    amount: 'Up to $50K',
    description: 'For MVP development and testing',
    features: ['Technical guidance', 'Code review', 'Testnet resources']
  },
  {
    name: 'Growth Grant',
    amount: 'Up to $100K+',
    description: 'For scaling and mainnet launch',
    features: ['Full support', 'Marketing help', 'Strategic advising']
  },
];

export default function GrantsPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
              Developer Grants
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We&apos;re actively funding builders. From infrastructure to DeFi to AI Agents, get up to $100K to build on Brixs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {grantTiers.map((tier, idx) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-700 bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold mb-4 text-white">{tier.amount}</div>
                <p className="text-gray-400 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-gray-400">
                      <span className="text-white">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-4 py-3 border border-gray-700 hover:border-white text-white font-semibold transition-colors flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 p-12 border border-gray-700 bg-gray-900/50"
          >
            <h2 className="text-3xl font-bold mb-6">What We Fund</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Infrastructure', desc: 'Bridges, indexers, RPCs, and developer tools' },
                { title: 'DeFi Protocols', desc: 'AMMs, lending, derivatives, and yield strategies' },
                { title: 'AI Agents', desc: 'On-chain autonomous agents and trading systems' },
                { title: 'Gaming & NFTs', desc: 'Games, marketplaces, and creator tools' },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-white pl-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
