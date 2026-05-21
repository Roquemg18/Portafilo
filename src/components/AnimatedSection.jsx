import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 38 },
  visible: { opacity: 1, y: 0 },
};

export function AnimatedSection({ id, className = '', children }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.18 });

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
