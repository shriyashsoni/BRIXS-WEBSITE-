'use client';

import { SolutionTemplate } from '@/components/SolutionTemplate';

export default function WalletPage() {
  return (
    <SolutionTemplate
      title="Wallet Infrastructure"
      subtitle="Account Abstraction & Paymasters"
      description="Next-generation wallet infrastructure with native account abstraction. Abstract away gas fees, execute batched transactions, and build superior user experiences."
      features={[
        { title: 'Account Abstraction', desc: 'Smart contract wallets with full flexibility' },
        { title: 'Paymasters', desc: 'Gasless transactions via protocol-level paymasters' },
        { title: 'Social Recovery', desc: 'Recover accounts via trusted contacts' },
        { title: 'Batch Operations', desc: 'Execute multiple transactions atomically' },
      ]}
    />
  );
}
