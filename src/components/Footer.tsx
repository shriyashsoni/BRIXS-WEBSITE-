'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Share2, MessageSquare } from 'lucide-react';

const footerSections = [
  {
    title: 'Network',
    links: [
      { label: 'Explorer', href: '#' },
      { label: 'Bridge', href: '#' },
      { label: 'Faucet', href: '#' },
      { label: 'RPC', href: '#' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'GitHub', href: '#' },
      { label: 'Grants', href: '/developers/grants' },
      { label: 'Whitepaper', href: '/whitepaper' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Discord', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'Forum', href: '#' },
      { label: 'Governance', href: '/governance' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/company/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

const legalLinks = [
  { label: 'Terms of Use', href: '/legal/terms' },
  { label: 'Privacy Policy', href: '/legal/privacy' },
  { label: 'Security', href: '#' },
];

const socialLinks = [
  { icon: Share2, href: '#', label: 'Twitter' },
  { icon: Code2, href: '#', label: 'GitHub' },
  { icon: MessageSquare, href: '#', label: 'Discord' },
];

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-700 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white text-gray-950 flex items-center justify-center font-bold text-lg">
                Ⓑ
              </div>
              <span className="font-bold text-lg">BRIXS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The high-throughput, zero-gas architecture built to scale the next billion users.
            </p>
          </motion.div>

          {/* Footer sections */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-6 uppercase text-sm tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-gray-500 text-sm">
              © 2026 Brixs Foundation. All rights reserved.
            </p>
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-white text-gray-400 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
