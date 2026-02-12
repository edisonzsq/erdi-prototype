import { Link } from 'react-router-dom';
import { getFeaturedPublications } from '../data/publications';
import './Landing.css';

export default function Landing() {
  return (
    <div className="landing">
      <section className="hero-featured">
        <div className="hero-featured-main">
          <div className="hero-featured-content">
            <span className="hero-featured-category">ADB COUNTRY OUTLOOK: PHILIPPINES 2025</span>
            <h2 className="hero-featured-title">
              Philippines: Strengthening competition and increasing formal employment to boost growth trajectory
            </h2>
            <p className="hero-featured-summary">
              The Philippines has been one of Asia and the Pacific&apos;s fastest-growing economies over the past 15 years. The ADB Country Outlook for the Philippines forecasts that GDP will grow at 5.8% in 2026 and 6.0% in 2027, up from 5.7% in 2025, supported by services, construction, and public investment.
            </p>
            <Link to="/publications/philippines-outlook-2025" className="hero-featured-cta">
              Read the report
              <span className="hero-featured-cta-arrow">→</span>
            </Link>
            <span className="hero-featured-meta">Report • 12 February 2025</span>
          </div>
          <div className="hero-featured-image" aria-hidden="true" />
        </div>
        <div className="hero-top-stories">
          <div className="top-stories-header">
            <h3 className="top-stories-title">Top stories</h3>
            <Link to="/publications" className="top-stories-viewall">
              View all publications →
            </Link>
          </div>
          <ul className="top-stories-list">
            {getFeaturedPublications(3).map((pub) => (
              <li key={pub.id}>
                <Link to={`/publications/${pub.slug}`} className="top-story-item">
                  <div
                    className="top-story-image"
                    style={{ background: `linear-gradient(135deg, var(--adb-blue) 0%, var(--adb-blue-light) 100%)` }}
                  />
                  <div className="top-story-content">
                    <span className="top-story-category">{pub.category}</span>
                    <span className="top-story-title">{pub.title}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="indicators-intro">
        <h2>Key Economic Indicators</h2>
        <p className="section-lead">
          Explore trusted statistics supporting evidence-based policy across ADB's 49 member economies. The portal integrates timely data from multiple sources on national accounts, prices, trade, balance of payments, population, labor, and social indicators.
        </p>
        <div className="indicator-cards">
          <div className="indicator-card">
            <span className="indicator-icon">📊</span>
            <h3>National Accounts</h3>
            <p>GDP, growth rates, and sectoral breakdowns at constant and current prices.</p>
          </div>
          <div className="indicator-card">
            <span className="indicator-icon">💰</span>
            <h3>Money, Finance & Prices</h3>
            <p>Monetary aggregates, interest rates, CPI, and inflation indicators.</p>
          </div>
          <div className="indicator-card">
            <span className="indicator-icon">🌍</span>
            <h3>External Sector</h3>
            <p>Trade, balance of payments, external debt, and capital flows.</p>
          </div>
          <div className="indicator-card">
            <span className="indicator-icon">👥</span>
            <h3>Population & Labor</h3>
            <p>Demographics, labor force, employment, and social indicators.</p>
          </div>
        </div>
      </section>

      <section className="indicators-cta">
        <h2>Browse All Indicators</h2>
        <p>
          View the full set of data indicators with filters by theme—Technology, SDGs, Environment, Energy, Transport, Tourism, and more.
        </p>
        <a
          href="https://adb-demo.webflow.io/indicators"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          View indicators catalog →
        </a>
      </section>

      <section className="workspace-intro">
        <h2>Workspace for Researchers</h2>
        <p className="section-lead">
          Log in to access your personal workspace: create spaces, generate and save datasets with AI assistance, and collaborate with colleagues.
        </p>
        <div className="workspace-feature-cards">
          <div className="workspace-feature-card">
            <span className="workspace-feature-icon">📡</span>
            <h3>StatSuite Data</h3>
            <p>Pull trusted macro and socioeconomic data directly from the StatSuite API into your workspace.</p>
          </div>
          <div className="workspace-feature-card">
            <span className="workspace-feature-icon">📤</span>
            <h3>Custom Data & AI</h3>
            <p>Upload your own datasets and ask AI to analyze them alongside StatSuite data.</p>
          </div>
          <div className="workspace-feature-card">
            <span className="workspace-feature-icon">📁</span>
            <h3>Save to Spaces</h3>
            <p>Store AI-produced datasets and analyses in organized spaces for easy access.</p>
          </div>
          <div className="workspace-feature-card">
            <span className="workspace-feature-icon">🤝</span>
            <h3>Collaborative Spaces</h3>
            <p>Invite colleagues to your space to turn it into a shared, collaborative workspace.</p>
          </div>
          <div className="workspace-feature-card">
            <span className="workspace-feature-icon">🔔</span>
            <h3>Follow & Alerts</h3>
            <p>Follow collaboration spaces and receive email alerts when new updates are saved.</p>
          </div>
          <div className="workspace-feature-card">
            <span className="workspace-feature-icon">🔍</span>
            <h3>Data Quality Checks</h3>
            <p>Schedule automated nightly scans to detect anomalies and data gaps in your datasets.</p>
          </div>
        </div>
        <div className="workspace-cta">
          <Link to="/login" target="_blank" className="btn btn-primary">
            Login to Workspace
          </Link>
        </div>
      </section>
    </div>
  );
}
