import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon: Icon,
  ...props
}) {
  const variants = {
    primary: 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary-glow',
    secondary: 'bg-surface hover:bg-surface-hover text-slate-100 border border-white/10',
    ghost: 'bg-transparent hover:bg-surface text-slate-400 hover:text-slate-100',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <motion.button
      className={cn(
        'rounded-xl font-medium transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </motion.button>
  );
}
