import type { Metadata } from 'next';
import { BudgetCta, PageHero, SiteFooter } from '../components';

export const metadata: Metadata = { title: 'Produtos | DiuPav Barracões', description: 'Produtos pré-moldados e metálicos fabricados sob encomenda para diferentes aplicações.' };

const products = [
  ['Barracões pré-moldados', 'Soluções estruturais para depósitos, empresas, indústrias, propriedades rurais e espaços comerciais.'],
  ['Barracões metálicos', 'Estruturas versáteis para projetos que precisam de resistência e flexibilidade.'],
  ['Fechamentos em bloco', 'Proteção e composição estrutural com acabamento consistente.'],
  ['Fechamentos em placa', 'Solução prática para completar diferentes tipos de construção.'],
  ['Fechamentos metálicos', 'Alternativa resistente e funcional para ambientes diversos.'],
  ['Pisos', 'Produtos que complementam e tornam o espaço construído mais funcional.'],
  ['Mezaninos metálicos', 'Estruturas para ampliar e otimizar o aproveitamento interno.'],
  ['Guarda-corpos e proteções', 'Componentes voltados à segurança de pessoas e espaços.'],
  ['Embalagens metálicas', 'Soluções produzidas conforme a finalidade de armazenamento ou transporte.'],
  ['Portas metálicas', 'Produtos resistentes para acesso e fechamento de ambientes.'],
  ['Treliças metálicas', 'Componentes destinados ao apoio e à composição de coberturas.'],
  ['Tesouras metálicas', 'Estruturas utilizadas em diferentes soluções de cobertura e construção.'],
];

export default function ProductsPage() {
  return <main>
    <PageHero active="produtos" eyebrow="Produtos sob encomenda" title="Estruturas feitas para atender o seu projeto" text="Produtos pré-moldados e metálicos para diferentes aplicações, fabricados conforme a necessidade de cada cliente." />
    <section className="product-section"><div className="section-kicker">01 — Catálogo de produtos</div><div className="product-grid">{products.map(([title, text], index) => <article key={title}><div className="product-top"><span>{String(index + 1).padStart(2, '0')}</span><i aria-hidden="true">↗</i></div><div className="product-shape" aria-hidden="true"><span /><span /><span /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="custom-product"><span>PROJETO ESPECIAL</span><div><h2>Precisa de uma solução específica?</h2><p>Trabalhamos com produtos sob encomenda e podemos avaliar a necessidade do seu projeto.</p></div></section>
    <BudgetCta /><SiteFooter />
  </main>;
}
