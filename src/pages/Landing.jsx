import { Link } from 'react-router-dom';
import { getFeaturedPublications } from '../data/publications';
import './Landing.css';

export default function Landing() {
  return (
    <div className="landing">
      <section className="hero">
        <h1>ERDI Data Portal</h1>
        <p className="hero-tagline">
          Unified macroeconomic and socioeconomic data for Asia and the Pacific. Access, analyze, and collaborate on evidence-based research.
        </p>
        <div className="hero-actions">
          <a
            href="https://de.statsuite.dev.adb-aibd.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-hero"
          >
            Data Explorer
          </a>
          <Link to="/login" target="_blank" className="btn btn-secondary btn-hero">
            Login to Workspace
          </Link>
        </div>
      </section>

      <section className="featured-publications">
        <h2>Featured Publications</h2>
        <p className="section-lead">
          Latest reports and analysis on economic indicators, country outlooks, and policy developments.
        </p>
        <div className="featured-cards">
          {getFeaturedPublications(3).map((pub) => (
            <Link key={pub.id} to={`/publications/${pub.slug}`} className="featured-card">
              <span className="featured-category">{pub.category}</span>
              <h3>{pub.title}</h3>
              <p>{pub.excerpt}</p>
              <span className="featured-date">{new Date(pub.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </Link>
          ))}
        </div>
        <Link to="/publications" className="btn btn-secondary featured-more">
          View all publications →
        </Link>
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
