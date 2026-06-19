'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MegaMenu } from './navigation/MegaMenu';
import { ArrowRight } from 'lucide-react';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-blue-900/30 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-white text-gray-950 flex items-center justify-center font-bold text-lg">
            Ⓑ
          </div>
          <span className="font-bold text-lg tracking-tighter hidden sm:inline">BRIXS</span>
        </Link>

        {/* Navigation */}
        <div className="flex-1">
          <MegaMenu />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button className="hidden md:inline-flex items-center gap-1 text-sm px-4 py-2 text-white hover:text-cyan-400 transition-colors border border-white/20 hover:border-white/40">
            Search
            <span className="text-xs text-white/50 ml-2">⌘K</span>
          </button>
          <button className="flex items-center gap-2 text-sm px-6 py-2 bg-white text-blue-900 font-semibold hover:bg-white/90 transition-colors">
            Launch App
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
