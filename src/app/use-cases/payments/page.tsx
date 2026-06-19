'use client';

import { SolutionTemplate } from '@/components/SolutionTemplate';

export default function PaymentsPage() {
  return (
    <SolutionTemplate
      title="Payments"
      subtitle="Gasless Micropayments for Emerging Markets"
      description="Enable frictionless payments at scale. Process millions of micro-transactions with zero gas fees, perfect for emerging markets and mobile-first applications."
      features={[
        { title: 'Zero Fees', desc: 'Gasless transactions for maximum conversion' },
        { title: 'Instant Finality', desc: 'Settle payments in under 1 second' },
        { title: 'Global Reach', desc: 'Support for any fiat on/off ramp' },
        { title: 'Compliance Ready', desc: 'Built-in AML/KYC integration' },
      ]}
    />
  );
}
