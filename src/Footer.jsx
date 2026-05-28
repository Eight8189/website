import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    setNewsletterSubmitted(true);
  };

  return (
    <section
      id="contato"
      className="w-full bg-[#101010] px-5 pt-16 pb-[62px] text-white md:px-10 md:pt-28 md:pb-[62px]"
    >
      <div className="mx-auto max-w-7xl text-center md:text-left">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-start">
            <p className="mx-auto inline-flex w-fit items-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase text-black md:mx-0">
              Contato
            </p>
            <h2 className="mx-auto mt-5 max-w-xl text-[36px] font-semibold leading-[1] tracking-[-0.045em] md:mx-0 md:text-[55px] md:leading-[0.95]">
              Quer começar a ter vantagem?
            </h2>
            <p className="mx-auto mt-6 max-w-md text-lg leading-8 text-white/50 md:mx-0">
              Conte o que você quer organizar, automatizar ou vender melhor. Vamos
              desenhar uma estrutura clara para o seu próximo passo.
            </p>
            <div className="mx-auto mt-8 md:mx-0">
              <a
                href="https://wa.me/5511957835531"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1ca1f1] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#0d8dd8]"
              >
                <span className="leading-none">Fale conosco</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-white" />
              </a>
            </div>
            <div className="mx-auto mt-8 h-px w-full max-w-md bg-white/10 md:hidden" />
          </div>

          <div className="flex flex-col gap-8 lg:items-start">
            <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">

              <div>
                <h3 className="text-base font-semibold text-white">Soluções</h3>
                <div className="mt-4 space-y-3 text-lg text-white/45">
                  <Link
                    to="/"
                    className="block transition-colors duration-300 hover:text-white"
                  >
                    Connect+
                  </Link>
                  <Link
                    to="/"
                    className="block transition-colors duration-300 hover:text-white"
                  >
                    Agentes IA
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Serviços</h3>
                <div className="mt-4 space-y-3 text-lg text-white/45">
                  <Link
                    to="/servicos"
                    className="block transition-colors duration-300 hover:text-white"
                  >
                    O que fazemos
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Sobre Nós</h3>
                <div className="mt-4 space-y-3 text-lg text-white/45">
                  <Link
                    to="/sobre"
                    className="block transition-colors duration-300 hover:text-white"
                  >
                    Quem Somos
                  </Link>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleNewsletterSubmit}
              className="relative flex w-full max-w-[430px] flex-col items-start lg:items-start"
            >
              <div className="w-full rounded-[28px] border border-white/15 bg-white/8 p-1 lg:min-w-[430px] lg:py-0">
                <div className="flex items-center gap-2 rounded-full bg-transparent px-2.5 py-1 text-white/45 lg:py-2">
                  <Mail className="h-5 w-5 shrink-0" />
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(event) => {
                      setNewsletterEmail(event.target.value);
                      setNewsletterSubmitted(false);
                    }}
                    placeholder="Newsletter"
                    className="w-full bg-transparent text-base text-white placeholder:text-white/45 outline-none [font-family:inherit]"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1ca1f1] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#0d8dd8]"
                  >
                    Enviar
                    <ArrowRight className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
              {newsletterSubmitted && (
                <p className="mt-[10px] w-full text-center text-base font-semibold text-white lg:w-auto lg:text-left lg:absolute lg:left-[42px] lg:top-full lg:mt-[10px]">
                  E-mail cadastrado!
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-center text-base text-white/35 md:flex-row md:justify-between md:text-left">
          <p className="order-2 text-base text-white/50 md:order-1">
            ©Eight • Estratégia, Tecnologia e IA aplicada.
          </p>
          <div className="order-1 flex flex-wrap justify-center gap-x-6 gap-y-2 md:order-2 md:justify-end">
            <a
              href="mailto:oi@eight.net.br"
              className="text-base font-normal text-white transition-colors duration-300 hover:text-white/75"
            >
              Envie um e-mail
            </a>
            <a
              href="https://wa.me/5511957835531"
              target="_blank"
              rel="noreferrer"
              className="text-base font-normal text-white transition-colors duration-300 hover:text-white/75"
            >
              Fale por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
