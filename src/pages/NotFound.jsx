import Button from '../components/Button.jsx';

export default function NotFound() {
  return (
    <div className="page-shell page-gutter">
      <section className="not-found"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>A wrong turn,<br /><em>not a dead end.</em></h1><p>The page you’re looking for isn’t here. Try one of the main sections instead.</p><Button to="/">Return home</Button></section>
    </div>
  );
}
