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
  <div className="space-y-4">
    <img
      src="/EUSEB-MOVcor horizont.png"
      alt="Eusébio em Movimento"
      className="h-16 w-auto object-contain"
    />

    <p className="text-sm text-slate-500">
      Prefeitura Municipal de Eusébio
    </p>
  </div>

  <p className="mt-6 text-sm leading-7 text-slate-600">
    Eusébio em Movimento — programa de mobilidade urbana da
    Prefeitura de Eusébio.
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
      href="https://instagram.com/prefeituradeeusebio"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 transition-all duration-300 hover:text-[#166534]"
    >
      <RiInstagramLine className="h-5 w-5" />
      @prefeituradeeusebio
    </a>

    <a
      href="mailto:eusebioemmovimento@eusebio.ce.gov.br"
      className="flex items-center gap-3 transition-all duration-300 hover:text-[#166534]"
    >
      <RiMailLine className="h-5 w-5" />
      eusebioemmovimento@eusebio.ce.gov.br
    </a>

    <a
      href="https://www.google.com/maps/place/Prefeitura+Municipal+do+Eus%C3%A9bio/@-3.8939935,-38.4718224,16z/data=!4m10!1m2!2m1!1sEusebio+Municipal+Hall+R.+Edmilson+Pinheiro,+150+-+Aut%C3%B3dromo,+Eus%C3%A9bio+-+CE,+61764-010,+Brazil!3m6!1s0x7c75a6181b2f9b7:0x47f70805f2df37a0!8m2!3d-3.8939935!4d-38.4622952!15sCl9FdXNlYmlvIE11bmljaXBhbCBIYWxsIFIuIEVkbWlsc29uIFBpbmhlaXJvLCAxNTAgLSBBdXTDs2Ryb21vLCBFdXPDqWJpbyAtIENFLCA2MTc2NC0wMTAsIEJyYXppbFpYIlZldXNlYmlvIG11bmljaXBhbCBoYWxsIHIgZWRtaWxzb24gcGluaGVpcm8gMTUwIGF1dMOzZHJvbW8gZXVzw6liaW8gY2UgNjE3NjQgMDEwIGJyYXppbJIBCWNpdHlfaGFsbJoBJENoZERTVWhOTUc5blMwVkpRMEZuVFVSbk16UnVRbWxSUlJBQuABAPoBBAgAEDk!16s%2Fg%2F1td7tdfn?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
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