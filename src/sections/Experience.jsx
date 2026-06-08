import { motion } from 'framer-motion';

const premiumPackages = [
  {
    duration: '07 Nights / 08 Days',
    title: 'The Royal Serendib Escape',
    tagline: 'A seamless journey spanning the historic cultural triangle and the golden Southern shores.',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200',
    link: '#reserve'
  },
  {
    duration: '10 Nights / 11 Days',
    title: 'Teardrop Island Grand Expedition',
    tagline: 'An immersive transit through misty highland tea estates, raw safaris, and private coastal villas.',
    image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=1200',
    link: '#reserve'
  },
  {
    duration: '05 Nights / 06 Days',
    title: 'The Ceylon Heritage & Wellness Sanctuary',
    tagline: 'Curated exclusively for private architectural tours and holistic deep-tissue Ayurvedic retreats.',
    image: 'https://res.cloudinary.com/dtscqhcop/image/upload/v1780398287/images_1_agddr7.jpg',
    link: '#reserve'
  },
  {
    duration: '04 Nights / 05 Days',
    title: 'The Deep Wilpattu Wilderness Odyssey',
    tagline: 'Track elusive leopards from an open-topped, custom-engineered luxury 4x4 safari truck.',
    image: 'https://res.cloudinary.com/dtscqhcop/image/upload/v1780398057/SpiaggiaSelvaggia-1563792552-xl_r4tyva.jpg', // Modern Wild Truck Safari feel
    link: '#reserve'
  },
  {
    duration: '06 Nights / 07 Days',
    title: 'Sanctuary of the Gentle Giants',
    tagline: 'Witness magnificent elephant gatherings up close in Minneriya and private Ruhuna reserves.',
    image: 'https://res.cloudinary.com/dtscqhcop/image/upload/v1780398046/Sri-Lanka-elephants_byg7ff.jpg', // Majestic Elephant Imagery
    link: '#reserve'
  },
  {
    duration: '03 Nights / 04 Days',
    title: 'Avian Horizons & Sinharaja Canopy',
    tagline: 'An elite bird-watching expedition through prime prehistoric rainforests with expert ornithologists.',
    image: 'https://res.cloudinary.com/dtscqhcop/image/upload/v1780398037/1200_bs88db.jpg', // Premium Avian/Bird Imagery
    link: '#reserve'
  }
];

const Experience = () => {
  return (
    <section id="the-experience" className="bg-white py-24 md:py-36 px-6 md:px-12 border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-luxury text-[#D4AF37] mb-3 font-bold">
            Privé Collections
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-normal text-[#0F0F0F] tracking-wide">
            Bespoke Signature Itineraries
          </h2>
          <div className="w-16 h-[1.5px] bg-[#D4AF37] mx-auto mt-6" />
        </div>

        {/* EXPANDED MODULAR GRID: Smooth layout transition from 1 to 2 to 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {premiumPackages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: (idx % 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative h-[400px] w-full overflow-hidden rounded-sm bg-neutral-100 border border-black/5 shadow-md mb-6">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* TYPOGRAPHY LAYER */}
              <div className="flex flex-col items-start px-1">
                {/* Duration Badge */}
                <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-bold mb-2 bg-[#F4F4F4] px-3 py-1 rounded-sm border border-black/5">
                  {pkg.duration}
                </span>

                {/* Package Heading */}
                <h3 className="font-serif text-2xl font-normal text-[#0F0F0F] leading-snug tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300 mb-3">
                  {pkg.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm text-neutral-600 font-normal leading-relaxed mb-6 max-w-sm">
                  {pkg.tagline}
                </p>

                {/* Explore Button */}
                <a 
                  href={pkg.link}
                  className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-[#0F0F0F] relative pb-1 group/btn"
                >
                  Explore Itinerary
                  <span className="absolute bottom-0 left-0 w-8 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover/btn:w-full" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;