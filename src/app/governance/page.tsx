'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function GovernancePage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8">
              Brixs Governance
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-16">
              Brixs is governed by the community. BRIXS token holders can propose and vote on protocol upgrades, parameter changes, and ecosystem initiatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            {[
              {
                title: 'Proposal Forum',
                description: 'Discuss governance proposals and share your ideas with the community.'
              },
              {
                title: 'Voting Dashboard',
                description: 'View active proposals and cast your vote using BRIXS tokens.'
              },
              {
                title: 'Governance Docs',
                description: 'Learn about our governance framework and voting mechanisms.'
              },
              {
                title: 'Treasury DAO',
                description: 'Community-controlled treasury for ecosystem development and grants.'
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-700 bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
