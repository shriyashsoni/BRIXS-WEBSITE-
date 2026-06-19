'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const jobs = [
  { title: 'Senior Smart Contract Engineer', location: 'Remote', level: 'Senior' },
  { title: 'Full Stack Protocol Developer', location: 'Remote', level: 'Mid-Level' },
  { title: 'DevOps & Infrastructure Engineer', location: 'Remote', level: 'Senior' },
  { title: 'Product Manager - Core Protocol', location: 'Remote', level: 'Senior' },
  { title: 'Community & Developer Relations', location: 'Remote', level: 'Mid-Level' },
  { title: 'Grant Program Manager', location: 'Remote', level: 'Mid-Level' },
];

export default function CareersPage() {
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
              Join Our Mission
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Help us build the infrastructure for the next billion users of Web3. We&apos;re hiring top talent across engineering, product, and community.
            </p>
          </motion.div>

          <div className="space-y-4 mt-12">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="p-6 border border-gray-700 bg-gray-900/50 hover:bg-gray-800/50 transition-colors group cursor-pointer flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-gray-100 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.level}</span>
                  </div>
                </div>
                <ArrowRight size={20} className="text-gray-500 group-hover:text-white transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
