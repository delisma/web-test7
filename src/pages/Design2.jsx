import { motion } from 'framer-motion';
import { Layers, Image as ImageIcon, Sparkles, Feather } from 'lucide-react';
import Pagination from '../components/Pagination';

export default function Design2() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 mix-blend-multiply blur-3xl opacity-70"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-cyan-100 to-blue-50 mix-blend-multiply blur-3xl opacity-70"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,250,252,0.8)_100%)] z-0" />
      </div>

      <nav className="relative z-10 p-8 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-800 font-medium tracking-wide">
          <Layers className="text-blue-500" />
          <span>T4 Canvas</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Models</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Pricing</a>
        </div>
        <button className="px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm text-sm font-medium hover:bg-white/80 transition-all">
          Get Started
        </button>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/50 shadow-sm mb-8"
          >
            <Sparkles size={16} className="text-blue-500" />
            <span className="text-sm font-medium text-slate-600">Pure generation, zero friction.</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-light tracking-tight text-slate-900 mb-8"
          >
            Clarity in <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Creation.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            A serene, distraction-free environment for interacting with Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream. Experience unlimited AI image generation through a single flat-fee subscription.
          </motion.p>
        </div>

        {/* Glassmorphism Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Limitless Access', icon: Feather, desc: 'One flat fee. Infinite possibilities. No credit anxiety ever again.' },
            { title: 'Top-Tier Models', icon: Layers, desc: 'Seamlessly switch between the absolute best AI models available today.' },
            { title: 'High-Fidelity Output', icon: ImageIcon, desc: 'Export locally or save to the cloud in stunning 8k resolution.' }
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + (idx * 0.1) }}
              className="group relative p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:bg-white/60 hover:shadow-[0_16px_48px_rgba(0,100,250,0.08)] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center text-blue-500 shadow-sm mb-6 border border-white/50">
                <card.icon strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-slate-500 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <Pagination theme="light" />
    </div>
  );
}
