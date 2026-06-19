'use client';

import { SolutionTemplate } from '@/components/SolutionTemplate';

export default function AIAgentsPage() {
  return (
    <SolutionTemplate
      title="Agentic AI"
      subtitle="Infrastructure for Autonomous Trading"
      description="Empower AI agents with full on-chain autonomy. Execute complex strategies, manage portfolios, and trade at machine speed with zero slippage."
      features={[
        { title: 'Agent CLI', desc: 'CLI toolkit for AI agent orchestration' },
        { title: 'Smart Contracts', desc: 'Pre-audited agent deployment templates' },
        { title: 'Real-time Data', desc: 'Oracle feeds for decision making' },
        { title: 'Simulation Engine', desc: 'Backtesting framework for strategies' },
      ]}
    />
  );
}
