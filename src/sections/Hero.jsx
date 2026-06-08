import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image with Cinematic Scale Effect */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.85 }} 
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-[url('https://res.cloudinary.com/dtscqhcop/image/upload/v1780371787/MIRISSA-HSE-FINISHED-4-ELLA-BRIDGE_3-1-1024x683_wuutz9.jpg')] bg-cover bg-center"
      />
      
      {/* Premium Multi-Layer Overlay for Max Text Legibility */}
      {/* 1. Subtle global dark tint so white text pops */}
      <div className="absolute inset-0 bg-black/25" />
      
      {/* 2. Soft radial vignette focusing darkness only in the center behind the words */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,transparent_70%)]" />
      
      {/* 3. Luxury White Gradient Overlay at the bottom to melt smoothly into your white page structure */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6 flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xs md:text-sm uppercase tracking-luxury text-luxury-goldLight mb-4 font-semibold drop-shadow-md"
        >
          A New Era of Bespoke Exploration
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="font-serif text-5xl md:text-8xl font-medium tracking-wide text-white leading-tight mb-10 drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
        >
          Uncompromised <br />
          <span className="italic font-light text-luxury-goldLight">Wanderlust</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <button className="bg-black text-white px-9 py-4 text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-luxury-stone transition-all duration-300 rounded-sm shadow-xl shadow-black/10">
            Explore Collection
          </button>
          <button className="border-2 border-white/80 bg-white/10 backdrop-blur-md text-white px-9 py-4 text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-luxury-stone transition-all duration-300 rounded-sm shadow-xl">
            View Showreel
          </button> 
        </motion.div>
      </div>

      {/* Elegant Bottom Border indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] uppercase tracking-widest text-white/70 font-semibold drop-shadow-sm">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
        />
      </div>
    </section>
  );
};

export default Hero;