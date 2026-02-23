import { motion } from 'framer-motion';
import { Layers3, Command, Cuboid } from 'lucide-react';
import Pagination from '../components/Pagination';

export default function Design8() {
  return (
    <div className="min-h-screen bg-[#F6F7F9] text-gray-800 font-sans selection:bg-indigo-100 selection:text-indigo-900 pb-20">
      {/* Soft Ambient Lighting */ }
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_0%,#E0E7FF_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_100%,#F3E8FF_0%,transparent_50%)]" />
      </div>

      <nav className="relative z-10 p-8 max-w-[1400px] mx-auto flex items-center justify-between">
         <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-2xl bg-white shadow-[0_10px_20px_rgba(0,0,0,0.05),0_2px_5px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center hover:-translate-y-1 transition-transform">
             <Layers3 size={20} className="text-indigo-500" />
           </div>
           <span className="font-bold text-xl tracking-tight text-gray-900">T4 Canvas</span>
         </div>
         <div className="hidden flex-1 md:flex justify-center gap-2">
           <div className="bg-white/70 backdrop-blur-xl border border-gray-200/50 p-1.5 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.03)] flex gap-1">
             <a href="#" className="px-5 py-2 rounded-full bg-white shadow-sm text-sm font-medium text-gray-900">Platform</a>
             <a href="#" className="px-5 py-2 rounded-full text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Pricing</a>
             <a href="#" className="px-5 py-2 rounded-full text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">API</a>
           </div>
         </div>
         <button className="px-6 py-2.5 rounded-2xl bg-indigo-600 text-white text-sm font-semibold shadow-[0_10px_20px_rgba(79,70,229,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:bg-indigo-700 hover:-translate-y-0.5 transition-all">
           Log In
         </button>
      </nav>

      <main className="relative z-10 max-w-[1400px] mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Typography & CTA */}
        <div className="max-w-2xl px-4 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-semibold mb-8 border border-indigo-100/50 shadow-sm">
              <SparklesIcon /> Ultimate Generation Studio
            </div>
            
            <h1 className="text-6xl md:text-[5rem] font-bold tracking-tight text-gray-900 mb-8 leading-[1.05]">
              Spatial <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-500">
                Intelligence.
              </span>
            </h1>

            <p className="text-xl text-gray-500 mb-12 leading-relaxed">
              Elevate your creative workflow. Access Nano Banana Pro, Flux 2, and gpt-image-1.5 through a spatial interface designed for modern professionals. One simple subscription.
            </p>

            <div className="flex gap-4">
              <button className="flex-1 sm:flex-none px-8 py-4 rounded-2xl bg-gray-900 text-white font-semibold text-lg shadow-[0_12px_24px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all flex items-center justify-center gap-2">
                Download App <Command size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right 3D Cards Showcase */}
        <div className="relative h-[600px] flex items-center justify-center perspective-[2000px]">
           <motion.div
              initial={{ rotateY: -30, rotateX: 10, opacity: 0, x: 50 }}
              animate={{ rotateY: -15, rotateX: 5, opacity: 1, x: 0 }}
              transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
              className="absolute z-30 w-full max-w-md bg-white p-6 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.08),0_10px_20px_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(255,255,255,0.5)] border border-white/60 backdrop-blur-xl"
              style={{ transformStyle: 'preserve-3d' }}
           >
              <div className="flex items-center justify-between mb-8" style={{ transform: 'translateZ(30px)' }}>
                 <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                   <Cuboid size={24} />
                 </div>
                 <div className="px-3 py-1 bg-green-50 text-green-600 font-bold text-xs rounded-full">
                   ONLINE
                 </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ transform: 'translateZ(40px)' }}>Flux 2 Architecture</h3>
              <p className="text-gray-500 mb-6" style={{ transform: 'translateZ(20px)' }}>Running optimized prompt generation vectors via main protocol.</p>
              
              <div className="w-full h-48 bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden relative" style={{ transform: 'translateZ(50px)' }}>
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                 {/* Generation progress bar mock */}
                 <div className="absolute bottom-4 left-4 right-4 h-1.5 bg-white/30 rounded-full overflow-hidden backdrop-blur-md">
                   <div className="h-full bg-white w-2/3 rounded-full" />
                 </div>
              </div>
           </motion.div>

           <motion.div
              initial={{ rotateY: -30, rotateX: 10, opacity: 0, z: -100 }}
              animate={{ rotateY: -15, rotateX: 5, opacity: 1, z: -100, x: -80, y: 40 }}
              transition={{ duration: 1.5, delay: 0.2, type: "spring", bounce: 0.4 }}
              className="absolute z-20 w-full max-w-sm bg-gray-50 p-6 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-gray-200/50"
           >
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-10 h-10 rounded-full bg-purple-100 border-2 border-white shadow-sm flex items-center justify-center text-purple-600 font-bold text-xs">NB</div>
                 <div>
                   <h4 className="font-bold text-gray-900 text-sm">Nano Banana Pro</h4>
                   <p className="text-xs text-gray-500">Awaiting prompt...</p>
                 </div>
              </div>
              <div className="w-full h-12 bg-white rounded-xl border border-gray-200 shadow-inner flex items-center px-4">
                <div className="w-2 h-4 bg-purple-500 animate-pulse" />
              </div>
           </motion.div>
        </div>

      </main>

      <Pagination theme="light" />
    </div>
  );
}

function SparklesIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C12 16.4772 7.52285 12 2 12C7.52285 12 12 7.52285 12 2C12 7.52285 16.4772 12 22 12C16.4772 12 12 16.4772 12 22Z" fill="currentColor"/>
    </svg>
  );
}
