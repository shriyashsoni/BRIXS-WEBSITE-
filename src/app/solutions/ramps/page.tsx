'use client';

import { SolutionTemplate } from '@/components/SolutionTemplate';

export default function RampsPage() {
  return (
    <SolutionTemplate
      title="On/Off Ramps"
      subtitle="Fiat to Crypto Integrations"
      description="Seamless fiat integration with 100+ payment methods. From bank transfers to mobile wallets, support every regional payment method."
      features={[
        { title: 'Global Coverage', desc: '100+ countries and payment methods' },
        { title: 'Instant Settlement', desc: 'Sub-minute transaction confirmation' },
        { title: 'Compliance Ready', desc: 'Built-in AML/KYC/CFT checks' },
        { title: 'Low Fees', desc: 'Competitive rates across all corridors' },
      ]}
    />
  );
}
