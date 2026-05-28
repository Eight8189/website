import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../Header.jsx";

const eightLogo = "/assets/marca-eight.webp";

function smoothScrollTo(targetId) {
  const target = document.querySelector(targetId);
  if (!target) return;

  const header = document.querySelector("header");
  const headerOffset = header ? header.offsetHeight : 0;
  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  const distance = targetY - startY;
  const duration = 1600;
  let startTime = null;

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 4);
  const animateScroll = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeOutCubic(progress));
    if (progress < 1) requestAnimationFrame(animateScroll);
  };

  requestAnimationFrame(animateScroll);
}

const solutions = {
  connectPlus: {
    name: "Connect+",
    image: "/assets/connect-home.webp",
    eyebrow: "Qualificação comercial",
    summary: "Um fluxo para atrair, organizar e qualificar oportunidades antes que elas cheguem ao time de vendas.",
    cta: "Quero diagnosticar meu fluxo",
    intro:
      "O Connect+ combina páginas de conversão, perguntas estratégicas, automações e visibilidade comercial para reduzir perda de contexto entre marketing e atendimento.",
    steps: [
      ["Atração", "A campanha e a página deixam a proposta clara para o público certo."],
      ["Triagem", "O fluxo coleta sinais de interesse, perfil e momento de compra."],
      ["Entrega", "O comercial recebe uma oportunidade organizada para agir com velocidade."]
    ],
    outcomes: [
      "Entrada de leads com contexto comercial",
      "Menos tarefas manuais no primeiro atendimento",
      "Prioridade para oportunidades com maior intenção",
      "Base pronta para evoluir com dados"
    ]
  },
  agents: {
    name: "Agentes IA",
    image: "/assets/cliente-feliz.webp",
    eyebrow: "IA aplicada a vendas",
    summary: "Agentes para responder, triar, acompanhar e direcionar contatos com consistência operacional.",
    cta: "Quero mapear um agente",
    intro:
      "A Eight desenha agentes a partir do processo real da empresa: linguagem, regras, perguntas, handoff humano e informações que precisam chegar ao CRM.",
    steps: [
      ["Conversa", "O agente atende com contexto e conduz a proxima pergunta util."],
      ["Classificação", "Respostas viram sinais para separar urgência, perfil e objetivo."],
      ["Handoff", "O time recebe a conversa preparada para continuar sem recomeçar."]
    ],
    outcomes: [
      "Atendimento inicial mais constante",
      "Follow-up desenhado para o funil",
      "Regras claras para transferência humana",
      "Informação estruturada para o time comercial"
    ]
  }
};

const processCards = [
  ["01", "Diagnóstico", "Mapeamos gargalos, canais, operação comercial e oportunidades."],
  ["02", "Estratégia", "Desenhamos o sistema de aquisição, qualificação e conversão."],
  ["03", "Implementação", "Criamos páginas, fluxos, automações, campanhas e agentes."],
  ["04", "Evolução", "Testamos, ajustamos e melhoramos o sistema com base em dados."]
];

const faqItems = [
  ["O Connect+ substitui meu time comercial?", "Não. Ele organiza e qualifica a entrada; o time continua sendo responsável pelo fechamento e pela conversa final."],
  ["Preciso trocar meu site para usar o Connect+?", "Nem sempre. Muitas vezes a estrutura pode ser adaptada à página atual ou a uma landing page específica."],
  ["Quanto tempo leva para implantar?", "Depende do escopo, mas a implantação começa por diagnóstico, segue com estrutura e entra em ajustes a partir de dados."],
  ["O Connect+ serve para qualquer negócio?", "Ele funciona melhor para negócios com venda consultiva ou lead qualificado, onde a ordem do atendimento faz diferença."]
];

function Label({ children }) {
  return (
    <div className="mb-4 inline-flex items-center rounded-full bg-[#101010] px-4 py-2 text-xs font-semibold uppercase text-white">
      {children}
    </div>
  );
}

