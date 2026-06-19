'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Stat {
  label: string;
  value: string;
  unit?: string;
}

const stats: Stat[] = [
  { label: 'TPS', value: '10,000', unit: '+' },
  { label: 'Avg Fee', value: '$0.0001', unit: '' },
  { label: 'Total TXs', value: '1.2M', unit: '+' },
  { label: 'Active Addresses', value: '150K', unit: '+' },
];

function AnimatedStat({ label, value, unit }: Stat) {
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-gray-500 text-xs md:text-sm mb-2 uppercase tracking-wider font-semibold">
        {label}
      </div>
      <div className="text-2xl md:text-4xl font-mono font-bold text-white">
        {displayValue}
        <span className="text-lg text-gray-500 ml-1">{unit}</span>
      </div>
    </motion.div>
  );
}

export function StatsBar() {
  return (
    <div className="border-t border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-700">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}
