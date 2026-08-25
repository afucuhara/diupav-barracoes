import type { Metadata } from 'next';
import { PageHero, SiteFooter, WhatsAppIcon } from '../components';
import { whatsappUrl } from '../site-data';

export const metadata: Metadata = { title: 'Contato e Orçamento | DiuPav Barracões', description: 'Solicite seu orçamento diretamente pelo WhatsApp com a equipe da DiuPav Barracões.' };

const contacts = [
  {
    name: 'Antonio C. Diurkowski',
    phone: '(41) 98837-5050',
    url: whatsappUrl,
  },
  {
    name: 'Ingrid Pacheco',
    phone: '(41) 99202-1680',
    url: 'https://wa.me/5541992021680?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.',
  },
];

export default function ContactPage() {
  return <main id="main-content" tabIndex={-1}>
    <PageHero
      active="contato"
      eyebrow="Atendimento direto"
      title="Seu projeto começa com uma boa conversa"
      text="Fale exclusivamente pelo WhatsApp com a equipe da DiuPav Barracões. Um atendimento próximo para entender sua necessidade e indicar o melhor caminho."
      action={<a className="button button-primary contact-hero-cta" href={whatsappUrl} target="_blank" rel="noreferrer"><span>Solicitar orçamento no WhatsApp</span><WhatsAppIcon /></a>}
    />
    <section className="whatsapp-contact-section">
      <div className="whatsapp-intro">
        <div className="section-kicker">Orçamento pelo WhatsApp</div>
        <h2>Escolha com quem você deseja falar.</h2>
        <p>Envie uma mensagem com a cidade, tipo de estrutura, medidas aproximadas e finalidade do projeto. Nossa equipe dará continuidade ao atendimento diretamente pelo WhatsApp.</p>
        <div className="contact-location"><span>Atuação regional</span><strong>Contenda · Lapa · Paraná e região</strong></div>
      </div>
      <div className="whatsapp-contact-grid">
        {contacts.map((contact) => <a href={contact.url} target="_blank" rel="noreferrer" key={contact.phone}>
          <span className="whatsapp-mark"><WhatsAppIcon /></span>
          <div><small>Falar com</small><h3>{contact.name}</h3><strong>{contact.phone}</strong></div>
        </a>)}
      </div>
    </section>
    <section className="location-map" aria-labelledby="location-map-title">
      <div className="location-map-copy"><div className="section-kicker">Localização</div><h2 id="location-map-title">Venha conhecer a DiuPav Industrial.</h2><p>Estamos em Contenda, Paraná. Use o mapa para traçar sua rota até nossa unidade.</p><a className="text-link" href="https://www.google.com/maps/place/DIUPAV+Industrial/@-25.6921162,-49.5104331,17z/data=!3m1!4b1!4m6!3m5!1s0x94dd07f1b05ba2eb:0xe4ca232e4a7f5a84!8m2!3d-25.6921162!4d-49.5104331!16s%2Fg%2F11rcl3__bf?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">Abrir no Google Maps <span aria-hidden="true">↗</span></a></div>
      <div className="map-frame"><iframe title="Localização da DiuPav Industrial no Google Maps" src="https://www.google.com/maps?q=-25.6921162,-49.5104331&z=17&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
    </section>
    <SiteFooter />
  </main>;
}
