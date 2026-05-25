import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  MapPinned,
  MessageSquareText,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#14532D] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Cidade de Eusébio"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#030712]/75" />

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Fade inferior */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >

          <motion.h1
            variants={itemVariants}
            className="
              mt-7 text-4xl font-semibold leading-tight tracking-tight
              sm:text-5xl
              lg:text-7xl lg:leading-[1.05]
            "
          >
            Eusébio em Movimento
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="
              mt-7 max-w-2xl
              text-base leading-8 text-[#D1FAE5]
              sm:text-lg
            "
          >
            Transformando a mobilidade urbana para uma cidade mais sustentável,
            acessível e dinâmica.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="
              mt-5 max-w-2xl
              text-sm leading-7 text-[#BBF7D0]/70
            "
          >
            Conheça o programa, os eixos estratégicos, o vídeo institucional e
            participe enviando sugestões para contribuir com o futuro da cidade.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#apresentacao"
              className="
                group inline-flex items-center justify-center gap-2
                rounded-full
                bg-[#22C55E]
                px-7 py-3.5
                text-sm font-medium text-white
                transition-all duration-300

                hover:-translate-y-0.5
                hover:bg-[#16A34A]
                hover:shadow-[0_10px_30px_rgba(34,197,94,0.35)]
              "
            >
              Conhecer o programa
              <ArrowRight
                className="
                  h-4 w-4 transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            <a
              href="#video"
              className="
                group inline-flex items-center justify-center gap-2
                rounded-full
                border border-white/15
                bg-[#ffffff0d]
                px-7 py-3.5
                text-sm font-medium text-white/90
                backdrop-blur-md
                transition-all duration-300

                hover:-translate-y-0.5
                hover:border-[#22C55E]/30
                hover:bg-white/[0.10]
              "
            >
              Ver vídeo institucional
              <Play className="h-4 w-4 fill-current" />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-3"
          >
            <div
              className="
                inline-flex items-center gap-2
                rounded-full border border-white/10
                bg-[#ffffff0b]
                px-4 py-2
                text-sm text-[#DCFCE7]/80
                backdrop-blur-md
              "
            >
              <MapPinned className="h-4 w-4 text-[#4ADE80]" />
              6 eixos estratégicos
            </div>

            <div
              className="
                inline-flex items-center gap-2
                rounded-full border border-white/10
                bg-[#ffffff0b]
                px-4 py-2
                text-sm text-[#DCFCE7]/80
                backdrop-blur-md
              "
            >
              <Play className="h-4 w-4 text-[#4ADE80]" />
              Vídeo institucional
            </div>

            <div
              className="
                inline-flex items-center gap-2
                rounded-full border border-white/10
                bg-[#ffffff0b]
                px-4 py-2
                text-sm text-[#DCFCE7]/80
                backdrop-blur-md
              "
            >
              <MessageSquareText className="h-4 w-4 text-[#4ADE80]" />
              Participação popular
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}