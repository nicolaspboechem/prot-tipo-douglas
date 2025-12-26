import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ClientSelector } from './pages/ClientSelector';
import { Dashboard } from './pages/Dashboard';

function App() {
  const [selectedClient, setSelectedClient] = useState(null);

  const handleSelectClient = (client) => {
    setSelectedClient(client);
  };

  const handleDisconnect = () => {
    setSelectedClient(null);
  };

  return (
    <AnimatePresence mode="wait">
      {!selectedClient ? (
        <motion.div
          key="client-selector"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ClientSelector onSelectClient={handleSelectClient} />
        </motion.div>
      ) : (
        <motion.div
          key="dashboard"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Dashboard client={selectedClient} onDisconnect={handleDisconnect} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
