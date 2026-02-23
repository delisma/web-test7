import { Link } from 'react-router-dom';
import { Sparkles, Palette, Layers, Box, Cpu, Zap, Dna, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const designs = [
  { path: '/1', title: 'Cyberpunk Neon', desc: 'Dark, glowing accents, glitch effects', icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
  { path: '/2', title: 'Minimalist Glass', desc: 'Soft gradients, frosted glass panels', icon: Layers, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { path: '/3', title: 'Neo-Brutalism', desc: 'Harsh borders, bold typography', icon: Box, color: 'text-red-500', bg: 'bg-red-500/10' },
  { path: '/4', title: 'Dark Luxury', desc: 'Deep blacks, gold/silver accents', icon: Sparkles, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { path: '/5', title: 'Web3 Hologram', desc: 'Grid lines, neon gradients, floating UI', icon: Rocket, color: 'text-fuchsia-400', bg: 'bg-fuchsia-400/10' },
  { path: '/6', title: 'Organic Tech', desc: 'Earthy tones, rounded corners, fluidity', icon: Dna, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { path: '/7', title: 'Retro Pop', desc: 'Vibrant primaries, dot-matrix patterns', icon: Palette, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  { path: '/8', title: 'Futuristic Spatial', desc: 'Clean white, deep shadows, 3D cards', icon: Cpu, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans p-6 md:p-12 lg:p-24 selection:bg-fuchsia-500/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-400 mb-6">
            <Sparkles size={16} className="text-fuchsia-400" />
            <span>T4 Canvas Marketing Suite</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            8 Dimensions of <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400">Design Excellence.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            A limitless power-user interface for AI image generation. Explore eight unique aesthetic explorations designed to push the boundaries of modern UI engineering.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {designs.map((design, idx) => (
            <motion.div key={design.path} variants={itemVariants}>
              <Link to={design.path} className="group block h-full">
                <div className="relative h-full p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${design.bg}`} />
                  
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${design.bg} ${design.color}`}>
                    <design.icon size={24} strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-sm font-mono text-slate-500 mb-2">0{idx + 1}</div>
                      <h2 className="text-xl font-bold text-white mb-2">{design.title}</h2>
                      <p className="text-sm text-slate-400">{design.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-24 pt-8 border-t border-white/10 text-center text-sm text-slate-500 space-y-2"
        >
          <p>&copy; 2026 T4 Canvas by elismatiQ.</p>
          <p className="text-xs">Serving models: Nano Banana Pro (Gemini) &bull; Flux 2 &bull; gpt-image-1.5 &bull; Seedream</p>
        </motion.footer>
      </div>
    </div>
  );
}
