import { useRef } from 'react';
import { motion } from 'framer-motion';

// Marquee ticker — the signature element.
// Functional: tells the reader exactly what you do at a glance.
const TICKER_ITEMS = [
  'Flutter', '·', 'React', '·', 'Node.js', '·', 'NestJS', '·',
  'TypeScript', '·', 'MongoDB', '·', 'Next.js', '·', 'Firebase', '·',
  'Mobile', '·', 'Full-Stack', '·',
];

function Marquee() {
  // Duplicate for seamless loop
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="marquee-wrapper overflow-hidden py-3" aria-hidden="true">
      <div className="flex whitespace-nowrap marquee gap-8 text-sm font-mono text-muted tracking-widest uppercase">
        {items.map((item, i) => (
          <span
            key={i}
            className={item === '·' ? 'text-amber' : ''}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-0"
    >
      {/* Main hero content */}
      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full py-16">

          {/* Left — editorial text block */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            <motion.div variants={item} className="flex items-center gap-3 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
              </span>
              <span className="text-xs font-body font-medium text-green-400 tracking-widest uppercase">
                Open to work
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-6xl md:text-8xl leading-[0.95] tracking-tight mb-6 text-paper"
            >
              Bamlake<br />
              <span className="italic text-amber">Feleke</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg text-muted leading-relaxed max-w-md mb-8 font-body"
            >
              Fullstack developer. I build production mobile
              apps with Flutter and ship end-to-end web products on the MERN stack.
              Currently at{' '}
              <span className="text-paper font-medium">Safaricom Ethiopia</span>,
              where I own the commercial trade platform from architecture to release.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-7 py-3.5 bg-amber text-ink font-body font-semibold text-sm tracking-wide rounded-sm hover:bg-paper transition-colors duration-200"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 border border-muted/40 text-paper font-body font-medium text-sm tracking-wide rounded-sm hover:border-amber hover:text-amber transition-colors duration-200"
              >
                Get in touch
              </a>
            </motion.div>

            {/* Numeric facts — specific and verifiable */}
            <motion.div
              variants={item}
              className="flex gap-10 mt-14 pt-8 border-t border-muted/20"
            >
              {[
                { value: '4+', label: 'Years shipping' },
                { value: '23+', label: 'Projects delivered' },
                { value: '3', label: 'Active clients' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl text-paper">{stat.value}</p>
                  <p className="text-xs text-muted uppercase tracking-widest mt-1 font-body">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — fact card, not code decoration */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="themed-surface border themed-border p-8 space-y-7" style={{ borderColor: 'var(--color-divider)' }}>

              {/* What I'm focused on right now */}
              <div>
                <p className="text-[10px] font-mono text-amber uppercase tracking-wider mb-4">
                  What I'm working on
                </p>
                <div className="space-y-3">
                  {[
                    {
                      tag: 'Mobile',
                      text: ' Market sales activities and tracking agents at Safaricom ET',
                    },
                    {
                      tag: 'Web',
                      text: 'PWA e-commerce platform — Next.js front, NestJS API, Telegram order bot',
                    },
                    {
                      tag: 'ML',
                      text: 'On-device crop disease detection with TFLite, no internet needed',
                    },
                  ].map((item) => (
                    <div key={item.tag} className="flex gap-3 items-start">
                      <span className="text-[10px] font-mono text-amber border border-amber/30 px-2 py-0.5 rounded-sm uppercase tracking-wider shrink-0 mt-0.5">
                        {item.tag}
                      </span>
                      <p className="text-sm font-body text-muted leading-snug">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Two concrete numbers that prove range */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-muted/20">
                <div>
                  <p className="font-display text-4xl text-paper">200<span className="text-amber">+</span></p>
                  <p className="text-xs font-mono text-muted mt-1 leading-tight">
                    field agents using<br />the Safaricom app
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl text-paper">97<span className="text-amber">%</span></p>
                  <p className="text-xs font-mono text-muted mt-1 leading-tight">
                    crash-free rate after<br />a delivery app fix
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee — signature element, bottom of hero */}
      <Marquee />
    </section>
  );
}
