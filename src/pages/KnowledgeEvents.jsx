import './KnowledgeEvents.css';

/** Featured upcoming events based on ADB Asian Development Outlook and regional briefings. */
const FEATURED_EVENTS = [
  {
    id: 'ado-dec2025-launch',
    title: 'Asian Development Outlook December 2025: Launch and Regional Briefing',
    date: 'December 2025',
    type: 'Webinar',
    description:
      'Launch of the ADO December 2025 edition. Growth forecast for developing Asia raised to 5.1% in 2025 and 4.6% in 2026. Discussion of inflation outlook, tariff tensions, and subregional findings.',
  },
  {
    id: 'ado-policymakers',
    title: 'For Policymakers: ADO December 2025',
    date: 'December 2025',
    type: 'Seminar',
    description:
      'Policy challenges and recommendations from the Asian Development Outlook. Download analysis by subregion and access the main report and statistical tables.',
  },
  {
    id: 'ado-subregional-southeast',
    title: 'Subregional Outlook: Southeast Asia',
    date: 'December 2025',
    type: 'Webinar',
    description:
      'Deep dive into Southeast Asia growth (4.5% in 2025, 4.4% in 2026), inflation trends, and country-level updates for Indonesia, Malaysia, Singapore, Thailand, and Viet Nam.',
  },
  {
    id: 'ado-us-tariffs',
    title: 'US Tariffs and Trade Deals: Implications for Developing Asia',
    date: 'December 2025',
    type: 'Seminar',
    description:
      'Discussion of recent US tariff adjustments, bilateral concessions, and implications for regional trade and growth. Based on ADO December 2025 focus analysis.',
  },
];

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

      <section className="ke-featured">
        <h2 className="ke-featured-title">Upcoming events</h2>
        <ul className="ke-featured-list">
          {FEATURED_EVENTS.map((ev) => (
            <li key={ev.id} className="ke-featured-item">
              <span className="ke-featured-type">{ev.type}</span>
              <h3 className="ke-featured-item-title">{ev.title}</h3>
              <p className="ke-featured-meta">{ev.date}</p>
              <p className="ke-featured-desc">{ev.description}</p>
            </li>
          ))}
        </ul>
      </section>

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

