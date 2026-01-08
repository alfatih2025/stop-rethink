import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const JackpotCounter = () => {
  const [amount, setAmount] = useState(847293156);

  useEffect(() => {
    const interval = setInterval(() => {
      setAmount(prev => prev + Math.floor(Math.random() * 10000));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString('id-ID');
  };

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gradient-to-r from-deep-purple via-card to-deep-purple p-1 rounded-2xl neon-box">
        <div className="bg-card/90 backdrop-blur rounded-xl p-4 md:p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">🏆</span>
            <h3 className="font-display text-lg md:text-xl text-neon-pink uppercase tracking-widest">
              Progressive Jackpot
            </h3>
            <span className="text-2xl">🏆</span>
          </div>
          
          <div className="relative overflow-hidden">
            <motion.div 
              className="font-display text-3xl md:text-5xl lg:text-6xl text-gold font-bold tracking-wider"
              animate={{ textShadow: [
                '0 0 10px hsl(45 100% 50%)',
                '0 0 20px hsl(45 100% 50%)',
                '0 0 10px hsl(45 100% 50%)'
              ]}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Rp {formatNumber(amount)}
            </motion.div>
          </div>

          <p className="text-neon-green text-xs md:text-sm mt-2 font-display animate-pulse">
            💰 JACKPOT BISA JATUH KAPAN SAJA! 💰
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default JackpotCounter;
