import { motion } from "framer-motion";
import { Play } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fallingStars = [
  { left: "4%", delay: 0.1, duration: 5.2, size: "h-44" },
  { left: "14%", delay: 1.6, duration: 5.8, size: "h-36" },
  { left: "24%", delay: 0.8, duration: 4.6, size: "h-52" },
  { left: "34%", delay: 2.2, duration: 6.0, size: "h-40" },
  { left: "44%", delay: 0.4, duration: 4.9, size: "h-48" },
  { left: "54%", delay: 1.9, duration: 5.5, size: "h-38" },
  { left: "64%", delay: 1.1, duration: 5.1, size: "h-50" },
  { left: "74%", delay: 2.6, duration: 6.2, size: "h-34" },
  { left: "84%", delay: 0.6, duration: 4.8, size: "h-46" },
  { left: "94%", delay: 1.8, duration: 5.6, size: "h-36" },
];

const smallParticles = [
  { left: "8%", delay: 0.5, duration: 3.5 },
  { left: "28%", delay: 1.5, duration: 3.0 },
  { left: "48%", delay: 2.2, duration: 3.8 },
  { left: "68%", delay: 0.9, duration: 3.2 },
  { left: "88%", delay: 2.6, duration: 3.6 },
];

export default function VideoSection() {
  return (
    <section
      id="video"
      className="relative overflow-hidden bg-white px-6 py-24 text-slate-900 lg:px-8"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,101,52,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(22,101,52,0.10),transparent_38%)]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Meteors */}
        {fallingStars.map((star, i) => (
          <motion.div
            key={`star-${i}`}
            aria-hidden="true"
            initial={{
              y: "-30%",
              x: 50,
              opacity: 0,
            }}
            animate={{
              y: "140%",
              x: -280,
              opacity: [0, 0, 0.8, 0.8, 0.3, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "linear",
            }}
            className="absolute top-[-10%]"
            style={{ left: star.left }}
          >
            <div
              className={`
                ${star.size}
                w-px
                rotate-[26deg]
                bg-gradient-to-b
                from-[#166534]
                via-[#22C55E]/70
                to-transparent
                blur-[0.3px]
              `}
            />

            <div className="absolute left-1/2 top-0 h-24 w-[2px] -translate-x-1/2 rotate-[26deg] bg-[#22C55E]/25 blur-sm" />
          </motion.div>
        ))}

        {/* Particles */}
        {smallParticles.map((particle, i) => (
          <motion.div
            key={`particle-${i}`}
            aria-hidden="true"
            initial={{
              y: "-20%",
              x: 30,
              opacity: 0,
            }}
            animate={{
              y: "130%",
              x: -140,
              opacity: [0, 0, 0.7, 0.4, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
            className="absolute top-[-8%]"
            style={{ left: particle.left }}
          >
            <div className="h-16 w-px rotate-[22deg] bg-gradient-to-b from-[#86EFAC]/60 via-[#86EFAC]/20 to-transparent" />

            <div className="absolute -top-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#BBF7D0] shadow-[0_0_10px_rgba(34,197,94,0.35)]" />
          </motion.div>
        ))}

        {/* Orbits */}
        <motion.div
          aria-hidden="true"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-28 top-10 h-80 w-80 rounded-full border border-[#166534]/10 opacity-60"
        />

        <motion.div
          aria-hidden="true"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[-70px] top-[44%] h-96 w-96 rounded-full border border-[#DCFCE7]/50 opacity-50"
        />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Header */}
          <motion.div variants={item} className="max-w-2xl">
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Conheça o programa Eusébio em Movimento
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Acompanhe as ações, projetos e melhorias urbanas que fazem parte
              da transformação da cidade.
            </p>
          </motion.div>

          {/* Video */}
          <motion.div variants={item} className="mt-14">
            <div
              className="
                group relative overflow-hidden rounded-[32px]
                border border-slate-200
                bg-white
                p-2
                shadow-[0_32px_64px_-16px_rgba(15,23,42,0.12)]
                transition duration-500

                hover:shadow-[0_40px_80px_-12px_rgba(22,101,52,0.14)]
              "
            >
              <div className="relative aspect-video overflow-hidden rounded-[24px] bg-slate-100">
                {/* Image */}
                <motion.img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
                  alt="Vídeo institucional"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/35" />

                {/* Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover="hover"
                    whileTap="tap"
                    className="
                      relative flex items-center justify-center
                      transition-colors

                    "
                  >
                    {/* Pulse */}
                    <motion.div
                      variants={{
                        hover: { scale: 1.3, opacity: 0 },
                        tap: { scale: 1 },
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeOut",
                      }}
                      className="pointer-events-none absolute inset-0 rounded-full bg-[#22C55E]/30"
                    />

                    <motion.div
                      variants={{
                        hover: { scale: 1.06 },
                        tap: { scale: 0.95 },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className="flex items-center justify-center"
                    >
                      <Play className="ml-1.5 h-9 w-9 fill-current" />
                    </motion.div>
                  </motion.button>
                </div>
              </div>

              {/* Bottom */}
              <div className="px-6 py-5 sm:px-8">
                <p className="text-sm font-medium text-slate-600 transition-colors duration-300 group-hover:text-[#166534]">
                  Mobilidade, infraestrutura e desenvolvimento urbano em um só
                  plano.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}