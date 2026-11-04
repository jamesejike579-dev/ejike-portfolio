import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import { profile, skillGroups } from '../data/profile.js';

export default function About() {
  return (
    <div className="page-shell page-gutter">
      <section className="page-intro page-intro--about">
        <p className="eyebrow"><span className="status-dot" /> A practice in progress</p>
        <h1>Learning through<br /><em>the work itself.</em></h1>
        <p className="page-intro__lead">I’m {profile.name}, a web developer building toward software engineering. I’m interested in how useful, clear digital experiences are put together—and in becoming capable of building more of them.</p>
        <span className="page-intro__index">ABOUT / 01</span>
      </section>

      <section className="about-story">
        <div className="about-story__aside"><span className="eyebrow">The journey so far</span><span className="about-story__line" /><span className="eyebrow">01 — 03</span></div>
        <div className="about-story__content">
          <article className="story-block"><span className="story-block__number">01</span><div><h2>Start with the structure.</h2><p>My development foundation is in HTML and CSS, with JavaScript fundamentals taking shape. I’m building fluency by working through practical interfaces rather than treating each new topic as an isolated exercise.</p></div></article>
          <article className="story-block"><span className="story-block__number">02</span><div><h2>Make learning tangible.</h2><p>Project-based work gives me something real to reason about: how content is organised, how a layout responds, and how a small interaction should behave. I learn by building, testing, and revisiting the decisions I have made.</p></div></article>
          <article className="story-block"><span className="story-block__number">03</span><div><h2>Keep widening the view.</h2><p>I’m strengthening modern JavaScript and React, and developing my understanding of Git, APIs, and reusable component patterns. Over time, I want that frontend foundation to grow into broader software engineering capability.</p></div></article>
        </div>
      </section>

      <section className="about-principles">
        <SectionHeading eyebrow="How I work" title="Stay curious. Stay useful." number="02">A simple approach to learning and making progress.</SectionHeading>
        <div className="principle-grid">
          <article><span>01</span><h3>Learn with a purpose</h3><p>Choose a useful question, then build a small thing that makes the answer clearer.</p></article>
          <article><span>02</span><h3>Understand the pieces</h3><p>Pay attention to how the interface, content, and interactions fit together.</p></article>
          <article><span>03</span><h3>Improve the next version</h3><p>Keep a project open to revision as understanding and technical range expand.</p></article>
        </div>
      </section>

      <section className="about-skills">
        <div className="about-skills__heading"><p className="eyebrow">Current focus</p><h2>What I’m<br /><em>working on.</em></h2><p>These are foundations and active learning areas, not proficiency ratings.</p></div>
        <div className="skills-list">
          {skillGroups.map((group, index) => <div className="skills-row" key={group.title}><span className="skills-row__index">0{index + 1}</span><div><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div><ArrowRight className="skills-row__arrow" size={18} aria-hidden="true" /></div>)}
        </div>
      </section>

      <section className="about-next"><p className="eyebrow">Next, keep building</p><h2>The long view is<br /><em>earned project by project.</em></h2><Link className="underlined-link" to="/projects">See what I’m making <ArrowRight size={16} aria-hidden="true" /></Link></section>
    </div>
  );
}
