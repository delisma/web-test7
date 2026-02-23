import { motion } from 'framer-motion';
import { Sparkle, Image as ImageIcon, Wand2, Plus } from 'lucide-react';
import Pagination from '../components/Pagination';

export default function Design7() {
  return (
    <div className="min-h-screen bg-[#FFF4E0] text-[#111] font-sans overflow-x-hidden selection:bg-[#FF3366] selection:text-white pb-32">
      {/* Retro Halftone Dot Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(circle, #111 2px, transparent 2.5px)',
          backgroundSize: '20px 20px',
        }}
      />

      <nav className="relative z-10 border-b-[6px] border-[#111] bg-[#FFCC00] flex justify-between items-center px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#FF3366] rounded-full border-[4px] border-[#111] flex items-center justify-center shadow-[4px_4px_0_0_#111]">
             <Sparkle size={24} className="text-white" strokeWidth={3} />
          </div>
          <span className="text-3xl font-black uppercase tracking-tighter">T4 Canvas</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-xl font-black uppercase">
          <a href="#" className="hover:text-[#FF3366] hover:-translate-y-1 transition-transform">Info</a>
          <a href="#" className="hover:text-[#FF3366] hover:-translate-y-1 transition-transform">Pricing</a>
        </div>

        <button className="px-6 py-3 bg-[#00CCFF] border-[4px] border-[#111] font-black text-xl uppercase rounded-full shadow-[4px_4px_0_0_#111] hover:shadow-[0_0_0_0_#111] hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
          Login
        </button>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-20 flex flex-col items-center text-center">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
           animate={{ opacity: 1, scale: 1, rotate: 0 }}
           transition={{ type: "spring", stiffness: 200, damping: 10 }}
           className="absolute top-24 left-10 md:left-20 bg-[#FF3366] border-[4px] border-[#111] text-white px-6 py-3 font-black text-xl uppercase rounded-full shadow-[6px_6px_0_0_#111] z-20 transform -rotate-12"
        >
          New!
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
           animate={{ opacity: 1, scale: 1, rotate: 0 }}
           transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
           className="absolute bottom-60 right-10 md:right-20 bg-[#00CCFF] border-[4px] border-[#111] px-6 py-3 font-black text-xl uppercase rounded-full shadow-[6px_6px_0_0_#111] z-20 transform rotate-6"
        >
          Unlimited!
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="text-7xl md:text-[10rem] font-black uppercase leading-[0.8] tracking-tighter text-[#111] mb-8 [text-shadow:6px_6px_0_#fff,12px_12px_0_#111]"
        >
          Image <br/> Maker <br/> <span className="text-[#00CCFF]">3000!</span>
        </motion.h1>

        <div className="bg-white border-[6px] border-[#111] p-8 max-w-3xl rounded-3xl shadow-[12px_12px_0_0_#111] mb-16 relative">
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#FFCC00] rounded-full border-[4px] border-[#111] shadow-[4px_4px_0_0_#111] text-[#111] flex items-center justify-center font-black text-2xl">
            <Plus />
          </div>
          <p className="text-2xl md:text-3xl font-bold leading-tight">
            Zap your imagination into reality using completely unlimited AI models like Nano Banana Pro and Flux 2 for one single low price!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { color: 'bg-[#FF3366]', text: 'white', title: 'Nano Banana Pro', shadow: 'shadow-[#111]', icon: Wand2 },
            { color: 'bg-[#00CCFF]', text: '#111', title: 'Flux 2 Engine', shadow: 'shadow-[#111]', icon: Sparkle },
            { color: 'bg-[#FFCC00]', text: '#111', title: 'Seedream Matrix', shadow: 'shadow-[#111]', icon: ImageIcon },
          ].map((card, idx) => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + (idx * 0.1), type: "spring" }}
              whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
              key={card.title}
              className={`${card.color} text-${card.text} border-[5px] border-[#111] rounded-[2rem] p-8 ${card.shadow} shadow-[8px_8px_0_0_#111] flex flex-col items-center justify-center min-h-[250px] cursor-pointer`}
            >
              <div className={`w-20 h-20 bg-white border-[4px] border-[#111] rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0_0_#111]`}>
                <card.icon size={36} color="#111" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black uppercase text-center leading-tight [text-shadow:2px_2px_0_#fff]">{card.title}</h3>
            </motion.div>
          ))}
        </div>

      </main>

      <Pagination theme="light" />
    </div>
  );
}
