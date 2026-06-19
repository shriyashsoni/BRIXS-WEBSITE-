'use client';

import { SolutionTemplate } from '@/components/SolutionTemplate';

export default function CDKPage() {
  return (
    <SolutionTemplate
      title="Brixs CDK"
      subtitle="Chain Development Kit"
      description="Launch your own L3 blockchain in minutes. The Chain Development Kit provides templates, tooling, and infrastructure for deploying custom blockchains."
      features={[
        { title: 'Easy Deployment', desc: 'CLI tool for one-command chain deployment' },
        { title: 'Pre-configured', desc: 'Optimized defaults for common use cases' },
        { title: 'Customizable', desc: 'Full control over chain parameters' },
        { title: 'Instant Liquidity', desc: 'Access Brixs liquidity pools automatically' },
      ]}
    />
  );
}
