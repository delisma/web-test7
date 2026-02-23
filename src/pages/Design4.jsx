import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Pagination from '../components/Pagination';

export default function Design4() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#D4AF37] font-serif selection:bg-[#D4AF37]/30 selection:text-white pb-32">
      {/* Dark Luxury Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_60%)]" />
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      <nav className="relative z-10 p-8 flex items-center justify-between border-b border-[#D4AF37]/10 w-full max-w-7xl mx-auto">
        <div className="text-xl tracking-[0.3em] font-light uppercase text-white">
          T4 <span className="text-[#D4AF37]">Canvas</span>
        </div>
        <div className="hidden md:flex gap-12 text-xs tracking-[0.2em] uppercase text-gray-400">
          <a href="#" className="hover:text-[#D4AF37] transition-colors duration-500">The Atelier</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors duration-500">Masterpieces</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors duration-500">Membership</a>
        </div>
        <button className="text-xs tracking-[0.2em] border border-[#D4AF37]/30 px-6 py-2 uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-500">
          Enter
        </button>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-40 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-6 flex items-center gap-4"
        >
          <div className="w-12 h-[1px] bg-[#D4AF37]/50" />
          <span className="tracking-[0.3em] text-[10px] uppercase text-[#D4AF37]/80">The Pinnacle of Artificial Intelligence</span>
          <div className="w-12 h-[1px] bg-[#D4AF37]/50" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tight text-white mb-8"
        >
          Uncompromised <br />
          <span className="italic font-normal text-[#D4AF37]">Artistry.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 font-sans font-light max-w-2xl leading-relaxed mb-16"
        >
          An exclusive sanctuary for elite creators. Harness the combined power of Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream without limitations.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center"
        >
          <button className="px-12 py-4 bg-[#D4AF37] text-black text-sm tracking-[0.2em] uppercase hover:bg-white transition-colors duration-500 text-center">
            Acquire Access
          </button>
          <button className="flex items-center gap-4 px-8 py-4 text-sm tracking-[0.2em] uppercase text-white hover:text-[#D4AF37] transition-colors duration-500">
            <span className="p-3 border border-[#D4AF37]/30 rounded-full flex items-center justify-center">
              <Play size={14} fill="currentColor" />
            </span>
            View Exhibition
          </button>
        </motion.div>

      </main>

      {/* Elegant Image Showcase Area */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[3/4] bg-[#111] border border-[#D4AF37]/10 p-8 flex flex-col justify-end group overflow-hidden"
        >
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000" />
           
           <div className="relative z-20">
              <span className="text-[#D4AF37] tracking-[0.2em] text-xs uppercase mb-2 block">001</span>
              <h2 className="text-2xl text-white font-light">Nano Banana Architecture</h2>
           </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[3/4] bg-[#111] border border-[#D4AF37]/10 p-8 flex flex-col justify-end group overflow-hidden mt-0 md:mt-16"
        >
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000" />
           
           <div className="relative z-20">
              <span className="text-[#D4AF37] tracking-[0.2em] text-xs uppercase mb-2 block">002</span>
              <h2 className="text-2xl text-white font-light">Flux Dimensional Forms</h2>
           </div>
        </motion.div>
      </section>

      <Pagination theme="dark" />
    </div>
  );
}
