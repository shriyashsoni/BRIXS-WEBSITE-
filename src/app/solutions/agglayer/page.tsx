'use client';

import { SolutionTemplate } from '@/components/SolutionTemplate';

export default function AggLayerPage() {
  return (
    <SolutionTemplate
      title="Brixs AggLayer"
      subtitle="Liquidity Aggregation Network"
      description="Liquidity aggregated across all Brixs L3 chains and external networks. One pool, infinite liquidity sources."
      features={[
        { title: 'Cross-Chain Aggregation', desc: 'Best prices from all connected chains' },
        { title: 'MEV Protection', desc: 'Privacy-preserving transaction execution' },
        { title: 'Deep Liquidity', desc: 'Access billions in aggregated liquidity' },
        { title: 'Instant Routing', desc: 'Automatic optimal path discovery' },
      ]}
    />
  );
}
