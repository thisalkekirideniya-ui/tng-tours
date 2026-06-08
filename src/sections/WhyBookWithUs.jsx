import { useEffect, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';
import { PhoneCall, Globe, MapPin } from 'lucide-react';

// High-visibility dynamic numbers component
const RollingNumber = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const element = ref.current;
    const controls = animate(0, to, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        element.textContent = Math.floor(value).toLocaleString() + suffix;
      },
    });

    return () => controls.stop();
  }, [isInView, to, suffix]);

  return <span ref={ref} className="font-serif font-normal text-luxury-gold">0</span>;
};

const WhyBookWithUs = () => {
  const stats = [
    { value: 15, suffix: "+", label: "Years of Heritage" },
    { value: 120, suffix: "+", label: "Elite Fleet Vehicles" },
    { value: 450, suffix: "+", label: "Global Stewards" }
  ];

  const pillars = [
    {
      icon: <PhoneCall className="text-[#0F0F0F] w-4 h-4" />,
      title: "24/7 Concierge Syndicate",
      desc: "Direct, uninterrupted connectivity to a dedicated travel officer, completely unconstrained by time zones or operational hours."
    },
    {
      icon: <Globe className="text-[#0F0F0F] w-4 h-4" />,
      title: "Encrypted Digital Portals",
      desc: "Seamless, secure, and instantaneous digital booking systems built to finalize complex custom itineraries effortlessly."
    },
    {
      icon: <MapPin className="text-[#0F0F0F] w-4 h-4" />,
      title: "Colombo Lounge Counter",
      desc: "Our physical cornerstone sanctuary operating non-stop within Colombo, providing direct on-the-ground support."
    }
  ];

  return (
    <section id="why-book" className="py-24 md:py-36 bg-[#F4F4F4] border-y border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* TOP LAYER: Contrast Title & Narrative Group */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-20">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-luxury text-luxury-gold font-bold block mb-3">
              The Prestige Framework
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-normal text-[#0F0F0F] leading-tight">
              An Elevated Standard <br />Of Private Logistics
            </h2>
          </div>
          <div className="lg:col-span-5 border-l-2 border-black/10 pl-6 lg:pl-10">
            <p className="text-sm text-[#0F0F0F] font-normal leading-relaxed">
              Every transition is monitored, every asset is verified, and every secondary backup plan is arranged before you ever arrive. This is structural luxury engineered to perfection.
            </p>
          </div>
        </div>

        {/* MIDDLE LAYER: Bright Ticking Numbers Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 border-y border-black/10 py-12 mb-20 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center border-r border-black/10 last:border-r-0"
            >
              <div className="text-5xl md:text-6xl tracking-tight mb-2 font-normal">
                <RollingNumber to={stat.value} suffix={stat.suffix} />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#0F0F0F] font-bold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM LAYER: High-Readability Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full border-2 border-black/20 flex items-center justify-center bg-white group-hover:bg-luxury-gold group-hover:border-luxury-gold transition-all duration-500">
                  <div className="group-hover:text-white text-[#0F0F0F] transition-colors duration-300">
                    {pillar.icon}
                  </div>
                </div>
                <h3 className="font-serif text-xl font-normal text-[#0F0F0F] group-hover:text-luxury-gold transition-colors duration-300">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm text-[#0F0F0F] font-normal leading-relaxed pl-12">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyBookWithUs;