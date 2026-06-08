import { motion } from 'framer-motion';

const tourCategories = [
  {
    title: 'Coastal & Beach Tours',
    location: 'Tangalle & Mirissa Shores',
    image: 'https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=2070',
  },
  {
    title: 'Cultural & Heritage Tours',
    location: 'Sigiriya & Anuradhapura Ancient Cities',
    image: 'https://res.cloudinary.com/dtscqhcop/image/upload/v1780397071/large_gamz2a.jpg',
  },
  {
    title: 'Highland & Hill Country Expeditions',
    location: 'Ella & Nuwara Eliya Tea Estates',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2070',
  },
  {
    title: 'Elite Wilderness & Safaris',
    location: 'Yala & Wilpattu Private Reserves',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068',
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto bg-white">
      {/* SECTION HEADER: High-Contrast Editorial Style */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
        <div>
          <p className="text-xs uppercase tracking-luxury text-[#D4AF37] mb-3 font-bold">
            Bespoke Curations
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-normal text-[#0F0F0F]">
            Signature Luxury Tours
          </h2>
        </div>
        <p className="text-[#0F0F0F] text-sm max-w-md font-normal leading-relaxed border-l-2 border-black/10 pl-6">
          Immersive, privately guided expeditions engineered to showcase the profound architectural marvels, vibrant heritage, and raw natural beauty of the island.
        </p>
      </div>

      {/* CATEGORIES GRID: Balanced 4-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tourCategories.map((tour, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group relative h-[550px] overflow-hidden rounded-sm cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500 border border-black/5"
          >
            {/* Base Image Container Layer */}
            <div className="absolute inset-0 bg-neutral-900" />
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-95 transition-opacity duration-500"
              style={{ backgroundImage: `url(${tour.image})` }}
            />
            
            {/* High-Contrast Shading Matrix: Ensures absolute text legibility on white/light theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent group-hover:from-black/95 transition-all duration-500" />

            {/* Typography & Interactive Design Details */}
            <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end z-10">
              <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2 font-bold drop-shadow-sm">
                {tour.location}
              </p>
              <h3 className="font-serif text-2xl text-white font-normal mb-5 leading-tight tracking-wide group-hover:text-[#E6CA65] transition-colors duration-300 drop-shadow-md">
                {tour.title}
              </h3>
              
              {/* Animated Interactive Accent Line */}
              <div className="w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;