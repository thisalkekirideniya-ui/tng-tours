import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT COLUMN: Deep Obsidian High-Contrast Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <p className="text-xs uppercase tracking-luxury text-luxury-gold mb-3 font-bold">
            The Island Sanctuary
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#0F0F0F] leading-tight mb-8">
            Where Mystique <br />Meets Pure <span className="italic font-normal text-luxury-gold">Serendib</span>
          </h2>
          <div className="space-y-6 text-sm text-[#0F0F0F] font-normal leading-relaxed">
            <p>
              Sri Lanka is a rare, multi-sensory masterpiece waiting to be uncovered. It is an island where time slows down, inviting you to move effortlessly from dawn tea-harvesting rituals amidst the misty, emerald peaks of Ella, to absolute, sun-drenched seclusion along the golden, palm-fringed shores of Tangalle.
            </p>
            <p>
              We weave colonial heritage, architectural mastery, and untamed biodiversity into a seamless, private narrative. Whether you are flying by private charter over historic mountain passes or listening to the rhythmic swell of the Indian Ocean from a cliffside villa, this is tropical luxury curated at its absolute pinnacle.
            </p>
          </div>

          {/* Luxury Signature Asset */}
          <div className="mt-10 pt-8 border-t border-black/10">
            <p className="font-serif italic text-xl text-[#0F0F0F] font-semibold">TNG Tours Expedition</p>
            <p className="text-[10px] uppercase tracking-widest text-[#0F0F0F] font-bold mt-1">Est. 2026</p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Overlapping Premium Imagery Layer */}
        <div className="lg:col-span-7 relative h-[500px] md:h-[650px] w-full flex items-center justify-center">
          
          {/* Main Background Image (Tangalle Beachfront) */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-0 w-[70%] h-[75%] overflow-hidden rounded-sm shadow-xl border border-black/10"
          >
            <div 
              className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-1000 ease-out"
              style={{ backgroundImage: `url('https://res.cloudinary.com/dtscqhcop/image/upload/v1780376696/TangalleSriLanka_plnhrg.jpg')` }}
            />
          </motion.div>

          {/* Overlapping Foreground Image (Nine Arch Bridge, Ella) */}
          <motion.div
            initial={{ opacity: 0, y: 100, x: 30 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 bottom-0 w-[50%] h-[60%] overflow-hidden rounded-sm shadow-2xl border-4 border-white z-10"
          >
            <div 
              className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-1000 ease-out"
              style={{ backgroundImage: `url('https://res.cloudinary.com/dtscqhcop/image/upload/v1780376718/free-photo-of-aerial-view-of-nine-arch-bridge-in-ella-sri-lanka_vebk88.jpg')` }}
            />
          </motion.div>

          {/* Decorative geometric accent line */}
          <div className="absolute top-1/2 left-4 w-24 h-[1px] bg-luxury-gold/50 -z-10 hidden md:block" />
        </div>

      </div>
    </section>
  );
};

export default About;