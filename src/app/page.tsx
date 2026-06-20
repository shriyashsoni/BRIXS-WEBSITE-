'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Fuel, Link as LinkIcon, Code2, Shield, Sparkles, Users, GitBranch, Rocket } from 'lucide-react';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#1a1a1a] text-white font-sans selection:bg-green-500 selection:text-black">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-white via-green-500 to-white bg-clip-text text-transparent"
          >
            BRIXS
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex gap-8 items-center text-sm"
          >
            <a href="#solutions" className="hover:text-green-500 transition-colors hidden md:block">Solutions</a>
            <a href="#ecosystem" className="hover:text-green-500 transition-colors hidden md:block">Ecosystem</a>
            <button className="px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500/10 transition-colors">
              Docs
            </button>
          </motion.div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,216,79,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,216,79,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* Animated molecules/nodes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-5xl text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 backdrop-blur-md text-sm text-green-400 font-medium"
          >
            <Sparkles className="inline mr-2" size={16} />
            Advanced 3D Molecular Architecture
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-tight"
          >
            <span className="block">The Open Liquidity</span>
            <span className="block gradient-text">Stack for Web3</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Brixs Chain is a zero-gas, high-throughput Layer 2 bootstrapped by the Apna Coding community. Unifying fragmented liquidity across the Ethereum ecosystem with molecular-precision performance.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-black font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 w-full sm:w-auto justify-center">
              Start Building
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-3 px-8 py-4 border border-green-500/50 text-green-400 font-semibold hover:bg-green-500/10 transition-all duration-300 w-full sm:w-auto justify-center glow-border">
              Explore Ecosystem
            </button>
          </motion.div>

          {/* 3D Animation from your assets */}
          <motion.div
            variants={itemVariants}
            className="mt-20 relative w-full h-[400px] md:h-[500px]"
          >
            <Image
              src="/animations/brixs_core_cube_cluster_0050.webp"
              alt="Brixs Core Cube Cluster"
              fill
              className="object-contain animate-float"
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS RIBBON */}
      <section className="border-y border-green-500/20 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              className="text-center"
            >
              <div className="text-sm text-green-400 uppercase tracking-wider font-semibold mb-2">Transactions Per Second</div>
              <div className="text-4xl font-mono font-bold text-green-500">10,000+</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-sm text-green-400 uppercase tracking-wider font-semibold mb-2">Average Fee</div>
              <div className="text-4xl font-mono font-bold text-green-500">$0.0001</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-sm text-green-400 uppercase tracking-wider font-semibold mb-2">Total Transactions</div>
              <div className="text-4xl font-mono font-bold text-green-500">1.2M+</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-sm text-green-400 uppercase tracking-wider font-semibold mb-2">Active Addresses</div>
              <div className="text-4xl font-mono font-bold text-green-500">150K+</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY BRIXS - WITH 3D ANIMATIONS */}
      <section id="solutions" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4">Why Build on Brixs?</h2>
          <p className="text-xl text-gray-400">Institutional-grade infrastructure with molecular-precision performance.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: 'Unmatched Speed', desc: 'Sub-second block times for high-frequency trading and gaming.', anim: 0 },
            { icon: Fuel, title: 'Zero Gas Fees', desc: 'Native Account Abstraction and Paymasters built into the protocol.', anim: 20 },
            { icon: LinkIcon, title: 'Unified Liquidity', desc: 'Seamless Ethereum ecosystem integration without capital fragmentation.', anim: 40 },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-8 border border-green-500/20 bg-gradient-to-b from-green-500/5 to-transparent backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                <Image
                  src={`/animations/brixs_core_cube_cluster_${String(item.anim).padStart(4, '0')}.webp`}
                  alt="Animation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <item.icon className="w-12 h-12 mb-6 text-green-500 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-green-500/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4">From Zero to Mainnet in Minutes</h2>
          <p className="text-gray-400 text-lg">Three simple steps to deploy unstoppable applications.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent hidden md:block"></div>

          {[
            { num: '1', title: 'Connect', desc: 'Add Brixs RPC to your wallet and development tools.' },
            { num: '2', title: 'Bridge', desc: 'Transfer assets from Ethereum instantly and seamlessly.' },
            { num: '3', title: 'Deploy', desc: 'Launch your dApp with zero friction and atomic finality.' },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative z-10 text-center bg-gradient-to-b from-white/5 to-transparent p-8 rounded-lg border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-green-600 text-black rounded-full flex items-center justify-center text-3xl font-mono font-black mb-6">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section id="ecosystem" className="py-32 px-6 max-w-7xl mx-auto border-t border-green-500/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4">Built on Brixs</h2>
          <p className="text-gray-400 text-lg">Leading protocols and applications trust Brixs infrastructure.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {['AAVE', 'UNISWAP', 'LIDO', 'MAKER', 'CURVE'].map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border border-green-500/20 hover:border-green-500/50 bg-gradient-to-b from-white/5 to-transparent rounded-lg flex items-center justify-center h-24 hover:bg-green-500/10 transition-all duration-300 cursor-pointer"
            >
              <span className="font-bold text-gray-300">{logo}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GRANTS CTA */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-green-500/10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">Build the Future,<br />Get Funded</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The Brixs Foundation dedicates 25% of the token supply to accelerate ecosystem growth. Receive up to $100K in developer grants.
            </p>
            <button className="px-8 py-4 bg-green-500 text-black font-bold hover:bg-green-600 transition-colors">
              Apply for a Grant
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="p-8 border border-green-500/30 bg-gradient-to-b from-green-500/10 to-transparent rounded-lg">
              <Rocket className="w-8 h-8 mb-4 text-green-500" />
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Followers</div>
            </div>
            <div className="p-8 border border-green-500/30 bg-gradient-to-b from-green-500/10 to-transparent rounded-lg">
              <Users className="w-8 h-8 mb-4 text-green-500" />
              <div className="text-3xl font-bold mb-2">20K+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Builders</div>
            </div>
            <div className="p-8 border border-green-500/30 bg-gradient-to-b from-green-500/10 to-transparent rounded-lg col-span-2">
              <GitBranch className="w-8 h-8 mb-4 text-green-500" />
              <div className="text-3xl font-bold mb-2">5,000+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Commits</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-green-500/10 py-20 px-6 bg-gradient-to-b from-transparent to-green-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2 md:col-span-2">
              <h2 className="text-3xl font-black tracking-tighter mb-4 text-green-500">BRIXS</h2>
              <p className="text-gray-400 max-w-sm">The high-throughput, zero-gas L2 designed for the next billion users.</p>
            </div>
            {[
              { title: 'Network', links: ['Explorer', 'Bridge', 'Faucet', 'RPC'] },
              { title: 'Developers', links: ['Documentation', 'GitHub', 'Grants', 'Whitepaper'] },
              { title: 'Ecosystem', links: ['dApps', 'Blog', 'About Us', 'Careers'] },
              { title: 'Community', links: ['Discord', 'Twitter', 'Forum', 'Support'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold mb-6 text-green-400">{col.title}</h4>
                <ul className="space-y-3 text-gray-400">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="hover:text-green-500 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-green-500/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© 2026 Brixs Foundation. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-green-500 transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
