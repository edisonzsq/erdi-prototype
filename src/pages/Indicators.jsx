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
      <h1>Data Explorer</h1>
      <p className="indicators-intro">
        The Data Explorer gives you access to macroeconomic and socioeconomic data for evidence-based policy and research. In the Data Explorer you will be viewing data sources collected and maintained across the ERDI department—covering ADB&apos;s member economies and a wide range of indicators, from national accounts and prices to trade, population, and more.
      </p>

      <h2 className="indicators-section-title">What you&apos;ll find</h2>
      <div className="indicators-grid">
        {INDICATOR_CATEGORIES.map((cat) => (
          <div key={cat.id} className="indicator-category-card">
            <span className="indicator-category-icon">{cat.icon}</span>
            <h3>{cat.name}</h3>
            <p>{cat.desc}</p>
          </div>
        ))}
      </div>

      <div className="indicators-cta">
        <a
          href="https://de.statsuite.dev.adb-aibd.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Go to Data Explorer →
        </a>
      </div>
    </div>
  );
}