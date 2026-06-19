'use client';

import { SolutionTemplate } from '@/components/SolutionTemplate';

export default function CrosschainPage() {
  return (
    <SolutionTemplate
      title="Crosschain Interop"
      subtitle="Unified Liquidity Protocol"
      description="Connect seamlessly across multiple blockchains with our unified liquidity protocol. One-click interoperability without fragmenting capital."
      features={[
        { title: 'Atomic Swaps', desc: 'Instantaneous asset swaps across chains' },
        { title: 'Unified Pools', desc: 'Single liquidity source for multiple networks' },
        { title: 'No Bridges', desc: 'Native crosschain communication built-in' },
        { title: 'MEV Protected', desc: 'Privacy-preserving crosschain transactions' },
      ]}
    />
  );
}
