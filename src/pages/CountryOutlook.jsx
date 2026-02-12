import { Link, useParams } from 'react-router-dom';
import './CountryOutlook.css';

const COUNTRY_DATA = {
  philippines: {
    name: 'Philippines',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    indicators: [
      { label: 'Total Population', value: '112.9', unit: 'Million', sub: '(persons)', year: '2024' },
      { label: 'Population', value: '0.9', unit: '%', sub: '(% annual change)', year: '2024' },
      { label: 'Labor Force', value: '50.38', unit: 'Million', sub: '(persons)', year: '2023' },
      { label: 'GDP', value: '26.45', unit: 'Trillion', sub: '(at current price, Philippine Peso)', year: '2024' },
      { label: 'GDP', value: '5.7', unit: '%', sub: '(% annual change)', year: '2024' },
      { label: 'CPI', value: '3.2', unit: '%', sub: '(% annual change)', year: '2024' },
    ],
    snapshot: 'Temperature change (vs. 1951–1980 baseline): Warming of ~1 °C relative to mid-20th century. GDP grew 5.9% in 2024, projected at 6.1% in 2025. Services dominate at 63%; agriculture 9%. Population 115.8M (2024). Inflation averaged 3.2% in 2024, near BSP target band.',
    direction: 'Growth projected around 6% in 2025. Services, construction, and public capex remain main drivers. Current-account gap expected to narrow as remittances and services support inflows. Fiscal consolidation on track.',
  },
  vietnam: {
    name: 'Vietnam',
    intro: 'Vietnam has emerged as a key manufacturing hub in Southeast Asia with strong export-led growth and integration into regional supply chains.',
    indicators: [
      { label: 'Total Population', value: '99.5', unit: 'Million', sub: '(persons)', year: '2024' },
      { label: 'GDP', value: '5.1', unit: '%', sub: '(% annual change)', year: '2024' },
      { label: 'CPI', value: '3.2', unit: '%', sub: '(% annual change)', year: '2024' },
    ],
    snapshot: 'Strong export-led growth. Manufacturing and electronics drive expansion. FDI continues to flow into export-oriented sectors.',
    direction: 'Growth projected around 6–6.5% in 2025. Key drivers: manufacturing, FDI, and domestic consumption.',
  },
  indonesia: {
    name: 'Indonesia',
    intro: 'Indonesia is the largest economy in Southeast Asia with a diverse economic base including commodities, manufacturing, and services.',
    indicators: [
      { label: 'Total Population', value: '277.5', unit: 'Million', sub: '(persons)', year: '2024' },
      { label: 'GDP', value: '5.0', unit: '%', sub: '(% annual change)', year: '2024' },
      { label: 'CPI', value: '2.6', unit: '%', sub: '(% annual change)', year: '2024' },
    ],
    snapshot: 'Domestic demand and investment drive growth. Digital economy and financial inclusion expanding rapidly.',
    direction: 'Growth projected around 5% in 2025. Reform momentum and infrastructure investment support outlook.',
  },
  thailand: {
    name: 'Thailand',
    intro: 'Thailand is a major economy in Southeast Asia with strengths in tourism, manufacturing, and agriculture.',
    indicators: [
      { label: 'Total Population', value: '71.8', unit: 'Million', sub: '(persons)', year: '2024' },
      { label: 'GDP', value: '2.0', unit: '%', sub: '(% annual change)', year: '2024' },
      { label: 'CPI', value: '1.8', unit: '%', sub: '(% annual change)', year: '2024' },
    ],
    snapshot: 'Tourism and domestic demand drive growth. Aging population presents structural challenges. Services and manufacturing are key sectors.',
    direction: 'Growth projected around 2–3% in 2025. Tourism recovery and fiscal support remain important.',
  },
  malaysia: {
    name: 'Malaysia',
    intro: 'Malaysia has a diversified economy with strong electronics and commodities exports.',
    indicators: [
      { label: 'Total Population', value: '34.0', unit: 'Million', sub: '(persons)', year: '2024' },
      { label: 'GDP', value: '4.2', unit: '%', sub: '(% annual change)', year: '2024' },
    ],
    snapshot: 'Electronics and palm oil drive exports. Domestic consumption and investment support growth.',
    direction: 'Growth projected around 4–5% in 2025.',
  },
  default: {
    name: 'Country',
    intro: 'Economic profile and key indicators for this ADB member economy.',
    indicators: [],
    snapshot: 'Key indicators and analysis will be available for this country.',
    direction: 'Economic outlook and policy direction.',
  },
};

export default function CountryOutlook() {
  const { slug } = useParams();
  const data = COUNTRY_DATA[slug] || { ...COUNTRY_DATA.default, name: slug?.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) };

  return (
    <div className="country-outlook">
      <Link to="/countries" className="back-link">← Back to Countries</Link>
      <h1>{data.name}</h1>
      <p className="country-intro">{data.intro}</p>

      {data.indicators?.length > 0 && (
        <section className="outlook-section">
          <h2>Key Indicators</h2>
          <div className="indicator-grid">
            {data.indicators.map((ind, i) => (
              <div key={i} className="indicator-box">
                <span className="indicator-value">{ind.value}</span>
                <span className="indicator-unit">{ind.unit}</span>
                <span className="indicator-label">{ind.label}</span>
                <span className="indicator-sub">{ind.sub}</span>
                <span className="indicator-year">{ind.year}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="outlook-section">
        <h2>Snapshot</h2>
        <p>{data.snapshot}</p>
      </section>

      <section className="outlook-section">
        <h2>Direction of Travel</h2>
        <p>{data.direction}</p>
      </section>
    </div>
  );
}
