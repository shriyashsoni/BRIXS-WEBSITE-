'use client';

import { SolutionTemplate } from '@/components/SolutionTemplate';

export default function StablecoinsPage() {
  return (
    <SolutionTemplate
      title="Stablecoins"
      subtitle="DeFi Infrastructure & Yield"
      description="Build next-generation stablecoin infrastructure. Deep liquidity, flash-loan resistant, and designed for yield-generating protocols."
      features={[
        { title: 'High Liquidity', desc: 'Deep pools with minimal slippage' },
        { title: 'Yield Strategies', desc: 'Integration with leading DeFi protocols' },
        { title: 'Flash Loan Safe', desc: 'Built-in protections against MEV' },
        { title: 'Oracle Feeds', desc: 'Multiple price feeds for security' },
      ]}
    />
  );
}
