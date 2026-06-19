'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function AboutPage() {
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
              About Brixs
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-12">
              Brixs is building the infrastructure for the next billion users of Web3. Our mission is to make blockchain technology accessible, scalable, and useful for everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mt-20"
          >
            {[
              { title: 'Founded', value: '2024', desc: 'By blockchain pioneers' },
              { title: 'Team', value: '50+', desc: 'Distributed globally' },
              { title: 'Raised', value: '$50M', desc: 'Series A funding' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-700 bg-gray-900/50"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.title}</div>
                <div className="text-gray-400">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 p-12 border border-gray-700 bg-gray-900/50"
          >
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-4">
                <span className="text-white font-bold">●</span>
                <span><strong>Accessibility:</strong> Making Web3 simple for everyone</span>
              </li>
              <li className="flex gap-4">
                <span className="text-white font-bold">●</span>
                <span><strong>Performance:</strong> Uncompromising speed and reliability</span>
              </li>
              <li className="flex gap-4">
                <span className="text-white font-bold">●</span>
                <span><strong>Transparency:</strong> Open-source by default</span>
              </li>
              <li className="flex gap-4">
                <span className="text-white font-bold">●</span>
                <span><strong>Decentralization:</strong> Community-driven governance</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
