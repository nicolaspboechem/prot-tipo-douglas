import { motion } from 'framer-motion';
import { Layers, Upload } from 'lucide-react';
import { GlassPanel } from '../components/GlassPanel';
import { Button } from '../components/Button';

export function Assets({ client }) {
  return (
    <div className="h-full flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full"
      >
        <GlassPanel className="p-12 text-center">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-red-600/20 flex items-center justify-center mx-auto mb-8"
          >
            <Layers className="w-12 h-12 text-primary" />
          </motion.div>

          <h2 className="font-display text-3xl font-bold text-slate-100 mb-4">
            Central de Ativos
          </h2>

          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Arraste logotipos, fontes e manuais da marca para treinar o agente de IA
            com a identidade visual de <span className="text-slate-100 font-medium">{client.name}</span>.
          </p>

          <div className="border-2 border-dashed border-white/20 rounded-2xl p-12 mb-6 hover:border-primary/50 transition-colors">
            <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-400 text-sm">
              Arraste arquivos aqui ou clique para fazer upload
            </p>
            <p className="text-slate-500 text-xs mt-2">
              PNG, JPG, PDF, AI (Máx. 50MB)
            </p>
          </div>

          <Button variant="primary" icon={Upload}>
            Selecionar Arquivos
          </Button>
        </GlassPanel>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center"
        >
          <p className="text-slate-500 text-sm">
            Os ativos serão processados pela IA para gerar conteúdo personalizado
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
