'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Mail, MessageSquare, Code2 } from 'lucide-react';

const contactChannels = [
  {
    icon: <Mail className="w-8 h-8" />,
    title: 'Email',
    description: 'Send us an email with your inquiry',
    link: 'hello@brixs.space'
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Discord',
    description: 'Join our community Discord for support',
    link: 'Discord'
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'GitHub',
    description: 'Open issues and discuss on GitHub',
    link: 'GitHub'
  },
];

export default function ContactPage() {
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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a question or want to collaborate? We&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {contactChannels.map((channel, idx) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-700 bg-gray-900/50 hover:bg-gray-800/50 transition-colors text-center"
              >
                <div className="flex justify-center mb-6 text-white">
                  {channel.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{channel.title}</h3>
                <p className="text-gray-400 mb-6">{channel.description}</p>
                <button className="px-6 py-3 border border-gray-700 hover:border-white text-white font-semibold transition-colors">
                  {channel.link}
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
            <h2 className="text-3xl font-bold mb-8">Quick Links</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Report a Security Issue', desc: 'Contact our security team with details' },
                { title: 'Media & Press', desc: 'Press kits and media inquiries' },
                { title: 'Business Development', desc: 'Partnerships and integrations' },
                { title: 'Community & Events', desc: 'Meetups, workshops, and hackathons' },
              ].map((link) => (
                <motion.button
                  key={link.title}
                  whileHover={{ x: 5 }}
                  className="text-left p-6 border-l-2 border-white hover:border-gray-400 transition-colors"
                >
                  <h3 className="font-bold text-lg mb-2">{link.title}</h3>
                  <p className="text-gray-400 text-sm">{link.desc}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
