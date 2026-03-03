import { Link } from 'react-router-dom';
import { getFeaturedKnowledgeProducts } from '../data/knowledgeProducts';
import './Landing.css';

export default function Landing() {
  return (
    <div className="landing">
      <section className="hero-featured">
        <div className="hero-featured-main">
          <div className="hero-featured-content">
            <span className="hero-featured-category">ECONOMIC FORECASTS: CAUCASUS AND CENTRAL ASIA</span>
            <h2 className="hero-featured-title">
              Caucasus and Central Asia: Growth revised upward to 5.8% in 2025
            </h2>
            <p className="hero-featured-summary">
              The growth forecast for Caucasus and Central Asia is revised upward to 5.8% for 2025 and 5.0% for 2026,
              from the September ADO projections of 5.5% and 4.9%. The upgrade is driven by stronger-than-expected
              activity in Kazakhstan. Across most of the subregion, growth surprised on the upside in the third quarter
              of 2025, underpinned by public investment, rising remittances, robust domestic demand, and stable
              macroeconomic conditions. Subregional inflation projections are raised to 8.0% for 2025 and 7.1% for 2026.
            </p>
            <Link to="/knowledge-products" className="hero-featured-cta">
              Read the report
              <span className="hero-featured-cta-arrow">→</span>
            </Link>
            <span className="hero-featured-meta">Report • December 2025</span>
          </div>
          <div className="hero-featured-image" aria-hidden="true" />
        </div>
        <div className="hero-featured-kp">
          <div className="featured-kp-header">
            <h3 className="featured-kp-title">From Knowledge Products</h3>
            <Link to="/knowledge-products" className="featured-kp-viewall">
              View all products →
            </Link>
          </div>
          <ul className="featured-kp-list">
            {getFeaturedKnowledgeProducts(3).map((item) => (
              <li key={item.id}>
                <Link to="/knowledge-products" className="featured-kp-item">
                  <div
                    className="featured-kp-image"
                    style={{
                      background: `linear-gradient(135deg, var(--adb-blue) 0%, var(--adb-blue-light) 100%)`,
                    }}
                  />
                  <div className="featured-kp-content">
                    <span className="featured-kp-meta">Published {item.date}</span>
                    <span className="featured-kp-item-title">{item.title}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="data-insights">
        <div className="data-insights-header">
          <h2>Data insights</h2>
        </div>
        <div className="data-insights-content">
          <div className="data-insights-chart">
            <h3>Contribution to year-on-year CPI inflation in selected economies</h3>
            <p className="chart-subtitle">Percentage points, December 2025</p>
            <div className="chart-legend">
              <span className="legend-item">
                <span className="legend-swatch legend-energy" /> Energy
              </span>
              <span className="legend-item">
                <span className="legend-swatch legend-food" /> Food
              </span>
              <span className="legend-item">
                <span className="legend-swatch legend-core" /> All items less food and energy
              </span>
            </div>
            <div className="stacked-bar-chart">
              {[
                { country: 'Philippines', energy: -0.2, food: 0.8, core: 2.6 },
                { country: 'Vietnam', energy: -0.1, food: 0.9, core: 2.0 },
                { country: 'Indonesia', energy: 0.1, food: 1.2, core: 1.3 },
                { country: 'Thailand', energy: -0.3, food: 0.6, core: 1.5 },
                { country: 'India', energy: 0.2, food: 1.4, core: 2.5 },
              ].map((d) => {
                const total = d.energy + d.food + d.core;
                const maxVal = 4.5;
                const pct = (total / maxVal) * 100;
                const energyPct = (Math.abs(d.energy) / total) * 100;
                const foodPct = (d.food / total) * 100;
                const corePct = (d.core / total) * 100;
                return (
                  <div key={d.country} className="chart-bar-row">
                    <span className="chart-country">{d.country}</span>
                    <div className="chart-bar-wrap">
                      <div className="chart-bar-stack" style={{ width: `${Math.min(pct, 100)}%` }}>
                        {d.energy < 0 && (
                          <div className="chart-segment chart-energy" style={{ width: `${energyPct}%` }} />
                        )}
                        <div className="chart-segment chart-food" style={{ width: `${foodPct}%` }} />
                        <div className="chart-segment chart-core" style={{ width: `${corePct}%` }} />
                        {d.energy > 0 && (
                          <div className="chart-segment chart-energy" style={{ width: `${energyPct}%` }} />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="chart-source">Source: ADB Key Indicators Database (CPI, HICPS).</p>
          </div>
          <div className="data-insights-text">
            <h3>Year-on-year headline inflation in Asia and the Pacific was broadly stable in December 2025</h3>
            <p>
              Headline inflation across selected Asian economies, measured by CPI, was broadly stable in December 2025.
              Core inflation (all items less food and energy) remained the primary contributor to headline inflation in
              most economies, while energy prices in several countries contributed negatively following earlier price
              declines.
            </p>
            <p>
              Food inflation moderated in some economies but remained elevated in others. In the Philippines, inflation
              eased within the central bank&apos;s target band. India and Indonesia saw mixed contributions from food and
              energy, with core inflation driving overall rates.
            </p>
            <Link to="/knowledge-products" className="data-insights-cta">
              Read the statistical release →
            </Link>
          </div>
        </div>
      </section>

      {/* New preview section replacing \"Key Economic Indicators\" */}
      <section className="indicators-intro">
        <h2>Engage with ERDI</h2>
        <p className="section-lead">
          Join ERDI&apos;s knowledge community through upcoming events and collaboration opportunities. Explore seminars,
          webinars, and conferences, or learn how to work with us through vacancies, visiting fellowships, and
          consulting opportunities.
        </p>
        <div className="indicator-cards">
          <div className="indicator-card">
            <span className="indicator-icon">📅</span>
            <h3>Knowledge Events</h3>
            <p>
              Discover ERDI seminars, webinars, and conferences that bring data, research, and policy discussions
              together across the region.
            </p>
            <p>
              <Link to="/knowledge-events">Explore events →</Link>
            </p>
          </div>
          <div className="indicator-card">
            <span className="indicator-icon">🤝</span>
            <h3>Work with us</h3>
            <p>
              Find vacancies, visiting fellowship opportunities, and consulting assignments that connect you with
              ERDI&apos;s research and data work.
            </p>
            <p>
              <Link to="/work-with-us">See opportunities →</Link>
            </p>
          </div>
        </div>
      </section>
      <section className="workspace-intro">
        <h2>AI-powered Workspace</h2>
        <p className="section-lead">
          The ERDI Workspace is an AI-powered environment for exploring, comparing, and simulating data. It brings
          together trusted datasets, user uploads, and collaboration tools so teams can co-create evidence for policy.
        </p>
        <div className="workspace-features-row">
          <div className="workspace-feature-item">
            <span className="workspace-feature-icon">🤖</span> AI-assisted analysis, comparison, and simulation
          </div>
          <div className="workspace-feature-item">
            <span className="workspace-feature-icon">📊</span> Multiple datasets fetched from trusted ERDI and ADB sources
          </div>
          <div className="workspace-feature-item">
            <span className="workspace-feature-icon">📤</span> Upload your own data and combine it with portal indicators
          </div>
          <div className="workspace-feature-item">
            <span className="workspace-feature-icon">👥</span> Add collaborators to co-work on shared datasets and projects
          </div>
          <div className="workspace-feature-item">
            <span className="workspace-feature-icon">📝</span> Versioning and change logs for co-created datasets
          </div>
        </div>
        <div className="workspace-cta">
          <Link to="/login" className="btn btn-primary">
            Go to Workspace App
          </Link>
        </div>
      </section>
    </div>
  );
}