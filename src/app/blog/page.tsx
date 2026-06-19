'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: 'Brixs Mainnet Launch',
    excerpt: 'The Brixs L2 is now live on Ethereum mainnet. Here\'s what\'s new and what to expect.',
    date: 'June 19, 2026',
    category: 'News',
  },
  {
    title: 'Zero Gas Fees: How It Works',
    excerpt: 'Deep dive into our account abstraction implementation and how we achieve zero gas fees.',
    date: 'June 15, 2026',
    category: 'Technical',
  },
  {
    title: 'Crosschain Liquidity Explained',
    excerpt: 'Understanding our unified liquidity protocol and how it eliminates fragmentation.',
    date: 'June 10, 2026',
    category: 'Education',
  },
];

export default function BlogPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
              The Brixs Blog
            </h1>
            <p className="text-xl text-gray-400">
              Latest updates, technical insights, and community stories from the Brixs ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((blog, idx) => (
              <motion.article
                key={blog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-700 bg-gray-900/50 hover:bg-gray-800/50 transition-colors group cursor-pointer"
              >
                <div className="inline-block mb-4 px-3 py-1 bg-gray-800 text-xs font-semibold text-gray-300">
                  {blog.category}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-100 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-400 mb-6">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{blog.date}</span>
                  <ArrowRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
