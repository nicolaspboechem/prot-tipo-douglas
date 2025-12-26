import { motion } from 'framer-motion';
import { Building2, Store, ShoppingBag, TrendingUp } from 'lucide-react';
import { GlassPanel } from '../components/GlassPanel';
import { Badge } from '../components/Badge';
import { clients } from '../data/mockData';

const iconMap = {
  Building2,
  Store,
  ShoppingBag,
};

export function ClientSelector({ onSelectClient }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="bg-mesh absolute inset-0 -z-10" />

      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-6xl font-bold text-slate-100 mb-4">
            dolivs<span className="text-primary">.ai</span>
          </h1>
          <Badge variant="success" pulse>
            SYSTEM ONLINE
          </Badge>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => {
            const Icon = iconMap[client.icon];

            return (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassPanel
                  hover
                  className="p-8 cursor-pointer group relative overflow-hidden"
                  onClick={() => onSelectClient(client)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${client.color} flex items-center justify-center`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge variant="primary">{client.campaign}</Badge>
                    </div>

                    <h2 className="font-display text-2xl font-bold text-slate-100 mb-2">
                      {client.name}
                    </h2>
                    <p className="text-slate-400 mb-6">{client.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-emerald-400">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-semibold">ROI {client.roi}x</span>
                      </div>
                      <motion.div
                        className="text-slate-400 group-hover:text-primary transition-colors"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-500 mt-12 text-sm"
        >
          Marketing OS v3.0 • Powered by Dolivs AI
        </motion.p>
      </div>
    </div>
  );
}
