import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    const offset = 90;

    const top =
      element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const links = [
    { name: "Apresentação", path: "apresentacao" },
    { name: "Vídeo", path: "video" },
    { name: "Eixos", path: "eixos" },
    { name: "Formulário", path: "formulario" },
  ];

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
        <div
          className={`
            mx-auto max-w-7xl overflow-hidden rounded-2xl transition-all duration-300
            ${scrolled ? "borderborder-slate-200/90 bg-[#fcfcfc]" : ""}
          `}
        >
          <div className="flex items-center justify-between px-5 py-4 sm:px-7 lg:px-8">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="group flex items-center gap-3 sm:gap-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className={`
                  flex w-full items-center justify-center transition-all duration-300
                `}
              >
                <img
                  src={
                    scrolled
                      ? "/EUSEB-MOVcor horizont.png"
                      : "/EUSEB-MOVbranca horizont.png"
                  }
                  alt="Eusébio em Movimento"
                  className="h-20 w-full object-contain transition-all duration-300"
                />
              </motion.div>
            </button>

            {/* Desktop */}
            <nav className="hidden items-center gap-2 lg:flex">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.path)}
                  className={`
                    rounded-xl px-4 py-2 text-sm font-medium tracking-[0.02em] transition-all duration-200
                    ${
                      scrolled
                        ? "text-slate-600 hover:bg-[#F0FDF4] hover:text-[#166534]"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden items-center gap-4 lg:flex">
              <button
                onClick={() => scrollToSection("formulario")}
                className={`
                  group inline-flex items-center gap-2 rounded-xl px-5 py-3
                  text-sm font-medium text-white transition-all duration-300
                  ${
                    scrolled
                      ? "border border-[#22C55E]/20 bg-[#16A34A] hover:bg-[#15803D] hover:shadow-[0_12px_28px_rgba(34,197,94,0.22)]"
                      : "border border-white/15 bg-white/10 hover:bg-white/15"
                  }
                  hover:-translate-y-0.5
                `}
              >
                <Phone className="h-4 w-4" />
                Enviar Sugestão
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setVisible(true)}
              className={`
                flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 lg:hidden
                ${
                  scrolled
                    ? "border-slate-200 bg-white text-slate-900 shadow-sm hover:bg-slate-50"
                    : "border-white/15 bg-white/10 text-white hover:bg-white/15"
                }
              `}
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {visible && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setVisible(false)}
              className="fixed inset-0 z-50 bg-black/45 backdrop-blur-[2px]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 24, stiffness: 220 }}
              className="
                fixed right-0 top-0 z-[60]
                h-screen w-[88%] overflow-hidden
                border-l border-slate-200 bg-white shadow-2xl sm:w-[420px]
              "
            >
              <div className="flex h-full flex-col">
                {/* Top */}
                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-6">
                  <button
                    onClick={() => {
                      scrollToSection("hero");
                      setVisible(false);
                    }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#166534] text-white">
                      <img
                        src="/logo.svg"
                        alt="Eusébio em Movimento"
                        className="h-7 w-7 object-contain"
                      />
                    </div>

                    <div className="leading-tight text-left">
                      <h2 className="text-sm font-semibold text-slate-900">
                        Eusébio em Movimento
                      </h2>

                      <p className="text-xs text-slate-500">
                        Programa de Mobilidade Urbana
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => setVisible(false)}
                    className="
                      flex h-10 w-10 items-center justify-center rounded-full
                      border border-slate-200 bg-white text-slate-900
                      transition-all duration-300 hover:bg-slate-50
                    "
                    aria-label="Fechar menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-3 px-6 pt-10">
                  {links.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => {
                        scrollToSection(link.path);
                        setVisible(false);
                      }}
                      className="
                        group flex items-center justify-between
                        rounded-2xl border border-slate-200 bg-slate-50
                        px-5 py-4 text-left text-base font-medium text-slate-800
                        transition-all duration-300
                        hover:border-[#166534]/20
                        hover:bg-[#F0FDF4]
                        hover:text-[#166534]
                      "
                    >
                      {link.name}
                      <ArrowRight className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#166534]" />
                    </button>
                  ))}
                </div>

                {/* CTA bottom */}
                <div className="mt-auto p-6">
                  <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-slate-900">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#166534]">
                      Desenvolvimento urbano
                    </p>

                    <h3 className="mt-2 text-xl font-semibold leading-tight">
                      Acompanhe os projetos da cidade
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Obras, mobilidade, infraestrutura e melhorias urbanas com
                      transparência e inovação.
                    </p>

                    <button
                      onClick={() => {
                        scrollToSection("formulario");
                        setVisible(false);
                      }}
                      className="
                        mt-5 inline-flex w-full items-center justify-center gap-2
                        rounded-xl bg-[#166534] px-5 py-3 font-medium text-white
                        transition-all duration-300 hover:bg-[#14532D]
                        hover:shadow-[0_12px_28px_rgba(34,197,94,0.22)]
                      "
                    >
                      <Phone className="h-4 w-4" />
                      Enviar Sugestão
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;