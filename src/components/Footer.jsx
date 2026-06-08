import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram size={16} />, url: '#', label: 'Instagram' },
    { icon: <Facebook size={16} />, url: '#', label: 'Facebook' },
    { icon: <Twitter size={16} />, url: '#', label: 'Twitter' },
    { icon: <Linkedin size={16} />, url: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'Destinations', url: '#destinations' },
    { name: 'The Experience', url: '#the-experience' },
    { name: 'Private Charter', url: '#why-book' },
    { name: 'Book Expedition', url: '#reserve' }
  ];

  const corporateLinks = [
    { name: 'About Our Collective', url: '#about' },
    { name: 'Sustainability Charter', url: '#' },
    { name: 'Luxury Fleet Logistics', url: '#' },
    { name: 'Media Kit', url: '#' }
  ];

  return (
    <footer className="relative bg-white pt-28 pb-12 px-6 md:px-12 border-t border-black/10 overflow-hidden">
      
      {/* LUXURY SRI LANKAN TOURISM BACKGROUND IMAGE */}
      {/* Opacity sits perfectly at 25% for high visibility without washing out bold text links */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070')] bg-cover bg-center opacity-25"
      />
      
      {/* Specialized Editorial Overlay Matrix */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/60" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* UPPER LAYER: Brand Statement & Dynamic Nav Pipelines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-black/10">
          
          {/* Column 1: Brand Identifier (6 Columns wide) */}
          <div className="lg:col-span-6 flex flex-col justify-between items-start">
            <div>
              <h3 className="font-serif text-3xl tracking-luxury text-[#0F0F0F] mb-4 font-bold">
                TNG <span className="text-luxury-gold font-sans text-sm tracking-luxury block sm:inline mt-1 sm:mt-0 font-bold">TOURS</span>
              </h3>
              <p className="text-sm text-[#0F0F0F] max-w-md leading-relaxed font-semibold">
                Crafting unparalleled structural itineraries and bespoke luxury expeditions across the magnificent terrains of Sri Lanka for discerning visionaries worldwide.
              </p>
            </div>
            
            {/* Social Icons Matrix */}
            <div className="flex items-center gap-3 mt-8 lg:mt-0">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  aria-label={social.label}
                  className="w-10 h-10 border-2 border-black/10 flex items-center justify-center text-[#0F0F0F] bg-white hover:text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 rounded-sm shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Explicit Navigation Links (3 Columns wide) */}
          <div className="lg:col-span-3 lg:pl-10">
            <h4 className="text-xs uppercase tracking-luxury text-[#D4AF37] mb-6 font-bold">
              Navigation
            </h4>
            <ul className="text-sm text-[#0F0F0F] space-y-4 font-bold">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="hover:text-[#D4AF37] transition-colors duration-200 block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Portfolio Links (3 Columns wide) */}
          <div className="lg:col-span-3 lg:pl-10">
            <h4 className="text-xs uppercase tracking-luxury text-[#D4AF37] mb-6 font-bold">
              The Collective
            </h4>
            <ul className="text-sm text-[#0F0F0F] space-y-4 font-bold">
              {corporateLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="hover:text-[#D4AF37] transition-colors duration-200 block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* LOWER LAYER: Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[#0F0F0F] font-bold">
          <p className="text-neutral-500 font-semibold">
            &copy; 2026 TNG Collection. All Individual Rights Reserved.
          </p>
          <div className="flex gap-8 tracking-widest">
            <a href="#" className="hover:text-[#D4AF37] transition-colors duration-300">PRIVACY POLICY</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors duration-300">TERMS OF SERVICE</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;