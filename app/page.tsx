'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BudgetCta, Reveal, SiteFooter, SiteHeader } from './components';
import { services, whatsappUrl } from './site-data';

const differentials = [
  'Experiência e comprometimento', 'Soluções sob encomenda', 'Atendimento personalizado',
  'Produtos pré-moldados e metálicos', 'Qualidade em cada etapa', 'Responsabilidade social e ambiental',
];

export default function Home() {
  const heroSlides = ['/images/hero-real-home.webp', '/images/hero-real-finished.webp', '/images/hero-real-assembly.webp'];
  const [slide, setSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState<number | null>(null);
  const transitionTimer = useRef<number | null>(null);
  useEffect(() => {
    const timer = window.setInterval(() => setSlide((current) => {
      setPreviousSlide(current);
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
      transitionTimer.current = window.setTimeout(() => setPreviousSlide(null), 1800);
      return (current + 1) % heroSlides.length;
    }), 5000);
    return () => { window.clearInterval(timer); if (transitionTimer.current) window.clearTimeout(transitionTimer.current); };
  }, [heroSlides.length]);
  const visibleSlides = new Set([slide, previousSlide, (slide + 1) % heroSlides.length]);
  return (
    <main id="main-content" tabIndex={-1}>
      <SiteHeader active="inicio" />
      <section className="hero" id="inicio">
        <div className="hero-slides" aria-hidden="true">
          {heroSlides.map((image, index) => visibleSlides.has(index) && <div key={image} className={`hero-slide ${index === slide ? 'active' : ''} ${index === previousSlide ? 'leaving' : ''}`} style={{ backgroundImage: `linear-gradient(90deg, rgba(8,8,24,.96) 0%, rgba(8,8,24,.88) 42%, rgba(0,0,255,.46) 72%, rgba(0,0,255,.18) 100%), url('${image}')` }} />)}
        </div>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow hero-eyebrow">Construção inteligente. Estrutura forte.</div>
          <h1>Estruturas que dão <em>segurança</em> aos seus projetos</h1>
          <p>Barracões pré-moldados, estruturas metálicas e soluções sob encomenda para construir com resistência, qualidade e confiança.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Solicite seu orçamento</a>
            <a className="button button-secondary" href="#solucoes">Conheça nossas soluções</a>
          </div>
        </div>
      </section>

      <Reveal variant="left"><section className="proof-strip" aria-label="Reconhecimento regional">
        <div className="proof-number">05</div>
        <div className="proof-copy"><strong>anos consecutivos</strong><span>de reconhecimento regional</span></div>
        <p>Destaque do ano em Contenda/PR e Lapa/PR nas categorias de pré-moldados e estrutura metálica.</p>
      </section></Reveal>

      <Reveal><section className="intro" id="solucoes">
        <div><div className="section-kicker">Nossas soluções</div><h2>Soluções completas para sua construção.</h2></div>
        <p>Cada projeto possui necessidades específicas. Desenvolvemos soluções pré-moldadas e metálicas sob encomenda, com qualidade, responsabilidade e eficiência do primeiro contato à entrega.</p>
      </section></Reveal>

      <Reveal variant="scale"><section className="services-grid" aria-label="Serviços em destaque">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <Image className="service-card-image" src={service.image} alt="" fill sizes="(max-width: 650px) calc(100vw - 44px), (max-width: 980px) calc(50vw - 45px), 30vw" loading="lazy" />
            <h3>{service.title}</h3>
            <p>{service.short}</p>
            <Link href="/servicos">Saiba mais</Link>
          </article>
        ))}
      </section></Reveal>
      <div className="section-action"><Link className="text-link" href="/servicos">Ver todos os serviços <span>↗</span></Link></div>

      <Reveal variant="right"><section className="made-to-order">
        <div className="order-copy"><div className="section-kicker">Engenharia aplicada</div><h2>Seu projeto.<br />Nossa estrutura.</h2><p>Do barracão à estrutura metálica, dos fechamentos aos componentes complementares: produzimos cada solução pensando na realidade da sua operação.</p><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Conversar sobre meu projeto</a></div>
        <div className="order-art" aria-hidden="true" />
      </section></Reveal>

      <Reveal><section className="differentials" id="empresa">
        <div className="differentials-head"><div className="section-kicker">Por que a DiuPav</div><h2>Compromisso que sustenta grandes ideias.</h2></div>
        <div className="difference-list">
          {differentials.map((item) => <div key={item}><strong>{item}</strong></div>)}
        </div>
      </section></Reveal>

      <BudgetCta />
      <SiteFooter />
    </main>
  );
}
