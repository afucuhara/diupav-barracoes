import type { Metadata } from 'next';
import Image from 'next/image';
import { BudgetCta, PageHero, SiteFooter } from '../components';
import { services } from '../site-data';

export const metadata: Metadata = { title: 'Serviços | DiuPav Barracões', description: 'Soluções pré-moldadas e metálicas para projetos comerciais, industriais, rurais e empresariais.' };

const details = [
  'Estruturas resistentes e funcionais para empresas, indústrias, propriedades rurais, depósitos e espaços comerciais.',
  'Estruturas versáteis para diferentes configurações, com praticidade e flexibilidade para atender cada aplicação.',
  'Fechamentos em bloco, placa ou metal para completar, proteger e dar acabamento à construção.',
  'Soluções para complementar a construção e proporcionar praticidade, funcionalidade e organização.',
  'Aproveitamento inteligente da altura para ampliar a área útil sem aumentar a área construída.',
  'Segurança para áreas elevadas, passarelas, mezaninos, escadas e ambientes que necessitam de proteção.',
  'Estruturas produzidas sob medida para armazenamento, organização e transporte de materiais.',
  'Acessos e fechamentos resistentes para ambientes comerciais, industriais, rurais e empresariais.',
  'Soluções estruturais para suporte de coberturas, contribuindo para resistência e estabilidade.',
];

export default function ServicesPage() {
  return <main id="main-content" tabIndex={-1}>
    <PageHero active="servicos" eyebrow="Serviços e soluções" title="Soluções para diferentes necessidades de construção" text="Projetos comerciais, industriais, rurais e empresariais atendidos com precisão, qualidade e responsabilidade." />
    <section className="catalog-intro"><div className="section-kicker">O que fazemos</div><h2>Da estrutura aos componentes.</h2><p>Integramos soluções pré-moldadas e metálicas para oferecer mais consistência, agilidade e confiança à sua construção.</p></section>
    <section className="catalog-list">{services.map((service, index) => <article key={service.number}><div className="catalog-photo" aria-hidden="true"><Image src={service.image} alt="" fill sizes="(max-width: 650px) 105px, (max-width: 980px) 150px, 170px" loading="lazy" /></div><h3>{service.title}</h3><p>{details[index]}</p></article>)}</section>
    <BudgetCta /><SiteFooter />
  </main>;
}
