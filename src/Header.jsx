import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const eightLogo = "/assets/marca-eight.webp";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6 lg:px-0">
        <Link
          to="/"
          className="flex h-16 items-center justify-start transition-all duration-300"
          aria-label="Eight - voltar para home"
        >
          <img
            src={eightLogo}
            alt="Eight"
            className="block h-12 w-auto object-contain object-left md:h-16"
          />
        </Link>

        {/* MENU DESKTOP - TOTALMENTE CORRIGIDO */}
        <nav className="hidden rounded-full border border-black/10 bg-white px-5 py-3 text-base text-black/60 shadow-sm md:flex md:items-center md:gap-6">
          <Link
            to="/solucoes"
            className="font-bold transition-colors duration-300 hover:text-black"
          >
            Soluções
          </Link>
          <Link
            to="/servicos"
            className="font-bold transition-colors duration-300 hover:text-black"
          >
            Serviços
          </Link>
          <Link
            to="/sobre"
            className="font-bold transition-colors duration-300 hover:text-black"
          >
            Sobre Nós
          </Link>
        </nav>

        <a
          href="https://wa.me/5511957835531"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[#1ca1f1] px-5 py-3 text-base font-semibold leading-none text-white transition-all duration-300 hover:bg-[#0d8dd8] md:inline-flex"
        >
          <span className="leading-none">Fale conosco</span>
          <ArrowRight className="h-4 w-4 shrink-0 text-white" />
        </a>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((value) => !value)}
          className="relative grid h-11 w-11 place-items-center rounded-full border border-black/20 bg-white text-black shadow-sm transition-all duration-300 hover:bg-[#F3F4F6] md:hidden"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span className="relative block h-5 w-5">
            <span
              className={`absolute left-0 top-[3px] h-[2px] w-5 rounded-full bg-black transition-all duration-300 ease-out ${
                mobileMenuOpen
                  ? "translate-y-[7px] rotate-45"
                  : "translate-y-0 rotate-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[10px] h-[2px] w-5 rounded-full bg-black transition-all duration-200 ease-out ${
                mobileMenuOpen
                  ? "opacity-0 scale-x-0"
                  : "opacity-100 scale-x-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[17px] h-[2px] w-5 rounded-full bg-black transition-all duration-300 ease-out ${
                mobileMenuOpen
                  ? "-translate-y-[7px] -rotate-45"
                  : "translate-y-0 rotate-0"
              }`}
            />
          </span>
        </button>
      </div>

      {/* MENU MOBILE - CORRIGIDO DE ROTA / PARA /SOLUCOES */}
      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              height: { duration: 0.48, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.26, ease: "easeOut" },
            }}
            className="overflow-hidden bg-transparent md:hidden"
          >
            <div className="px-5 pb-5">
              <div className="flex flex-col gap-2 rounded-[28px] border border-black/10 bg-white p-3 text-base font-bold text-black/70 shadow-sm">
                <Link
                  to="/solucoes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-left transition-colors duration-300 hover:bg-[#F3F4F6] hover:text-black"
                >
                  Soluções
                </Link>
                <div className="mx-4 h-px bg-black/10" />
                <Link
                  to="/servicos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-left transition-colors duration-300 hover:bg-[#F3F4F6] hover:text-black"
                >
                  Serviços
                </Link>
                <div className="mx-4 h-px bg-black/10" />
                <Link
                  to="/sobre"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-left transition-colors duration-300 hover:bg-[#F3F4F6] hover:text-black"
                >
                  Sobre Nós
                </Link>
                <a
                  href="https://wa.me/5511957835531"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#1ca1f1] px-5 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#0d8dd8]"
                >
                  Fale conosco
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}