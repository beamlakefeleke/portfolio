import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const linesOfCode = [
  "const developer = {",
  "  name: 'Bamlake',",
  "  stack: ['MERN', 'Flutter'],",
  "  passion: 'Building immersive experiences'",
  "};",
];

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden text-white">
      {/* ✨ Orbiting Gradient Blobs */}
      <motion.div
        className="absolute w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        style={{ top: "10%", left: "10%", transformOrigin: "60px 60px" }}
      />
      <motion.div
        className="absolute w-24 h-24 bg-cyan-400 rounded-full blur-2xl opacity-20"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        style={{ bottom: "15%", right: "10%", transformOrigin: "60px 60px" }}
      />

      {/* 🌌 Particle Layer */}
      <div className="absolute inset-0 z-0 bg-[url('/stars.svg')] opacity-10 bg-cover" />

      {/* 🌟 Central Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl sm:text-7xl font-black tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        >
          Hey, I’m <span className="text-[#915EFF]">Bamlake</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="mt-6 text-lg sm:text-2xl text-gray-300 max-w-xl leading-relaxed"
        >
          I build smooth, stunning, and scalable experiences using{" "}
          <span className="text-[#915EFF] font-semibold">MERN Stack</span> &
          <span className="text-[#915EFF] font-semibold"> Flutter</span>.
          <br />
          Let’s build something awesome together.
        </motion.p>

        {/* 💻 Code Editor Simulation */}
        <motion.div
          className="mt-10 bg-white/5 border border-white/10 rounded-lg shadow-xl w-full max-w-xl text-left font-mono text-sm backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 border-b border-white/10 rounded-t-lg">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>

          {/* Code */}
          <div className="p-6">
            {linesOfCode.map((line, i) => (
              <motion.pre
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-[#00FFF0] whitespace-pre-wrap"
              >
                {line}
                {i === linesOfCode.length - 1 && (
                  <motion.span
                    className="animate-pulse text-white ml-1"
                    transition={{ repeat: Infinity, duration: 0.8 }}
                  >
                    |
                  </motion.span>
                )}
              </motion.pre>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 🖱 Scroll Prompt */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about">
          <div className="w-12 h-12 rounded-full border-2 border-[#915EFF] flex items-center justify-center hover:scale-110 transition duration-300">
            <FaArrowDown className="text-[#915EFF] text-xl" />
          </div>
        </a>
        <span className="mt-2 text-xs text-gray-400">Scroll down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
