import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { profile } from '../data/profile.js';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false);
    }
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__inner page-gutter">
        <Link className="wordmark" to="/" aria-label={`${profile.name}, home`}>
          <span className="wordmark__monogram">EJ</span>
          <span className="wordmark__name">{profile.name}<small>Web Developer</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(({ label, to }) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => isActive ? 'nav-link is-active' : 'nav-link'}>{label}</NavLink>
          ))}
        </nav>
        <Link className="header-contact" to="/contact">Let’s talk <span aria-hidden="true">↗</span></Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav${menuOpen ? ' is-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        {links.map(({ label, to }, index) => (
          <NavLink key={to} to={to} end={to === '/'} tabIndex={menuOpen ? 0 : -1} className={({ isActive }) => isActive ? 'mobile-nav__link is-active' : 'mobile-nav__link'} onClick={() => setMenuOpen(false)}>
            <span className="mobile-nav__number">0{index + 1}</span>{label}<span aria-hidden="true">↗</span>
          </NavLink>
        ))}
        <a className="mobile-nav__email" href={`mailto:${profile.email}`}>{profile.email}</a>
      </nav>
    </header>
  );
}
