import { motion } from 'framer-motion';
import { Leaf, Droplets, Wind, Sun } from 'lucide-react';
import Pagination from '../components/Pagination';

export default function Design6() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A5D4E] font-sans selection:bg-[#E5ECE5]">
      {/* Organic Background Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] bg-[#E8F0E8] opacity-80 mix-blend-multiply blur-xl"
        />
        <motion.div 
          animate={{ 
            borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
            rotate: [0, -45, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -left-[10%] w-[60vw] h-[60vw] bg-[#F4EDE4] opacity-80 mix-blend-multiply blur-xl"
        />
      </div>

      <nav className="relative z-10 p-8 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-[#2C3B2E]">
          <Leaf size={28} className="text-[#849B87]" />
          T4 Canvas
        </div>
        <div className="hidden md:flex gap-10 text-base font-medium text-[#6B7B6D]">
          <a href="#" className="hover:text-[#2C3B2E] transition-colors relative group">
            Environment
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#849B87] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#" className="hover:text-[#2C3B2E] transition-colors relative group">
            Models
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#849B87] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#" className="hover:text-[#2C3B2E] transition-colors relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#849B87] group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
        <button className="px-8 py-3 rounded-full bg-[#2C3B2E] text-[#FDFBF7] font-medium hover:bg-[#4A5D4E] transition-colors shadow-lg shadow-[#2C3B2E]/20">
          Cultivate
        </button>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-16">
        
        <div className="flex-1 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-[#2C3B2E] mb-6 leading-[0.9]">
              Grow Your <br />
              <span className="italic text-[#849B87] font-serif">Imagination.</span>
            </h1>
            <p className="text-xl text-[#6B7B6D] max-w-lg mb-10 leading-relaxed">
              Plant a seed. Watch it bloom. Seamlessly access Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in a calm, stress-free environment. One flat fee for unlimited growth.
            </p>

            <div className="flex gap-4 items-center">
              <button className="px-8 py-4 rounded-full bg-[#849B87] text-[#FDFBF7] font-medium text-lg hover:bg-[#6B7B6D] transition-all shadow-md">
                Start Planting
              </button>
              <button className="px-8 py-4 rounded-full border-2 border-[#849B87]/30 text-[#4A5D4E] font-medium text-lg hover:border-[#849B87] transition-all">
                Learn how it works
              </button>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 w-full relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative aspect-square w-full max-w-md mx-auto"
          >
            {/* Soft Organic Card Shape */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-xl border border-white rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] shadow-[0_20px_50px_rgba(44,59,46,0.05)] p-12 flex flex-col items-center justify-center text-center">
               <div className="flex gap-4 mb-8">
                 <div className="w-12 h-12 rounded-full bg-[#F4EDE4] flex items-center justify-center text-[#A67C52]"><Wind /></div>
                 <div className="w-12 h-12 rounded-full bg-[#E8F0E8] flex items-center justify-center text-[#849B87] translate-y-4"><Droplets /></div>
                 <div className="w-12 h-12 rounded-full bg-[#FFF5E1] flex items-center justify-center text-[#D4A373]"><Sun /></div>
               </div>
               <h3 className="text-2xl font-semibold text-[#2C3B2E] mb-4">A Natural Workflow</h3>
               <p className="text-[#6B7B6D]">No invasive credits. No arbitrary limits. Just a fluid progression from thought to magnificent realization.</p>
            </div>
            
            {/* Floating Image element */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 w-48 h-64 bg-white p-2 pb-8 rounded-lg shadow-xl shadow-[#2C3B2E]/10 rotate-[-8deg]"
            >
              <div className="w-full h-full bg-[#E8F0E8] overflow-hidden rounded">
                <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1854&auto=format&fit=crop" alt="Organic" className="w-full h-full object-cover opacity-80" />
              </div>
            </motion.div>
          </motion.div>
        </div>

      </main>

      <Pagination theme="light" />
    </div>
  );
}
