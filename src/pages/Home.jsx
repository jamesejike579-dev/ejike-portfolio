import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { profile, skillGroups } from "../data/profile.js";
import { getFeaturedProjects, projects } from "../data/projects.js";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <>
      <section className="home-hero page-gutter">
        <div className="home-hero__copy">
          <p className="eyebrow hero-kicker">
            <span className="status-dot" /> Based in {profile.location}{" "}
            <span className="eyebrow-divider">/</span> Learning by building
          </p>
          <h1>
            Web developer.
            <br />
            <em>Future software engineer.</em>
          </h1>
          <p className="home-hero__intro">
            I’m {profile.name}. I build practical digital experiences and
            sharpen my craft by making real things, one thoughtful iteration at
            a time.
          </p>
          <div className="home-hero__actions">
            <Button to="/projects">Explore my projects</Button>
            <Link className="text-link" to="/about">
              A little about me <ArrowDownRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <aside className="hero-note" aria-label="Current direction">
          <div className="hero-note__top">
            <span>FIELD NOTES</span>
            <span>01 / 03</span>
          </div>
          <div className="hero-note__rule" />
          <p className="hero-note__label">The direction</p>
          <p className="hero-note__statement">
            Learn by building.
            <br />
            Build to understand.
          </p>
          <div className="hero-note__bottom">
            <span>Frontend foundations</span>
            <span aria-hidden="true">↘</span>
          </div>
        </aside>
        <div className="hero-index" aria-hidden="true">
          EJ — 26
        </div>
      </section>

      <section
        className="home-feature page-gutter"
        aria-labelledby="featured-title"
      >
        <div className="section-label-row">
          <span className="eyebrow">Selected work</span>
          <span className="eyebrow">01 — Featured</span>
        </div>
        {featuredProjects.map((project) => (
          <article className="featured-project" key={project.slug}>
            <a
              className="featured-project__visual"
              href={project.liveUrl || `/projects/${project.slug}`}
              target={project.liveUrl ? "_blank" : undefined}
              rel={project.liveUrl ? "noreferrer" : undefined}
              aria-label={`Explore ${project.title}`}
            >
              <img
                src={project.thumbnail.src}
                alt={project.thumbnail.alt}
                width="1200"
                height="900"
              />
              <span className="image-note">{project.thumbnail.note}</span>
              <span className="featured-project__stamp" aria-hidden="true">
                A<br />/
              </span>
            </a>
            <div className="featured-project__content">
              <p className="eyebrow">
                {project.category} <span className="eyebrow-divider">/</span>{" "}
                {project.status}
              </p>
              <h2 id="featured-title">
                {project.title}
                <span className="feature-asterisk">✳</span>
              </h2>
              <p className="featured-project__description">
                {project.description}
              </p>
              <p className="featured-project__note">
                A considered concept in progress—presented honestly, with room
                for the work to grow.
              </p>
              <ul
                className="tag-list"
                aria-label={`${project.title} technologies`}
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <a
                className="underlined-link"
                href={project.liveUrl || `/projects/${project.slug}`}
                target={project.liveUrl ? "_blank" : undefined}
                rel={project.liveUrl ? "noreferrer" : undefined}
              >
                {project.liveUrl ? "Visit live website" : "Read the case study"}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </section>

      {otherProjects.length > 0 && (
        <section className="home-selected page-gutter">
          <SectionHeading
            eyebrow="More work"
            title="A growing body of work."
            number="02"
          >
            Small steps, real projects. Each one adds a new layer to the
            practice.
          </SectionHeading>
          <div className="project-grid project-grid--home">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
          <Button to="/projects" variant="text">
            View all projects
          </Button>
        </section>
      )}

      <section className="skills-strip page-gutter">
        <div className="skills-strip__heading">
          <p className="eyebrow">Practice & progress</p>
          <h2>
            Learning in
            <br />
            <em>layers.</em>
          </h2>
          <p>
            Building a reliable foundation while exploring what modern frontend
            can do.
          </p>
        </div>
        <div className="skills-list">
          {skillGroups.map((group, index) => (
            <div className="skills-row" key={group.title}>
              <span className="skills-row__index">0{index + 1}</span>
              <div>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <ArrowRight
                className="skills-row__arrow"
                size={18}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="about-preview page-gutter">
        <div className="about-preview__mark" aria-hidden="true">
          EJ<span>—</span>
        </div>
        <div className="about-preview__copy">
          <p className="eyebrow">A little context</p>
          <h2>
            Curiosity, made
            <br />
            <em>practical.</em>
          </h2>
          <p>
            I’m growing through hands-on work: learning a tool, making something
            with it, then understanding the choices behind what I built.
          </p>
          <Link className="underlined-link" to="/about">
            More about my journey <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="about-preview__aside">
          <span>01 / ONGOING</span>
          <p>
            Progress is not a finished title. It is the work between versions.
          </p>
        </div>
      </section>

      <section className="contact-cta page-gutter">
        <div className="contact-cta__top">
          <span className="eyebrow">Have a good fit in mind?</span>
          <span className="eyebrow">Open to thoughtful conversations</span>
        </div>
        <div className="contact-cta__body">
          <h2>
            Let’s make something
            <br />
            <em>worth using.</em>
          </h2>
          <Button to="/contact" variant="light">
            Get in touch
          </Button>
        </div>
        <p className="contact-cta__bottom">
          Suitable opportunities · Collaborations · Useful projects
        </p>
      </section>
    </>
  );
}
