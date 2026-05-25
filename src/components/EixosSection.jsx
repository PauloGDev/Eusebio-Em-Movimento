import { motion } from "framer-motion";
import {
  Handshake,
  Route,
  Bike,
  Bus,
  Map,
  Building2,
} from "lucide-react";

const eixos = [
  {
    icon: Handshake,
    title: "Parcerias e Prospecções",
    text: "Mobilização de investimentos e parcerias estratégicas.",
  },
  {
    icon: Route,
    title: "Desenho Urbano e Engenharia",
    text: "Reconfiguração das vias e infraestrutura urbana.",
  },
  {
    icon: Bike,
    title: "Mobilidade Ativa",
    text: "Promoção de bicicletas e deslocamentos sustentáveis.",
  },
  {
    icon: Bus,
    title: "Transporte Público",
    text: "Integração modal, acessibilidade e eficiência.",
  },
  {
    icon: Map,
    title: "Plano de Mobilidade Urbana",
    text: "Estratégia integrada para os próximos anos.",
  },
  {
    icon: Building2,
    title: "Recomendações Estruturantes",
    text: "Diretrizes para consolidar a transformação urbana.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function EixosSection() {
  return (
    <section
      id="eixos"
      className="relative overflow-hidden bg-[#07110D] px-6 py-24 text-white lg:px-8"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03),transparent_32%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Os seis eixos do programa
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/65">
            Conheça as estratégias principais que guiam a transformação da
            mobilidade urbana em Eusébio
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 grid gap-7 sm:grid-cols-2 xl:grid-cols-3"
        >
          {eixos.map((eixo) => {
            const Icon = eixo.icon;

            return (
              <motion.div
                key={eixo.title}
                variants={item}
                className="
                  group relative overflow-hidden rounded-[30px]
                  border border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                  transition-all duration-500

                  hover:-translate-y-2
                  hover:border-[#22C55E]/20
                  hover:bg-white/[0.05]
                "
              >
                {/* Glow */}
                <div
                  className="
                    pointer-events-none absolute inset-0
                    opacity-0 transition-opacity duration-500
                    group-hover:opacity-100
                  "
                >
                  <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-[#22C55E]/10 blur-3xl" />
                </div>

                {/* Icon */}
                <div
                  className="
                    relative flex h-16 w-16 items-center justify-center
                    rounded-2xl
                    border border-[#22C55E]/10
                    bg-[#22C55E]/10
                    text-[#4ADE80]
                    transition-all duration-500

                    group-hover:scale-105
                    group-hover:bg-[#22C55E]/15
                  "
                >
                  <Icon className="h-8 w-8" />
                </div>

                {/* Line */}
                <div className="relative mt-8 h-px w-16 bg-[#22C55E]/40 transition-all duration-500 group-hover:w-24" />

                {/* Content */}
                <div className="relative mt-8">
                  <h3 className="text-xl font-semibold leading-snug">
                    {eixo.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {eixo.text}
                  </p>
                </div>

                {/* Accent */}
                <div
                  className="
                    absolute bottom-0 right-0
                    h-40 w-40
                    rounded-full
                    bg-[#22C55E]/[0.03]
                    blur-3xl
                  "
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}