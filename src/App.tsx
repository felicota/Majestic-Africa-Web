import { motion, useScroll, useTransform } from "motion/react";
import { useRef, ReactNode } from "react";
import { 
  Compass, 
  Users, 
  PawPrint, 
  Mountain, 
  Waves, 
  Sun, 
  ArrowRight,
  Globe
} from "lucide-react";

const Section = ({ title, subtitle, children, className = "" }: { title: string; subtitle?: string; children: ReactNode; className?: string }) => (
  <section className={`py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-12"
    >
      <h2 className="font-serif text-4xl md:text-6xl mb-4 text-africa-gold">{title}</h2>
      {subtitle && <p className="font-display text-xl text-stone-400 max-w-2xl uppercase tracking-widest">{subtitle}</p>}
    </motion.div>
    {children}
  </section>
);

const PanoramicImage = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <motion.div 
    className="relative group overflow-hidden rounded-2xl h-[400px] md:h-[600px] w-full"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.5 }}
  >
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-end items-end p-8">
      <p className="font-display text-sm tracking-widest uppercase text-africa-gold">{caption}</p>
    </div>
  </motion.div>
);

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <main ref={containerRef} className="relative bg-[#0a0502] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://picsum.photos/seed/africa-sunset/1920/1080" 
            alt="African Sunset" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0502]" />
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="font-display text-africa-gold tracking-[0.5em] uppercase text-sm mb-6 block">
              A Panoramic Journey
            </span>
            <h1 className="font-serif text-6xl md:text-9xl mb-8 leading-tight">
              Majestic <span className="italic text-gradient">Africa</span>
            </h1>
            <p className="font-sans text-stone-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed opacity-80">
              Where ancient wisdom meets a thriving future. A vibrant depiction of immense diversity, 
              rich heritage, and untamed natural wonders.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <div className="w-px h-24 bg-gradient-to-b from-africa-gold to-transparent" />
            <span className="font-display text-[10px] uppercase tracking-widest text-africa-gold">Scroll to Explore</span>
          </motion.div>
        </div>
      </section>

      {/* Heritage & People */}
      <Section title="Ancient Roots" subtitle="People & Heritage">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 text-africa-gold">
              <Users size={32} />
              <span className="font-display uppercase tracking-widest text-sm">Cultural Tapestry</span>
            </div>
            <p className="text-stone-300 text-lg leading-relaxed">
              In the foreground of our history, a diverse group of people in traditional and modern attire 
              engage in the rhythm of daily life. Ancient rock art, subtly visible on nearby surfaces, 
              whispers stories of millennia past.
            </p>
            <div className="pt-4">
              <button className="group flex items-center gap-2 text-africa-gold font-display uppercase tracking-widest text-xs hover:text-africa-sunset transition-colors">
                Discover Traditions <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/africa-people-1/600/800" alt="Tradition" className="rounded-2xl h-80 w-full object-cover" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/africa-people-2/600/800" alt="Modernity" className="rounded-2xl h-80 w-full object-cover mt-8" referrerPolicy="no-referrer" />
          </div>
        </div>
      </Section>

      {/* Wildlife & Landscapes */}
      <section className="bg-stone-900/30 py-24">
        <Section title="Untamed Nature" subtitle="Wildlife & Savannas">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <PanoramicImage 
                src="https://picsum.photos/seed/savanna-wide/1200/600" 
                alt="Savanna" 
                caption="Iconic wildlife roaming the vast savannas" 
              />
            </div>
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl">
                <PawPrint className="text-africa-gold mb-4" />
                <h3 className="font-serif text-2xl mb-2">The Great Migration</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Elephants, lions, and giraffes roam under the dramatic silhouette of Mount Kilimanjaro.
                </p>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <Mountain className="text-africa-gold mb-4" />
                <h3 className="font-serif text-2xl mb-2">Table Mountain</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  The flat-topped guardian of the south, standing tall against the Atlantic spray.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* Landmarks */}
      <Section title="Eternal Wonders" subtitle="Monuments & Elements">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group rounded-2xl overflow-hidden h-[500px]">
            <img src="https://picsum.photos/seed/pyramids/800/1000" alt="Pyramids" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-center p-6">
                <h4 className="font-serif text-3xl text-africa-gold mb-2">Pyramids of Giza</h4>
                <p className="text-white text-sm uppercase tracking-widest">Ancient Wisdom</p>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-8">
            <div className="relative group rounded-2xl overflow-hidden">
              <img src="https://picsum.photos/seed/victoria-falls/800/500" alt="Victoria Falls" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
                <div className="flex items-center gap-2 text-africa-gold mb-1">
                  <Waves size={16} />
                  <span className="font-display text-[10px] uppercase tracking-widest">Mosi-oa-Tunya</span>
                </div>
                <h4 className="font-serif text-2xl">Victoria Falls</h4>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="glass-card p-6 rounded-2xl flex flex-col justify-center">
                <Sun className="text-africa-gold mb-2" />
                <h5 className="font-serif text-xl">Sahara Dunes</h5>
                <p className="text-stone-500 text-xs mt-2">Golden Sands</p>
              </div>
              <div className="glass-card p-6 rounded-2xl flex flex-col justify-center">
                <Globe className="text-africa-gold mb-2" />
                <h5 className="font-serif text-xl">Okavango</h5>
                <p className="text-stone-500 text-xs mt-2">Lush Delta</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Future Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://picsum.photos/seed/africa-future/1920/1080" alt="Future" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-5xl md:text-7xl mb-8">A Thriving <span className="text-africa-gold italic">Future</span></h2>
            <p className="text-stone-300 text-xl leading-relaxed mb-12">
              The scene conveys a sense of ancient wisdom, untamed nature, and a dynamic future. 
              Africa is not just a place of history, but a continent of innovation and growth.
            </p>
            <button className="bg-africa-gold text-africa-deep px-10 py-4 rounded-full font-display uppercase tracking-widest text-sm font-bold hover:bg-africa-sunset hover:text-white transition-all transform hover:scale-105">
              Join the Journey
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Compass className="text-africa-gold" />
            <span className="font-serif text-2xl tracking-tight">Majestic Africa</span>
          </div>
          <div className="flex gap-8 font-display text-[10px] uppercase tracking-[0.2em] text-stone-500">
            <a href="#" className="hover:text-africa-gold transition-colors">Heritage</a>
            <a href="#" className="hover:text-africa-gold transition-colors">Wildlife</a>
            <a href="#" className="hover:text-africa-gold transition-colors">Landmarks</a>
            <a href="#" className="hover:text-africa-gold transition-colors">Future</a>
          </div>
          <p className="text-stone-600 text-[10px] uppercase tracking-widest">
            © 2026 African Heritage Foundation
          </p>
        </div>
      </footer>
    </main>
  );
}
