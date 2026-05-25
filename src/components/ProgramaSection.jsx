import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  MapPinned,
  ArrowUpRight,
  BusFront,
  Bike,
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
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const highlights = [
  {
    icon: MapPinned,
    title: "Planejamento integrado",
    text: "Soluções sustentáveis, acessíveis e eficientes desenhadas para o futuro da cidade.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e acolhimento",
    text: "Mais conforto e proteção para pedestres, ciclistas e usuários do transporte público.",
  },
  {
    icon: Users,
    title: "Participação da população",
    text: "A opinião da população será fundamental por meio de formulário online com sugestões sobre mobilidade urbana.",
  },
];

export default function ProgramaSection() {
  return (
    <section
      id="apresentacao"
      className="relative overflow-hidden bg-white px-6 py-24 text-slate-900 lg:px-8"
    >
      {/* Glow institucional */}
      <div className="absolute top-0 right-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#166534]/5 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"
        >
          {/* COLUNA ESQUERDA */}
          <div className="space-y-8">
            <motion.div variants={item} className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#166534]">
                Eusébio em Movimento
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                Um programa para transformar a mobilidade urbana de Eusébio
              </h2>
            </motion.div>

            {/* Lead */}
            <motion.p
              variants={item}
              className="
                border-l-4 border-[#166534]
                pl-4 text-xl font-medium leading-relaxed text-slate-800
              "
            >
              Criado pela Prefeitura de Eusébio, o programa tem como propósito
              revolucionar a forma como os eusebienses se deslocam, promovendo
              soluções integradas e sustentáveis para toda a cidade.
            </motion.p>

            {/* Conteúdo */}
            <motion.div
              variants={item}
              className="
                grid gap-6
                text-base leading-relaxed text-slate-600
                sm:grid-cols-2
              "
            >
              <div className="space-y-4">
                <p>
                  O trabalho foi estruturado para ser executado em{" "}
                  <strong className="font-semibold text-[#166534]">
                    curto, médio e longo prazo
                  </strong>
                  , com ações planejadas para atender às necessidades atuais e
                  preparar, de forma consistente, o futuro da mobilidade urbana
                  no município.
                </p>

                <p>
                  A proposta reúne visão técnica, planejamento urbano e
                  compromisso com o desenvolvimento da cidade, buscando soluções
                  mais eficientes, seguras e sustentáveis para todos.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  O programa está organizado em{" "}
                  <strong className="font-semibold text-[#166534]">
                    6 eixos de atuação
                  </strong>
                  : Parcerias e Prospecções, Desenho Urbano e Engenharia,
                  Mobilidade Ativa, Transporte Público, Plano de Mobilidade
                  Urbana e Recomendações Estruturantes.
                </p>

                <p
                  className="
                    rounded-2xl border border-[#DCFCE7]
                    bg-[#F0FDF4]
                    p-4 text-sm font-medium text-slate-700
                  "
                >
                  <span className="font-semibold text-[#166534]">
                    Participação popular:
                  </span>{" "}
                  o projeto contará com formulário online para envio de
                  sugestões, unindo o olhar especializado ao sentimento de quem
                  vive a cidade todos os dias.
                </p>
              </div>
            </motion.div>
          </div>

          {/* COLUNA DIREITA */}
          <div className="space-y-4">
            {highlights.map((itemData) => {
              const Icon = itemData.icon;

              return (
                <motion.div
                  key={itemData.title}
                  variants={item}
                  whileHover={{
                    y: -4,
                    shadow: "0 20px 40px rgba(15,23,42,0.08)",
                  }}
                  className="
                    group relative rounded-[24px]
                    border border-slate-200
                    bg-slate-50/50
                    p-6
                    transition-all duration-300

                    hover:border-[#166534]/20
                    hover:bg-white
                  "
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex h-12 w-12 shrink-0 items-center justify-center
                        rounded-2xl
                        bg-[#166534]/10
                        text-[#166534]
                        transition-colors duration-300

                        group-hover:bg-[#166534]
                        group-hover:text-white
                      "
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="flex items-center gap-1 text-lg font-semibold text-slate-900">
                        {itemData.title}

                        <ArrowUpRight
                          className="
                            h-4 w-4
                            -translate-y-1 translate-x-1
                            opacity-0
                            text-slate-400
                            transition-all duration-300

                            group-hover:translate-x-0
                            group-hover:translate-y-0
                            group-hover:opacity-100
                            group-hover:text-[#166534]
                          "
                        />
                      </h3>

                      <p className="text-sm leading-relaxed text-slate-600">
                        {itemData.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Card final */}
            <motion.div
              variants={item}
              className="
                relative overflow-hidden rounded-[24px]
                border border-[#166534]/10
                bg-gradient-to-br
                from-[#166534]/5
                to-[#166534]/[0.02]
                p-6
              "
            >
              <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-[#166534]/5" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#166534]">
                Desenvolvimento contínuo
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Com planejamento, escuta da população e ações estruturantes, o
                Eusébio em Movimento fortalece a jornada de desenvolvimento da
                cidade.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}