import { motion } from 'framer-motion';

const Meditation = () => {
  return (
    <section id="meditation" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto bg-white overflow-hidden border-t border-black/10">
      
      {/* SECTION HEADER: Compressed spacing for an intentional editorial layout */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-xs uppercase tracking-luxury text-[#D4AF37] mb-3 font-bold">
          Inner Balance
        </p>
        <h2 className="font-serif text-4xl md:text-6xl font-normal text-[#0F0F0F] tracking-wide leading-tight">
          Sanctuaries of Stillness <br />& Mindful <span className="italic font-light text-[#D4AF37]">Restoration</span>
        </h2>
        <p className="text-sm text-neutral-600 font-normal leading-relaxed max-w-lg mx-auto mt-4">
          Decompress within architectural forest pavilions, sensory deprivation suites, and open-air yoga shalas overlooking the rhythmic swell of the ocean.
        </p>
      </div>

      {/* MODERN ASYMMETRIC CINEMATIC GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Massive, Full-Height Panoramic Focal Piece (7 Columns wide) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 relative h-[500px] md:h-[730px] overflow-hidden rounded-sm group shadow-xl border border-black/5"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 p-10 z-10">
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block mb-1 drop-shadow-sm">Deep Mindfulness</span>
            <h3 className="font-serif text-3xl text-white font-normal tracking-wide">Vélours Silent Pavilions</h3>
            <p className="text-white/70 text-xs font-light max-w-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
              Architectural masterworks positioned on isolated precipices, designed to isolate sound and ground your focus.
            </p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Staggered, Vertically Stacked Detail Blocks (5 Columns wide) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Top Right Block: Medium-Sized Portrait Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[300px] md:h-[340px] overflow-hidden rounded-sm group shadow-md border border-black/5"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block mb-1 drop-shadow-sm">Holistic Cadence</span>
              <h3 className="font-serif text-2xl text-white font-normal tracking-wide">Sunrise Asana Journeys</h3>
            </div>
          </motion.div>

          {/* Bottom Right Block: Medium-Sized Landscape Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[300px] md:h-[358px] overflow-hidden rounded-sm group shadow-md border border-black/5"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block mb-1 drop-shadow-sm">Ayurvedic Heritage</span>
              <h3 className="font-serif text-2xl text-white font-normal tracking-wide">Botanical Baths</h3>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Meditation;