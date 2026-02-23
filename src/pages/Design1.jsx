import { motion } from 'framer-motion';
import { Terminal, Zap, Database, Command, Code2 } from 'lucide-react';
import Pagination from '../components/Pagination';

export default function Design1() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-green-400 font-mono overflow-x-hidden selection:bg-green-500/30 selection:text-green-200">
      {/* Glitch Overlay Effect - using pure CSS pseudo-elements for simplicity without extra images */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 border-b border-green-500/20 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Terminal className="text-green-500" strokeWidth={1.5} />
          <span className="text-lg font-bold tracking-widest text-green-500 shadow-green-500/50 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">T4_CANVAS_OS</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm tracking-widest text-green-500/70">
          <a href="#" className="hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] transition-all">[MODELS]</a>
          <a href="#" className="hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] transition-all">[WORKSPACE]</a>
          <a href="#" className="hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] transition-all">[PRICING]</a>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs mb-8 tracking-widest text-green-400">
              <Zap size={14} className="animate-pulse" />
              SYSTEM.STATUS: ONLINE // UNLIMITED_ACCESS
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold uppercase tracking-tighter text-white mb-6 leading-none [text-shadow:0_0_20px_rgba(34,197,94,0.4),2px_2px_0_#0a0a0c,-2px_-2px_0_#22c55e]">
              Generate <br />
              <span className="text-green-500">Beyond Limits</span>
            </h1>
            
            <p className="text-green-500/60 text-lg mb-10 max-w-xl leading-relaxed">
              &gt; INITIALIZING TOP TIER AI MODELS: NANO BANANA PRO, FLUX 2, GPT-IMAGE-1.5, SEEDREAM.<br/>
              &gt; FLAT_FEE_PROTOCOL: ACTIVE.<br/>
              &gt; NO CREDITS. NO LIMITS. PURE CREATION.<br/>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-transparent border-2 border-green-500 text-green-500 font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-green-500 hover:text-black hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]">
                <span className="relative z-10">Access Terminal</span>
                <div className="absolute inset-0 h-full w-full translate-y-full bg-green-500 group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </button>
              <button className="px-8 py-4 bg-[#111115] border border-green-500/20 text-green-500/70 hover:text-green-400 hover:border-green-500/50 uppercase tracking-widest transition-all">
                View Documentation
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Content / Cyberpunk Terminal Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 w-full"
        >
          <div className="relative border border-green-500/30 bg-black/50 backdrop-blur p-1 rounded-sm shadow-[0_0_30px_rgba(34,197,94,0.1)]">
            {/* Terminal Header */}
            <div className="flex justify-between items-center border-b border-green-500/30 px-4 py-2 bg-[#0c0f0c]">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500/80 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500/80 rounded-full" />
                <div className="w-3 h-3 bg-green-500/80 rounded-full" />
              </div>
              <span className="text-xs text-green-500/50">root@t4_canvas:~</span>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 h-[400px] overflow-hidden relative flex flex-col justify-end text-sm sm:text-base">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0c]/80 z-10" />
              <div className="space-y-4 relative z-0 text-green-500/80">
                <p>&gt; Loading models...</p>
                <p>&gt; [OK] Nano Banana Pro (Gemini) loaded.</p>
                <p>&gt; [OK] Flux 2 integration stable.</p>
                <p>&gt; [OK] Seedream matrix online.</p>
                <p>&gt; Receiving prompt: "cyberpunk city skyline, neon glow, insanely detailed, 8k..."</p>
                <p className="animate-pulse">&gt; Rendering image... [|||||||||||||||||||| 98%]</p>
              </div>

              {/* Holographic Image Overlay mock */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 w-48 h-48 border border-green-500/40 bg-[#0a2010]/80 backdrop-blur-sm z-20 p-2 transform rotate-6 shadow-[0_0_20px_rgba(34,197,94,0.2)]"
              >
                <div className="w-full h-full bg-[#111] animate-pulse relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-40"></div>
                  <Code2 className="text-green-500/30 relative z-10 h-16 w-16" strokeWidth={1} />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </main>

      {/* Models Ticker */}
      <div className="w-full overflow-hidden border-y border-green-500/20 bg-[#0c0f0c] py-4 relative z-10">
        <div className="flex whitespace-nowrap gap-12 animate-[marquee_20s_linear_infinite] px-4 font-bold text-green-500/40 tracking-widest text-sm uppercase">
          <span>// Nano Banana Pro</span>
          <span className="text-green-500/20">+++</span>
          <span>Flux 2</span>
          <span className="text-green-500/20">+++</span>
          <span>gpt-image-1.5</span>
          <span className="text-green-500/20">+++</span>
          <span>Seedream</span>
          <span className="text-green-500/20">+++</span>
          <span>Unlimited Access</span>
          <span className="text-green-500/20">+++</span>
          <span>Nano Banana Pro</span>
          <span className="text-green-500/20">+++</span>
          <span>Flux 2</span>
          <span className="text-green-500/20">+++</span>
          <span>gpt-image-1.5</span>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      
      <Pagination theme="dark" />
    </div>
  );
}
