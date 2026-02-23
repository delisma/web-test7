import { motion } from 'framer-motion';
import { Hexagon, Cpu, Coins, Shield, Network } from 'lucide-react';
import Pagination from '../components/Pagination';

export default function Design5() {
  return (
    <div className="min-h-screen bg-[#070514] text-fuchsia-300 font-sans overflow-x-hidden selection:bg-fuchsia-500/40">
      {/* Holographic Grid Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(217, 70, 239, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(217, 70, 239, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(1000px) rotateX(60deg) scale(2.5) translateY(-10%)',
          transformOrigin: 'top center'
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-t from-[#070514] via-[#070514]/80 to-transparent pointer-events-none z-0" />

      {/* Floating Orbs */}
      <motion.div 
        animate={{ y: [0, -40, 0], scale: [1, 1.1, 1], filter: ['blur(40px)', 'blur(60px)', 'blur(40px)'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-1/4 left-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[80px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], scale: [1, 1.2, 1], filter: ['blur(50px)', 'blur(70px)', 'blur(50px)'] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none z-0"
      />

      <nav className="relative z-10 p-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Hexagon className="text-fuchsia-400" fill="currentColor" fillOpacity={0.2} />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400">T4.Network</span>
        </div>
        <div className="hidden md:flex gap-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-6 py-2 text-sm font-medium text-fuchsia-200">
          <a href="#" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.8)] transition-all">Tokenomics</a>
          <a href="#" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.8)] transition-all">Ecosystem</a>
          <a href="#" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.8)] transition-all">Generators</a>
        </div>
        <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-fuchsia-600 hover:from-fuchsia-500 to-cyan-600 hover:to-cyan-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(217,70,239,0.4)] transition-all hover:scale-105">
          Connect Wallet
        </button>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, type: "spring" }}
           className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300 text-sm font-medium mb-8 backdrop-blur-md"
        >
          <Network size={16} /> V2 Core is Live
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-fuchsia-200 to-fuchsia-900 mb-6 drop-shadow-[0_0_30px_rgba(217,70,239,0.3)] leading-tight"
        >
          Decentralized <br /> Intelligence.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg text-fuchsia-200/70 max-w-2xl mx-auto mb-12"
        >
          A single fixed-rate gateway to the most advanced image generation models on the chain. Empower your creativity with Nano Banana Pro, Flux 2, and more.
        </motion.p>

        {/* Floating Holographic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {[
            { icon: Cpu, title: 'Multi-Model Core', desc: 'Seamlessly switch between AI architectures.' },
            { icon: Coins, title: 'Flat-Fee Protocol', desc: 'One monthly transaction. Infinite generational capacity.' },
            { icon: Shield, title: 'Secure Vault', desc: 'Your generated assets, fully encrypted and owned by you.' },
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + (idx * 0.1) }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-b from-fuchsia-500/50 to-transparent"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/20 to-fuchsia-500/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full bg-[#0a061a]/90 backdrop-blur-xl p-8 rounded-[23px] flex flex-col items-center text-center border border-white/5 hover:bg-[#0f0a26]/90 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(217,70,239,0.3)]">
                  <card.icon className="text-fuchsia-300" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-fuchsia-200/60 leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Pagination theme="dark" />
    </div>
  );
}
