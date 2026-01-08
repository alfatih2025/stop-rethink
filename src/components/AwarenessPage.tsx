import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Scale, BookOpen, Heart, Phone, HandHeart, ChevronDown } from 'lucide-react';

interface AwarenessPageProps {
  onBack: () => void;
}

const AwarenessPage = ({ onBack }: AwarenessPageProps) => {
  const [showContent, setShowContent] = useState(false);
  const [glitching, setGlitching] = useState(true);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    // Glitch effect then reveal
    const timer = setTimeout(() => {
      setGlitching(false);
      setTimeout(() => setShowContent(true), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const psychologicalMessages = [
    "Yang kamu kejar bukan kemenangan, tapi kehancuran.",
    "Judi online tidak membuatmu kaya, tapi membuatmu kehilangan segalanya.",
    "Sistem ini selalu menang, kamu hanya umpan.",
    "Setiap rupiah yang kamu pertaruhkan adalah masa depanmu yang hilang.",
    "Kemenangan semu hari ini adalah bencana esok hari."
  ];

  const laws = [
    {
      title: "Pasal 303 KUHP",
      content: "Setiap orang yang tanpa hak menyelenggarakan perjudian atau turut serta dalam perusahaan perjudian...",
      penalty: "Pidana penjara hingga 10 tahun atau denda hingga Rp 25.000.000",
      icon: "⚖️"
    },
    {
      title: "UU ITE Pasal 27 Ayat (2)",
      content: "Setiap orang yang dengan sengaja dan tanpa hak mendistribusikan, mentransmisikan, dan/atau membuat dapat diaksesnya informasi atau dokumen elektronik yang memiliki muatan perjudian...",
      penalty: "Pidana penjara maksimal 6 tahun dan/atau denda maksimal Rp 1.000.000.000",
      icon: "📜"
    }
  ];

  const impacts = [
    { icon: "💸", title: "Kehancuran Ekonomi", desc: "Hutang menumpuk, aset terjual, keluarga jatuh miskin" },
    { icon: "🏠", title: "Keluarga Hancur", desc: "Perceraian, anak terlantar, kepercayaan hilang" },
    { icon: "🧠", title: "Gangguan Mental", desc: "Depresi berat, kecemasan, pikiran untuk bunuh diri" },
    { icon: "⛓️", title: "Jerat Pinjol", desc: "Terjebak rentenir dan pinjaman online ilegal" },
    { icon: "👮", title: "Masalah Hukum", desc: "Penangkapan, penjara, catatan kriminal seumur hidup" },
    { icon: "💔", title: "Kehilangan Segalanya", desc: "Pekerjaan, martabat, masa depan, harapan" }
  ];

  return (
    <div className="min-h-screen bg-awareness-gradient">
      <AnimatePresence>
        {/* Glitch screen */}
        {glitching && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background flex items-center justify-center"
          >
            <motion.div
              animate={{ 
                x: [0, -5, 5, -5, 5, 0],
                opacity: [1, 0.5, 1, 0.5, 1]
              }}
              transition={{ duration: 0.2, repeat: Infinity }}
              className="text-center"
            >
              <h1 className="font-display text-4xl md:text-6xl lg:text-8xl text-warning animate-glitch-text font-black">
                BERHENTI
              </h1>
              <h2 className="font-display text-2xl md:text-4xl lg:text-6xl text-foreground mt-2 animate-glitch-text">
                JUDI ONLINE
              </h2>
              <h3 className="font-display text-xl md:text-3xl lg:text-5xl text-neon-green mt-2 animate-glitch-text">
                SEKARANG
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Hero section */}
          <section className="min-h-screen flex flex-col items-center justify-center px-4 py-10 text-center relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="mb-8"
            >
              <AlertTriangle className="w-20 h-20 md:w-32 md:h-32 text-warning mx-auto animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-3xl md:text-5xl lg:text-7xl text-warning font-black mb-6"
            >
              KAMU HAMPIR TERJERUMUS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-2xl text-muted-foreground max-w-3xl mb-10"
            >
              Website ini BUKAN situs judi. Ini adalah kampanye penyadaran untuk menyelamatkanmu dari kehancuran judi online.
            </motion.p>

            {/* Psychological messages */}
            <div className="space-y-4 max-w-2xl">
              {psychologicalMessages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.2 }}
                  className={`p-4 rounded-lg border-l-4 border-warning bg-warning/10 text-left stagger-${index + 1}`}
                >
                  <p className="text-foreground text-lg md:text-xl font-semibold">
                    "{message}"
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-10"
            >
              <ChevronDown className="w-10 h-10 text-muted-foreground animate-bounce mx-auto" />
            </motion.div>
          </section>

          {/* Law section */}
          <section className="py-16 px-4 bg-background/50">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <Scale className="w-16 h-16 text-law mx-auto mb-4" />
                <h2 className="font-display text-2xl md:text-4xl text-law font-bold">
                  ANCAMAN HUKUM DI INDONESIA
                </h2>
                <p className="text-muted-foreground mt-2">Judi online adalah KEJAHATAN dengan hukuman berat</p>
              </motion.div>

              <div className="space-y-6">
                {laws.map((law, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * index }}
                    className="law-card p-6 rounded-xl bg-card"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{law.icon}</span>
                      <div>
                        <h3 className="font-display text-xl text-law font-bold mb-2">{law.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{law.content}</p>
                        <div className="bg-warning/20 border border-warning/50 rounded-lg p-3">
                          <p className="text-warning font-semibold text-sm">
                            ⚠️ {law.penalty}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Islamic section */}
          <section className="py-16 px-4 bg-islamic-gradient islamic-pattern">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <BookOpen className="w-16 h-16 text-islamic mx-auto mb-4" />
                <h2 className="font-display text-2xl md:text-4xl text-islamic font-bold">
                  DALIL AL-QUR'AN & HADIS
                </h2>
              </motion.div>

              {/* Quran verse */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-card/80 backdrop-blur rounded-2xl p-6 md:p-10 mb-8 border border-islamic/30"
              >
                <div className="text-center mb-6">
                  <p className="text-islamic text-sm font-display uppercase tracking-wider mb-2">
                    Al-Qur'an - QS. Al-Ma'idah Ayat 90
                  </p>
                  <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-serif mb-4" dir="rtl">
                    يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنْصَابُ وَالْأَزْلَامُ رِجْسٌ مِنْ عَمَلِ الشَّيْطَانِ فَاجْتَنِبُوهُ لَعَلَّكُمْ تُفْلِحُونَ
                  </p>
                </div>
                <div className="bg-islamic/10 rounded-xl p-4">
                  <p className="text-foreground text-lg leading-relaxed italic">
                    "Wahai orang-orang yang beriman, sesungguhnya khamar, judi, berhala, dan mengundi nasib dengan panah adalah perbuatan keji dari perbuatan setan. Maka jauhilah agar kamu beruntung."
                  </p>
                </div>
              </motion.div>

              {/* Hadith */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-card/80 backdrop-blur rounded-2xl p-6 md:p-10 border border-islamic/30"
              >
                <div className="text-center">
                  <p className="text-islamic text-sm font-display uppercase tracking-wider mb-4">
                    Hadis Nabi ﷺ
                  </p>
                  <div className="bg-islamic/10 rounded-xl p-4">
                    <p className="text-foreground text-lg leading-relaxed italic mb-2">
                      "Barang siapa berkata kepada temannya: 'Mari berjudi', maka hendaklah ia bersedekah."
                    </p>
                    <p className="text-muted-foreground text-sm">
                      (HR. Bukhari dan Muslim)
                    </p>
                  </div>
                  <p className="text-muted-foreground text-sm mt-4">
                    Bahkan sekedar mengajak berjudi saja sudah dianggap dosa yang memerlukan tebusan sedekah.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Impact section */}
          <section className="py-16 px-4 bg-background">
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <Heart className="w-16 h-16 text-warning mx-auto mb-4" />
                <h2 className="font-display text-2xl md:text-4xl text-warning font-bold">
                  DAMPAK NYATA JUDI ONLINE
                </h2>
                <p className="text-muted-foreground mt-2">Ini yang akan terjadi jika kamu tidak berhenti</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {impacts.map((impact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-card border border-warning/20 rounded-xl p-6 hover:border-warning/50 transition-colors"
                  >
                    <span className="text-4xl mb-4 block">{impact.icon}</span>
                    <h3 className="font-display text-lg text-warning font-bold mb-2">{impact.title}</h3>
                    <p className="text-muted-foreground text-sm">{impact.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA section */}
          <section className="py-16 px-4 bg-gradient-to-b from-background to-islamic/10">
            <div className="container mx-auto max-w-2xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <HandHeart className="w-20 h-20 text-islamic mx-auto mb-6" />
                <h2 className="font-display text-3xl md:text-5xl text-foreground font-bold mb-6">
                  MASIH ADA HARAPAN
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Kamu sudah mengambil langkah pertama dengan membaca ini. Sekarang, ambil langkah selanjutnya.
                </p>

                <div className="space-y-4">
                  <motion.button
                    onClick={() => setShowHelp(true)}
                    className="btn-help w-full py-4 rounded-xl text-foreground font-display font-bold text-lg uppercase neon-box-green"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    🤲 SAYA MAU BERHENTI
                  </motion.button>

                  <motion.a
                    href="tel:119"
                    className="btn-danger flex items-center justify-center gap-2 w-full py-4 rounded-xl text-foreground font-display font-bold text-lg uppercase neon-box-red"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5" />
                    HUBUNGI BANTUAN: 119
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Help modal */}
          <AnimatePresence>
            {showHelp && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50"
                  onClick={() => setShowHelp(false)}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg z-50"
                >
                  <div className="bg-card rounded-2xl p-6 md:p-8 border border-islamic/30">
                    <div className="text-center mb-6">
                      <span className="text-5xl mb-4 block">🤲</span>
                      <h3 className="font-display text-2xl text-islamic font-bold">
                        LANGKAH UNTUK BERHENTI
                      </h3>
                    </div>

                    <div className="space-y-4 text-left mb-6">
                      <div className="flex items-start gap-3">
                        <span className="bg-islamic text-background w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                        <p className="text-foreground">Akui bahwa kamu memiliki masalah dengan judi online</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-islamic text-background w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                        <p className="text-foreground">Blokir semua akses ke situs judi (minta bantuan keluarga)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-islamic text-background w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
                        <p className="text-foreground">Serahkan kendali keuangan kepada orang yang dipercaya</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-islamic text-background w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
                        <p className="text-foreground">Cari bantuan profesional (psikolog/konselor)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-islamic text-background w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</span>
                        <p className="text-foreground">Bergabung dengan komunitas pemulihan</p>
                      </div>
                    </div>

                    <div className="bg-islamic/10 rounded-xl p-4 mb-6">
                      <p className="text-center text-islamic font-semibold">
                        "Dan janganlah kamu berputus asa dari rahmat Allah. Sesungguhnya tiada berputus asa dari rahmat Allah, melainkan orang-orang yang kafir."
                      </p>
                      <p className="text-center text-muted-foreground text-sm mt-2">
                        (QS. Yusuf: 87)
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-center text-muted-foreground text-sm mb-2">Hotline Bantuan:</p>
                      <a href="tel:119" className="block bg-warning/20 text-warning text-center py-3 rounded-lg font-bold">
                        📞 119 - Hotline Kesehatan Jiwa
                      </a>
                      <a href="tel:021-500-454" className="block bg-law/20 text-law text-center py-3 rounded-lg font-bold">
                        📞 021-500-454 - Kemensos
                      </a>
                    </div>

                    <button
                      onClick={() => setShowHelp(false)}
                      className="mt-6 w-full py-3 bg-muted text-muted-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors"
                    >
                      Tutup
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Footer */}
          <footer className="py-8 px-4 text-center border-t border-border">
            <p className="text-muted-foreground text-sm mb-2">
              🛡️ Website ini adalah kampanye edukasi anti-judi online
            </p>
            <p className="text-muted-foreground text-xs">
              Tidak ada transaksi uang atau perjudian nyata. Dibuat untuk menyelamatkan nyawa.
            </p>
            <button
              onClick={onBack}
              className="mt-4 text-primary hover:underline text-sm"
            >
              Lihat kembali tampilan situs judi (untuk edukasi)
            </button>
          </footer>
        </motion.div>
      )}
    </div>
  );
};

export default AwarenessPage;
