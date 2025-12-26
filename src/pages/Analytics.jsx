import { motion } from 'framer-motion';
import {
  TrendingUp,
  Target,
  DollarSign,
  Clock,
  Lightbulb,
  BarChart3,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';
import { GlassPanel } from '../components/GlassPanel';
import { Badge } from '../components/Badge';
import { kpis, aiInsights } from '../data/mockData';
import { cn } from '../utils/cn';

const iconMap = {
  TrendingUp,
  Target,
  DollarSign,
  Clock,
  Lightbulb,
};

const insightVariants = {
  warning: { color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/30' },
  success: { color: 'text-emerald-400', bg: 'bg-emerald-500/20', border: 'border-emerald-500/30' },
  info: { color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/30' },
};

export function Analytics({ client }) {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {kpis.map((kpi, index) => {
            const Icon = iconMap[kpi.icon];
            const isPositive = kpi.positive;

            return (
              <motion.div
                key={kpi.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassPanel className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={cn(
                        'w-12 h-12 rounded-xl flex items-center justify-center',
                        isPositive
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-red-500/20 text-red-400'
                      )}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div
                      className={cn(
                        'flex items-center gap-1 text-sm font-medium',
                        isPositive ? 'text-emerald-400' : 'text-red-400'
                      )}
                    >
                      {isPositive ? (
                        <ArrowUp className="w-4 h-4" />
                      ) : (
                        <ArrowDown className="w-4 h-4" />
                      )}
                      {kpi.change}
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-1">{kpi.label}</p>
                  <p className="font-display text-3xl font-bold text-slate-100">
                    {kpi.value}
                  </p>
                </GlassPanel>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <GlassPanel className="p-8 h-[400px] flex flex-col items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-red-600/20 flex items-center justify-center mb-6"
              >
                <BarChart3 className="w-12 h-12 text-primary" />
              </motion.div>

              <h3 className="font-display text-xl font-semibold text-slate-100 mb-2">
                Visualização de Funil
              </h3>
              <p className="text-slate-400 text-center max-w-md">
                Visualização complexa de funil de conversão carregando...
                <br />
                <span className="text-sm text-slate-500">
                  (Dados em tempo real sendo processados)
                </span>
              </p>
            </GlassPanel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassPanel className="p-6 h-[400px] flex flex-col">
              <h3 className="font-display text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Insights da IA
              </h3>

              <div className="space-y-4 flex-1 overflow-auto">
                {aiInsights.map((insight, index) => {
                  const Icon = iconMap[insight.icon];
                  const variant = insightVariants[insight.type];

                  return (
                    <motion.div
                      key={insight.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div
                        className={cn(
                          'p-4 rounded-xl border',
                          variant.bg,
                          variant.border
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <Icon className={cn('w-5 h-5 flex-shrink-0', variant.color)} />
                          <div>
                            <p className="text-slate-100 font-medium text-sm mb-1">
                              {insight.title}
                            </p>
                            <p className="text-slate-400 text-sm">
                              {insight.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </GlassPanel>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <Badge variant="primary">
            Dados atualizados em tempo real
          </Badge>
        </motion.div>
      </div>
    </div>
  );
}
