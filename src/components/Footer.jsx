import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top page-gutter">
        <div>
          <Link className="footer-wordmark" to="/">
            Ejike James<span>© {new Date().getFullYear()}</span>
          </Link>
          <p>Web Developer → Future Software Engineer</p>
        </div>

        <div className="footer-links">
          <div>
            <span className="eyebrow">Explore</span>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <span className="eyebrow">Say hello</span>

            <a href={`mailto:${profile.email}`}>
              {profile.email}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>

            <a
              href="https://github.com/jamesejike579-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <Github size={14} aria-hidden="true" />
            </a>

            <span>{profile.location}</span>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom page-gutter">
        <span>Based in Nigeria.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
