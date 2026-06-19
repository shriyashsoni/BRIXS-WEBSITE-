"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Fuel, Link as LinkIcon, Code2, Shield, Twitter, MessageSquare, Github } from "lucide-react";
import AnimatedModel from "@/components/AnimatedModel";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center overflow-hidden">
        {/* Abstract Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Hero 3D Motion Graphic */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none mix-blend-screen overflow-hidden">
          <AnimatedModel 
            src="/3d-models/model-1.mp4" 
            className="w-full max-w-[1200px] h-[800px] scale-150 md:scale-110" 
            priority={true} 
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300 font-medium">
            Brixs Mainnet is Live
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight">
            The Ethereum L2 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              built for builders
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            High-throughput, zero-gas architecture designed to scale the next billion users.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-none hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center">
              Add Brixs to MetaMask
              <ArrowRight size={18} />
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-none hover:bg-white/5 transition-colors w-full sm:w-auto justify-center">
              Read Docs
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. CHAIN STATS BAR */}
      <section className="border-y border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
            <div>
              <div className="text-gray-500 text-sm mb-1 uppercase tracking-wider">TPS</div>
              <div className="text-3xl font-mono font-bold">10,000+</div>
            </div>
            <div>
              <div className="text-gray-500 text-sm mb-1 uppercase tracking-wider">Avg Fee</div>
              <div className="text-3xl font-mono font-bold">$0.0001</div>
            </div>
            <div>
              <div className="text-gray-500 text-sm mb-1 uppercase tracking-wider">Total TXs</div>
              <div className="text-3xl font-mono font-bold">1.2M+</div>
            </div>
            <div>
              <div className="text-gray-500 text-sm mb-1 uppercase tracking-wider">Active Addr</div>
              <div className="text-3xl font-mono font-bold">150K+</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY BRIXS */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Why build on Brixs?</h2>
          <p className="text-xl text-gray-400">Institutional-grade infrastructure, minimal complexity.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -5 }} className="p-8 border border-white/10 bg-white/[0.02] group relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 mix-blend-screen pointer-events-none">
               <AnimatedModel src="/3d-models/model-2.mp4" className="w-full h-full scale-125" />
            </div>
            <div className="relative z-10">
              <Zap className="w-12 h-12 mb-6 text-white group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Unmatched Speed</h3>
              <p className="text-gray-400 leading-relaxed">Fast finality and instant bridging. Experience sub-second block times designed for high-frequency trading and gaming.</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="p-8 border border-white/10 bg-white/[0.02] group relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 mix-blend-screen pointer-events-none">
               <AnimatedModel src="/3d-models/model-3.mp4" className="w-full h-full scale-125" />
            </div>
            <div className="relative z-10">
              <Fuel className="w-12 h-12 mb-6 text-white group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Zero Gas Fees</h3>
              <p className="text-gray-400 leading-relaxed">Native Account Abstraction and Paymasters built into the protocol level. Abstract gas away entirely.</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="p-8 border border-white/10 bg-white/[0.02] group relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 mix-blend-screen pointer-events-none">
               <AnimatedModel src="/3d-models/model-4.mp4" className="w-full h-full scale-125" />
            </div>
            <div className="relative z-10">
              <LinkIcon className="w-12 h-12 mb-6 text-white group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Unified Liquidity</h3>
              <p className="text-gray-400 leading-relaxed">Connects seamlessly with the broader Ethereum ecosystem. Never fracture your userbase's capital.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">From zero to mainnet in minutes</h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 hidden md:block -z-10"></div>
          
          <div className="flex-1 text-center bg-black p-6">
            <div className="w-16 h-16 mx-auto bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mb-6 font-mono">1</div>
            <h3 className="text-2xl font-bold mb-2">Connect</h3>
            <p className="text-gray-400">Add the Brixs RPC to your wallet and tooling in one click.</p>
          </div>
          
          <div className="flex-1 text-center bg-black p-6">
            <div className="w-16 h-16 mx-auto bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mb-6 font-mono">2</div>
            <h3 className="text-2xl font-bold mb-2">Bridge</h3>
            <p className="text-gray-400">Move assets from Ethereum or Sepolia instantly using our native bridge.</p>
          </div>
          
          <div className="flex-1 text-center bg-black p-6">
            <div className="w-16 h-16 mx-auto bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mb-6 font-mono">3</div>
            <h3 className="text-2xl font-bold mb-2">Deploy</h3>
            <p className="text-gray-400">Launch your dApp or Agent with zero friction and instant finality.</p>
          </div>
        </div>
      </section>

      {/* 5. ECOSYSTEM PREVIEW */}
      <section className="py-24 border-y border-white/10 overflow-hidden bg-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">Built on Brixs</h2>
        </div>
        <div className="flex w-[200%] animate-[slide_20s_linear_infinite]">
          {/* Marquee effect for logos - simulated with text for now */}
          <div className="flex w-1/2 justify-around items-center opacity-50 grayscale">
            <div className="text-3xl font-bold">AAVE</div>
            <div className="text-3xl font-bold">UNISWAP</div>
            <div className="text-3xl font-bold">CHAINLINK</div>
            <div className="text-3xl font-bold">LIDO</div>
            <div className="text-3xl font-bold">MAKER</div>
          </div>
          <div className="flex w-1/2 justify-around items-center opacity-50 grayscale">
            <div className="text-3xl font-bold">AAVE</div>
            <div className="text-3xl font-bold">UNISWAP</div>
            <div className="text-3xl font-bold">CHAINLINK</div>
            <div className="text-3xl font-bold">LIDO</div>
            <div className="text-3xl font-bold">MAKER</div>
          </div>
        </div>
      </section>

      {/* 6. GRANTS CTA & 7. COMMUNITY */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold tracking-tight mb-6">Build on Brixs, get funded.</h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Join the open money stack and receive up to $100K in developer grants. 
              We are actively funding infrastructure, DeFi primitives, and AI Agents.
            </p>
            <button className="px-8 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
              Apply for a Grant
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 border border-white/10">
              <Twitter className="w-8 h-8 mb-4 text-gray-400" />
              <div className="text-3xl font-bold mb-1">50K+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Followers</div>
            </div>
            <div className="p-6 border border-white/10">
              <MessageSquare className="w-8 h-8 mb-4 text-gray-400" />
              <div className="text-3xl font-bold mb-1">20K+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Builders</div>
            </div>
            <div className="p-6 border border-white/10 col-span-2">
              <Github className="w-8 h-8 mb-4 text-gray-400" />
              <div className="text-3xl font-bold mb-1">5,000+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Commits</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-white text-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12">
          <div className="col-span-2 md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">BRIXS</h2>
            <p className="text-gray-600 max-w-sm">
              The high-throughput, zero-gas architecture designed to scale the next billion users.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Network</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-black">Explorer</a></li>
              <li><a href="#" className="hover:text-black">Bridge</a></li>
              <li><a href="#" className="hover:text-black">Faucet</a></li>
              <li><a href="#" className="hover:text-black">RPC</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Developers</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-black">Documentation</a></li>
              <li><a href="#" className="hover:text-black">GitHub</a></li>
              <li><a href="#" className="hover:text-black">Grants</a></li>
              <li><a href="#" className="hover:text-black">Whitepaper</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Ecosystem</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-black">dApps</a></li>
              <li><a href="#" className="hover:text-black">Blog</a></li>
              <li><a href="#" className="hover:text-black">About Us</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 Brixs Foundation. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-black">Terms of Use</a>
            <a href="#" className="hover:text-black">Privacy Policy</a>
          </div>
        </div>
      </footer>
      
      {/* Required for the marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
