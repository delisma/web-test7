import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Pagination from '../components/Pagination';

export default function Design3() {
  return (
    <div className="min-h-screen bg-[#E5E5E5] text-black font-sans selection:bg-black selection:text-white">
      {/* Neo-Brutalist Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="w-full h-full border-[3px] border-black absolute top-0 left-0 m-2 sm:m-4" style={{ width: 'calc(100% - 16px)', height: 'calc(100% - 16px)' }} />
      </div>

      <nav className="relative z-10 flex items-center justify-between p-6 sm:p-8 border-b-4 border-black bg-[#E5E5E5]">
        <div className="text-3xl font-black uppercase tracking-tighter">
          T4 [CANVAS]
        </div>
        <div className="hidden pt-2 md:flex gap-8 font-bold uppercase text-sm">
          <a href="#" className="border-b-2 border-transparent hover:border-black transition-colors">Models</a>
          <a href="#" className="border-b-2 border-transparent hover:border-black transition-colors">Pricing</a>
        </div>
        <button className="px-6 py-2 bg-[#FFEB3B] border-4 border-black font-black uppercase shadow-[4px_4px_0_0_#000] hover:shadow-[0_0_0_0_#000] hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
          Launch App
        </button>
      </nav>

      <main className="relative z-10 px-6 sm:px-8 py-12 lg:py-20 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 lg:divide-x-4 divide-black border-b-4 border-black">
        
        {/* Main Hero Section */}
        <div className="col-span-1 lg:col-span-8 lg:pr-12">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[12vw] lg:text-[8rem] font-black uppercase leading-[0.85] tracking-tighter mb-8"
          >
            GEN<br/>ERATE<br/>
            <span className="text-[#F44336] [text-shadow:4px_4px_0_#000]">EV<br/>ERY<br/>THI<br/>NG.</span>
          </motion.h1>
          
          <div className="p-6 bg-white border-4 border-black shadow-[8px_8px_0_0_#000] max-w-2xl mb-12">
            <p className="text-xl sm:text-2xl font-bold leading-snug">
              Stop counting credits. Pay once. Get unlimited access to <span className="bg-[#FFEB3B] px-1">Nano Banana Pro</span>, <span className="bg-[#00BCD4] px-1 text-white">Flux 2</span>, <span className="bg-[#4CAF50] px-1 text-white">gpt-image-1.5</span>, and <span className="bg-[#9C27B0] px-1 text-white">Seedream</span>.
            </p>
          </div>

          <button className="group relative inline-flex items-center gap-4 px-10 py-6 bg-[#4CAF50] border-4 border-black font-black text-2xl uppercase shadow-[8px_8px_0_0_#000] hover:shadow-[#000_12px_12px_0_0] transition-all">
            Start Creating <ArrowUpRight size={32} className="group-hover:rotate-45 transition-transform" />
          </button>
        </div>

        {/* Right Sidebar Section */}
        <div className="col-span-1 lg:col-span-4 lg:pl-12 flex flex-col gap-8">
          <div className="bg-[#00BCD4] p-6 border-4 border-black shadow-[8px_8px_0_0_#000] transform rotate-2 hover:rotate-0 transition-transform">
            <h3 className="text-3xl font-black uppercase mb-4 border-b-4 border-black pb-2">Features</h3>
            <ul className="space-y-3 font-bold text-lg">
              <li className="flex items-center gap-2"><span className="w-3 h-3 bg-black rounded-full shadow-[2px_2px_0_0_#fff]" /> Unlimited Gens</li>
              <li className="flex items-center gap-2"><span className="w-3 h-3 bg-black rounded-full shadow-[2px_2px_0_0_#fff]" /> 4 Top-Tier Models</li>
              <li className="flex items-center gap-2"><span className="w-3 h-3 bg-black rounded-full shadow-[2px_2px_0_0_#fff]" /> Power-User UI</li>
              <li className="flex items-center gap-2"><span className="w-3 h-3 bg-black rounded-full shadow-[2px_2px_0_0_#fff]" /> Zero Friction</li>
            </ul>
          </div>

          <div className="bg-[#FF9800] p-6 border-4 border-black shadow-[8px_8px_0_0_#000] flex-1 min-h-[300px] flex flex-col justify-between">
            <div className="text-6xl font-black">
              $<span className="text-8xl">20</span><span className="text-2xl">/mo</span>
            </div>
            <p className="font-bold text-xl uppercase leading-tight mt-4">
              Flat fee. <br/> No hidden costs. <br/> Ever.
            </p>
          </div>
        </div>

      </main>

      {/* Marquee Footer */}
      <div className="relative z-10 w-full overflow-hidden border-b-4 border-black bg-[#9C27B0] py-4 text-white">
        <div className="flex whitespace-nowrap gap-8 animate-[marquee_15s_linear_infinite] px-4 font-black text-4xl uppercase tracking-tighter">
          <span>* T4 CANVAS *</span>
          <span>THE ULTIMATE WORKFLOW</span>
          <span>* NO CREDITS *</span>
          <span>JUST PROMPT</span>
          <span>* T4 CANVAS *</span>
          <span>THE ULTIMATE WORKFLOW</span>
          <span>* NO CREDITS *</span>
        </div>
      </div>

      <Pagination theme="dark" />
    </div>
  );
}
