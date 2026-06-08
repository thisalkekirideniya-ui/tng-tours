import { motion } from 'framer-motion';

const Inquiry = () => {
  return (
    <section id="reserve" className="relative min-h-screen flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden bg-white">
      {/* Background Image - Styled with high brightness to match your theme */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2070')] bg-cover bg-center opacity-85"
      />
      
      {/* Strategic Multi-Layer Overlays for High Legibility */}
      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_80%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

      {/* FLOATING INQUIRY CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-sm p-8 md:p-12 text-left"
      >
        {/* Card Header */}
        <div className="text-center mb-10">
          <p className="text-[10px] uppercase tracking-luxury text-[#D4AF37] font-bold mb-2">
            Bespoke Planning
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#0F0F0F] tracking-wide">
            Initiate Your Journey
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Form Structural Pipeline */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          
          {/* ROW 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input: Full Name */}
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest text-[#0F0F0F] font-bold mb-2">Full Name</label>
              <input 
                type="text" 
                placeholder="e.g., Alexander Wright"
                className="w-full bg-white border border-black/10 focus:border-[#D4AF37] text-sm text-[#0F0F0F] px-4 py-3 rounded-sm outline-none transition-colors duration-300"
              />
            </div>
            
            {/* Input: Email Address */}
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest text-[#0F0F0F] font-bold mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="e.g., alex@luxury.com"
                className="w-full bg-white border border-black/10 focus:border-[#D4AF37] text-sm text-[#0F0F0F] px-4 py-3 rounded-sm outline-none transition-colors duration-300"
              />
            </div>
          </div>

          {/* ROW 2: Expedition Selection and Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Selection: Preferred Package Category */}
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest text-[#0F0F0F] font-bold mb-2">Desired Expedition</label>
              <select className="w-full bg-white border border-black/10 focus:border-[#D4AF37] text-sm text-[#0F0F0F] px-4 py-3 rounded-sm outline-none transition-colors duration-300 appearance-none cursor-pointer">
                <option>The Royal Serendib Escape (7 Nights)</option>
                <option>Teardrop Island Grand Expedition (10 Nights)</option>
                <option>The Ceylon Heritage & Wellness (5 Nights)</option>
                <option>Elite Wilderness & Safari Outings</option>
              </select>
            </div>

            {/* Input: Contact Phone Number */}
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest text-[#0F0F0F] font-bold mb-2">Contact Number</label>
              <input 
                type="tel" 
                placeholder="e.g., +94 77 123 4567"
                className="w-full bg-white border border-black/10 focus:border-[#D4AF37] text-sm text-[#0F0F0F] px-4 py-3 rounded-sm outline-none transition-colors duration-300"
              />
            </div>
          </div>

          {/* ROW 3: Date Frame */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest text-[#0F0F0F] font-bold mb-2">Target Departure Date</label>
              <input 
                type="date" 
                className="w-full bg-white border border-black/10 focus:border-[#D4AF37] text-sm text-[#0F0F0F] px-4 py-3 rounded-sm outline-none transition-colors duration-300 cursor-pointer"
              />
            </div>
          </div>

          {/* ROW 4: Custom Requirements */}
          <div className="flex flex-col">
            <label className="text-[10px] uppercase tracking-widest text-[#0F0F0F] font-bold mb-2">Bespoke Requirements / Notes</label>
            <textarea 
              rows="4"
              placeholder="Detail any specific culinary, aviation, or accessibility criteria you require..."
              className="w-full bg-white border border-black/10 focus:border-[#D4AF37] text-sm text-[#0F0F0F] p-4 rounded-sm outline-none transition-colors duration-300 resize-none"
            />
          </div>

          {/* Action Button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full bg-[#0F0F0F] text-white hover:bg-[#D4AF37] py-4 text-xs uppercase tracking-luxury font-bold rounded-sm shadow-xl transition-colors duration-500 mt-4"
          >
            Submit Private Inquiry
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Inquiry;