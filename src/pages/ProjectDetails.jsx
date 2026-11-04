import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button.jsx';
import { getProjectBySlug } from '../data/projects.js';

function DetailSection({ label, title, children }) {
  if (!children) return null;
  return <section className="case-section"><div className="case-section__label"><span className="eyebrow">{label}</span></div><div className="case-section__body"><h2>{title}</h2>{children}</div></section>;
}

function ProjectNotFound() {
  return (
    <div className="page-shell page-gutter">
      <section className="not-found not-found--project"><p className="eyebrow">PROJECT / NOT FOUND</p><h1>This page is<br /><em>still unwritten.</em></h1><p>There isn’t a project with that address. The project may have moved, or its link may be out of date.</p><Button to="/projects">Back to the project gallery</Button></section>
    </div>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  if (!project) return <ProjectNotFound />;

  return (
    <div className="page-shell page-gutter case-study">
      <Link className="back-link" to="/projects"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
      <header className="case-hero">
        <div className="case-hero__copy">
          <p className="eyebrow"><span className="status-dot" /> {project.category} <span className="eyebrow-divider">/</span> {project.status}</p>
          <h1>{project.title}<span className="feature-asterisk">✳</span></h1>
          <p className="case-hero__lead">{project.longDescription || project.description}</p>
          <ul className="tag-list" aria-label={`${project.title} technologies`}>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        </div>
        <div className="case-hero__aside"><span>CASE STUDY</span><span>01 / {project.status.toUpperCase()}</span><span>PERSONAL PROJECT</span></div>
      </header>

      {project.thumbnail && <figure className="case-cover"><img src={project.thumbnail.src} alt={project.thumbnail.alt} width="1600" height="1000" /><figcaption><span>{project.thumbnail.note}</span><span>{project.category}</span></figcaption></figure>}

      <div className="case-facts"><div><span className="eyebrow">Status</span><strong>{project.status}</strong></div><div><span className="eyebrow">Category</span><strong>{project.category}</strong></div><div><span className="eyebrow">Technologies</span><strong>{project.technologies.join(' · ')}</strong></div></div>

      <div className="case-content">
        <DetailSection label="01 / Overview" title="The idea">{project.overview && <p>{project.overview}</p>}{project.purpose && <p>{project.purpose}</p>}</DetailSection>
        <DetailSection label="02 / Contribution" title="My part">{project.role && <p>{project.role}</p>}</DetailSection>
        {project.features?.length > 0 && <DetailSection label="03 / Built" title="Implemented features"><ul className="case-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></DetailSection>}
        {project.projectDirection?.length > 0 && <DetailSection label="03 / Direction" title="What is taking shape"><ul className="case-list">{project.projectDirection.map((item) => <li key={item}>{item}</li>)}</ul></DetailSection>}
        {project.designDecisions?.length > 0 && <DetailSection label="04 / Design" title="Design decisions"><ul className="case-list">{project.designDecisions.map((item) => <li key={item}>{item}</li>)}</ul></DetailSection>}
        {project.implementation && <DetailSection label="05 / Implementation" title="How it works"><p>{project.implementation}</p></DetailSection>}
        {project.challenges?.length > 0 && <DetailSection label="06 / Challenges" title="What I worked through"><ul className="case-list">{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul></DetailSection>}
        {project.lessonsLearned?.length > 0 && <DetailSection label="07 / Reflection" title="Lessons so far"><ul className="case-list">{project.lessonsLearned.map((item) => <li key={item}>{item}</li>)}</ul></DetailSection>}
        {project.gallery?.length > 0 && <DetailSection label="08 / Visual notes" title="Reference imagery"><p className="case-gallery__note">These editorial images set a visual context; they are not screenshots from the project implementation.</p><div className="case-gallery">{project.gallery.map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} width="1200" height="900" /><figcaption>{image.caption}</figcaption></figure>)}</div></DetailSection>}
      </div>

      {(project.liveUrl || project.repoUrl) && <section className="case-links"><span className="eyebrow">Explore the build</span><div>{project.liveUrl && <a className="underlined-link" href={project.liveUrl} target="_blank" rel="noreferrer">Live preview <ArrowUpRight size={16} aria-hidden="true" /></a>}{project.repoUrl && <a className="underlined-link" href={project.repoUrl} target="_blank" rel="noreferrer">Source code <ArrowUpRight size={16} aria-hidden="true" /></a>}</div></section>}
      <div className="case-next"><span className="eyebrow">Keep exploring</span><Button to="/projects" variant="text">Back to all projects</Button></div>
    </div>
  );
}
