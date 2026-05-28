import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../Header";
import Footer from "../Footer";

const services = [
  [
    "Estratégia Digital",
    "Diagnóstico, posicionamento, funil e plano de crescimento para empresas que querem sair do improviso.",
  ],
  [
    "Automações Inteligentes",
    "Fluxos para reduzir tarefas manuais, organizar processos internos e melhorar a produtividade da operação.",
  ],
  [
    "Tráfego Direto",
    "Campanhas orientadas por estratégia, dados e performance para atrair oportunidades qualificadas.",
  ],
  [
    "Websites e Landing Pages",
    "Páginas claras, sofisticadas e orientadas para conversão, autoridade e geração de oportunidades.",
  ],
  [
    "Criativos",
    "Criação de peças, vídeos e mensagens para campanhas, redes sociais e comunicação comercial.",
  ],
  [
    "CRM (Gestão de Clientes)",
    "Estruturação de processos comerciais, organização de contatos e acompanhamento de oportunidades.",
  ],
  [
    "SEO (Otimização para Busca)",
    "Construção de presença orgânica com conteúdo, estrutura técnica e otimização para mecanismos de busca.",
  ],
];

export default function Services() {
  const [activeService, setActiveService] = useState(-1);

  return (
    <main className="min-h-screen bg-white text-[#111111]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700;800&display=swap');
        .premium-cut { border-radius: 34px; }
        .marquee-track { display: flex; width: max-content; animation: marquee 38s linear infinite; will-change: transform; }
        @keyframes marquee { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(-50%, 0, 0); } }
      `}</style>

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-5 pb-16 pt-20 md:px-6 md:pb-24 md:pt-28">
        <div className="absolute right-[8%] top-20 h-56 w-56 rounded-full bg-[#F4E9FF] blur-3xl" />
        <div className="absolute left-[4%] bottom-4 h-64 w-64 rounded-full bg-[#E5E7EB] blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-4 inline-flex items-center rounded-full bg-[#101010] px-4 py-2 text-xs font-semibold uppercase text-white">
            Serviços
          </div>
          <h1 className="max-w-4xl text-[44px] font-semibold leading-[0.94] tracking-[-0.065em] md:text-[65px] md:leading-[0.92]">
            Soluções completas para seu negócio
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/55">
            Oferecemos uma gama de serviços estratégicos, tecnológicos e criativos para impulsionar o crescimento da sua empresa.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="premium-cut border border-black/10 bg-white shadow-sm overflow-hidden">
            {services.map(([title, text], index) => {
              const isActive = activeService === index;
              return (
                <button
                  key={title}
                  type="button"
                  onClick={() => setActiveService(isActive ? -1 : index)}
                  className="group w-full border-b border-black/10 p-6 text-left last:border-b-0 md:p-8 transition-colors hover:bg-[#F3F4F6]"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                        {title}
                      </h3>
                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 max-w-2xl text-lg leading-8 text-black/55">
                          {text}
                        </p>
                      </motion.div>
                    </div>
                    <div
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition ${
                        isActive
                          ? "bg-[#1ca1f1] text-white"
                          : "bg-[#F3F4F6] text-black group-hover:bg-[#1ca1f1] group-hover:text-white"
                      }`}
                    >
                      <ChevronRight
                        className={`h-5 w-5 transition-transform duration-300 ${
                          isActive ? "-rotate-90" : "rotate-90"
                        }`}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F3F4F6] px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Pronto para começar?
          </h2>
          <p className="mt-6 text-lg text-black/55">
            Fale com nosso time e descubra como podemos ajudar sua empresa a crescer de forma estruturada e inteligente.
          </p>
          <a
            href="https://wa.me/5511957835531"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#1ca1f1] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#0d8dd8]"
          >
            Entrar em contato
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
