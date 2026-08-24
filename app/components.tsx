'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { whatsappUrl } from './site-data';

type Page = 'inicio' | 'sobre' | 'servicos' | 'produtos' | 'contato';

const nav = [
  ['inicio', '/', 'Início'],
  ['sobre', '/sobre', 'A empresa'],
  ['servicos', '/servicos', 'Serviços'],
  ['produtos', '/produtos', 'Produtos'],
  ['contato', '/contato', 'Contato'],
] as const;

export function Brand() {
  return (
    <span className="brand">
      <img
        src="/diupav-logo.png"
        alt="DiuPav Barracões"
        width="2172"
        height="724"
      />
    </span>
  );
}

export function WhatsAppIcon({ className = '' }: { className?: string }) {
  return <img className={`whatsapp-icon ${className}`.trim()} src="/whatsapp.svg" alt="" aria-hidden="true" width="24" height="24" />;
}

export function SiteHeader({ active = 'inicio', light = false }: { active?: Page; light?: boolean }) {
  return (
    <header className={`site-header ${light ? 'header-light' : ''}`}>
      <a href="/" aria-label="DiuPav Barracões — início"><Brand /></a>
      <nav className="main-nav" aria-label="Navegação principal">
        {nav.map(([key, href, label]) => <a className={active === key ? 'active' : ''} href={href} key={key}>{label}</a>)}
      </nav>
      <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon /> Solicitar orçamento</a>
      <details className="mobile-menu">
        <summary aria-label="Abrir menu"><span /><span /><span /></summary>
        <nav aria-label="Navegação móvel">
          {nav.map(([key, href, label]) => <a className={active === key ? 'active' : ''} href={href} key={key}>{label}</a>)}
        </nav>
      </details>
    </header>
  );
}

export function PageHero({ eyebrow, title, text, active }: { eyebrow: string; title: string; text: string; active: Page }) {
  return (
    <>
      <SiteHeader active={active} />
      <section className="page-hero">
        <div className="page-hero-grid" aria-hidden="true" />
        <div className="eyebrow"><span /> {eyebrow}</div>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="page-index" aria-hidden="true">DIUPAV / PR</div>
      </section>
    </>
  );
}

export function BudgetCta() {
  return (
    <section className="budget-cta" id="contato">
      <div className="section-kicker light-kicker">PRONTO PARA COMEÇAR?</div>
      <h2>Tem um projeto<br /><em>em mente?</em></h2>
      <p>Fale com a DiuPav Barracões e encontre a solução ideal em estruturas pré-moldadas e metálicas para sua necessidade.</p>
      <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon /> Solicitar orçamento pelo WhatsApp</a>
      <div className="cta-frame" aria-hidden="true"><i /><i /><i /></div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <>
      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Solicitar orçamento pelo WhatsApp">
        <WhatsAppIcon />
      </a>
      <footer className="site-footer">
      <div className="footer-main">
        <div><Brand /><p>Estruturas pré-moldadas e metálicas para construir com segurança, qualidade e confiança.</p></div>
        <div><strong>Navegação</strong><a href="/sobre">A empresa</a><a href="/servicos">Serviços</a><a href="/produtos">Produtos</a><a href="/contato">Contato</a></div>
        <div><strong>Atendimento por WhatsApp</strong><a href="https://wa.me/5541988375050" target="_blank" rel="noreferrer">Antonio · (41) 98837-5050</a><a href="https://wa.me/5541992021680" target="_blank" rel="noreferrer">Ingrid · (41) 99202-1680</a></div>
        <div><strong>Onde estamos</strong><p>Rua Oito, Distrito Mato Branco<br />Contenda / Paraná<br />CEP 83730-000</p></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} DiuPav Barracões</span><span>Contenda · Lapa · Região</span></div>
      </footer>
    </>
  );
}

export function Reveal({ children, variant = 'up', className = '' }: { children: ReactNode; variant?: 'up' | 'left' | 'right' | 'scale'; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('is-visible');
        observer.unobserve(node);
      }
    }, { threshold: 0.14 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} data-reveal={variant} className={className}>{children}</div>;
}
