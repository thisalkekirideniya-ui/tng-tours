
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`bg-luxury-stone/40 backdrop-blur-md border border-white/5 rounded-sm p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;