import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  BarChart3,
  Layers,
  LogOut,
  Zap,
} from 'lucide-react';
import { GlassPanel } from '../components/GlassPanel';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Studio } from './Studio';
import { Analytics } from './Analytics';
import { Assets } from './Assets';
import { cn } from '../utils/cn';

const tabs = [
  { id: 'studio', label: 'Studio', icon: Sparkles, description: 'Criação de Conteúdo' },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, description: 'Hub de Performance' },
  { id: 'assets', label: 'Assets', icon: Layers, description: 'Central de Ativos' },
];

export function Dashboard({ client, onDisconnect }) {
  const [activeTab, setActiveTab] = useState('studio');

  const activeTabData = tabs.find((t) => t.id === activeTab);

  return (
    <div className="min-h-screen bg-background flex">
      <div className="bg-mesh absolute inset-0 -z-10" />

      <aside className="w-80 border-r border-white/[0.06] flex flex-col">
        <div className="p-6">
          <h1 className="font-display text-3xl font-bold text-slate-100">
            dolivs<span className="text-primary">.</span>
          </h1>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left',
                  isActive
                    ? 'bg-primary text-white shadow-lg shadow-primary-glow'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-surface'
                )}
                whileHover={{ x: isActive ? 0 : 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </motion.button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/[0.06]">
          <Button
            variant="ghost"
            className="w-full justify-start"
            icon={LogOut}
            onClick={onDisconnect}
          >
            Disconnect
          </Button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-24 border-b border-white/[0.06] flex items-center justify-between px-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-100">
              {activeTabData.label}
            </h2>
            <p className="text-slate-400 text-sm">
              {client.name} • Marketing OS v3.0
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Badge variant="success" pulse>
              <Zap className="w-3 h-3" />
              AI Agent Active
            </Badge>

            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center text-white font-semibold">
              MK
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {activeTab === 'studio' && <Studio client={client} />}
              {activeTab === 'analytics' && <Analytics client={client} />}
              {activeTab === 'assets' && <Assets client={client} />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
