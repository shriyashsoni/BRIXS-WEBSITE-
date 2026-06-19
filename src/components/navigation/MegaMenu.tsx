'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface MenuItem {
  label: string;
  href?: string;
  items?: {
    title: string;
    description: string;
    href: string;
  }[];
}

const navItems: MenuItem[] = [
  {
    label: 'Solutions',
    items: [
      { title: 'Brixs L2 Chain', description: 'High-speed network infrastructure', href: '/solutions/l2-chain' },
      { title: 'Crosschain Interop', description: 'Unified liquidity protocol', href: '/solutions/crosschain' },
      { title: 'Wallet Infrastructure', description: 'Account abstraction & paymasters', href: '/solutions/wallet' },
      { title: 'On/Off Ramps', description: 'Fiat to crypto integrations', href: '/solutions/ramps' },
      { title: 'Brixs CDK', description: 'Chain development kit', href: '/solutions/cdk' },
      { title: 'Brixs AggLayer', description: 'Liquidity aggregation', href: '/solutions/agglayer' },
    ]
  },
  {
    label: 'Use Cases',
    items: [
      { title: 'Payments', description: 'Gasless micro-payments', href: '/use-cases/payments' },
      { title: 'Real World Assets', description: 'RWA tokenization', href: '/use-cases/rwas' },
      { title: 'Stablecoins', description: 'DeFi infrastructure', href: '/use-cases/stablecoins' },
      { title: 'Agentic AI', description: 'AI agents on-chain', href: '/use-cases/ai-agents' },
    ]
  },
  {
    label: 'Developers',
    items: [
      { title: 'Documentation', description: 'Technical guides', href: '/docs' },
      { title: 'GitHub', description: 'Open source repos', href: '#' },
      { title: 'Grants', description: 'Developer grants', href: '/developers/grants' },
      { title: 'Whitepaper', description: 'Technical thesis', href: '/whitepaper' },
    ]
  },
  {
    label: 'Community',
    items: [
      { title: 'Events', description: 'Hackathons & meetups', href: '/community/events' },
      { title: 'Discord', description: 'Community chat', href: '#' },
      { title: 'Forum', description: 'Discussions & EIPs', href: '#' },
      { title: 'Governance', description: 'DAO voting', href: '/governance' },
    ]
  },
  {
    label: 'Company',
    items: [
      { title: 'About', description: 'Our story', href: '/company/about' },
      { title: 'Vision', description: 'Our vision', href: '/company/vision' },
      { title: 'Blog', description: 'Latest updates', href: '/blog' },
      { title: 'Careers', description: 'Join our team', href: '/careers' },
    ]
  },
];

function MenuPanel({ items }: { items: MenuItem['items'] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 mt-0 bg-gray-900 border border-gray-700 min-w-max z-50"
    >
      <div className="grid grid-cols-2 gap-8 p-8 min-w-[600px]">
        {items?.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group"
          >
            <div className="mb-2">
              <h4 className="font-semibold text-white group-hover:text-gray-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

function NavItem({ item }: { item: MenuItem }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.items) {
    return (
      <Link href={item.href || '#'} className="text-sm text-white hover:text-gray-400 transition-colors">
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm text-white hover:text-gray-400 transition-colors">
        {item.label}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && item.items && <MenuPanel items={item.items} />}
      </AnimatePresence>
    </div>
  );
}

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-40">
      <div className="hidden lg:flex items-center gap-12">
        {navItems.map((item) => (
          <NavItem key={item.label} item={item} />
        ))}
      </div>

      {/* Mobile menu button */}
      <button
        className="lg:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="space-y-1">
          <div className={`h-0.5 w-6 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`h-0.5 w-6 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`h-0.5 w-6 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-700 lg:hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <div key={item.label}>
                  <h4 className="font-semibold text-white mb-2">{item.label}</h4>
                  <div className="flex flex-col gap-2 ml-4">
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
