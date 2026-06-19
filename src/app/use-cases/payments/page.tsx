'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { VideoPlayer } from '@/components/VideoPlayer';
import { ModelShowcase } from '@/components/3d/ModelShowcase';
import { Footer } from '@/components/Footer';
import { videoAssets } from '@/lib/videoAssets';

export default function PaymentsPage() {
  return (
    <main className="text-white min-h-screen">
      <Header />
      
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Gasless Payments
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Frictionless micropayments for emerging markets. Process millions of transactions with zero gas fees.
            </p>
          </motion.div>

          <VideoPlayer
            src={videoAssets.useCases.payments}
            title="Payment Architecture"
            className="mt-16 max-w-4xl mx-auto aspect-video shadow-2xl"
          />
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'Zero Fees', desc: 'Gasless transactions for maximum conversion' },
            { title: 'Instant Finality', desc: 'Settle payments in under 1 second' },
            { title: 'Global Reach', desc: 'Support for any fiat on/off ramp' },
            { title: 'Compliance Ready', desc: 'Built-in AML/KYC integration' },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-white/10 bg-white/5 backdrop-blur rounded-lg hover:bg-white/10 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <ModelShowcase
        title="Payment Infrastructure"
        models={videoAssets.gallery.slice(9, 12)}
        layout="grid"
      />

      <Footer />
    </main>
  );
}