function WhatsAppButton({ children }) {
  return (
    <a
      href="https://wa.me/5511957835531"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1ca1f1] px-6 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#0d8dd8]"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

export default function EightSolutionPage({ solution }) {
  const page = solutions[solution] || solutions.connectPlus;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(-1);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#111111]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700;800&display=swap');
        .premium-cut { border-radius: 34px; }
        .marquee-track { display: flex; width: max-content; animation: marquee 38s linear infinite; will-change: transform; }
        @keyframes marquee { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(-50%, 0, 0); } }
      `}</style>

      <Header />

      <section className="px-5 py-10 md:px-6 md:py-16 lg:pb-20 lg:pt-10">
        <div className="premium-cut mx-auto max-w-7xl overflow-hidden bg-[#101010] text-white">
          <div className="grid gap-8 p-5 md:grid-cols-[1fr_0.95fr] md:p-12 lg:p-16">
            <div className="relative h-[260px] overflow-hidden rounded-[28px] bg-[#2b2b2b] md:h-[360px] lg:mx-[100px]">
              <img src={page.image} alt={page.name} className="absolute inset-0 block h-full w-full object-cover object-center" loading="eager" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit self-start items-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase text-black">{page.eyebrow}</div>
              <h1 className="text-[36px] font-semibold leading-[1] tracking-[-0.05em] md:text-[55px] md:leading-[0.98] md:tracking-[-0.055em]">{page.name}</h1>
              <p className="mt-[19px] text-lg leading-8 text-white/55">{page.summary}</p>
              <div className="mt-[32px] mb-[20px]">
                <WhatsAppButton>{page.cta}</WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fluxo" className="bg-[#F3F4F6] px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="inline-flex rounded-full bg-[#101010] px-4 py-2 text-xs font-semibold uppercase text-white">Como funciona</p>
            <h2 className="mt-5 text-[36px] font-semibold leading-none md:text-[55px]">Tecnologia ligada ao processo, não solta dele.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">{page.intro}</p>
          </div>
          <div className="grid gap-4">
            {page.steps.map(([title, text], index) => (
              <article key={title} className="rounded-[28px] bg-white p-6 shadow-sm md:flex md:items-start md:gap-6 md:p-7">
                <p className="text-sm font-semibold text-[#1ca1f1]">0{index + 1}</p>
                <div className="mt-4 md:mt-0">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-lg leading-8 text-black/55">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-[34px] bg-[#101010]">
            <img src={page.image} alt="" className="h-[320px] w-full object-cover md:h-[520px]" />
          </div>
          <div className="lg:pl-8">
            <p className="inline-flex rounded-full bg-[#101010] px-4 py-2 text-xs font-semibold uppercase text-white">Entrega</p>
            <h2 className="mt-5 text-[36px] font-semibold leading-none md:text-[55px]">O time ganha clareza para agir.</h2>
            <div className="mt-7 grid gap-4">
              {page.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3 border-b border-black/10 pb-4 text-lg font-medium">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1F7A4D]" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <WhatsAppButton>Fale com a Eight</WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-[38px] grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Label>Processo de trabalho</Label>
              <h2 className="max-w-xl text-[36px] font-semibold leading-[1] tracking-[-0.05em] md:text-[55px] md:leading-[0.98] md:tracking-[-0.055em]">Entendemos o negócio antes de automatizar.</h2>
            </div>
            <div className="-mt-[10px] lg:pb-1">
              <p className="max-w-xl text-lg leading-8 text-black/55">Cada projeto começa com diagnóstico e termina com uma estrutura implementada, testada e pronta para evoluir com dados.</p>
            </div>
          </div>
          <div className="-mt-[5px] grid gap-5 md:mt-0 md:grid-cols-4">
            {processCards.map(([num, title, text]) => (
              <div key={title} className="premium-cut bg-[#F3F4F6] p-6 text-black shadow-sm">
                <p className="text-sm font-semibold text-[#1ca1f1]">{num}</p>
                <h3 className="mt-16 text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-4 text-lg leading-8 text-black/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#F3F4F6] px-5 py-16 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Label>FAQ</Label>
            <h2 className="max-w-lg text-[36px] font-semibold leading-[1] tracking-[-0.05em] md:text-[55px] md:leading-[0.98] md:tracking-[-0.055em]">Perguntas frequentes.</h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-black/55">As respostas abaixo ajudam a entender como o Connect+ entra no fluxo comercial sem gerar ruído para a operação.</p>
          </div>
          <div className="premium-cut -mt-[15px] overflow-hidden border border-black/10 bg-white shadow-sm md:mt-0">
            {faqItems.map(([title, text], index) => {
              const isActive = activeFaq === index;
              return (
                <button key={title} type="button" onClick={() => setActiveFaq(isActive ? -1 : index)} className="group w-full border-b border-black/10 p-5 text-left last:border-b-0 md:p-7">
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>
                      <motion.div initial={false} animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }} transition={{ duration: 0.28, ease: "easeOut" }} className="overflow-hidden">
                        <p className="mt-3 max-w-xl text-lg leading-8 text-black/55">{text}</p>
                      </motion.div>
                    </div>
                    <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition ${isActive ? "bg-[#1ca1f1] text-white" : "bg-[#F3F4F6] text-black group-hover:bg-[#1ca1f1] group-hover:text-white"}`}>
                      <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${isActive ? "-rotate-90" : "rotate-90"}`} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contato" className="w-full bg-[#101010] px-5 py-16 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl text-center md:text-left">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <p className="mx-auto inline-flex w-fit items-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase text-black md:mx-0">Contato</p>
              <h2 className="mx-auto mt-5 max-w-xl text-[36px] font-semibold leading-[1] tracking-[-0.045em] md:mx-0 md:text-[55px] md:leading-[0.95]">Quer começar a ter vantagem?</h2>
              <p className="mx-auto mt-6 max-w-md text-lg leading-8 text-white/50 md:mx-0">Conte o que você quer organizar, automatizar ou vender melhor. Vamos desenhar uma estrutura clara para o seu próximo passo.</p>
              <div className="mx-auto mt-8 h-px w-full max-w-md bg-white/10 md:hidden" />
            </div>
            <div className="grid gap-8 sm:grid-cols-3 lg:pt-[42px]">
              <div>
                <h3 className="text-base font-semibold text-white">Soluções</h3>
                <div className="mt-4 space-y-3 text-lg text-white/45">
                  <a href="/#solucoes" className="block transition-colors duration-300 hover:text-white">Connect+</a>
                  <a href="/#solucoes" className="block transition-colors duration-300 hover:text-white">Agentes IA</a>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Serviços</h3>
                <div className="mt-4 space-y-3 text-lg text-white/45">
                  <a href="/#servicos" className="block transition-colors duration-300 hover:text-white">O que fazemos</a>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Sobre Nós</h3>
                <div className="mt-4 space-y-3 text-lg text-white/45">
                  <a href="/#sobre" className="block transition-colors duration-300 hover:text-white">Quem Somos</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid justify-items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:justify-items-start lg:gap-[18px]">
            <div className="lg:pt-2"><WhatsAppButton>Fale conosco</WhatsAppButton></div>
            <form onSubmit={(event) => { event.preventDefault(); setNewsletterSubmitted(true); }} className="mx-auto mt-[10px] w-full max-w-[430px] lg:mx-0 lg:mt-0">
              <div className="flex items-center overflow-hidden rounded-full border border-white/15 bg-white/8 p-2">
                <div className="flex flex-1 items-center gap-3 px-4 text-white/45">
                  <Mail className="h-5 w-5" />
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(event) => { setNewsletterEmail(event.target.value); setNewsletterSubmitted(false); }}
                    placeholder="Newsletter"
                    className="w-full bg-transparent text-base text-white placeholder:text-white/45 outline-none [font-family:inherit]"
                  />
                </div>
                <button type="submit" className="rounded-full bg-[#1ca1f1] px-7 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#0d8dd8]">Enviar</button>
              </div>
              {newsletterSubmitted && <p className="mt-3 w-full text-center text-base font-semibold text-white md:pl-[52px] md:text-left">E-mail cadastrado! =)</p>}
            </form>
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-center text-base text-white/35 md:flex-row md:justify-between md:text-left">
            <p className="order-2 text-base text-white/50 md:order-1">©Eight • Estratégia, Tecnologia e IA aplicada.</p>
            <div className="order-1 flex flex-wrap justify-center gap-x-6 gap-y-2 md:order-2 md:justify-end">
              <a href="mailto:oi@eight.net.br" className="text-base font-normal text-white transition-colors duration-300 hover:text-white/75">Envie um e-mail</a>
              <a href="https://wa.me/5511957835531" target="_blank" rel="noreferrer" className="text-base font-normal text-white transition-colors duration-300 hover:text-white/75">Fale por WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
