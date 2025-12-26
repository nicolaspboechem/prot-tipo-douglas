import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Copy,
  RefreshCw,
  Paperclip,
  Video,
  Mail,
  Calendar,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { GlassPanel } from '../components/GlassPanel';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { quickSuggestions, aiResponses, campaignStats } from '../data/mockData';
import { cn } from '../utils/cn';

const iconMap = {
  Video,
  Mail,
  Calendar,
  Instagram: Sparkles,
};

export function Studio({ client }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text = input) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const matchedResponse = aiResponses.find((r) =>
        text.toLowerCase().includes(r.trigger)
      );

      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content:
          matchedResponse?.response ||
          `Entendi! Vou trabalhar em "${text}" para a campanha ${client.campaign}. Me dê um momento para gerar o conteúdo ideal...`,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content);
  };

  const handleRetry = (content) => {
    handleSendMessage(`Refazer: ${content.substring(0, 50)}...`);
  };

  return (
    <div className="h-full flex">
      <div className="flex-1 flex flex-col p-8">
        <div className="flex-1 overflow-auto mb-6 space-y-4">
          {messages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-red-600 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-display text-2xl font-bold text-slate-100 mb-2">
                O que vamos criar hoje?
              </h3>
              <p className="text-slate-400 mb-8">
                Escolha uma sugestão ou descreva sua ideia
              </p>

              <div className="grid grid-cols-2 gap-4 max-w-2xl">
                {quickSuggestions.map((suggestion) => {
                  const Icon = iconMap[suggestion.icon];

                  return (
                    <GlassPanel
                      key={suggestion.id}
                      hover
                      className="p-4 cursor-pointer group"
                      onClick={() => handleSendMessage(suggestion.text)}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-primary" />
                        <span className="text-slate-300 group-hover:text-slate-100 transition-colors">
                          {suggestion.text}
                        </span>
                      </div>
                    </GlassPanel>
                  );
                })}
              </div>
            </motion.div>
          )}

          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                'flex gap-4',
                message.type === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {message.type === 'ai' && (
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-red-600 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              )}

              <div
                className={cn(
                  'max-w-2xl',
                  message.type === 'user'
                    ? 'bg-surface rounded-2xl p-4'
                    : 'space-y-3'
                )}
              >
                <p
                  className={cn(
                    'whitespace-pre-wrap',
                    message.type === 'user' ? 'text-slate-100' : 'text-slate-300'
                  )}
                >
                  {message.content}
                </p>

                {message.type === 'ai' && (
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      icon={Copy}
                      onClick={() => handleCopy(message.content)}
                    >
                      Copiar
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      icon={RefreshCw}
                      onClick={() => handleRetry(message.content)}
                    >
                      Refazer
                    </Button>
                  </div>
                )}
              </div>

              {message.type === 'user' && (
                <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center flex-shrink-0">
                  <span className="text-slate-100 font-semibold text-sm">MK</span>
                </div>
              )}
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-red-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="bg-surface rounded-2xl p-4">
                <div className="flex gap-1">
                  <motion.span
                    className="w-2 h-2 rounded-full bg-slate-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                  />
                  <motion.span
                    className="w-2 h-2 rounded-full bg-slate-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                  />
                  <motion.span
                    className="w-2 h-2 rounded-full bg-slate-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <GlassPanel className="p-4">
          <div className="flex gap-3">
            <Button variant="ghost" size="sm" icon={Paperclip}>
              Anexar
            </Button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Descreva o conteúdo que você precisa..."
              className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder:text-slate-500"
            />

            <Button
              variant="primary"
              icon={Send}
              onClick={() => handleSendMessage()}
              disabled={!input.trim()}
            >
              GERAR
            </Button>
          </div>
        </GlassPanel>
      </div>

      <aside className="w-80 border-l border-white/[0.06] p-6 space-y-6">
        <div>
          <GlassPanel className="p-6 bg-gradient-to-br from-primary/20 to-red-600/20 border-primary/30">
            <h3 className="font-display font-semibold text-slate-100 mb-2">
              Campanha Ativa
            </h3>
            <p className="text-primary font-semibold">{client.campaign}</p>
          </GlassPanel>
        </div>

        <div>
          <h4 className="text-slate-400 text-sm font-medium mb-3">Quick Stats</h4>
          <GlassPanel className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-sm">Posts este mês</span>
              <span className="text-slate-100 font-semibold">
                {campaignStats.postsThisMonth}/{campaignStats.postsTarget}
              </span>
            </div>
            <div className="w-full bg-surface-hover rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary to-red-600 h-2 rounded-full"
                style={{
                  width: `${(campaignStats.postsThisMonth / campaignStats.postsTarget) * 100}%`,
                }}
              />
            </div>
            <div className="flex items-center gap-2 text-emerald-400 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>Engajamento {campaignStats.engagement}</span>
            </div>
          </GlassPanel>
        </div>
      </aside>
    </div>
  );
}
