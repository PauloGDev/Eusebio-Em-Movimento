import { Link } from "react-router-dom";
import {
  RiInstagramLine,
  RiWhatsappLine,
  RiMailLine,
  RiMapPinLine,
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          {/* Coluna 1 */}
          <div className="max-w-md">
            <div className="inline-flex items-center gap-3">
              <div
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-2xl
                  bg-[#166534]
                  text-sm font-semibold text-white
                  shadow-[0_8px_20px_rgba(22,101,52,0.18)]
                "
              >
                EM
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Eusébio em Movimento
                </h3>

                <p className="text-sm text-slate-500">
                  Prefeitura Municipal de Eusébio
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-600">
              Programa voltado à transformação da mobilidade urbana,
              infraestrutura e desenvolvimento sustentável da cidade,
              promovendo soluções mais acessíveis, seguras e eficientes
              para toda a população.
            </p>
          </div>

          {/* Coluna 2 */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#166534]">
              Navegação
            </p>

            <div className="mt-6 flex flex-col gap-4 text-sm text-slate-600">
              <a
                href="#hero"
                className="transition-all duration-300 hover:text-[#166534]"
              >
                Início
              </a>

              <a
                href="#apresentacao"
                className="transition-all duration-300 hover:text-[#166534]"
              >
                Apresentação
              </a>

              <a
                href="#eixos"
                className="transition-all duration-300 hover:text-[#166534]"
              >
                Eixos Estratégicos
              </a>

              <a
                href="#formulario"
                className="transition-all duration-300 hover:text-[#166534]"
              >
                Sugestões
              </a>
            </div>
          </div>

          {/* Coluna 3 */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#166534]">
              Contato
            </p>

            <div className="mt-6 flex flex-col gap-4 text-sm text-slate-600">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-all duration-300 hover:text-[#166534]"
              >
                <RiInstagramLine className="h-5 w-5" />
                Instagram
              </a>

              <a
                href="https://wa.me/5585999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-all duration-300 hover:text-[#166534]"
              >
                <RiWhatsappLine className="h-5 w-5" />
                (85) 99999-9999
              </a>

              <a
                href="mailto:contato@eusebio.ce.gov.br"
                className="flex items-center gap-3 transition-all duration-300 hover:text-[#166534]"
              >
                <RiMailLine className="h-5 w-5" />
                contato@eusebio.ce.gov.br
              </a>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-all duration-300 hover:text-[#166534]"
              >
                <RiMapPinLine className="h-5 w-5" />
                Eusébio - Ceará
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-14 flex flex-col gap-4
            border-t border-slate-200
            pt-6 text-sm text-slate-500

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} Eusébio em Movimento.
            Todos os direitos reservados.
          </p>

          <p className="flex items-center gap-1">
            Desenvolvido por{" "}
            <a
              href="https://digitaltricks.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-medium text-[#166534]
                transition-all duration-300
                hover:text-[#14532D]
              "
            >
              Digital Tricks
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}