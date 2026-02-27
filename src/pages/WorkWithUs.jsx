import './WorkWithUs.css';

export default function WorkWithUs() {
  return (
    <div className="work-with-us-page">
      <header className="wwu-header">
        <h1>Work with us</h1>
        <p>
          Connect with ERDI through vacancies, visiting fellowships, and
          collaborative opportunities across the region.
        </p>
      </header>

      <section className="wwu-grid">
        <article className="wwu-card">
          <h2>EDI Vacancies</h2>
          <p>
            Explore current openings for economists, data scientists, and
            research professionals who want to shape evidence-based policy in
            Asia and the Pacific.
          </p>
          <ul className="wwu-links">
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                View current EDI vacancies
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about working with ERDI
              </a>
            </li>
          </ul>
        </article>

        <article className="wwu-card">
          <h2>Visiting Fellowship Program</h2>
          <p>
            Join ERDI as a visiting fellow to collaborate on frontier research,
            co-author publications, and engage directly with ADB operations.
          </p>
          <ul className="wwu-links">
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Fellowship Program overview
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                How to apply
              </a>
            </li>
          </ul>
        </article>
      </section>

      <section className="wwu-social">
        <h2>Stay connected</h2>
        <p>
          Follow ERDI channels to hear about new calls for fellows, research
          collaborations, and events.
        </p>
        <ul className="wwu-links">
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              ERDI on ADB.org
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              ERDI newsletter sign-up
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

