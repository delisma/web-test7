import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Pagination({ theme = 'dark' }) {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Parse current design number from path (e.g., '/1' -> 1)
  const currentNum = parseInt(currentPath.replace('/', '')) || 0;
  
  if (currentNum === 0 || isNaN(currentNum)) return null;

  const prevNum = currentNum > 1 ? currentNum - 1 : 8;
  const nextNum = currentNum < 8 ? currentNum + 1 : 1;

  const isLight = theme === 'light';

  const containerClasses = cn(
    "fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-3 rounded-full backdrop-blur-md border shadow-2xl z-50 transition-all duration-300",
    isLight 
      ? "bg-white/80 border-gray-200 text-gray-800"
      : "bg-black/80 border-white/10 text-white"
  );

  const linkClasses = cn(
    "flex items-center justify-center p-2 rounded-full transition-colors",
    isLight ? "hover:bg-gray-200/80" : "hover:bg-white/20"
  );

  const numBtnClasses = (num) => cn(
    "w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300",
    num === currentNum
      ? (isLight ? "bg-black text-white" : "bg-white text-black")
      : (isLight ? "hover:bg-gray-200 text-gray-600" : "hover:bg-white/20 text-gray-400")
  );

  return (
    <div className={containerClasses} style={{ animation: "slideUp 0.5s ease-out 1s both" }}>
      <Link to="/" className={linkClasses} title="Home">
        <Home size={18} />
      </Link>
      
      <div className={cn("w-px h-6 mx-2", isLight ? "bg-gray-300" : "bg-white/20")} />
      
      <Link to={`/${prevNum}`} className={linkClasses} title="Previous">
        <ChevronLeft size={20} />
      </Link>

      <div className="flex items-center gap-1 mx-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <Link key={num} to={`/${num}`} className={numBtnClasses(num)}>
            {num}
          </Link>
        ))}
      </div>

      <Link to={`/${nextNum}`} className={linkClasses} title="Next">
        <ChevronRight size={20} />
      </Link>
    </div>
  );
}
