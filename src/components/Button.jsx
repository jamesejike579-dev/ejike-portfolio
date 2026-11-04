import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Button({ to, href, children, variant = 'primary', external = false, className = '' }) {
  const classes = `button button--${variant} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {external ? <ArrowUpRight aria-hidden="true" size={16} /> : <ArrowRight aria-hidden="true" size={16} />}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
        {content}
      </a>
    );
  }

  return <Link className={classes} to={to}>{content}</Link>;
}
