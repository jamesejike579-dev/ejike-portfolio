
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project, compact = false }) {
  return (
    <article className={`project-card${compact ? ' project-card--compact' : ''}`}>
      {project.liveUrl ? (
        <a
          className="project-card__image-link"
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit the ${project.title} website`}
        >
          <div className="project-card__image-wrap">
            <img src={project.thumbnail.src} alt={project.thumbnail.alt} loading="lazy" width="1200" height="900" />
            <span className="project-card__image-index">{project.status}</span>
            <span className="project-card__image-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span>
          </div>
        </a>
      ) : (
        <Link className="project-card__image-link" to={`/projects/${project.slug}`} aria-label={`View the ${project.title} case study`}>
          <div className="project-card__image-wrap">
            <img src={project.thumbnail.src} alt={project.thumbnail.alt} loading="lazy" width="1200" height="900" />
            <span className="project-card__image-index">{project.status}</span>
            <span className="project-card__image-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span>
          </div>
        </Link>
      )}

      <div className="project-card__meta">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h3>
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">{project.title}</a>
            ) : (
              <Link to={`/projects/${project.slug}`}>{project.title}</Link>
            )}
          </h3>
        </div>
        <span className="project-card__status"><span aria-hidden="true" />{project.status}</span>
      </div>

      <p className="project-card__description">{project.description}</p>

      <ul className="tag-list" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
    </article>
  );
}
