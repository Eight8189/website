import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const heroOrbImage = "/assets/cliente-feliz.webp";
const connectPlusImage = "/assets/connect-home.webp";
const aboutImage = "/assets/equipe-trabalhando-quem-somos.webp";

const logos = ["Captação", "Triagem", "Qualificação", "Agendamento", "IA", "CRM", "Follow-up", "Operação", "Conversão"];

const workCards = [
  {
    tag: "Connect+",
    title: "Sistema completo de captação, qualificação e conversão para clínicas",
    desc: "Da estratégia de tráfego ao paciente agendado, conectamos campanhas, triagem e operação em uma única jornada.",
    href: "/connect-plus"
  },
  {
    tag: "Agentes de IA",
    title: "Atendimento inteligente 24/7 para primeiro contato e follow-up",
    desc: "Nossos agentes fazem o primeiro contato com o lead, filtram, educam, respondem em tempo real e criam um relacionamento ativo consistente.",
    href: "/agentes-ia"
  }
];

function Label({ children }) {
  return (
    <div className="mb-4 inline-flex items-center rounded-full bg-[#101010] px-4 py-2 text-xs font-semibold uppercase text-white">
      {children}
    </div>
  );
}

function Button({ children, dark = false, target = "https://wa.me/5511957835531" }) {
  return (
    <a
      href={target}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 ${
        dark ? "bg-[#101010] text-white hover:bg-[#2b2b2b]" : "bg-[#1ca1f1] text-white hover:bg-[#0d8dd8]"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function WorkVisual({ index }) {
  const iconClass = "h-[72px] w-[72px] text-[#1ca1f1] drop-shadow-[0_0_18px_rgba(28,161,241,0.35)] sm:h-[92px] sm:w-[92px]";
  const icons = [
    <svg key="funnel" className={iconClass} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <circle cx="38" cy="18" r="6" stroke="currentColor" strokeWidth="5" />
      <circle cx="60" cy="12" r="6" stroke="currentColor" strokeWidth="5" />
      <circle cx="82" cy="18" r="6" stroke="currentColor" strokeWidth="5" />
      <path d="M25 36H95L67 72V100L53 108V72L25 36Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      <circle cx="60" cy="113" r="4" fill="currentColor" />
    </svg>,
    <svg key="agent" className={iconClass} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path d="M36 105V82C24 72 18 58 20 43C23 21 41 10 61 12C83 14 98 31 98 52V74" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M41 52H55M55 52V36M55 52V68M55 36H71M71 36V26M71 36V50M71 50H86M71 68H86M86 68V82M86 50V38" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="55" cy="36" r="5" fill="currentColor" />
      <circle cx="71" cy="26" r="5" fill="currentColor" />
      <circle cx="86" cy="38" r="5" fill="currentColor" />
      <circle cx="86" cy="82" r="5" fill="currentColor" />
      <circle cx="41" cy="52" r="5" fill="currentColor" />
    </svg>
  ];
  return icons[index] || icons[0];
}

export default function EightIAHomeVisualLayout() {

  return (
    <main id="home" className="min-h-screen bg-white text-[#111111]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700;800&display=swap');
        .premium-cut { border-radius: 34px; }
        .marquee-track { display: flex; width: max-content; animation: marquee 38s linear infinite; will-change: transform; }
        @keyframes marquee { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(-50%, 0, 0); } }
      `}</style>

      <Header />

      <section className="relative -mt-[10px] overflow-hidden px-5 pb-14 pt-10 md:mt-0 md:px-6 md:pb-24 md:pt-20 lg:pb-24 lg:pt-10">
        <div className="absolute right-[8%] top-20 h-56 w-56 rounded-full bg-[#F4E9FF] blur-3xl" />
        <div className="absolute left-[4%] bottom-4 h-64 w-64 rounded-full bg-[#E5E7EB] blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Label>Soluções para clínicas</Label>
            <h1 className="max-w-3xl text-[44px] font-semibold leading-[0.94] tracking-[-0.065em] md:text-[65px] md:leading-[0.92] lg:text-[65px]">O ecossistema por trás das clínicas que não param de crescer.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55 md:mt-7">Desenvolvemos automações inteligentes, da captação ao agendamento, que transformam o marketing da sua clínica em receita previsível.</p>
            <div className="mt-9 hidden flex-col gap-4 sm:flex-row sm:items-center lg:flex">
              <Button>Fazer um diagnóstico</Button>
              <Link
                to="/#solucoes"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-6 py-3 text-base font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white"
              >
                Saiba mais
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative -mt-[30px] min-h-[490px] md:mt-0 md:min-h-[520px]">
            <div className="premium-cut absolute right-0 top-4 h-[360px] w-[88%] overflow-hidden bg-[#2b2b2b] shadow-2xl shadow-black/10 md:h-[420px] md:w-[76%]">
              <img src={heroOrbImage} alt="Profissional feliz com os resultados das ferramentas da Eight" className="absolute inset-0 block h-full w-full translate-x-[40px] object-cover object-center md:translate-x-0" loading="eager" />
              <div className="absolute inset-x-5 bottom-6 rounded-3xl bg-white/90 p-4 backdrop-blur-xl md:inset-x-8 md:bottom-8 md:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">Connect+</p>
                <p className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">Fluxo inteligente de crescimento</p>
              </div>
            </div>
            <div className="absolute left-0 top-[26px] w-36 rounded-[24px] bg-[#101010] p-4 text-white shadow-2xl shadow-black/20 md:left-3 md:top-16 md:w-40 md:rounded-[28px] md:p-5">
              <div className="flex items-end gap-1"><span className="text-4xl font-semibold tracking-tighter">99</span><span className="mb-1 text-lg">%</span></div>
              <p className="mt-1 text-base text-white/45">Leads organizados</p>
              <div className="mt-5 flex h-20 items-end gap-2">{[28, 46, 62, 82, 96].map((h, i) => <span key={i} style={{ height: `${h}%` }} className="w-5 rounded-full bg-[#1ca1f1]" />)}</div>
            </div>
            <div className="absolute bottom-[-14px] left-8 rounded-3xl bg-white p-4 shadow-2xl shadow-black/10 sm:left-[61px] md:bottom-12 md:left-12 md:p-5">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#EAF8EF] text-[#1F7A4D]"><CheckCircle2 className="h-6 w-6" /></div>
              <p className="mt-3 text-lg font-semibold leading-tight">Qualificação<br />inteligente</p>
            </div>
            <div className="absolute bottom-[76px] right-1 rounded-full bg-white px-4 py-3 text-base font-semibold text-black shadow-2xl shadow-black/10 sm:bottom-[22px] sm:right-[36px] md:bottom-[52px] md:right-12 md:px-5">IA ativa</div>
          </motion.div>
          <div className="mt-[10px] flex flex-col gap-4 sm:flex-row sm:items-center lg:hidden">
            <Button>Fazer um diagnóstico</Button>
            <Link
              to="/#solucoes"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-6 py-3 text-base font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              Saiba mais
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="relative mx-auto mt-[65px] max-w-7xl overflow-hidden border-t border-black/10 pt-8 md:mt-12" style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)", maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)" }}>
          <div className="marquee-track items-center gap-14 text-2xl font-semibold text-black/45">{[...logos, ...logos].map((logo, index) => <span key={`${logo}-${index}`} className="shrink-0 whitespace-nowrap">{logo}</span>)}</div>
        </div>
      </section>

      <section id="sobre" className="bg-[#F3F4F6] px-5 pb-[49px] pt-16 md:mt-0 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative order-2 -mt-[10px] mx-auto min-h-[440px] w-full max-w-[560px] md:min-h-[610px] lg:order-1 lg:mt-0">
            <div className="absolute left-1/2 top-0 h-80 w-[76%] -translate-x-1/2 overflow-hidden rounded-[34px] bg-[#DDE8F3] md:left-0 md:h-auto md:aspect-[4/5] md:w-[78%] md:translate-x-0"><img src={aboutImage} alt="Equipe da Eight trabalhando em um escritório" className="h-full w-full object-cover object-center" loading="lazy" /></div>
            <div className="absolute bottom-[10px] right-[10px] rounded-[30px] bg-white p-5 shadow-2xl shadow-black/10 md:bottom-[215px] md:right-0"><p className="text-4xl font-semibold tracking-tight text-[#1F7A4D]">28+</p><p className="text-base text-black/50">processos mapeados</p></div>
            <div className="absolute bottom-[100px] left-[7px] rounded-2xl bg-white px-5 py-4 shadow-xl shadow-black/10 md:bottom-[50px] md:left-[60px]"><p className="text-base font-semibold">Experiência em crescimento</p></div>
          </div>
          <div className="order-1 -mt-[10px] md:mt-0 lg:order-2">
            <Label>Quem somos</Label>
            <h2 className="max-w-xl text-[36px] font-semibold leading-[1] tracking-[-0.05em] md:text-[55px] md:leading-[0.98] md:tracking-[-0.055em]">Conectamos captação, atendimento e operação para gerar receita com clareza.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">Ajudamos clínicas a reduzir desperdício, organizar leads e transformar interesse em pacientes qualificados com processos claros e automação inteligentes.</p>
            <div className="mt-8 hidden lg:block"><a href="#processo" onClick={(event) => { event.preventDefault(); smoothScrollTo("#processo"); }} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1ca1f1] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#0d8dd8]">Saiba mais<ArrowRight className="h-4 w-4" /></a></div>
          </div>
          <div className="order-3 -mt-[10px] lg:hidden"><a href="#processo" onClick={(event) => { event.preventDefault(); smoothScrollTo("#processo"); }} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1ca1f1] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#0d8dd8]">Saiba mais<ArrowRight className="h-4 w-4" /></a></div>
        </div>
      </section>

      <section id="solucoes" className="bg-[#101010] px-5 py-16 text-white md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div><div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase text-black">Produtos</div><h2 className="max-w-2xl text-[36px] font-semibold leading-[1] tracking-[-0.05em] md:text-[55px] md:leading-[0.95] md:tracking-[-0.06em]">Conheça nossas soluções</h2></div>
            <div className="lg:pb-1"><p className="max-w-xl text-lg leading-8 text-white/55">Estruturas integradas para captação, qualificação e conversão, 24/7, pensadas para o crescimento sustentável da clínica.</p></div>
          </div>
          <div className="-mt-[25px] grid gap-5 md:mt-0 md:grid-cols-2">
            {workCards.map((card, index) => (
              <a key={card.title} href={card.href} className="premium-cut group block overflow-hidden border border-white/10 bg-white/[0.035] p-7 transition-all duration-300 hover:bg-white/[0.055]">
                <div className="flex flex-col gap-[5px] sm:flex-row sm:items-start sm:gap-7">
                  <div className="mt-0 shrink-0 sm:mt-[15px]"><div className="relative grid h-24 w-24 place-items-start overflow-visible sm:h-[140px] sm:w-[140px] sm:place-items-center"><WorkVisual index={index} /></div></div>
                  <div className="flex-1 pt-1">
                    <div className="mb-[20px] inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase text-white/65">{card.tag}</div>
                    <h3 className="mt-0 max-w-xl text-2xl font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-3xl md:leading-[1.05]">{card.title}</h3>
                    <p className="mt-5 max-w-xl text-lg leading-8 text-white/52">{card.desc}</p>
                    <span className="mt-[20px] mb-[5px] inline-flex items-center justify-center gap-2 rounded-full bg-[#1ca1f1] px-5 py-3 text-base font-semibold text-white transition-all duration-300 group-hover:bg-[#0d8dd8]">Saiba mais<ArrowRight className="h-4 w-4" /></span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="resultados" className="bg-[#F3F4F6] px-5 py-16 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div><Label>Resultados</Label><h2 className="max-w-2xl text-[36px] font-semibold leading-[1] tracking-[-0.05em] md:text-[55px] md:leading-[0.98] md:tracking-[-0.055em]">Previsibilidade e menos perda de leads.</h2></div>
            <div className="lg:pb-1"><p className="max-w-xl text-lg leading-8 text-black/55">Os indicadores abaixo mostram como nossa estrutura tem ajudado clínicas na conversão de interesse em agendamento real.</p></div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["99%", "Leads organizados"],
              ["28+", "Processos mapeados e crescendo"],
              ["80%", "Menos perda de leads"]
            ].map(([value, label]) => (
              <article key={label} className="premium-cut bg-white p-7 shadow-sm">
                <p className="text-[44px] font-semibold tracking-[-0.05em] text-[#1ca1f1] md:text-[56px]">{value}</p>
                <p className="mt-3 text-lg text-black/55">{label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cta-final" className="px-5 py-16 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl rounded-[34px] bg-[#1ca1f1] px-5 py-16 text-white md:px-6 md:py-28">
          <div className="mx-auto max-w-7xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase text-black">Diagnóstico</div>
            <h2 className="mx-auto max-w-3xl text-[36px] font-semibold leading-[1] tracking-[-0.05em] md:text-[55px] md:leading-[0.98] md:tracking-[-0.055em]">Sua clínica merece um marketing que gere receita, não despesa.</h2>
            <div className="mt-8"><Button dark>Fazer um diagnóstico</Button></div>
          </div>
        </div>
      </section>

      <div className="relative mx-auto -mt-[35px] max-w-7xl overflow-hidden border-t border-black/10 pt-8 mb-16 md:-mt-[52px] md:mb-28" style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)", maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)" }}>
        <div className="marquee-track items-center gap-14 text-2xl font-semibold text-black/45">{[...logos, ...logos].map((logo, index) => <span key={`${logo}-${index}`} className="shrink-0 whitespace-nowrap">{logo}</span>)}</div>
      </div>

      <Footer />
    </main>
  );
}
