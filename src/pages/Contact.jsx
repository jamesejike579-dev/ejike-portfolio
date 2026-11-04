import { ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile.js';

export default function Contact() {
  return (
    <div className="page-shell page-gutter">
      <section className="contact-page-intro">
        <p className="eyebrow"><span className="status-dot" /> Contact / Open conversation</p>
        <h1>Good work starts<br /><em>with hello.</em></h1>
        <p className="page-intro__lead">If you have a suitable opportunity, a useful collaboration, or a project worth discussing, I’d be glad to hear from you.</p>
      </section>
      <section className="contact-details" aria-label="Contact details">
        <a className="contact-detail" href={`mailto:${profile.email}`}><span className="eyebrow">Email</span><strong>{profile.email}</strong><ArrowUpRight aria-hidden="true" size={20} /></a>
        <a className="contact-detail" href={`tel:${profile.phone.replace(/\s+/g, '')}`}><span className="eyebrow">Phone</span><strong>{profile.phone}</strong><ArrowUpRight aria-hidden="true" size={20} /></a>
        <div className="contact-detail contact-detail--static"><span className="eyebrow">Location</span><strong>{profile.location}</strong><span className="contact-detail__text">Available by email and phone</span></div>
      </section>
      <div className="contact-footnote"><span className="eyebrow">A direct line</span><p>Email is the best place to start. This page uses your email app; it does not send or store messages through a form.</p></div>
    </div>
  );
}
