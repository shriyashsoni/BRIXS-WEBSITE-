"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { VideoPlayer } from "@/components/VideoPlayer";
import { ModelShowcase } from "@/components/3d/ModelShowcase";
import { StatsBar } from "@/components/StatsBar";
import { FeatureCards } from "@/components/FeatureCards";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { videoAssets } from "@/lib/videoAssets";

export default function Home() {
  return (
    <main className="text-white min-h-screen">
      {/* Header */}
      <Header />

      {/* 1. HERO SECTION WITH FEATURED VIDEO */}
      <section className="relative pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-6 px-4 py-1.5 border border-white/20 bg-white/5 backdrop-blur-md text-sm text-white/80 font-medium">
              Brixs Mainnet is Live ✨
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight">
              The Ethereum L2
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">built for builders</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              High-throughput, zero-gas architecture designed to scale the next billion users.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 font-semibold hover:bg-white/90 transition-colors">
                Add to MetaMask
                <ArrowRight size={18} />
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors">
                Read Docs
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Featured 3D Model Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16"
          >
            <VideoPlayer
              src={videoAssets.hero[0].video}
              title={videoAssets.hero[0].title}
              className="max-w-4xl mx-auto aspect-video shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. 3D MODELS GALLERY */}
      <ModelShowcase
        title="Architectural Showcase"
        description="Explore the 3D architecture behind BRIXS L2 chain infrastructure"
        models={videoAssets.gallery.slice(0, 6)}
        layout="grid"
      />

      {/* 3. STATS BAR */}
      <StatsBar />

      {/* 4. FEATURED VIDEO WITH FEATURES */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Why build on Brixs?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Institutional-grade infrastructure, minimal complexity.
              </p>
              <FeatureCards />
            </div>
            <VideoPlayer
              src={videoAssets.solutions.l2Chain}
              title="L2 Chain Architecture"
              className="aspect-square"
            />
          </motion.div>
        </div>
      </section>

      {/* 5. FEATURES SECTION */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Why build on Brixs?
          </h2>
          <p className="text-xl text-gray-400">
            Institutional-grade infrastructure, minimal complexity.
          </p>
        </motion.div>

        <FeatureCards />
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-t border-gray-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            From zero to mainnet in minutes
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-700 hidden md:block -z-10" />

          {[
            { num: 1, title: "Connect", desc: "Add the Brixs RPC to your wallet in one click." },
            { num: 2, title: "Bridge", desc: "Move assets from Ethereum instantly using our bridge." },
            { num: 3, title: "Deploy", desc: "Launch your dApp with zero friction and instant finality." },
          ].map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex-1 text-center p-8"
            >
              <div className="w-16 h-16 mx-auto bg-white text-gray-950 rounded-full flex items-center justify-center text-2xl font-bold mb-6 font-mono">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. ECOSYSTEM */}
      <section className="py-24 border-t border-gray-700 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-6"
        >
          <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">
            Built on Brixs
          </h2>
        </motion.div>

        <div className="flex w-[200%] animate-[slide_20s_linear_infinite]">
          {[1, 2].map((group) => (
            <div
              key={group}
              className="flex w-1/2 justify-around items-center opacity-50 grayscale px-6"
            >
              {["AAVE", "UNISWAP", "CHAINLINK", "LIDO", "MAKER"].map((name) => (
                <div key={name} className="text-xl md:text-3xl font-bold whitespace-nowrap">
                  {name}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* Marquee animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `
      }} />
    </main>
  );
}
