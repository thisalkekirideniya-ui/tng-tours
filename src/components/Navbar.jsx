import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // The navbar will cleanly fade out completely before the user clears the hero page viewport (approx 600px)
  const heroHeightThreshold = 600;
  const isVisibleOnFirstPage = scrollY < heroHeightThreshold;
  
  // Dynamic opacity logic: perfectly clear at top, smoothly dissolves as you scroll down
  const currentOpacity = Math.max(0, 1 - scrollY / (heroHeightThreshold * 0.7));

  const navLinks = ['Destinations', 'The Experience', 'Private Charter', 'Reserve'];

  return (
    <>
      <AnimatePresence>
        {isVisibleOnFirstPage && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: currentOpacity }}
            exit={{ opacity: 0, y: -20 }}
            style={{ opacity: currentOpacity }}
            transition={{ 
              y: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.2 } // Snappy, clean opacity tracking
            }}
            className="fixed top-0 left-0 w-full z-50 py-6 text-white bg-gradient-to-b from-black/40 via-black/10 to-transparent drop-shadow-md pointer-events-auto"
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
              {/* Logo Branding */}
              <a href="#" className="flex items-center gap-2 tracking-luxury font-serif text-xl font-light group">
                <span className="text-white">TNG</span> 
                <span className="text-luxury-gold font-sans text-xs tracking-widest hidden sm:inline group-hover:text-luxury-goldLight transition-colors">
                  TOURS
                </span>
              </a>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center gap-10">
                {navLinks.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-xs uppercase tracking-widest font-medium text-white/90 hover:text-luxury-goldLight transition-colors duration-300 relative group"
                  >
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>

              {/* Luxury Action Button Link */}
<div className="hidden md:block">
  <a 
    href="#reserve" 
    className={`px-6 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-500 border inline-block ${
      scrollY > 50 
        ? 'border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white' 
        : 'border-white text-white hover:bg-white hover:text-luxury-stone'
    }`}
  >
    Inquire Now
  </a>
</div>

              {/* Mobile Menu Icon Toggle */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="md:hidden p-1 text-white transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-white z-40 pt-32 px-10 flex flex-col gap-8 shadow-2xl"
          >
            {navLinks.map((link, idx) => (
              <motion.a 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsOpen(false)}
                className="font-serif text-3xl text-luxury-cream hover:text-luxury-gold transition-colors border-b border-black/5 pb-2"
              >
                {link}
              </motion.a>
            ))}
            
            <button className="mt-8 w-full bg-luxury-gold text-white py-4 text-sm uppercase tracking-widest font-semibold rounded-sm">
              Inquire Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;