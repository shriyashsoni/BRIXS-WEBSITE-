'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, participate in governance, or contact us for support.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. Contact us if you wish to exercise any of these rights.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at privacy@brixs.space</p>
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
