import { useMemo, useState } from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All work');
  const categories = useMemo(() => ['All work', ...new Set(projects.map((project) => project.category))], []);
  const visibleProjects = activeCategory === 'All work' ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="page-shell page-gutter">
      <section className="page-intro page-intro--projects">
        <p className="eyebrow"><span className="status-dot" /> A collection that keeps moving</p>
        <h1>Work in<br /><em>the making.</em></h1>
        <p className="page-intro__lead">A selection of practical projects and experiments. Each entry shares what is known, what is in progress, and what can be explored next.</p>
        <span className="page-intro__index">PROJECTS / {String(projects.length).padStart(2, '0')}</span>
      </section>

      <section className="projects-gallery" aria-labelledby="projects-heading">
        <SectionHeading eyebrow="Selected projects" title="Built to be revisited." number="01">Projects are stored in one small data file, so this gallery grows with the work.</SectionHeading>
        <div className="project-filters" role="group" aria-label="Filter projects by category">
          {categories.map((category) => <button key={category} type="button" className={`filter-button${activeCategory === category ? ' is-active' : ''}`} aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}<span>{category === 'All work' ? projects.length : projects.filter((project) => project.category === category).length}</span></button>)}
        </div>
        <h2 id="projects-heading" className="visually-hidden">{activeCategory} projects</h2>
        {visibleProjects.length > 0 ? <div className="project-grid">{visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div> : <p className="empty-projects">No projects in this category yet.</p>}
      </section>
      <div className="projects-note"><span className="eyebrow">A note on this collection</span><p>Project details are added as work is verified. Demo and repository actions appear only when a real link is available.</p></div>
    </div>
  );
}
