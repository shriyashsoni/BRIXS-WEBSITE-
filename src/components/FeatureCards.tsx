'use client';

import { motion } from 'framer-motion';
import { Zap, Fuel, Link as LinkIcon, ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  index?: number;
}

function FeatureCard({ icon, title, description, href, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative p-8 border border-gray-700 bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 mb-6 text-white group-hover:text-gray-300 transition-colors">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gray-100 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
          {description}
        </p>

        {href && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all"
          >
            Learn more
            <ArrowRight size={16} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

const features = [
  {
    icon: <Zap className="w-full h-full" />,
    title: 'Unmatched Speed',
    description: 'Sub-second block times with instant finality. Experience 10,000+ TPS designed for high-frequency trading and real-time applications.',
    href: '/solutions/l2-chain'
  },
  {
    icon: <Fuel className="w-full h-full" />,
    title: 'Zero Gas Fees',
    description: 'Native account abstraction and paymasters built into protocol. Abstract gas away entirely for seamless user experiences.',
    href: '/solutions/wallet'
  },
  {
    icon: <LinkIcon className="w-full h-full" />,
    title: 'Unified Liquidity',
    description: 'Seamlessly connects with Ethereum ecosystem. Never fracture your userbase&apos;s capital with our crosschain infrastructure.',
    href: '/solutions/crosschain'
  },
];

export function FeatureCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}
