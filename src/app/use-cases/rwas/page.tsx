'use client';

import { SolutionTemplate } from '@/components/SolutionTemplate';

export default function RWAsPage() {
  return (
    <SolutionTemplate
      title="Real World Assets"
      subtitle="Enterprise-Grade Tokenization"
      description="Tokenize real-world assets with institutional-grade infrastructure. From real estate to commodities, bring tangible value on-chain with full compliance."
      features={[
        { title: 'Permissioning', desc: 'Fine-grained access control for assets' },
        { title: 'Custody Ready', desc: 'Audited and institutional-grade security' },
        { title: 'Regulatory Compliant', desc: 'Built-in compliance frameworks' },
        { title: 'Dividend Distribution', desc: 'Automated payouts to token holders' },
      ]}
    />
  );
}
