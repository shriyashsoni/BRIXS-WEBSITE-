'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Code2, BookOpen, Zap, Shield } from 'lucide-react';

const docCategories = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Getting Started',
    description: 'Set up your development environment and deploy your first contract.',
    links: [
      { label: 'Installation', href: '#' },
      { label: 'Quick Start', href: '#' },
      { label: 'Your First Contract', href: '#' },
    ]
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Smart Contracts',
    description: 'Write and deploy smart contracts on Brixs.',
    links: [
      { label: 'Contract Basics', href: '#' },
      { label: 'Solidity Guide', href: '#' },
      { label: 'Best Practices', href: '#' },
    ]
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'API Reference',
    description: 'Complete API reference for Brixs RPC endpoints.',
    links: [
      { label: 'JSON-RPC', href: '#' },
      { label: 'Web3.js', href: '#' },
      { label: 'ethers.js', href: '#' },
    ]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Security',
    description: 'Security best practices and audit guides.',
    links: [
      { label: 'Security Checklist', href: '#' },
      { label: 'Common Vulnerabilities', href: '#' },
      { label: 'Auditing Guide', href: '#' },
    ]
  },
];

export default function DocsPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
              Developer Docs
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to build on Brixs. From getting started to advanced patterns.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {docCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-700 bg-gray-900/50 hover:bg-gray-800/50 transition-colors group"
              >
                <div className="mb-6 text-white group-hover:text-gray-300 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-gray-400 mb-6">{category.description}</p>
                <ul className="space-y-3">
                  {category.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        → {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
