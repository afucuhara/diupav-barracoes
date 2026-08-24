import type { Metadata } from 'next';
import { PageHero, SiteFooter } from '../components';

export const metadata: Metadata = { title: 'Contato e Orçamento | DiuPav Barracões', description: 'Solicite seu orçamento diretamente pelo WhatsApp com a equipe da DiuPav Barracões.' };

const contacts = [
  {
    name: 'Antonio C. Diurkowski',
    phone: '(41) 98837-5050',
    url: 'https://wa.me/5541988375050?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.',
  },
  {
    name: 'Ingrid Pacheco',
    phone: '(41) 99202-1680',
    url: 'https://wa.me/5541992021680?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.',
  },
];

export default function ContactPage() {
  return <main>
    <PageHero active="contato" eyebrow="Atendimento direto" title="Seu projeto começa com uma boa conversa" text="Fale exclusivamente pelo WhatsApp com a equipe da DiuPav Barracões. Um atendimento próximo para entender sua necessidade e indicar o melhor caminho." />
    <section className="whatsapp-contact-section">
      <div className="whatsapp-intro">
        <div className="section-kicker">Orçamento pelo WhatsApp</div>
        <h2>Escolha com quem você deseja falar.</h2>
        <p>Envie uma mensagem com a cidade, tipo de estrutura, medidas aproximadas e finalidade do projeto. Nossa equipe dará continuidade ao atendimento diretamente pelo WhatsApp.</p>
        <div className="contact-location"><span>Atuação regional</span><strong>Contenda · Lapa · Paraná e região</strong></div>
      </div>
      <div className="whatsapp-contact-grid">
        {contacts.map((contact) => <a href={contact.url} target="_blank" rel="noreferrer" key={contact.phone}>
          <span className="whatsapp-mark" aria-hidden="true">W</span>
          <div><small>Falar com</small><h3>{contact.name}</h3><strong>{contact.phone}</strong></div>
          <i aria-hidden="true">↗</i>
        </a>)}
      </div>
    </section>
    <section className="contact-reassurance">
      <span>ATENDIMENTO PERSONALIZADO</span>
      <h2>Conte sua necessidade.<br />Nós ajudamos a estruturar a solução.</h2>
    </section>
    <SiteFooter />
  </main>;
}
