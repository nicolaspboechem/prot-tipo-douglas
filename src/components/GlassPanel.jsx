import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export function GlassPanel({ children, className, hover = false, ...props }) {
  const Component = hover ? motion.div : 'div';

  return (
    <Component
      className={cn(
        'bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] shadow-2xl rounded-2xl',
        className
      )}
      {...(hover && {
        whileHover: { scale: 1.01, y: -4 },
        transition: { duration: 0.2 },
      })}
      {...props}
    >
      {children}
    </Component>
  );
}
