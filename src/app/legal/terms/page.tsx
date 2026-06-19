'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function TermsPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
          
          <div className="space-y-8 text-gray-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using the Brixs website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on Brixs website for personal, non-commercial transitory viewing only.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
              <p>The materials on Brixs website are provided on an 'as is' basis. Brixs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
              <p>In no event shall Brixs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Brixs website, even if Brixs or a Brixs authorized representative has been notified orally or in writing of the possibility of such damage.</p>
            </div>

            <div className="pt-8 mt-8 border-t border-gray-700 text-gray-500">
              <p>Last updated: June 19, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
