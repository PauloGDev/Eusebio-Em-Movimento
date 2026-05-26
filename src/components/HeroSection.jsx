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
            Conheça o programa, os eixos, assista ao vídeo institucional e participe enviando sugestões para contribuir com o futuro de nossa cidade.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}