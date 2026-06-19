'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-24 md:py-32 px-6 border-t border-gray-700"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">
            Build on Brixs,<br />get funded.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
            Join the open money stack and receive up to $100K in developer grants. 
            We are actively funding infrastructure, DeFi primitives, and AI Agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/developers/grants"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-950 font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply for a Grant
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/docs"
              className="flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 text-white hover:border-white transition-colors"
            >
              Read Docs
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            { icon: '🔗', value: '50K+', label: 'Followers' },
            { icon: '💬', value: '20K+', label: 'Builders' },
            { icon: '🚀', value: '5,000+', label: 'Commits' },
            { icon: '⚡', value: '100+', label: 'Projects' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-700 bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
