import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SYMBOLS = ['🍒', '💎', '7️⃣', '🎰', '💰', '⭐', '🃏', '👑'];

interface SlotMachineProps {
  onSpin: () => void;
}

const SlotMachine = ({ onSpin }: SlotMachineProps) => {
  const [spinning, setSpinning] = useState(false);
  const [reels, setReels] = useState([
    [SYMBOLS[0], SYMBOLS[1], SYMBOLS[2]],
    [SYMBOLS[3], SYMBOLS[4], SYMBOLS[5]],
    [SYMBOLS[6], SYMBOLS[7], SYMBOLS[0]],
  ]);

  const spin = () => {
    if (spinning) return;
    
    setSpinning(true);
    
    // Simulate spinning
    const interval = setInterval(() => {
      setReels(prev => prev.map(reel => 
        reel.map(() => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)])
      ));
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setSpinning(false);
      onSpin();
    }, 2000);
  };

  return (
    <div className="relative">
      {/* Machine frame */}
      <div className="bg-gradient-to-b from-gold/20 to-deep-purple p-1 rounded-2xl neon-box-gold">
        <div className="bg-card rounded-xl p-6 border-4 border-gold/30">
          {/* Top display */}
          <div className="text-center mb-4">
            <h2 className="font-display text-2xl md:text-3xl text-gold neon-glow-gold">
              MEGA JACKPOT
            </h2>
            <p className="text-neon-green text-sm font-display">WIN UP TO 1,000,000x</p>
          </div>

          {/* Reels container */}
          <div className="flex justify-center gap-2 md:gap-4 mb-6">
            {reels.map((reel, reelIndex) => (
              <div 
                key={reelIndex}
                className="relative w-20 h-24 md:w-28 md:h-32 bg-background rounded-lg overflow-hidden border-2 border-primary/50"
              >
                <div className="slot-reel absolute inset-0 z-10 pointer-events-none" />
                <motion.div 
                  className="flex flex-col items-center justify-center h-full"
                  animate={spinning ? { y: [0, -20, 0] } : {}}
                  transition={{ duration: 0.1, repeat: spinning ? Infinity : 0 }}
                >
                  {reel.map((symbol, symbolIndex) => (
                    <div 
                      key={symbolIndex}
                      className="text-3xl md:text-5xl h-8 md:h-10 flex items-center justify-center"
                    >
                      {symbol}
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Payline indicator */}
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="h-0.5 bg-neon-green/50 shadow-[0_0_10px_hsl(var(--neon-green))]" />
          </div>

          {/* Spin button */}
          <motion.button
            onClick={spin}
            disabled={spinning}
            className="btn-spin w-full py-4 rounded-xl text-background text-xl md:text-2xl font-bold shadow-lg disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {spinning ? '🎰 SPINNING...' : '🎰 SPIN NOW'}
          </motion.button>

          {/* Bet info */}
          <div className="flex justify-between mt-4 text-sm">
            <div className="text-muted-foreground">
              <span className="text-gold">BET:</span> Rp 100.000
            </div>
            <div className="text-muted-foreground">
              <span className="text-neon-green">BALANCE:</span> Rp 5.000.000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotMachine;
