import { Link } from 'react-router-dom';
import './Indicators.css';

const INDICATOR_CATEGORIES = [
  { id: 'national-accounts', name: 'National Accounts', desc: 'GDP, growth rates, sectoral value-added (agriculture, industry, services) at constant and current prices.', icon: '📊' },
  { id: 'money-finance', name: 'Money, Finance & Prices', desc: 'Monetary aggregates, interest rates, CPI, inflation indicators, and financial sector data.', icon: '💰' },
  { id: 'external-sector', name: 'External Sector', desc: 'Trade balance, current account, capital flows, external debt, and balance of payments.', icon: '🌍' },
  { id: 'population-labor', name: 'Population & Labor', desc: 'Demographics, labor force, employment, unemployment, and social indicators.', icon: '👥' },
  { id: 'environment', name: 'Environment & Climate', desc: 'Temperature change, renewable energy, climate-related disasters, and environmental indicators.', icon: '🌱' },
  { id: 'government', name: 'Government Finance', desc: 'Revenue, expenditure, fiscal balance, and public debt across member economies.', icon: '🏛️' },
];

export default function Indicators() {
  return (
    <div className="indicators-page">
      <h1>Indicators</h1>
      <p className="indicators-intro">
        Key data and interactive charts across a wide range of topics for ADB&apos;s 49 member economies. Browse indicators by category or explore the Dashboard for visualizations.
      </p>

      <div className="indicators-grid">
        {INDICATOR_CATEGORIES.map((cat) => (
          <Link key={cat.id} to={`/dashboard#${cat.id}`} className="indicator-category-card">
            <span className="indicator-category-icon">{cat.icon}</span>
            <h3>{cat.name}</h3>
            <p>{cat.desc}</p>
          </Link>
        ))}
      </div>

      <div className="indicators-cta">
        <a
          href="https://adb-demo.webflow.io/indicators"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          More Indicators →
        </a>
      </div>
    </div>
  );
}
