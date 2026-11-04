import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';
import { getProjectBySlug } from '../data/projects.js';

function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = 'Ejike James — Web Developer';
    if (pathname === '/about') title = 'About — Ejike James';
    else if (pathname === '/projects') title = 'Projects — Ejike James';
    else if (pathname === '/contact') title = 'Contact — Ejike James';
    else if (pathname.startsWith('/projects/')) {
      const project = getProjectBySlug(pathname.split('/')[2]);
      title = project ? `${project.title} — Ejike James` : 'Project not found — Ejike James';
    } else if (pathname !== '/') title = 'Page not found — Ejike James';
    document.title = title;
  }, [pathname]);

  return null;
}

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <PageTitle />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div id="top" />
      <Navbar />
      <main id="main-content" tabIndex="-1"><Outlet /></main>
      <Footer />
    </>
  );
}
