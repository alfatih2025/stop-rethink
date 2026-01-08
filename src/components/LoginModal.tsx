import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Lock, Mail, Eye, EyeOff } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const LoginModal = ({ isOpen, onClose, onLogin }: LoginModalProps) => {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md z-50"
          >
            <div className="bg-gradient-to-b from-primary/20 to-card p-0.5 rounded-2xl neon-box">
              <div className="bg-card rounded-2xl p-6 md:p-8">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🎰</div>
                  <h2 className="font-display text-2xl md:text-3xl text-gold neon-glow-gold">
                    {isRegister ? 'DAFTAR' : 'MASUK'}
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    {isRegister ? 'Buat akun baru untuk mulai bermain' : 'Masuk untuk melanjutkan'}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Username */}
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <input
                      type="text"
                      placeholder="Username"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      className="w-full bg-input border border-border rounded-lg py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  {/* Email (only for register) */}
                  {isRegister && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="relative"
                    >
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                      <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-input border border-border rounded-lg py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        required
                      />
                    </motion.div>
                  )}

                  {/* Password */}
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full bg-input border border-border rounded-lg py-3 pl-11 pr-11 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  {/* Confirm Password (only for register) */}
                  {isRegister && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="relative"
                    >
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                      <input
                        type="password"
                        placeholder="Konfirmasi Password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="w-full bg-input border border-border rounded-lg py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        required
                      />
                    </motion.div>
                  )}

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="btn-login w-full py-3 rounded-xl text-primary-foreground font-display font-bold text-lg uppercase tracking-wider disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin">🎰</span>
                        MEMPROSES...
                      </span>
                    ) : (
                      isRegister ? 'DAFTAR SEKARANG' : 'MASUK'
                    )}
                  </motion.button>
                </form>

                {/* Toggle register/login */}
                <div className="text-center mt-6 text-sm text-muted-foreground">
                  {isRegister ? (
                    <>
                      Sudah punya akun?{' '}
                      <button
                        onClick={() => setIsRegister(false)}
                        className="text-neon-green hover:underline font-semibold"
                      >
                        Masuk
                      </button>
                    </>
                  ) : (
                    <>
                      Belum punya akun?{' '}
                      <button
                        onClick={() => setIsRegister(true)}
                        className="text-neon-green hover:underline font-semibold"
                      >
                        Daftar
                      </button>
                    </>
                  )}
                </div>

                {/* Promo text */}
                <div className="mt-4 p-3 bg-neon-green/10 border border-neon-green/30 rounded-lg">
                  <p className="text-center text-xs text-neon-green font-display">
                    🎁 BONUS MEMBER BARU 100% + FREEBET Rp 50.000 🎁
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
