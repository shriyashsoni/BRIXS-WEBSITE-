'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { VideoPlayer } from '@/components/VideoPlayer';
import { ModelShowcase } from '@/components/3d/ModelShowcase';
import { Footer } from '@/components/Footer';
import { videoAssets } from '@/lib/videoAssets';

export default function AboutPage() {
  return (
    <main className="text-white min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              About Brixs
            </h1>
            <p className="text-xl text-white/70 max-w-3xl leading-relaxed mb-12">
              Brixs is building the infrastructure for the next billion users of Web3. Our mission is to make blockchain technology accessible, scalable, and useful for everyone.
            </p>
            
            <VideoPlayer
              src={videoAssets.company.about}
              title="Our Infrastructure"
              className="mt-12 max-w-4xl aspect-video shadow-2xl"
            />
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
                className="p-8 border border-white/10 bg-white/5 backdrop-blur rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.title}</div>
                <div className="text-white/70">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 p-12 border border-white/10 bg-white/5 backdrop-blur rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Our Values</h2>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-4">
                <span className="text-cyan-400 font-bold">●</span>
                <span><strong>Accessibility:</strong> Making Web3 simple for everyone</span>
              </li>
              <li className="flex gap-4">
                <span className="text-cyan-400 font-bold">●</span>
                <span><strong>Performance:</strong> Uncompromising speed and reliability</span>
              </li>
              <li className="flex gap-4">
                <span className="text-cyan-400 font-bold">●</span>
                <span><strong>Transparency:</strong> Open-source by default</span>
              </li>
              <li className="flex gap-4">
                <span className="text-cyan-400 font-bold">●</span>
                <span><strong>Decentralization:</strong> Community-driven governance</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <ModelShowcase
        title="Brixs Infrastructure"
        models={videoAssets.gallery.slice(12, 15)}
        layout="grid"
      />

      <Footer />
    </main>
  );
}
