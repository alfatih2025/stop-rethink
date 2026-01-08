import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Gift, Trophy, Star } from 'lucide-react';
import SlotMachine from './SlotMachine';
import JackpotCounter from './JackpotCounter';
import LoginModal from './LoginModal';

interface GamblingLandingProps {
  onLogin: () => void;
}

const GamblingLanding = ({ onLogin }: GamblingLandingProps) => {
  const [showLogin, setShowLogin] = useState(false);
  const [spinCount, setSpinCount] = useState(0);

  const handleSpin = () => {
    setSpinCount(prev => prev + 1);
    if (spinCount >= 1) {
      setShowLogin(true);
    }
  };

  const features = [
    { icon: <Gift className="w-6 h-6" />, title: 'BONUS 100%', desc: 'Deposit pertama' },
    { icon: <Zap className="w-6 h-6" />, title: 'PROSES CEPAT', desc: 'Withdraw < 3 menit' },
    { icon: <Trophy className="w-6 h-6" />, title: 'RTP 98%', desc: 'Winrate tertinggi' },
    { icon: <Star className="w-6 h-6" />, title: '24/7 SUPPORT', desc: 'CS profesional' },
  ];

  const games = [
    { name: 'Gates of Olympus', emoji: '⚡', rtp: '96.5%' },
    { name: 'Sweet Bonanza', emoji: '🍬', rtp: '96.4%' },
    { name: 'Starlight Princess', emoji: '👸', rtp: '96.5%' },
    { name: 'Wild West Gold', emoji: '🤠', rtp: '96.5%' },
  ];

  return (
    <div className="min-h-screen bg-gambling-gradient relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: -10 
            }}
            animate={{ 
              y: typeof window !== 'undefined' ? window.innerHeight + 10 : 1000,
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2, 
              repeat: Infinity, 
              delay: Math.random() * 2 
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 md:p-6">
        <div className="container mx-auto flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-3xl">🎰</span>
            <span className="font-display text-xl md:text-2xl text-gold font-bold">
              SLOT<span className="text-neon-green">777</span>
            </span>
          </motion.div>
          
          <motion.button
            onClick={() => setShowLogin(true)}
            className="btn-login px-6 py-2 rounded-lg font-display font-bold text-primary-foreground"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LOGIN
          </motion.button>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-4 py-6 md:py-10">
        {/* Jackpot counter */}
        <div className="mb-8">
          <JackpotCounter />
        </div>

        {/* Slot machine */}
        <div className="max-w-md mx-auto mb-10">
          <SlotMachine onSpin={handleSpin} />
        </div>

        {/* Login CTA */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground mb-4">
            Login untuk bermain dengan uang asli dan menangkan jutaan rupiah!
          </p>
          <motion.button
            onClick={() => setShowLogin(true)}
            className="btn-spin px-10 py-4 rounded-xl text-background font-display font-bold text-lg animate-pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="inline-block mr-2" size={20} />
            DAFTAR & MAIN SEKARANG
          </motion.button>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-card/50 border border-border rounded-xl p-4 text-center hover:border-primary/50 transition-colors"
            >
              <div className="text-gold mb-2 flex justify-center">{feature.icon}</div>
              <h3 className="font-display text-sm text-foreground mb-1">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Popular games */}
        <div className="mb-10">
          <h2 className="font-display text-xl md:text-2xl text-center text-gold mb-6 neon-glow-gold">
            🔥 GAME POPULER 🔥
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {games.map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowLogin(true)}
                className="bg-slot-gradient border border-gold/30 rounded-xl p-4 text-center cursor-pointer hover:neon-box-gold transition-all"
              >
                <div className="text-4xl mb-2">{game.emoji}</div>
                <h3 className="font-display text-sm text-foreground mb-1">{game.name}</h3>
                <p className="text-xs text-neon-green">RTP {game.rtp}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Running text */}
        <div className="overflow-hidden bg-card/30 border-y border-primary/30 py-2">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="whitespace-nowrap text-sm"
          >
            <span className="text-gold mx-4">🎰 Selamat kepada member BE*** memenangkan Rp 45.000.000 di Gates of Olympus!</span>
            <span className="text-neon-green mx-4">💰 Selamat kepada member RI*** withdraw Rp 120.000.000!</span>
            <span className="text-neon-pink mx-4">🏆 Selamat kepada member AN*** memenangkan JACKPOT Rp 89.000.000!</span>
            <span className="text-gold mx-4">🎰 Selamat kepada member DI*** memenangkan Rp 67.000.000 di Sweet Bonanza!</span>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-6 text-center text-muted-foreground text-xs">
        <p>© 2024 SLOT777 - Platform Judi Online Terpercaya Indonesia</p>
        <p className="mt-1 text-gold">18+ | Bermain dengan tanggung jawab</p>
      </footer>

      {/* Login modal */}
      <LoginModal 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)}
        onLogin={onLogin}
      />
    </div>
  );
};

export default GamblingLanding;
