import './KnowledgeEvents.css';

const EVENTS = [
  {
    id: 'seminars',
    title: 'Seminars',
    tagline: 'Deep dives with ERDI economists',
    description:
      'Join intimate, high-signal discussions on new research, methods, and data with ERDI staff and invited experts.',
    cta: 'View upcoming seminars',
  },
  {
    id: 'webinars',
    title: 'Webinars',
    tagline: 'Open, interactive sessions for a wider audience',
    description:
      'Stay on top of the latest findings and tools through live, interactive webinars designed for practitioners and policymakers.',
    cta: 'View upcoming webinars',
  },
  {
    id: 'conferences',
    title: 'Conferences',
    tagline: 'Flagship gatherings for the knowledge community',
    description:
      'Co-create the next generation of evidence with peers from across the region in high-profile conferences and forums.',
    cta: 'Explore conferences',
  },
];

export default function KnowledgeEvents() {
  return (
    <div className="knowledge-events-page">
      <header className="ke-header">
        <h1>Knowledge Events</h1>
        <p>
          Be part of ERDI&apos;s knowledge community. Discover seminars,
          webinars, and conferences that bring data, evidence, and policy
          together.
        </p>
      </header>
      <section className="ke-grid">
        {EVENTS.map((event) => (
          <article key={event.id} className={`ke-card ke-card-${event.id}`}>
            <div className="ke-card-content">
              <h2>{event.title}</h2>
              <p className="ke-tagline">{event.tagline}</p>
              <p className="ke-description">{event.description}</p>
              <button type="button" className="btn btn-primary">
                {event.cta}
              </button>
            </div>
            <div className="ke-card-accent" aria-hidden="true" />
          </article>
        ))}
      </section>
    </div>
  );
}

