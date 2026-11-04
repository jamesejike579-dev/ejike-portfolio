export default function SectionHeading({ eyebrow, title, children, number }) {
  return (
    <div className="section-heading">
      <div className="section-heading__index">
        {number && <span className="section-heading__number">{number}</span>}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <div className="section-heading__body">
        <h2>{title}</h2>
        {children && <p>{children}</p>}
      </div>
    </div>
  );
}
