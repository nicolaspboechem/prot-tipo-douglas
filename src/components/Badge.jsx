import { cn } from '../utils/cn';

export function Badge({ children, variant = 'default', className, pulse = false }) {
  const variants = {
    default: 'bg-surface text-slate-300',
    primary: 'bg-primary/20 text-primary border border-primary/30',
    success: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
    warning: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
    error: 'bg-red-500/20 text-red-400 border border-red-500/30',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium',
        variants[variant],
        pulse && 'animate-pulse',
        className
      )}
    >
      {pulse && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}
