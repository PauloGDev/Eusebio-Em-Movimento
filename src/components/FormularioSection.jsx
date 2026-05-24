import { motion } from "framer-motion";
import {
  Send,
  User,
  Phone,
  MapPin,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FormularioSection() {
  return (
    <section
      id="formulario"
      className="relative overflow-hidden bg-white px-6 py-24 text-slate-900 lg:px-8"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,101,52,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(22,101,52,0.06),transparent_32%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

        <motion.div
          aria-hidden="true"
          animate={{
            x: [0, 16, 0],
            y: [0, -10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-4rem] top-16 h-48 w-48 rounded-full bg-[#166534]/10 blur-3xl"
        />

        <motion.div
          aria-hidden="true"
          animate={{
            x: [0, -14, 0],
            y: [0, 14, 0],
            opacity: [0.18, 0.45, 0.18],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-5rem] top-24 h-60 w-60 rounded-full bg-slate-200/70 blur-3xl"
        />

        <motion.div
          aria-hidden="true"
          animate={{
            y: [0, 18, 0],
            opacity: [0.12, 0.3, 0.12],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-4rem] left-1/3 h-64 w-64 rounded-full bg-[#166534]/8 blur-3xl"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        {/* Left */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="lg:sticky lg:top-8"
        >
          <motion.div
            variants={item}
            className="
              rounded-[32px]
              border border-slate-200
              bg-white
              p-8
              shadow-[0_18px_50px_rgba(15,23,42,0.06)]
            "
          >
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#166534]">
              Formulário de sugestões
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Deixe Sua Sugestão
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Sua opinião é importante para nós. Compartilhe suas ideias,
              sugestões e comentários sobre o programa Eusébio em Movimento.
            </p>

            <a
              href="#video"
              className="
                mt-8 inline-flex items-center gap-2
                text-sm font-medium text-[#166534]
                transition-all duration-300 hover:gap-3
              "
            >
              Ver o vídeo institucional
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="
            overflow-hidden rounded-[36px]
            border border-slate-200
            bg-white
            shadow-[0_20px_60px_rgba(15,23,42,0.06)]
          "
        >
          {/* Header */}
          <div className="border-b border-slate-100 px-8 py-10 sm:px-12">
            <motion.p
              variants={item}
              className="text-sm font-medium uppercase tracking-[0.3em] text-[#166534]"
            >
              Formulário de contato
            </motion.p>

            <motion.h3
              variants={item}
              className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl"
            >
              Envie sua mensagem
            </motion.h3>

            <motion.p
              variants={item}
              className="mt-4 max-w-2xl text-base leading-7 text-slate-600"
            >
              Compartilhe dúvidas, sugestões e comentários sobre o programa.
            </motion.p>
          </div>

          {/* Form */}
          <motion.form
            variants={container}
            className="grid gap-6 px-8 py-10 sm:px-12"
          >
            {/* Nome */}
            <motion.div variants={item}>
              <label className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-700">
                <User className="h-4 w-4 text-[#166534]" />
                Nome
              </label>

              <input
                type="text"
                placeholder="Seu nome completo"
                className="
                  h-14 w-full rounded-2xl
                  border border-slate-200
                  bg-slate-50
                  px-5
                  text-slate-900
                  outline-none
                  transition-all duration-300

                  placeholder:text-slate-400

                  focus:border-[#166534]/30
                  focus:bg-white
                  focus:ring-4
                  focus:ring-[#166534]/10
                "
              />
            </motion.div>

            {/* Telefone */}
            <motion.div variants={item}>
              <label className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-700">
                <Phone className="h-4 w-4 text-[#166534]" />
                Telefone
              </label>

              <input
                type="tel"
                placeholder="(85) 9999-9999"
                className="
                  h-14 w-full rounded-2xl
                  border border-slate-200
                  bg-slate-50
                  px-5
                  text-slate-900
                  outline-none
                  transition-all duration-300

                  placeholder:text-slate-400

                  focus:border-[#166534]/30
                  focus:bg-white
                  focus:ring-4
                  focus:ring-[#166534]/10
                "
              />
            </motion.div>

            {/* Bairro */}
            <motion.div variants={item}>
              <label className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-700">
                <MapPin className="h-4 w-4 text-[#166534]" />
                Bairro
              </label>

              <input
                type="text"
                placeholder="Seu bairro"
                className="
                  h-14 w-full rounded-2xl
                  border border-slate-200
                  bg-slate-50
                  px-5
                  text-slate-900
                  outline-none
                  transition-all duration-300

                  placeholder:text-slate-400

                  focus:border-[#166534]/30
                  focus:bg-white
                  focus:ring-4
                  focus:ring-[#166534]/10
                "
              />
            </motion.div>

            {/* Mensagem */}
            <motion.div variants={item}>
              <label className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-700">
                <MessageSquare className="h-4 w-4 text-[#166534]" />
                Sugestão ou comentário
              </label>

              <textarea
                rows={6}
                placeholder="Compartilhe sua sugestão ou comentário..."
                className="
                  w-full rounded-3xl
                  border border-slate-200
                  bg-slate-50
                  px-5 py-4
                  text-slate-900
                  outline-none
                  transition-all duration-300

                  placeholder:text-slate-400

                  focus:border-[#166534]/30
                  focus:bg-white
                  focus:ring-4
                  focus:ring-[#166534]/10
                "
              />
            </motion.div>

            {/* Button */}
            <motion.div variants={item}>
              <button
                type="submit"
                className="
                  inline-flex h-14 items-center justify-center gap-2
                  rounded-full
                  bg-[#166534]
                  px-8
                  font-medium text-white
                  transition-all duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#14532D]
                  hover:shadow-[0_10px_30px_rgba(22,101,52,0.20)]
                "
              >
                <Send className="h-4 w-4" />
                Enviar Sugestão
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}